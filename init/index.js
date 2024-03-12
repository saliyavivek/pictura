const mongoose = require("mongoose");
const initData = require("./data.js");
const Post = require("../models/post.js");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/pinterest");
}

const initDB = async () => {
  await Post.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "656426dc24458ca54b561e64",
  }));
  await Post.insertMany(initData.data);
  console.log("data initialized");
};

initDB();
