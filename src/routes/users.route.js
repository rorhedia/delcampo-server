const express = require("express");
const router = express.Router();
const users = require("../usecases/users.usecase");
const { auth } = require("../middlewares/auth");

router.get("/", auth, async (req, res) => {
  try {
    const allUsers = await users.getAll();
    res.json({
      success: true,
      data: {
        orders: allUsers,
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
    const data = request.body;
    const updateUser = await users.findByIdAndUpdate(id, data);
    response.json({
      success: true,
      data: {
        updateUser,
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

module.exports = router;
