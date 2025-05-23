const express = require("express");
const router = express.Router();
const GalleryItem = require("../models/Gallery");

// GET all gallery items
router.get("/", async (req, res) => {
	try {
		const items = await GalleryItem.find({});
		res.json(items);
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
});

// POST add gallery item
router.post("/", async (req, res) => {
	try {
		const newItem = new GalleryItem(req.body);
		const saved = await newItem.save();
		res.status(201).json(saved);
	} catch (error) {
		res.status(400).json({ message: "Invalid data" });
	}
});

module.exports = router;
