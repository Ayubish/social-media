import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

export const verifyUser = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) return res.status(401).send('Access Denied. No token provided.');

    try {
        const decodedId = jwt.verify(token, process.env.JWT_SECRET);
        if(!decodedId) return res.status(401).send('Access Denied. Invalid token provided.');
        
        const user = await User.findById(decodedId.id);
        if (!user) return res.status(401).send('Access Denied. No user found.');
        req.user = user;
        next()
    }catch(err){
        console.error("verifyUser middleware error: ", err);
        res.status(500).send('Internal Server error');
    }
};
