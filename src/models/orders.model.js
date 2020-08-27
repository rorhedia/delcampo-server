const mongoose = require("mongoose");

const ordersSchema = new mongoose.Schema({
  users: {
    type: mongoose.Types.ObjectId,
    ref: "users",
    require: true,
  },
  address: {
    type: mongoose.Types.ObjectId,
    ref: "address",
    require: true,
  },
  bag: {
    type: Array,
    required: true,
    maxlength: 50,
    minlength: 1,
  },
  payment: {
    type: String,
    maxlength: 100,
    minlength: 1,
  },
  total: {
    type: Number,
  },
});

module.exports = mongoose.model("orders", ordersSchema);
