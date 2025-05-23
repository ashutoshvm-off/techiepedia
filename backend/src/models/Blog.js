const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	imageUrl: String,
	author: String,
	publishedAt: {
		type: Date,
		default: Date.now,
	},
});

module.exports = mongoose.model("Blog", blogSchema);
