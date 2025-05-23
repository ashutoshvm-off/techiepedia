const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
	title: {
		type: String,
	},
	imageUrl: {
		type: String,
		required: true,
	},
	description: String,
	uploadedAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Gallery", gallerySchema);
