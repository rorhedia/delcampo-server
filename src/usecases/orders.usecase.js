const Orders = require("../models/orders.model");

const getAll = async () =>
  await Orders.find().populate("users").populate("address").exec();

const create = async (ordersData) => await Orders.create(ordersData);

const findByIdAndUpdate = async (ordersId, ordersUpdate) =>
  await Orders.findByIdAndUpdate(ordersId, ordersUpdate);

const findByIdAndDelete = async (ordersId) =>
  await Orders.findByIdAndDelete(ordersId);

module.exports = {
  getAll,
  create,
  findByIdAndUpdate,
  findByIdAndDelete,
};
