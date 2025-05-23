const express = require("express");
const { getBlogs, createBlog } = require("../controllers/blogController");

const router = express.Router();

router.get("/getBlog", getBlogs);
router.post("/createBlog", createBlog);

module.exports = router;
