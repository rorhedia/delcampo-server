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

module.exports = {
  getAll,
  create,
  findByIdAndUpdate,
  findByIdAndDelete,
};
