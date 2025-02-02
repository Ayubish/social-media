import mongoose from "mongoose";
import Post from "../models/post.model.js";

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
    try {
        const {userId} = req.params.userId;
        const { page = 1, limit = 10 } = req.query;

        const posts = await Post.find({userId: ObjectId(userId)}).sort({ createdAt: -1 })
        .skip((page - 1) * limit)
        .limit(parseInt(limit))
        .lean();
        return res.status(201).json(posts);
    } catch(err) {
        return res.status(500).json({error: "Error fetching posts", err})
    }

}