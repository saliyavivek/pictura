const Comment = require("./models/comment");

module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "Please log in to continue!");
        return res.redirect("/login");
    }
    next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
    if(req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
}

module.exports.isCommentAuthor = async (req, res, next) => {
    let {id, commentId} = req.params;
    let comment = await Comment.findById(commentId);
    if(!comment.author.equals(res.locals.currUser._id)) {
        req.flash("error", "Can't delete comment. You did not own this comment.");
        return res.redirect(`/posts/${id}`);
    }
    next();
}