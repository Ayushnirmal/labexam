const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Initialize the Express app
const app = express();

// Middleware to parse JSON and handle CORS
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/userDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected successfully');
}).catch(err => console.log('MongoDB connection error:', err));

// Routes (Assuming you will define your routes in a separate file like 'userRoutes.js')
const userRoutes = require('./routes/userRoutes');  // You need to create this file and define routes
app.use('/api/users', userRoutes);

// Define the port
const PORT = 5000;

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
