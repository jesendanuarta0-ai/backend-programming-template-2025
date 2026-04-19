let data = [];
let id = 1;

const history = require('../history/history-controller');

function getOrders(req, res) {
  res.json(data);
}

function getOrder(req, res) {
  const item = data.find((d) => d.id == req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });

  res.json(item);
}

function createOrder(req, res) {
  const newData = {
    id: id++,
    status: 'pending',
    ...req.body,
  };

  data.push(newData);

  history.addHistory({
    action: 'ORDER_CREATED',
    description: `Order ${newData.product_name} dibuat`,
  });

  res.status(201).json(newData);
}

function updateOrder(req, res) {
  const item = data.find((d) => d.id == req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });

  const validStatus = ['pending', 'completed', 'cancelled'];

  if (!validStatus.includes(req.body.status)) {
    return res.status(400).json({ message: 'Invalid status' });
  }

  item.status = req.body.status;

  history.addHistory({
    action: 'ORDER_UPDATED',
    description: `Order ${item.id} jadi ${item.status}`,
  });

  res.json(item);
}

function deleteOrder(req, res) {
  const item = data.find((d) => d.id == req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });

  data = data.filter((d) => d.id != req.params.id);

  history.addHistory({
    action: 'ORDER_DELETED',
    description: `Order ${req.params.id} dihapus`,
  });

  res.json({ message: 'Deleted' });
}

module.exports = {
  getOrders,
  getOrder,
  createOrder,
  updateOrder,
  deleteOrder,
};
