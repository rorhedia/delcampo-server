const Products = require("../models/products.model");

const getAll = async () => await Products.find();

const create = async (productsData) => await Products.create(productsData);

const findByIdAndUpdate = async (productsId, productsUpdate) =>
  await Products.findByIdAndUpdate(productsId, productsUpdate, { new: true });

const findByIdAndDelete = async (productsId) =>
  await Products.findByIdAndDelete(productsId);

const getById = async (id) => {
  const productById = await Products.findOne({ _id: id });
  if (!productById) {
    throw new Error("Dato incorrecto");
  }

  return productById;
};

module.exports = {
  getAll,
  create,
  findByIdAndUpdate,
  findByIdAndDelete,
  getById,
};
