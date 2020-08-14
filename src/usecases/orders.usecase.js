const Users = require("../models/users.model");
const Address = require("../models/address.model");
const Orders = require("../models/orders.model");
const bcrypt = require("../lib/bcrypt");
const jwt = require("../lib/jwt");
function getAll() {
  return Orders.find();
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
