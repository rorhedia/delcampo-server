const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;

const sign = (payload = {}) =>
  jwt.sign(payload, JWT_SECRET, { expiresIn: "2d" });

const verify = (token) => jwt.verify(token, JWT_SECRET);

module.exports = {
  ...jwt,
  sign,
  verify,
};
