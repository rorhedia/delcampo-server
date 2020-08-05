const express = require("express");
const app = express();
const cors = require("cors");
const authRouter = require("./routes/auth.route");

app.use(cors());
app.use(express.json());

/** Montar routers */
app.use("/auth", authRouter);

/** TESTING */
app.get("/", (request, response) => {
  response.json({
    success: true,
  });
});

module.exports = app;
