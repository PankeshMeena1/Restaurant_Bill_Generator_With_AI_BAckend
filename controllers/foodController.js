const Food = require('../models/Food');
const dotenv = require('dotenv');
dotenv.config(); // Ensure the Food model is properly required

exports.getFoodItems = async (req, res) => {
  try {
    const foods = await Food.find(); // Use find() to get all food items
    // console.log("All Food Data", foods);
    res.json(foods); // Return the food data as a JSON response
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.addFood = async (req, res) => {
    try {
      const { name, price, discount, category } = req.body;
  
      if (!req.file) {
        return res.status(400).json({ message: 'Image is required' });
      }
  
      const imagePath = `${process.env.MONGO_URI}/uploads/${req.file.filename}`;
  
      const newFood = new Food({
        name,
        price,
        discount,
        image: imagePath,
        category,
      });
  
      const savedFood = await newFood.save();
      res.status(201).json(savedFood);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error', error });
    }
  };
