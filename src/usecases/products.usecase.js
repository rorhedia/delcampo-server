const Products = require("../models/products.model");

function getAll() {
  return Products.find();
}

function create(productsData) {
  return Products.create(productsData);
}

function findByIdAndUpdate(productsId, productsUpdate) {
  return Products.findByIdAndUpdate(productsId, productsUpdate);
}

function findByIdAndDelete(productsId) {
  return Products.findByIdAndDelete(productsId);
}

async function getById(id) {
  const productById = await Products.findOne({ _id: id });
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
