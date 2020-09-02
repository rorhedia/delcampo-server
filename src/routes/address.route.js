const express = require("express");
const address = require("../usecases/address.usecase");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", auth, async (req, res) => {
  try {
    const allAddress = await address.getAll();
    res.json({
      success: true,
      data: {
        address: allAddress,
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

router.get("/:id", auth, async (req, res) => {
  try {
    const oneAddress = await address.getAddressById(req.params.id);
    res.json({
      success: true,
      data: {
        address: oneAddress,
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
    const newAddressData = req.body;
    const newAddress = await address.create(newAddressData);
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

router.patch("/:id", auth, async (request, response) => {
  try {
    const id = request.params.id;
    const Update = request.body;

    const updateAddress = await address.findByIdAndUpdate(id, Update);

    response.json({
      success: true,
      data: {
        updateAddress,
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
    const addressIdDelete = request.params.id;
    const deleteAddress = await address.findByIdAndDelete(addressIdDelete);
    response.json({
      success: true,
      data: {
        deleteAddress,
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
