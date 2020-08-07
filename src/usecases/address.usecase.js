const Users = require("../models/users.model");
const Address = require("../models/address.model");
const bcrypt = require("../lib/bcrypt");
const jwt = require("../lib/jwt");

function getAll() {
  return Address.find().populate("users");
}

function create(addressData) {
  return Address.create(addressData);
}
function findByIdAndUpdate(addressId, addressUpdate) {
  return Address.findByIdAndUpdate(addressId, addressUpdate);
}
function findByIdAndDelete(addressId) {
  return Address.findByIdAndDelete(addressId);
}

module.exports = {
  getAll,
  create,
  findByIdAndUpdate,
  findByIdAndDelete,
};
