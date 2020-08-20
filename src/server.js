const express = require("express");
const app = express();
const cors = require("cors");

const authRouter = require("./routes/auth.route");
const addressRouter = require("./routes/address.route");
const productsRouter = require("./routes/products.route");
const harvestRouter = require("./routes/harvest.route");
const ordersRouter = require("./routes/orders.route");

app.use(cors());
app.use(express.json());

/** Montar routers */
app.use("/auth", authRouter);
app.use("/address", addressRouter);
app.use("/products", productsRouter);
app.use("/harvest", harvestRouter);
app.use("/orders", ordersRouter);

/** TESTING */
app.get("/", (request, response) => {
  response.json({
    success: true,
  });
});

module.exports = app;
