const mongoose = require('mongoose');

const orderSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    orderItems: [
      {
        name: { type: String, required: true },
        price: { type: Number, required: true },
        image: { type: String, required: true }
      }
    ],
    totalPrice: { type: Number, required: true, default: 0.0 }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);
