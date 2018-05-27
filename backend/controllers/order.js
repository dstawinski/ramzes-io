const Order = require('../models/Order');

const serverURL = 'http://167.99.141.77:8081';

exports.postOrder = (req, res) => {
  const order = new Order(req.body);

  order.save((err) => {
    if (!err) {
      const orderID = encodeURIComponent(order.orderID);
      let type = 0;
      if (req.body.hideReturnButton) {
        type = 2;
      }
      return res.json({
        href: `https://ssl.dotpay.pl/test_payment/?id=713953&amount=${order.fiatValue}&currency=${order.fiat}&lang=PL&description=${
          orderID}&type=${type}&URL=${serverURL}/api/showResult`,
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
