let histories = [];
let idCounter = 1;

function getAll() {
  return histories;
}

function getById(id) {
  return histories.find((h) => h.id === parseInt(id));
}

function create(data) {
  const history = {
    id: idCounter++,
    ...data,
  };
  histories.push(history);
  return history;
}

function remove(id) {
  const index = histories.findIndex((h) => h.id === parseInt(id));
  if (index === -1) return false;

  histories.splice(index, 1);
  return true;
}

function clearAll() {
  histories = [];
}

module.exports = { getAll, getById, create, remove, clearAll };
