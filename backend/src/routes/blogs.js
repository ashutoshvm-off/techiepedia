const express = require("express");
const { getBlogs, createBlog } = require("../controllers/blogController");

const upload = require("../middlewares/uploadBlog");

const router = express.Router();

router.get("/getBlogs", getBlogs);
router.post("/createBlog", upload.single("image"), createBlog);

module.exports = router;
