const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  walletAddress: {
    type: String
  },
  status: {
    type: String, default: 'new'
  },
  fiat: {
    type: String
  },
  token: {
    type: String
  },
  fiatValue: {
    type: Number
  },
  tokenValue: {
    type: Number
  }
}, {
  timestamps: true
});

orderSchema.virtual('orderID').get(() => this._id);


const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
