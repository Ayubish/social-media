import User from "../models/user.model.js";

export async function signUpValidator(req, res, next) {
    const {fullname, username, email, password} = req.body;
    if(!fullname) return res.status(400).json({error: "Fullname is required"});
    if(!username) return res.status(400).json({error: "Username is required"});
    if(username.length<4) return res.status(400).json({error: "Username must be atleast 4 charachters"});
    if(!email) return res.status(400).json({error: "Email is required"});
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)) return res.status(400).json({error: "Enter a valid email"});
    if(password.length<6) return res.status(400).json({error: "Password must be atleast 6 charachters"});

    const existingUsername = await User.findOne({username});
    if(existingUsername) return res.status(400).json({error: "Username already taken"});
    const existingEmail = await User.findOne({email});
    if(existingEmail) return res.status(400).json({error: "Email already exists"});

    next();


}

export async function signInValidator(req, res, next) {
    const {email, password} = req.body;
    if(!email) return res.status(400).json({error: "Please enter your email"});
    if (!(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(email)) return res.status(400).json({error: "Enter a valid email"});
    if(password.length<6) return res.status(400).json({error: "Incorrect password"});
    next();
}
