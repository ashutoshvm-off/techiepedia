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
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Responds with a JSON array of {@link GalleryItem} items
 */
const getGallery = async (req, res) => {
	try {
		const items = await GalleryItem.find({});
		res.json(items);
	} catch (error) {
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
			throw new Error("Folder name is required");
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
