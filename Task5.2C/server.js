// server.js

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const port = process.env.PORT || 3004;

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/myprojectDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

// Middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Import project routes
const projectRoutes = require("./routes/dataRoutes");
app.use("/api/projects", projectRoutes);

// Root route to serve homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
