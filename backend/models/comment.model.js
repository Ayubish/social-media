import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        require: true,
    },
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
});

export default mongoose.model("Comment", commentSchema);