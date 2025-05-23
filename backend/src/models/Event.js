const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	description: String,
	date: {
		type: Date,
		required: true,
	},
	location: {
		type: String,
		required: true,
	},
	imageUrl: String, // Cloudinary image URL
});

module.exports = mongoose.model("Event", eventSchema);
