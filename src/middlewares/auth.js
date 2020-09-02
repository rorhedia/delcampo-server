const jwt = require("../lib/jwt");
const Users = require("../models/users.model");

async function auth(req, res, next) {
  try {
    const { authorization } = req.headers;
    const decodedToken = jwt.verify(authorization);
    const userModel = await Users.findById(decodedToken.id);
    req.userModel = userModel;

    next();
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}

async function session(req, res, next) {
  try {
    const { authorization } = req.headers;
    const decodedToken = jwt.verify(authorization);
    const { _id, name, email, role } = await Users.findById(decodedToken.id);
    req.userModel = { _id, name, email, role };

    next();
  } catch (error) {
    res.json({
      success: false,
      error: error.message,
    });
  }
}

module.exports = { auth, session };
