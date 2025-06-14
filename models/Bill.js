const mongoose = require('mongoose');

const billSchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  totalAmount: { type: Number, required: true },
  tax: { type: Number, required: true },
  discount: { type: Number, required: true },
  generatedAt: { type: Date, default: Date.now },
});

const Bill = mongoose.model('Bill', billSchema);
module.exports = Bill;
