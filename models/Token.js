const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
  token: {
    type: String
  },
  symbol: {
    type: String
  },
  value: {
    type: Number
  },
  ourSupply: {
    type: Number
  },
  price: {
    type: Number
  },
  currency: {
    type: String, default: 'PLN'
  }
}, {
  timestamps: true
});

const Token = mongoose.model('Rate', tokenSchema);

module.exports = Token;
