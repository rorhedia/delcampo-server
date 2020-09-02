const Harvest = require("../models/harvest.model");

const getAll = async () => await Harvest.find().populate("product");

const getHarvestById = async (id) =>
  await Harvest.findById(id).populate("product");

const create = async (harvestData) => await Harvest.create(harvestData);

const findByIdAndUpdate = async (harvestId, harvestUpdate) =>
  await Harvest.findByIdAndUpdate(harvestId, harvestUpdate);

const findByIdAndDelete = async (harvestId) =>
  await Harvest.findByIdAndDelete(harvestId);

<<<<<<< HEAD
function findByIdAndUpdate(harvestId, harvestUpdate) {
  return Harvest.findByIdAndUpdate(harvestId, harvestUpdate, { new: true });
}
function findByIdAndDelete(harvestId) {
  return Harvest.findByIdAndDelete(harvestId);
}

module.exports = {
  getAll,
  getHarvestById,
  create,
  findByIdAndUpdate,
  findByIdAndDelete,
};
