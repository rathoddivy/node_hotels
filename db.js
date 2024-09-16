// database server 

const mongoose = require('mongoose');
require('dotenv').config(); // senstive passwords 
// const mongoURL = 'mongodb://127.0.0.1:27017/inco'; // Updated connection string
// const mongoURL  = process.env.db_URL;
const mongoURL =process.env.db_URL_local;


// const mongoURL= process.env.db_URL_local;
mongoose.connect(mongoURL); // Only set to true if using self-signed certificates (Atlas uses signed certs)


  


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
