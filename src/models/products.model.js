const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
    minlength: 2,
    unique: true,
    uniqueCaseInsensitive: true,
  },
  tag: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

usersSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;

  return userObject;
};

usersSchema.plugin(uniqueValidator, {
  message: "Error, expected {PATH} to be unique.",
});

module.exports = mongoose.model("products", productsSchema);
