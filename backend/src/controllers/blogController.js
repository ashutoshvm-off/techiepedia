const Blog = require("../models/Blog");

// GET /api/blogs/getBlogs
const getBlogs = async (req, res) => {
	try {
		const blogs = await Blog.find({});
		res.json(blogs);
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

// POST /api/blogs/createBlog
/**
 *@function createBlog
 *@description Create a new blog post in the database.
 *
 * @param {Object} req - Express request object
 * @param {string} req.body.title - The title of the blog post
 * @param {string} req.body.content - The content of the blog post
 * @param {string} req.body.imageUrl - The URL of the blog post image
 * @param {Object} req.file - The uploaded image file
 * @param {string} req.body.author - The author of the blog post
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Responds with the created blog post object in JSON format
 */
const createBlog = async (req, res) => {
	try {
		const imageUrl = req.file
			? req.file.path
			: req.body.imageUrl
			? req.body.imageUrl
			: null;
		if (!req.body.title || !req.body.content) {
			return res
				.status(400)
				.json({ message: "Title and content are required" });
		}
		const newBlog = new Blog({ ...req.body, imageUrl });
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
