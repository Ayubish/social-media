import mongoose from "mongoose";
import Post from "../models/post.model.js";
import User from "../models/user.model.js";

export const getUser = async (req, res)=> {
    const username = req.params.username

    const user = await User.findOne( {username} );
    if(!user){
        return res.status(404).json({error: 'User not found'})
    }
    user.password = undefined;
    return res.status(200).json(user);
}

export const getUserPost = async (req, res) => {
 
        const userId = req.params.userId;
        const { page = 1, limit = 10 } = req.query;
        // const user = await User.findOne({username});
        // if(!user) return res.status(404).json({error: "user not found"});
        // return res.json({message: username, user: user});
        const posts = await Post.find({userId: new mongoose.Types.ObjectId(userId)}).sort({ createdAt: -1 }).populate({path: "userId", select: "_id fullname username avatar"})
        .skip((page - 1) * limit)
        .limit(parseInt(limit)).lean();
        return res.status(201).json(posts);
}