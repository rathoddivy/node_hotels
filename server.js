// backend server
const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const { passport, authenticated } = require('./auth'); // Import from auth.js
const menu = require('./Scemas/menu');
const person = require('./Scemas/person');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors({
    origin: 'http://127.0.0.1:5500',  // Frontend URL
    credentials: true  // Enable if needed for cookies, sessions, etc.
}));



// Middleware
app.use(bodyParser.json());


// Fix router section
const router = require('./routerofperson');
const router2 = require('./routerofmenu');
app.use('/menu',router2);
app.use('/person', router);

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


