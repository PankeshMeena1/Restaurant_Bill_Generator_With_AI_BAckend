const Order = require('../models/Order');
const Food = require('../models/Food');

exports.createOrder = async (req, res) => {
  const { items } = req.body;

  try {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      const food = await Food.findById(items[i].foodId);
      if (food) {
        total += food.price * items[i].quantity;
      }
    }

    const order = new Order({
      items,
      total,
    });

    await order.save();
    res.json(order);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
