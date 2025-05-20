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
