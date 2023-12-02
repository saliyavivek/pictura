require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Post = require("./models/post.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {postSchema} = require("./schema.js");
const Comment = require("./models/comment.js");
const session = require("express-session");
const MongoStore = require('connect-mongo');
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");
const {isLoggedIn, saveRedirectUrl, isCommentAuthor} = require("./middleware.js");

const postController = require("./controllers/posts.js");
const commentController = require("./controllers/comments.js");
const userController = require("./controllers/users.js");

const multer  = require('multer');
const {storage} = require("./cloudConfig.js");
const upload = multer({ storage });

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname, "public")));

const dbUrl = process.env.ATLASDB_URL; 

main()
.then(() => {
    console.log("connection successful");
})
.catch((err) => {
    console.log(err);
});

async function main() {
    await mongoose.connect(dbUrl);
    // await mongoose.connect('mongodb://127.0.0.1:27017/pinterest')
}

app.get("/", (req, res) => {
    res.redirect("/posts");
});

const store = MongoStore.create({
    mongoUrl: dbUrl,
    crypto: {
        secret: process.env.SECRET, 
    },
    touchAfter: 24 * 3600,
});

store.on("error", () => {
    console.log("Error in Mongo Session Store", err);
});

const sessionOptions = {
    store,
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
    },
};



app.use(session(sessionOptions));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use((req, res, next) => {
    res.locals.success = req.flash("success");
    res.locals.error = req.flash("error");
    res.locals.currUser = req.user;
    next();
});


// app.get("/testpost", async (req, res) => {
//     let samplePost = new Post({
//         title: "My first pin",
//         description: "Hello world!",
//     });

//     await samplePost.save();
//     console.log("sample pin saved");
//     res.send("success");
// });



// app.get("/demouser", async (req, res) => {
//     let fakeUser = new User({
//         email: "demo@gmail.com",
//         username: "demo-user",
//     });
//     let registeredUser = await User.register(fakeUser, "helloworld");
//     res.send(registeredUser);
// });


// Index Route
app.get("/posts", wrapAsync(postController.index));

// New Route
app.get("/posts/new", isLoggedIn, postController.newPostForm);

// Show Route
app.get("/posts/:id", wrapAsync(postController.showPost));

// Create Route 
app.post("/posts",isLoggedIn, upload.single("post[image]"), wrapAsync(postController.createPost));

// Edit Route
app.get("/posts/:id/edit", isLoggedIn, wrapAsync(postController.editPost));

// Update Route
app.put("/posts/:id", upload.single("post[image]"), wrapAsync(postController.updatePost));

// DELETE ROUTE
app.delete("/posts/:id", isLoggedIn, wrapAsync(postController.deletePost));

// Comment
app.post("/posts/:id/comments", isLoggedIn, wrapAsync(commentController.createComment));

// Delete Comment 
app.delete("/posts/:id/comments/:commentId", isLoggedIn, isCommentAuthor, wrapAsync(commentController.deleteComment));

// app.all("*", (req, res, next) => {
//     next(new ExpressError(404, "Page Not Found"));
// });

// app.use((err, req, res, next) => {
//     let {statusCode, message} = err;
//     res.status(statusCode).send(message);
// });


//User

// Signup - GET ROUTE  
app.get("/signup", userController.signupForm);

// Signup - POST ROUTE  
app.post("/signup",wrapAsync(userController.signup));

// Login - GET ROUTE 
app.get("/login", userController.loginForm);

// Login - POST ROUTE
app.post("/login",saveRedirectUrl, passport.authenticate("local", { failureRedirect: '/login', failureFlash: true}), userController.login);

// Logout
app.get("/logout", userController.logout);

app.listen(8080, () => {
    console.log("listening to port 8080");
});