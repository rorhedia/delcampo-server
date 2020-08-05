const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 2,
  },
  description: {
    type: String,
    minlength: 100,
    minlength: 5,
  },
  tag: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("products", productsSchema);
