const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const express = require('express');
const app = express();

// Load environment variables
dotenv.config({ path: './config.env' });

// Constants
const PORT = process.env.PORT;

// Database connection
require('./db/conn');

// Middleware to parse JSON
app.use(express.json());

// Prefix '/api' to all routes
app.use('/', require('./router/routes.js'));

// Debug messages
console.log('ok google');

// Start the server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});
