const express = require("express");
const {
	getGallery,
	createGalleryItem,
} = require("../controllers/galleryController");
const upload = require("../middlewares/uploadGallery");

const router = express.Router();

router.get("/getGallery", getGallery);
router.post("/createGalleryItem", upload.single("image"), createGalleryItem);

module.exports = router;
