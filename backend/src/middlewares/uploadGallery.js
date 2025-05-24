const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const galleryStorage = new CloudinaryStorage({
	cloudinary,
	params: {
		folder: "techiepedia_gallery",
		allowed_formats: ["jpg", "png", "jpeg"],
	},
});

module.exports = multer({ storage: galleryStorage });
