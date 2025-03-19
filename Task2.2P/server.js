// Import the Express module to create a web server.
const express = require('express');

// Import Node.js's built-in 'path' module to work with file paths.
const path = require('path');

// Create an instance of an Express application.
const app = express();

// Define the port number to listen on.
const PORT = process.env.PORT || 3000;

// Serve static files from the 'public' folder.
app.use(express.static(path.join(__dirname, 'public')));

// Define a simple API endpoint.
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello! This is a simple API response.' });
});

// API Endpoint: Addition
//Example: http://localhost:3000/add?a=10&b=5

app.get('/add', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }

    // Calculate the sum
    const sum = a + b;

    res.json({ operation: 'addition', result: sum });
});

// API Endpoint: Subtraction
//Example: http://localhost:3000/subtract?a=10&b=5
app.get('/subtract', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }

    // Calculate the difference
    const difference = a - b;

    res.json({ operation: 'subtraction', result: difference });
});

// API Endpoint: Multiplication
//Example: http://localhost:3000/multiply?a=10&b=5
app.get('/multiply', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }

    // Calculate the product
    const product = a * b;

    res.json({ operation: 'multiplication', result: product });
});

// API Endpoint: Division
//Example: http://localhost:3000/divide?a=10&b=5
app.get('/divide', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).json({ error: 'Invalid numbers provided' });
    }

    if (b === 0) {
        return res.status(400).json({ error: 'Division by zero is not allowed' });
    }

    // Calculate the quotient
    const quotient = a / b;

    res.json({ operation: 'division', result: quotient });
});


// Start the server and listen on the specified port.
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
