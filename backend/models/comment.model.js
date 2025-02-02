import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    postId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        require: true,
        index: true,
    },
    userId: {
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
        comment: [
                {
                type: Number,
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