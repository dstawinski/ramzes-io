const mongoose = require('mongoose');

const rateSchema = new mongoose.Schema({
  currency: {
    type: String
  },
  token: {
      type: String
  },
  value: {
      type: Number
  }
}, {
  timestamps: true
});

const Rate = mongoose.model('Rate', rateSchema);