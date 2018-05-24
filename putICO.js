const Token = require('./models/Token');
const mongoose = require('mongoose');
const chalk = require('chalk');

mongoose.connect('mongodb://167.99.141.77:27017/ramzes');
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.',
    chalk.red('✗'));
  process.exit();
});

const token1 = {
  token: 'Token1',
  symbol: 'TK1',
  value: 3.00,
  ourSupply: 10000,
  currency: 'PLN'
};

const token2 = {
  token: 'Token2',
  symbol: 'TK2',
  value: 2.00,
  ourSupply: 20000,
  currency: 'PLN'
};

const token3 = {
  token: 'Token3',
  symbol: 'TK3',
  value: 1.00,
  ourSupply: 30000,
  currency: 'PLN'
};

const Token1 = new Token(token1);
Token1.save(err => console.log(err));
const Token2 = new Token(token2);
Token2.save(err => console.log(err));
const Token3 = new Token(token3);
Token3.save(err => console.log(err));

