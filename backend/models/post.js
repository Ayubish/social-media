import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    textcontent: {
        type: String,
    },
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
    },
    shares: {
        type: Number,
    },


}, {timestamps: true});


export default mongoose.model("Post", PostSchema);
