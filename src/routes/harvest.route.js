const express = require("express");
const harvest = require("../usecases/harvest.usecase");
const router = express.Router();
const auth = require("../middlewares/auth");

router.get("/", async (req, res) => {
  try {
    const allHarvest = await harvest.getAll();
    res.json({
      success: true,
      data: {
        harvest: allHarvest,
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
    const newHarvestData = req.body;
    const newHarvest = await harvest.create(newHarvestData);
    res.json({
      success: true,
      data: newHarvest,
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

    const updateHarvest = await harvest.findByIdAndUpdate(id, Update);

    response.json({
      success: true,
      data: {
        updateHarvest,
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
    const harvestIdDelete = request.params.id;
    const deleteHarvest = await harvest.findByIdAndDelete(harvestIdDelete);
    response.json({
      success: true,
      data: {
        deleteHarvest,
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
