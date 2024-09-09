const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');  // MongoDB connection
const from = require('./models/signin');  // Mongoose model

const app = express();

const cors = require('cors');
app.use(cors());  // Enable CORS for all routes


// Middleware to parse incoming JSON
app.use(bodyParser.json());

// POST route to handle form submission
app.post('/signin', async (req, res) => {
  try {
    const data = req.body;  // Get the data from the request body
    const newFrom = new from(data);  // Create a new document using the Mongoose model

    const result = await newFrom.save();  // Save the data in the database
    res.status(200).json(result);  // Send success response
  } catch (err) {
    console.error(err);  // Log any errors
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET route to retrieve data from the database (optional)
app.get('/signin', async (req, res) => {
  try {
    const data = await from.find();  // Get all data from the database
    res.status(200).json(data);  // Send the data in the response
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${3000}`);
});
