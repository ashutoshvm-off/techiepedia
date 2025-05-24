const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
	cloudinary,
	params: async (req, file) => {
		console.log(req.body.folder);
		const folderName = req.body.folder || "techiepedia_events";

		return {
			folder: folderName,
			allowed_formats: ["jpg", "png", "jpeg"],
			public_id: `${Date.now()}-${file.originalname.split(".")[0]}`,
		};
	},
});

const upload = multer({ storage });

module.exports = upload;
