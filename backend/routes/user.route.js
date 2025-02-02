import express from "express"
import { getUser, getUserPost } from "../controllers/user.controller.js";
const router = express.Router()

router.get('/:username', getUser);
router.get('/:userId/posts', getUserPost);
export default router;