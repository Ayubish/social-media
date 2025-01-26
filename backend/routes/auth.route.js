import express from "express";
import { check, validationResult } from "express-validator";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import Post from "../models/post.model.js";
import { generateTokenSetCookie } from "../utils/generateToken.js";
import {verifyUser} from "../middleware/verifyUser.js";




const router = express.Router();

router.post('/register', [
    check("username").notEmpty().withMessage("Username is required"),
    check("email").isEmail().withMessage("Enter a valid email"),
    check("password").isLength({ min: 6 }).withMessage("Password must be atleast 6 charachters"),
], async (req, res)=>{

    console.log("Request body:", req.body);

    const error = validationResult(req);
    if(!error.isEmpty()) return res.status(400).json({error: error.array()});
    
    try {
        const {fullname, username, email, password} = req.body;

        //check if username is already taken
        const existingUser = await User.findOne({ username });
        if(existingUser) {
            return res.status(400).json({ error: [{ msg: "Username already taken", path: "username", location: "body" }] });
        }
        //check if email already exist
        const existingEmail = await User.findOne({ email });
        if(existingEmail) {
            return res.status(400).json({ error: [{ msg: "Email already exist", path: "email", location: "body" }] });
        }
        const user = new User({fullname, username, email, password});
        await user.save();

        generateTokenSetCookie(user._id, res);
        res.status(201).json({ user });
    } catch(err){
        res.status(500).json({error: [{msg: `Server error${err}`, location: "server"}]});
    }
});

//user login
router.post('/login', async (req, res)=>{
    const {email, password} = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({error: [{msg: "User not found", path: "email", location: "body"}]});

        const isMatch = await user.comparePassword(password);
        if(!isMatch) return res.status(400).json({error: [{msg: "Wrong password", path: "password", location: "body"}]});

        generateTokenSetCookie(user._id, res);
        return res.status(200).json({ user });
    } catch (err) {
        res.status(500).json({error: [{msg: `Server error${err}`, location: "server"}]});
    }
});

//user logout  //clear cookie
router.get('/logout', async (req, res)=>{
    res.clearCookie("token");
    res.status(200).json({msg: "Logout successful"});
});
export default router;