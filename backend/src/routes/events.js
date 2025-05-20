const express = require("express");
const { getEvents, createEvent } = require("../controllers/eventController");

const router = express.Router();

router.get("/getEvent", getEvents);
router.post("/createEvent", createEvent);

module.exports = router;
