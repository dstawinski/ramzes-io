/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.send('Not implemented yet');
};

exports.showOK = (req, res) => {
  console.log(req.body);
  if (req.body.status === 'OK') {
    res.send('Success :)');
  } else {
    res.send(`Fail code: ${req.body.status}`);
  }
};

