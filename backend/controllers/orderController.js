import Order from '../models/orderModel.js';
export const addOrderItems = async (req, res) => {
const { orderItems, shippingAddress, itemsPrice, shippingPrice, totalPrice } = req.body;
if (orderItems && orderItems.length === 0) {
res.status(400).json({ message: 'No order items' });
    return;
  } else {

const order = new Order({
orderItems,
      shippingAddress,
      itemsPrice,
      shippingPrice,
      totalPrice
    });
const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
};
