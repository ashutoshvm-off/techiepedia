const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const blogStorage = new CloudinaryStorage({
	cloudinary,
	params: {
		folder: "techiepedia_blogs",
		allowed_formats: ["jpg", "png", "jpeg"],
	},
});

module.exports = multer({ storage: blogStorage });
