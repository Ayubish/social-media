import express from "express"
import User from "../models/user.model.js"
const router = express.Router()

router.get('/:username', async (req, res)=>{
    const username = req.params.username

    const user = await User.findOne( {username} );
    if(!user){
        return res.status(404).json({error: 'User not found'})
    }
    user.password = undefined;
    return res.status(200).json(user);
})

export default router;