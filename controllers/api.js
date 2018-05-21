const order = require('../models/Order');
const paypal = require('paypal-rest-sdk');
const tokenController = require('./token');

const vueURL = 'http://206.189.48.168:8081';

/**
 * POST /api/dotpay
 * receive dotpay payment acceptance
 */
exports.postDotpay = async (req, res) => {
  console.log(req.body);
  let address;
  const status = req.body.operation_status;
  order.findOne({
    _id: req.body.description
  }, (err, order) => {
    if (err) {
      console.log(err);
      return res.send('FAIL');
    }
    order.status = status;
    address = order.walletAddress;
    order.save(async (err) => {
      if (err) return res.send(err);
      console.log(`Address: ${address}`);
      if (address && status === 'completed') {
        try {
          await tokenController.sendTokensRaw(address, 1);
          res.send('OK');
        } catch (e) {
          res.send(e);
        }
      } else {
        res.send('order failed');
      }
    });
  });
};

// TODO add comment
exports.postShowResult = (req, res) => {
  res.redirect(`${vueURL}?status='${req.body.status}`);
};

exports.checkBalance = async (req, res) => {
  const balance = await tokenController.getBalance(req.params.address);
  res.send(JSON.stringify({ balance }));
};


/**
 * GET /api/paypal
 * PayPal SDK example.
 */
exports.getPayPal = (req, res, next) => {
  paypal.configure({
    mode: 'sandbox',
    client_id: process.env.PAYPAL_ID,
    client_secret: process.env.PAYPAL_SECRET
  });

  const paymentDetails = {
    intent: 'sale',
    payer: {
      payment_method: 'paypal'
    },
    redirect_urls: {
      return_url: process.env.PAYPAL_RETURN_URL,
      cancel_url: process.env.PAYPAL_CANCEL_URL
    },
    transactions: [{
      description: 'Hackathon Starter',
      amount: {
        currency: 'USD',
        total: '1.99'
      }
    }]
  };

  paypal.payment.create(paymentDetails, (err, payment) => {
    if (err) { return next(err); }
    const { links, id } = payment;
    req.session.paymentId = id;
    for (let i = 0; i < links.length; i++) {
      if (links[i].rel === 'approval_url') {
        res.render('api/paypal', {
          approvalUrl: links[i].href
        });
      }
    }
  });
};

/**
 * GET /api/paypal/success
 * PayPal SDK example.
 */
exports.getPayPalSuccess = (req, res) => {
  const { paymentId } = req.session;
  const paymentDetails = { payer_id: req.query.PayerID };
  paypal.payment.execute(paymentId, paymentDetails, (err) => {
    res.render('api/paypal', {
      result: true,
      success: !err
    });
  });
};

/**
 * GET /api/paypal/cancel
 * PayPal SDK example.
 */
exports.getPayPalCancel = (req, res) => {
  req.session.paymentId = null;
  res.render('api/paypal', {
    result: true,
    canceled: true
  });
};
