const GalleryItem = require("../models/Gallery");

/**
 * @typedef GalleryItem
 * @type {Object}
 * @property {string} title - The title of the gallery item
 * @property {string} imageUrl - The URL of the gallery item image
 * @property {string} description - The description of the gallery item
 * @property {Date} uploadedAt - The date the gallery item was uploaded
 */

// GET /api/gallery/getGallery
/**
 * @function getGallery
 * @description Retrieve all gallery items from the database.
 *
 * @param {Object} req - Express request object
 * @param {string} req.query.page - The page number for pagination
 * @param {string} req.query.limit - The number of items per page
 * @param {Object} res - Express response object
 * @param {GalleryItem[]} res.body.items - Array of gallery item objects
 * @param {number} res.body.page - Current page number
 * @param {number} res.body.totalPages - Total number of pages
 * @param {number} res.body.totalItems - Total number of items
 * @returns {Promise<void>} Responds with an object containing the gallery items, current page, total pages, and total items in JSON format
 * @throws {500} If a server or database error occurs
 * @throws {400} If the page or limit query parameters are invalid
 * @throws {404} If no gallery items are found
 * @example
 * // Example request
 * GET /api/gallery/getGallery?page=1&limit=10
 * @example
 * // Example response
 * {
 *   "page": 1,
 *   "totalPages": 1,
 *   "totalItems": 1,
 *   "items": [
 *     {
 *       "title": "Image 1",
 *       "imageUrl": "https://example.com/image1.jpg",
 *       "description": "Description for Image 1",
 *       "uploadedAt": "2023-06-01T10:00:00.000Z"
 *     }
 *   ]
 * }
 */
const getGallery = async (req, res) => {
	try {
		const page = parseInt(req.query.page) || 1; // default: page 1
		const limit = parseInt(req.query.limit) || 10; // default: 10 items
		const skip = (page - 1) * limit;
		const total = await GalleryItem.countDocuments(); // count total documents
		const totalPages = Math.ceil(total / limit); // calculate total pages
		const items = await GalleryItem.find()
			.sort({ uploadedAt: -1 }) // sort by uploaded date descending
			.skip(skip)
			.limit(limit); // limit the number of documents per page
		res.json({
			page,
			totalPages,
			totalItems: total,
			items,
		});
	} catch (error) {
		console.error("Error fetching gallery items:", error.message);
		res.status(500).json({ message: "Server Error" });
	}
};

// POST /api/gallery/createGalleryItem
/**
 *@function createGalleryItem
 * @description Create a new gallery item in the database.
 *
 *
 * @param {Object} req - Express request object
 * @param {GalleryItem} req.body - The gallery item data to create
 * @param {string} req.body.folder - The folder name for the image
 * @param {Object} req.file - The uploaded image file
 * @param {string} req.file.path - The path to the uploaded image file
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Responds with the created gallery item object in JSON format
 */
const createGalleryItem = async (req, res) => {
	try {
		if (!req.file) {
			return res.status(400).json({ message: "Image is required" });
		}

		if (!req.body.folder) {
			req.body.folder = "gallery";
		}

		const imageUrl = req.file.path;

		const newItem = new GalleryItem({
			...req.body,
			imageUrl,
		});

		const savedItem = await newItem.save();
		res.status(201).json(savedItem);
	} catch (error) {
		console.error("Error saving gallery item:", error.message);
		res.status(500).json({ message: error.message || "Server Error" });
	}
};

module.exports = {
	getGallery,
	createGalleryItem,
};
