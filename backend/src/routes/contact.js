const express = require("express");
const {
	getContacts,
	createContact,
} = require("../controllers/contactController");

const router = express.Router();

router.get("/getContact", getContacts);
router.post("/createContact", createContact);

module.exports = router;
