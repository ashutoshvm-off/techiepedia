const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	imageUrl: {
		type: String,
		required: true, // URL from Cloudinary or wherever you're hosting
	},
	description: String,
	uploadedAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Gallery", gallerySchema);
