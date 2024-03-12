const Post = require("../models/post.js");

module.exports.index = async (req, res) => {
  const allPosts = await Post.find({});
  res.render("./posts/index.ejs", { allPosts });
};

module.exports.newPostForm = (req, res) => {
  // console.log(req.user);
  res.render("./posts/new.ejs");
};

module.exports.showPost = async (req, res) => {
  let { id } = req.params;
  const post = await Post.findById(id)
    .populate({ path: "comments", populate: { path: "author" } })
    .populate("owner");
  // console.log(post);
  if (!post) {
    req.flash("error", "Post does not exists.");
    return res.redirect("/posts");
  }
  res.render("./posts/show.ejs", { post });
};

module.exports.createPost = async (req, res, next) => {
  let url = req.file.path;
  let filename = req.file.filename;

  const newPost = new Post(req.body.post);
  newPost.owner = req.user._id;
  newPost.image = { url, filename };
  await newPost.save();

  req.flash("success", "Post created.");
  res.redirect("/posts");
};

module.exports.editPost = async (req, res) => {
  let { id } = req.params;
  const post = await Post.findById(id);

  if (!post) {
    req.flash("error", "Post does not exists.");
    return res.redirect("/posts");
  }

  let originalPicUrl = post.image.url;
  originalPicUrl = originalPicUrl.replace("/upload", "/upload/e_blur:100");

  res.render("./posts/edit.ejs", { post, originalPicUrl });
};

module.exports.updatePost = async (req, res) => {
  let { id } = req.params;
  let post = await Post.findByIdAndUpdate(id, { ...req.body.post });

  if (typeof req.file !== "undefined") {
    let url = req.file.path;
    let filename = req.file.filename;
    post.image = { url, filename };
    await post.save();
  }

  req.flash("success", "Post updated.");
  res.redirect(`/posts/${id}`);
};

module.exports.deletePost = async (req, res) => {
  let { id } = req.params;
  let deletedPost = await Post.findByIdAndDelete(id);
  req.flash("success", "Post deleted.");
  // console.log(deletedPost);
  res.redirect("/posts");
};
