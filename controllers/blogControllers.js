const Blog = require("../models/blog");

// controller i.e function for getting list of all blogs
const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.render("blogs/index", { title: "All Blogs", blogs: result });
    })
    .catch((err) => console.log(err));
};

// controller i.e function for getting blog details
const blog_details = (req, res) => {
  const { id } = req.params;
  Blog.findById(id)
    .then((result) =>
      res.render("blogs/details", { blog: result, title: "Blog Details" })
    )
    .catch((err) => {
      console.log(err);
    });
};

// controller i.e function for creating new blog get request
const blog_create_get = (req, res) => {
  res.render("blogs/create", { title: "Create a new blog" });
};

// controller i.e function for creating new blog and saving the data to the database
const blog_create_post = (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

// controller i.e function for deleting the blog
const blog_delete = (req, res) => {
  const id = req.params.id;

  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => {
      console.log(err);
    });
};

// exporting all controllers
module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_create_post,
  blog_delete,
};
