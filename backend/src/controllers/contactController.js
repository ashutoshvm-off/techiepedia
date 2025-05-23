const Contact = require("../models/Contact");

// GET /api/contact/getContact
const getContacts = async (req, res) => {
	try {
		const contacts = await Contact.find({});
		res.json(contacts);
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

// POST /api/contact/createContact
const createContact = async (req, res) => {
	try {
		const newContact = new Contact(req.body);
		const savedContact = await newContact.save();
		res.status(201).json(savedContact);
	} catch (error) {
		res.status(400).json({ message: "Invalid data" });
	}
};

module.exports = {
	getContacts,
	createContact,
};
