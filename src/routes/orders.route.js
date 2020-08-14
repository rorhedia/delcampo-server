const express = require("express");
const orders = require("../usecases/orders.usercase");
const router = express.Router();
const auth = require("../middlewares/auth");
router.get("/", async (req, res) => {
  try {
    const allOrders = await orders.getAll();
    res.json({
      success: true,
      data: {
        orders: allOrders,
      },
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      error: error.message,
    });
  }
});
router.post("/", async (req, res) => {
  try {
    const newOrdersData = req.body;
    const newOrders = await orders.create(newOrdersData);
    res.json({
      success: true,
      data: {
        newAddress,
      },
    });
  } catch (error) {
    res.status(400);
    res.json({
      success: false,
      error: error.message,
    });
  }
});
router.patch("/:id", async (request, response) => {
  try {
    const id = request.params.id;
    const Update = request.body;
    const updateOrders = await orders.findByIdAndUpdate(id, Update);
    response.json({
      success: true,
      data: {
        updateOrders,
      },
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      error: error.message,
    });
  }
});
router.delete("/:id", async (request, response) => {
  try {
    const ordersIdDelete = request.params.id;
    const deleteOrders = await address.findByIdAndDelete(ordersIdDelete);
    response.json({
      success: true,
      data: {
        deleteOrders,
      },
    });
  } catch (error) {
    response.status(400),
      response.json({
        success: false,
        error: error.message,
      });
  }
});
module.exports = router;
