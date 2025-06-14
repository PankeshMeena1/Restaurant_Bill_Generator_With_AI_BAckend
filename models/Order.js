const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [
    {
      foodId: { type: mongoose.Schema.Types.ObjectId, ref: 'Food', required: true },
      quantity: { type: Number, required: true },
    },
  ],
  total: { type: Number, required: true },
  status: { type: String, default: 'pending' }, // pending, completed
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
