import Post from '../models/post.model.js';
import User from '../models/user.model.js';

// Create a new post
export const createPost = async (req, res) => {
    try {
        const { content } = req.body;
        if(!content) return res.status(400).json({error: "Content cannot be empty"});
        console.log(req.body);

        const newPost = new Post({ userId: req.user._id, content : content });
        await User.findByIdAndUpdate(req.user._id, { $inc: { posts: 1 } });
        await newPost.save();
        const populatedPost = await newPost.populate({path:'userId', select: 'fullname username'});
        res.status(201).json(populatedPost);
    } catch (error) {
        res.status(500).json({ message: 'Error creating post', error });
    }
};

// Get all posts
export const getAllPosts = async (req, res) => {
    try {
        const {page = 1, limit=10} = req.query;

        const posts = await Post.find().populate({path: 'userId', select: '-password -email -posts -__v'}).sort({ createdAt: -1 })
        .skip((parseInt(page) - 1) * parseInt(limit))
        .limit(parseInt(limit)+1)
        .lean();
        const nextCursor = posts.length > limit? parseInt(page)+1: null;
        const results = nextCursor ? posts.slice(0, -1) : posts;
        res.status(200).json({posts: results, nextCursor});
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts', error });
    }
};

// Get a single post by ID
export const getPostById = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching post', error });
    }
};

// Update a post by ID
export const updatePost = async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.id,
            { title, content, author },
            { new: true }
        );
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(updatedPost);
    } catch (error) {
        res.status(500).json({ message: 'Error updating post', error });
    }
};

// Delete a post by ID
export const deletePost = async (req, res) => {
    try {
        const deletedPost = await Post.findByIdAndDelete(req.params.id);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post', error });
    }
};