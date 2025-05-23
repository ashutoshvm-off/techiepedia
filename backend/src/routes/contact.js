const express = require("express");
const router = express.Router();
const ContactMessage = require("../models/Contact");

// GET all contact messages (optional, maybe admin only)
router.get("/", async (req, res) => {
	try {
		const messages = await ContactMessage.find({});
		res.json(messages);
	} catch (error) {
		res.status(500).json({ message: "Server error" });
	}
});

// POST send contact message
router.post("/", async (req, res) => {
	try {
		const newMessage = new ContactMessage(req.body);
		const saved = await newMessage.save();
		res.status(201).json(saved);
	} catch (error) {
		res.status(400).json({ message: "Invalid data" });
	}
});

module.exports = router;
