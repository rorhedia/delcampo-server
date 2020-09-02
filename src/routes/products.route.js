const express = require("express");
const products = require("../usecases/products.usecase");
const router = express.Router();
const { auth } = require("../middlewares/auth");

router.get("/", auth, async (req, res) => {
  try {
    const allProducts = await products.getAll();
    res.json({
      success: true,
      data: {
        products: allProducts,
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
    const newProductsData = req.body;

    const newProducts = await products.create(newProductsData);
    res.json({
      success: true,
      data: {
        newProducts,
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

    const updateProducts = await products.findByIdAndUpdate(id, Update);

    response.json({
      success: true,
      data: {
        updateProducts,
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
    const productsIdDelete = request.params.id;
    const deleteProducts = await products.findByIdAndDelete(productsIdDelete);
    response.json({
      success: true,
      data: {
        deleteProducts,
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

router.get("/:id", auth, async (request, response) => {
  try {
    const id = request.params.id;
    const productData = await products.getById(id);

    response.json({
      success: true,
      data: productData,
      message: "byid",
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
