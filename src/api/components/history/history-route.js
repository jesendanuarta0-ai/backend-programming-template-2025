const express = require('express');
const controller = require('./history-controller');

module.exports = (app) => {
  const router = express.Router();

  router.get('/', controller.getAll);
  router.get('/:id', controller.getOne);
  router.post('/', controller.create);
  router.delete('/:id', controller.remove);
  router.delete('/', controller.clear);

  app.use('/history', router);
};
