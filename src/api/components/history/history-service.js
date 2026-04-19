const repo = require('./history-repository');

function getHistory() {
  return repo.getAll();
}

function getHistoryById(id) {
  return repo.getById(id);
}

function createHistory(data) {
  return repo.create(data);
}

function deleteHistory(id) {
  return repo.remove(id);
}

function clearHistory() {
  repo.clearAll();
}

module.exports = {
  getHistory,
  getHistoryById,
  createHistory,
  deleteHistory,
  clearHistory,
};
