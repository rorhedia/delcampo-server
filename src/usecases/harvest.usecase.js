const Harvest = require("../models/harvest.model");

function getAll() {
  return Harvest.find().populate("product");
}

function create(harvestData) {
  return Harvest.create(harvestData);
}

function findByIdAndUpdate(harvestId, harvestUpdate) {
  return Harvest.findByIdAndUpdate(harvestId, harvestUpdate);
}
function findByIdAndDelete(harvestId) {
  return Harvest.findByIdAndDelete(harvestId);
}
module.exports = {
  getAll,
  create,
  findByIdAndUpdate,
  findByIdAndDelete,
};
