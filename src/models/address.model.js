const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
  users: [
    {
      type: mongoose.Types.ObjectId,
      ref: "users",
      require: true,
    },
  ],

  name: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 2,
  },
  street: {
    type: String,
    required: true,
  },
  colonia: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  postal_code: {
    type: Number,

    required: true,
  },
  phone: {
    type: Number,
  },
  between_street_1: {
    type: String,
    required: true,
  },
  between_street_2: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("address", addressSchema);
