const Orders = require("../models/orders.model");
function getAll() {
  return Orders.find().populate("users").populate("address").exec();
}
function create(ordersData) {
  return Orders.create(ordersData);
}
function findByIdAndUpdate(ordersId, ordersUpdate) {
  return Orders.findByIdAndUpdate(ordersId, ordersUpdate);
}
function findByIdAndDelete(ordersId) {
  return Orders.findByIdAndDelete(ordersId);
}
module.exports = {
  getAll,
  create,
  findByIdAndUpdate,
  findByIdAndDelete,
};
