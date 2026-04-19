const repo = require('./orders-repository');

function getOrders() {
  return repo.getAll();
}

function getOrder(id) {
  return repo.getById(id);
}

function createOrder(data) {
  return repo.create(data);
}

function updateOrder(id, status) {
  return repo.updateStatus(id, status);
}

function deleteOrder(id) {
  return repo.remove(id);
}

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
