const Bill = require('../models/Bill');
const Order = require('../models/Order');

exports.generateBill = async (req, res) => {
  const { orderId } = req.body;

  try {
    const order = await Order.findById(orderId).populate('items.foodId');
    if (!order) {
      return res.status(404).json({ msg: 'Order not found' });
    }

    const totalAmount = order.total;
    const tax = totalAmount * 0.05; // 5% tax
    const discount = totalAmount * 0.1; // 10% discount

    const bill = new Bill({
      orderId,
      totalAmount,
      tax,
      discount,
    });

    await bill.save();
    res.json(bill);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
