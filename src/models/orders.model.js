const mongoose = require("mongoose");
const ordersSchema = new mongoose.Schema({
  users: [
    {
      type: mongoose.Types.ObjectId,
      ref: "users",
      require: true,
    },
  ],
  adress: [
    {
      type: mongoose.Types.ObjectId,
      ref: "adress",
      require: true,
    },
  ],
  bag: {
    type: Array,
    required: true,
    maxlength: 50,
    minlength: 1,
  },
  payment: {
    type: String,
    minlength: 100,
    minlength: 5,
  },
  total: {
    type: String,
    minlength: 100,
    minlength: 5,
  },
});
module.exports = mongoose.model("orders", ordersSchema);
