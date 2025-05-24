const multer = require("multer");
const Event = require("../models/Event");

/**
 * @typedef {Object} EventData
 * @property {string} id - Unique identifier
 * @property {string} title - Event title
 * @property {string} date - Event date in ISO format
 * @property {string} location - Location of the event
 */

// GET /api/events
/**
 * @function getEvents
 * @description Retrieve all events from the database.
 *
 * @param {Object} req - Express request object
 * @param {string} req.query.page - The page number for pagination
 * @param {string} req.query.limit - The number of items per page
 * @param {Object} res - Express response object
 * @param {EventData[]} res.body.events - Array of event objects
 * @param {number} res.body.page - Current page number
 * @param {number} res.body.totalPages - Total number of pages
 * @param {number} res.body.totalItems - Total number of items
 * @returns {Promise<void>} Responds with an object containing the events, current page, total pages, and total items in JSON format
 * @throws {500} If a server or database error occurs
 * @throws {400} If the page or limit query parameters are invalid
 */

const getEvents = async (req, res) => {
	try {
		const page = parseInt(req.query.page) || 1; // default: page 1
		const limit = parseInt(req.query.limit) || 10; // default: 10 items
		const skip = (page - 1) * limit;

		const events = await Event.find()
			.sort({ date: -1 }) //sort by date descending
			.skip(skip)
			.limit(limit); // limit the number of documents per page

		const total = await Event.countDocuments(); // count total documents

		res.json({
			page,
			totalPages: Math.ceil(total / limit),
			totalItems: total,
			events,
		});
	} catch (err) {
		res.status(500).json({ message: "Server error" });
	}
};

// POST /api/events
/**
 * @function createEvent
 * @description Create a new event in the database.
 *
 * @param {Object} req - Express request object
 * @param {EventData} req.body - The event data to create
 * @param {Express.Multer.File} req.file - The uploaded image file
 * @param {string} req.file.path - The path to the uploaded image file
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Responds with the created event object in JSON format
 *
 * @example
 * // Request body
 * {
 *   "title": "Tech Conference",
 *   "description": "A full-day conference about cutting-edge tech",
 * 	 "image": [binary data],"
 *   "date": "2025-07-15T09:00:00.000Z",
 *   "location": "Cochin Convention Centre"
 * }
 *
 * @throws {400} If request body is missing required fields
 * @throws {500} If a server or database error occurs
 */
const createEvent = async (req, res) => {
	try {
		const imageUrl = req.file.path;
		const event = new Event({ ...req.body, imageUrl });
		const saved = await event.save();
		res.status(201).json(saved);
	} catch (error) {
		console.error(error.message);
		res.status(400).json({ message: "Invalid data" });
	}
};

module.exports = {
	getEvents,
	createEvent,
};
