let history = [];
let id = 1;

function getAll(req, res) {
  res.json(history);
}

function getOne(req, res) {
  const item = history.find((h) => h.id == req.params.id);
  if (!item) return res.status(404).json({ message: 'Not found' });

  res.json(item);
}

function create(req, res) {
  const newData = {
    id: id++,
    ...req.body,
  };
  history.push(newData);
  res.status(201).json(newData);
}

function remove(req, res) {
  const index = history.findIndex((h) => h.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Not found' });

  history.splice(index, 1);
  res.json({ message: 'Deleted' });
}

function clear(req, res) {
  history = [];
  res.json({ message: 'All history cleared' });
}

function addHistory(data) {
  history.push({
    id: id++,
    ...data,
  });
}

module.exports = {
  getAll,
  getOne,
  create,
  remove,
  clear,
  addHistory,
};
