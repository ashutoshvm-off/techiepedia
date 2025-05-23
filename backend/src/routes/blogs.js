const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");

// GET all blogs
router.get("/", async (req, res) => {
	try {
		const blogs = await Blog.find({});
		res.json(blogs);
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
});

// POST create blog
router.post("/", async (req, res) => {
	try {
		const newBlog = new Blog(req.body);
		const saved = await newBlog.save();
		res.status(201).json(saved);
	} catch (error) {
		res.status(400).json({ message: "Invalid data" });
	}
});

module.exports = router;
