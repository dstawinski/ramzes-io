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
  currency: {
    type: String, default: 'PLN'
  }
}, {
  timestamps: true
});

const Token = mongoose.model('Token', tokenSchema);

module.exports = Token;
