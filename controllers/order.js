const Order = require('../models/Order');
// const tokenController = require('./token');

const ServerURL = 'http://206.189.48.168:8081';

exports.postOrder = (req, res) => {
  const address = req.params.walletAddress;
  const order = new Order({
    walletAddress: address,
    status: 'new'
  });
  // await tokenController.sendTokensRaw(address, 1);

  order.save((err) => {
    if (!err) {
      const orderID = encodeURIComponent(order.orderID);
      let type = 0;
      if (req.body.hideReturnButton) {
        type = 2;
      }
      return res.json({
        href: `https://ssl.dotpay.pl/test_payment/?id=713953&amount=300&currency=PLN&lang=PL&description=${
          orderID}&type=${type}&URL=${ServerURL}/api/showResult`,
        orderID
      });
    }
  });
};

exports.getOrder = (req, res, next) => {
  Order.findOne({
    _id: req.params.orderID
  }, (err, order) => {
    if (err) return next(err);
    console.log(order);
    res.send(order);
  });
};
