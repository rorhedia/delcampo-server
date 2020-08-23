const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const categories = {
  values: ["Frutas", "Verduras", "Flores", "Raíces", "Vainas"],
  message: "Error, elige una caterogia válida",
};

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 2,
    unique: true,
    uniqueCaseInsensitive: true,
  },
  category: {
    type: String,
    enum: categories,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

productsSchema.plugin(uniqueValidator, {
  message: "Error, expected {PATH} to be unique.",
});

module.exports = mongoose.model("products", productsSchema);
