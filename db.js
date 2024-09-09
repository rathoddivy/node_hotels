// database server 

const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/inco'; // Updated connection string
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

module.exports = db;  // export from hear and catch from server.js file
