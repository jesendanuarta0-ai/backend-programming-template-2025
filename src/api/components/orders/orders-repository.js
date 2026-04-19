const orders = [];
let idCounter = 1;

function getAll() {
  return orders;
}

function getById(id) {
  return orders.find((o) => o.id === parseInt(id));
}

function create(data) {
  const order = {
    id: idCounter++,
    status: 'pending',
    ...data,
  };
  orders.push(order);
  return order;
}

function updateStatus(id, status) {
  const order = getById(id);
  if (!order) return null;

  order.status = status;
  return order;
}

function remove(id) {
  const index = orders.findIndex((o) => o.id === parseInt(id));
  if (index === -1) return false;

  orders.splice(index, 1);
  return true;
}

module.exports = { getAll, getById, create, updateStatus, remove };
