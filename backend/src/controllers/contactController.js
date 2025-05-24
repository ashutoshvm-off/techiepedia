const Contact = require("../models/Contact");

// GET /api/contact/getContact
/**
 *@function getContact - Get all contacts
 *@description This function retrieves all contacts from the database and sends them as a JSON response.
 *
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Responds with the list of contacts in JSON format
 * @throws {Error} If there is a server error, responds with a 500 status code and an error message
 * @example
 * // Example req:
 * 	{
 *     "name": "John Doe",
 *     "email": "L6B0D@example.com",
 *     "message": "Hello, how can I help you?",
 *   },
 */
const getContacts = async (req, res) => {
	try {
		const contacts = await Contact.find({});
		res.json(contacts);
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

// POST /api/contact/createContact
/**
 *@function createContact
 * @description Create a new contact
 *
 * @param {string} req.body.name - The name of the contact
 * @param {string} req.body.email - The email of the contact
 * @param {string} req.body.message - The message from the contact
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Responds with the created contact object in JSON format
 */
const createContact = async (req, res) => {
	try {
		const newContact = new Contact(req.body);
		const savedContact = await newContact.save();
		res.status(201).json(savedContact);
	} catch (error) {
		res.status(400).json({ message: "Invalid data" });
		console.error(error.message);
	}
};

module.exports = {
	getContacts,
	createContact,
};
