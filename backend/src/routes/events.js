const express = require("express");
const { getEvents, createEvent } = require("../controllers/eventController");
const upload = require("../middlewares/uploadEvents");

const router = express.Router();

router.get("/getEvents", getEvents);
router.post("/createEvent", upload.single("image"), createEvent);

module.exports = router;
