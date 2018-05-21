const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  walletAddress: {
    type: String
  },
  status: {
    type: String
  }
}, {
  timestamps: true
});

orderSchema.virtual('orderID').get(function () {
  return this._id;
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
