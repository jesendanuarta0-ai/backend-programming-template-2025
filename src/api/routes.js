const express = require('express');

const users = require('./components/users/users-route');
const orders = require('./components/orders/orders-route');
const history = require('./components/history/history-route');

module.exports = () => {
  const app = express.Router();

  users(app);
  orders(app);
  history(app);

  return app;
};
