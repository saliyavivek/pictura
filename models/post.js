const mongoose = require("mongoose");
const Comment = require("./comment.js");

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    image: {
        url: String,
        filename: String,
    },
    description: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
        }
    ],
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
});

postSchema.post("findOneAndDelete", async(post)=> {
    if(post) {
        await Comment.deleteMany({_id: {$in: post.comments}});
    }
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;