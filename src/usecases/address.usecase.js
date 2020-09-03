const Address = require("../models/address.model");

const getAll = () => Address.find().populate("user").exec();

const getAddressById = (id) =>
  Address.find({ user: id }).populate("user").exec();

const create = (addressData) => Address.create(addressData);

const findByIdAndUpdate = (addressId, addressUpdate) =>
  Address.findByIdAndUpdate(addressId, addressUpdate, { new: true });

const findByIdAndDelete = (addressId) => Address.findByIdAndDelete(addressId);

module.exports = {
  getAll,
  create,
  findByIdAndUpdate,
  findByIdAndDelete,
  getAddressById,
};
