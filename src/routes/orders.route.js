const express = require("express");
const orders = require("../usecases/orders.usecase");
const router = express.Router();
const { auth } = require("../middlewares/auth");

router.get("/", auth, async (req, res) => {
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

router.post("/", auth, async (req, res) => {
  try {
    const newOrdersData = req.body;
    const newOrders = await orders.create(newOrdersData);
    res.json({
      success: true,
      data: {
        newOrders,
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

router.patch("/:id", auth, async (request, response) => {
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

router.delete("/:id", auth, async (request, response) => {
  try {
    const ordersIdDelete = request.params.id;
    const deleteOrders = await orders.findByIdAndDelete(ordersIdDelete);
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
