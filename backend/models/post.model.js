import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        index: true,
    },
    content: {type: String, default: ''},
    media: {
        type: [String]
    },
    likes: [
        {
            type: Number,
            default: 0,
        }
    ],
    comments: [
            {
            type: Number,
            default: 0,
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
