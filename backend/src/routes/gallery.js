const express = require("express");
const {
	getGallery,
	createGalleryItem,
} = require("../controllers/galleryController");

const router = express.Router();

router.get("/getGallery", getGallery);
router.post("/createGalleryItem", createGalleryItem);

module.exports = router;
