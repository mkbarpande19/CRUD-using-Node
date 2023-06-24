// importing the mongoose package to create a blog schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// creating a new blog schema
const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    snippet: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// creating a model for the blog schema
const Blog = mongoose.model("Blog", blogSchema);

// exporting the blog schema
module.exports = Blog;
