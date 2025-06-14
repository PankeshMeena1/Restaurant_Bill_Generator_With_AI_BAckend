const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
dotenv.config();

// Routes
const foodRoutes = require('./routes/foodRoutes');
const orderRoutes = require('./routes/orderRoutes');
const billRoutes = require('./routes/billRoutes');

// Initialize the app
const app = express();

// Middleware
app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(cors());

// Connect to MongoDB
connectDB();

// Define Routes
app.use('/api/foods', foodRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/bills', billRoutes);

// Server Port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
