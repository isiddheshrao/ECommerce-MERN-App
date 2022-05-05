const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();


// Connect to mongoose
mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected to database!');
}).catch(() => {
    console.log('Connection failed!');
});

// Start express server
app.listen(5000, () => {
    console.log('Backend Server started on port 5000');
});