import express from 'express';
import { createPost, getAllPosts } from '../controllers/post.controller.js';
import { verifyUser } from '../middleware/verifyUser.js';

const router = express.Router();

router.post('/create', verifyUser, createPost);
router.get('/', getAllPosts);
export default router; 