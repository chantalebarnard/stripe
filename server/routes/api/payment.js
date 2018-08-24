const Counter = require('../../models/Counter');
const config = require('../../../config/config');

module.exports = (app) => {
  app.post('/api/stripe/account/get', function (req, res, next) {
    const stripeAccountId = '';
    
    if (!stripeAccountId) {
      res.send({
        success: false,
        message: 'Missing stripe account.',
        setupBegan: false,
      })
    } else {
      res.send({
        success: true,
        message: 'Stripe account.',
        setupBegan: true,
      })
    }
  });
};
