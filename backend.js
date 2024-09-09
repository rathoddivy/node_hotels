const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Connect to MongoDB
const mongoURL = 'mongodb://127.0.0.1:27017/inco';
mongoose.connect(mongoURL);

const db = mongoose.connection;
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});
db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

// Define the Mongoose schema and model
const fromSchema = new mongoose.Schema({
  f_name: { type: String, required: true },
  l_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const From = mongoose.model('From', fromSchema);

// Create Express app
const app = express();
app.use(cors());  // Enable CORS for all routes
app.use(bodyParser.json());  // Parse incoming JSON requests

// POST route to handle form submission
app.post('/signin', async (req, res) => {
  try {
    const data = req.body;
    const newFrom = new From(data);
    const result = await newFrom.save();
    res.status(200).json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// GET route to retrieve data (optional)
app.get('/signin', async (req, res) => {
  try {
    const data = await From.find();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
