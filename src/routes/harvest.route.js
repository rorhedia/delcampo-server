const express = require("express");
const harvest = require("../usecases/harvest.usecase");
const router = express.Router();
const { auth } = require("../middlewares/auth");
const upload = require("../lib/S3Images");
const singleUpload = upload.single("images");

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

router.get("/:id", auth, async (req, res) => {
  try {
    console.log(req.params.id);
    const request = await harvest.getHarvestById(req.params.id);
    res.json({
      success: true,
      data: {
        harvest: request,
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

router.patch("/:id", auth, async (request, response) => {
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

router.delete("/:id", auth, async (request, response) => {
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

router.post("/:id/upload", auth, async (req, res) => {
  singleUpload(req, res, async (err) => {
    if (err) {
      return res.status(400).json({
        success: false,
        message: err.message,
      });
    }

    try {
      const id = req.params.id;
      const picture = req.file.location;
      const UpdatePicture = await harvest.findByIdAndUpdate(id, { picture });
      res.json({
        success: true,
        data: UpdatePicture,
      });
    } catch (error) {
      res.status(400);
      res.json({
        success: false,
        message: error.message,
      });
    }
  });
});

module.exports = router;
