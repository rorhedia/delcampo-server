const express = require("express");
const router = express.Router();
const { signup, login } = require("../usecases/auth.usecase");
const { session } = require("../middlewares/auth");

router.post("/sign-up", async (request, response) => {
  try {
    const signedUpUser = await signup(request.body);
    response.json({
      success: true,
      data: signedUpUser,
    });
  } catch (error) {
    response.status(400);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.post("/sign-in", async (request, response) => {
  try {
    const { password, email } = request.body;
    const token = await login(email, password);
    response.json({
      success: true,
      data: {
        token,
      },
    });
  } catch (error) {
    response.status(401);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

router.post("/session", session, async (request, response) => {
  try {
    let user = request.userModel;
    response.json({
      success: true,
      data: { user },
    });
  } catch (error) {
    response.status(401);
    response.json({
      success: false,
      error: error.message,
    });
  }
});

module.exports = router;
