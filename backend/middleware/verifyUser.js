import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const verifyUser = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ error: 'Access Denied. No token provided.' });
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedId) =>{
        if(err){
            switch(err.name){
                case "TokenExpiredError":
                    return res.status(401).json({error: "Your session is expired, please login again"});
                case "JsonWebTokenError":
                    return res.status(401).json({error: "Invalid token"});
                default:
                    return res.status(401).json({error: "Failed to authenticate the user"});
            }
        }
        const user = await User.findById(decodedId.id);
        if(!user) return res.status(401).json({error: "User not found"});
        req.user = user;
        next()
    });

};