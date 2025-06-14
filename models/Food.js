const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['food', 'fast-food', 'cold-drinks',"Most Populer"],
    required: true,
  },
});

const Food = mongoose.model('Food', FoodSchema);
module.exports = Food;
