import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    content: {type: String, default: ''},
    pictures: {
        type: [String]
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    comments: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
    saves: {
        type: Number,
        default: 0,
    },
    shares: {
        type: Number,
        default: 0,
    },


}, {timestamps: true});


export default mongoose.model("Post", PostSchema);
