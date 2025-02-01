import express from 'express';
import { signInValidator, signUpValidator } from '../middleware/formValidator.js';
import { getme, logout, signin, signup } from '../controllers/auth.controller.js';
import { verifyUser } from '../middleware/verifyUser.js';

const router = express.Router();

router.post('/signup', signUpValidator, signup);
router.post('/signin', signInValidator, signin);
router.get('/logout', logout);
router.get('/getme', verifyUser, getme);

export default router;