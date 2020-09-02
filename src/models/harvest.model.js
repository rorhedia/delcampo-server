const mongoose = require("mongoose");

const harvestSchema = new mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },
  product: {
    type: mongoose.Types.ObjectId,
    ref: "products",
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  picture: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  tag: {
    type: String,
    default: "general",
    enum: ["general", "populares", "temporada", "oferta"],
  },
  date_start: {
    type: Date,
    default: Date.now,
  },
  date_end: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("harvest", harvestSchema);
