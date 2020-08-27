const Users = require("../models/users.model");

const getAll = () => Users.find();

const create = (data) =>  Users.create(data);

const findByIdAndUpdate = (id, data) => Users.findByIdAndUpdate(id, data);

const findByIdAndDelete = (id) => Users.findByIdAndDelete(id);

const getById = (id) => {
  const productById = await Users.findOne({ _id: id });
  if (!productById) {
    throw new Error("Dato incorrecto");
  }
  return productById;
}

module.exports = {
  getAll,
  create,
  findByIdAndUpdate,
  findByIdAndDelete,
  getById,
};
