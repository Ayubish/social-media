import express from 'express';
import { signInValidator, signUpValidator } from '../middleware/formValidator.js';
import { logout, signin, signup } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signUpValidator, signup);
router.post('/signin', signInValidator, signin);
router.get('/logout', logout)

export default router;