// importing express package to define all the routers

const express = require("express");
const router = express.Router();

// importing blog controller which is having all the crud functions
const blogController = require("../controllers/blogControllers");

// defining api routes
router.get("/", blogController.blog_index);

router.post("/", blogController.blog_create_post);

router.get("/create", blogController.blog_create_get);

router.get("/:id", blogController.blog_details);

router.delete("/:id", blogController.blog_delete);

module.exports = router;
