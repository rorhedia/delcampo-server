const Users = require("../models/users.model");

const getAll = () => Users.find();

const findByIdAndUpdate = (id, data) =>
  Users.findByIdAndUpdate(id, data, { new: true });

module.exports = {
  getAll,
  findByIdAndUpdate,
};
