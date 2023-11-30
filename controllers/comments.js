const Post = require("../models/post.js");
const Comment = require("../models/comment.js");

module.exports.createComment = async (req, res) => {
    let post = await Post.findById(req.params.id);
    let newComment = new Comment(req.body.comment);
    newComment.author = req.user._id;
    console.log(newComment);
    post.comments.push(newComment);

    await newComment.save();
    await post.save();

    req.flash("success", "Comment added.");

    res.redirect(`/posts/${post._id}`);
};

module.exports.deleteComment = async (req, res) => {
    let {id, commentId} = req.params;

    await Post.findByIdAndUpdate(id, {$pull: {comments: commentId}});
    await Comment.findByIdAndDelete(commentId);

    req.flash("success", "Comment deleted.");

    res.redirect(`/posts/${id}`);
};