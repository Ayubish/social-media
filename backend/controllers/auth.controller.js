import User from "../models/user.model.js";
import { generateTokenSetCookie } from "../utils/generateToken.js";

export async function signup(req, res) {
    try {
       const { fullname, username, email, password } = req.body;
       const user = new User({ fullname, username, email, password });
       await user.save();
       
       generateTokenSetCookie(user._id, res);
       user.password = undefined;
       res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Error signing up', error });
    }
}

export async function signin(req, res) {
    try {
        const {email, password } = req.body;
        const checkUser = await User.findOne({ email });
        if (!checkUser) return res.status(400).json({ message: 'User not found' });

        const checkPassword = await checkUser.comparePassword(password);
        if (!checkPassword) return res.status(400).json({ message: 'Incorrect password' });

        generateTokenSetCookie(checkUser._id, res);
        checkUser.password = undefined;
        res.status(200).json({ user: checkUser });
    } catch (error) {
        res.status(500).json({ message: 'Error signing in', error });
    }
}

export async function logout(req, res) {
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout success' });
}

export async function getme(req, res){
    res.status(200).json(req.user);
}