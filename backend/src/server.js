const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const eventRoutes = require("./routes/events");
const galleryRoutes = require("./routes/gallery");
const blogRoutes = require("./routes/blogs");
const contactRoutes = require("./routes/contact");
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/events", eventRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);

// DB Connection
require("./config/db")();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
