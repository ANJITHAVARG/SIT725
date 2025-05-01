// server.js

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
const port = process.env.PORT || 3004;

const http = require('http').createServer(app);         // Create HTTP server
const io = require('socket.io')(http);                  // Attach socket.io to server

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


// Socket.io logic
io.on('connection', (socket) => {
  console.log('User connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });

  // Emit random number every second
  setInterval(() => {
    socket.emit('number', parseInt(Math.random()*10));
  }, 1000);
});

// Start the server using http instead of app
http.listen(port, () => {
  console.log(`Socket app listening at http://localhost:${port}`);
});

