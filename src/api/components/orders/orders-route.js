const express = require('express');
const controller = require('./orders-controller');

module.exports = (app) => {
  const router = express.Router();

  router.get('/', controller.getOrders);
  router.get('/:id', controller.getOrder);
  router.post('/', controller.createOrder);
  router.patch('/:id', controller.updateOrder);
  router.delete('/:id', controller.deleteOrder);

  app.use('/orders', router);
};
