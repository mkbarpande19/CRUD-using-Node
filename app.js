const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");

// importing all the blgo rotues
const blogRoute = require("./routes/blogRoutes");
//db uri
const dbURI = "mongodb://127.0.0.1:27017/MyDb";

// connect to database;
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(3000))
  .catch((err) => console.log(err));

// express app
const app = express();

// listen for requests
// app.listen(3000);

// register view engine
app.set("view engine", "ejs");

// middleware & static files
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("new request made:");
  console.log("host: ", req.hostname);
  console.log("path: ", req.path);
  console.log("method: ", req.method);
  next();
});

app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

//mongoose and mongo sandbox routes

app.get("/", (req, res) => {
  res.redirect("/blogs");
});

// adding blog routes using middleware
app.use("/blogs", blogRoute);

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});
// 404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
