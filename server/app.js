const dotenv = require('dotenv');
const { default: mongoose } = require('mongoose');
const express = require('express');
const app = express();
const cors=require('cors')


// Load environment variables
dotenv.config({ path: './config.env' });

// Constants
const PORT = process.env.PORT || 5000; // Default to 5000 if PORT isn't set

// Database connection
require('./db/conn');

// Middleware to parse JSON
app.use(express.json());
const corsOptions = {
    origin: '*', // Allow only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true, // Allow credentials (e.g., cookies)
    optionsSuccessStatus: 200 // Status for preflight responses
};

// Use CORS middleware with the options
app.use(cors(corsOptions));

// Prefix '/api' to all routes
app.use('/', require('./router/routes.js')); // Add '/api' prefix

// Debug messages
console.log('ok google');
app.get('/check', (req, res) => {
    res.send("Server is running");
});

// Start the server
app.listen(PORT, ()=> {
    console.log(`App listening on port ${PORT}!`);
});
