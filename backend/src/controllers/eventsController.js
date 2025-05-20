const Event = require("../models/Event");

/**
 * @typedef {Object} Event
 * @property {string} id - Unique identifier
 * @property {string} title - Event title
 * @property {string} date - Event date in ISO format
 * @property {string} location - Location of the event
 */

// GET /api/events
/**
 * Get all events from the database.
 *
 * @param {Object} req
 * @param {Object} res
 * @returns {Promise<void>} Responds with an array of {@link Event} objects
 */

const getEvents = async (req, res) => {
	try {
		const events = await Event.find({});
		res.json(events);
	} catch (error) {
		res.status(500).json({ message: "Server Error" });
	}
};

// POST /api/events
/**
 * Creates a new event in the database.
 *
 * @route POST /api/events
 * @param {Object} req - Express request object
 * @param {Event} req.body - The event data to create
 * @param {Object} res - Express response object
 * @returns {Promise<void>} Responds with the created event object in JSON format
 *
 * @example
 * // Request body
 * {
 *   "title": "Tech Conference",
 *   "description": "A full-day conference about cutting-edge tech",
 *   "date": "2025-07-15T09:00:00.000Z",
 *   "location": "Cochin Convention Centre"
 * }
 *
 * @throws {400} If request body is missing required fields
 * @throws {500} If a server or database error occurs
 */
const createEvent = async (req, res) => {
	try {
		const newEvent = new Event(req.body);
		const savedEvent = await newEvent.save();
		res.status(201).json(savedEvent);
	} catch (error) {
		res.status(400).json({ message: "Invalid data" });
	}
};

module.exports = {
	getEvents,
	createEvent,
};
