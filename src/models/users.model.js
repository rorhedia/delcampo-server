const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userRole = {
  values: ["Productor", "Comprador"],
  message: "Elige un rol válido",
};

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 60,
    minlength: 2,
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
    enum: userRole,
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
  delete userObject.created;
  delete userObject.age;

  return userObject;
};

usersSchema.plugin(uniqueValidator, {
  message: "El usuario ya existe",
});

module.exports = mongoose.model("users", usersSchema);
