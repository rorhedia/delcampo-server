const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 60,
    minlength: 10,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    uniqueCaseInsensitive: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  description: {
    type: String,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  role: {
    type: String,
    required: true,
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

module.exports = mongoose.model("users", usersSchema);
