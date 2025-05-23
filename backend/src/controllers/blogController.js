const Blog = require("../models/Blog");

// GET /api/blogs/getBlog
const getBlogs = async (req, res) => {
	try {
		const blogs = await Blog.find({});
		res.json(blogs);
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

// POST /api/blogs/createBlog
const createBlog = async (req, res) => {
	try {
		const newBlog = new Blog(req.body);
		const savedBlog = await newBlog.save();
		res.status(201).json(savedBlog);
	} catch (error) {
		res.status(400).json({ message: "Invalid data" });
	}
};

module.exports = {
	getBlogs,
	createBlog,
};
