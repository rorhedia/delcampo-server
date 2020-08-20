require("dotenv").config();

const dbConnect = require("./src/lib/db");
const server = require("./src/server");

dbConnect()
  .then(() => {
    server.listen(8080);
    console.log("DB Connect - Server is listening");
  })
  .catch((err) => {
    console.log(err.message);
  });
