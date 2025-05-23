const GalleryItem = require("../models/Gallery");

// GET /api/gallery/getGallery
const getGallery = async (req, res) => {
	try {
		const items = await GalleryItem.find({});
		res.json(items);
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

// POST /api/gallery/createGalleryItem
const createGalleryItem = async (req, res) => {
	try {
		const newItem = new GalleryItem(req.body);
		const savedItem = await newItem.save();
		res.status(201).json(savedItem);
	} catch (error) {
		res.status(400).json({ message: "Invalid data" });
	}
};

module.exports = {
	getGallery,
	createGalleryItem,
};
