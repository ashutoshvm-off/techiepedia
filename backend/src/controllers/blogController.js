const Blog = require("../models/Blog");

// GET /api/blogs/getBlogs
/**
 * @function getBlogs
 * @description Retrieve all blog posts from the database.
 *
 * @param {Object} req - Express request object
 * @param {string} req.query.page - The page number for pagination
 * @param {string} req.query.limit - The number of items per page
 * @param {Object} res - Express response object
 * @param {Object[]} res.body.blogs - Array of blog post objects
 * @param {number} res.body.page - Current page number
 * @param {number} res.body.totalPages - Total number of pages
 * @param {number} res.body.totalItems - Total number of items
 * @returns {Promise<void>} Responds with an object containing the blogs, current page, total pages, and total items in JSON format
 * @throws {500} If a server or database error occurs
 * @throws {400} If the page or limit query parameters are invalid
 * @throws {404} If no blog posts are found
 * @example
 * // Example request
 * GET /api/blogs/getBlogs?page=1&limit=10
 * @example
 * // Example response
 * {
 *   "page": 1,
 *   "totalPages": 1,
 *   "totalItems": 1,
 *   "blogs": [
 *     {
 *       "title": "Blog Post 1",
 *       "content": "Content for Blog Post 1",
 *       "imageUrl": "https://example.com/image1.jpg",
 * 	 	 "author": "Author 1",
 *       "publishedAt": "2023-08-01T00:00:00.000Z"
 *     }
 *   ]
 * }
 */
const getBlogs = async (req, res) => {
	try {
		const page = parseInt(req.query.page) || 1; // default: page 1
		const limit = parseInt(req.query.limit) || 10; // default: 10 items
		const skip = (page - 1) * limit;
		const total = await Blog.countDocuments(); // count total documents
		const totalPages = Math.ceil(total / limit); // calculate total pages
		const blogs = await Blog.find()
			.sort({ createdAt: -1 }) // sort by creation date descending
			.skip(skip)
			.limit(limit); // limit the number of documents per page
		res.json({
			page,
			totalPages,
			totalItems: total,
			blogs,
		});
	} catch (error) {
		console.error("Error fetching blogs:", error.message);
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
 * @param {Express.Multer.File} req.file - Image file (uploaded using multipart/form-data)
 * @param {string} req.body.author - The author of the blog post
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Responds with the created blog post object in JSON format
 * @throws {500} If a server or database error occurs
 * @throws {400} If the title or content is missing
 * @example
 * // Example request
 * POST /api/blogs/createBlog
 * Content-Type: multipart/form-data
 * Body:
 * title=New Blog Post
 * content=This is the content of the new blog post.
 * imageUrl=[binary image data]
 * author=Author Name
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
