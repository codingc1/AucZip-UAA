const express = require("express");
const router = express.Router();
const { userController } = require("../controller");
import verifyToken from "./middleware/veifyToken";

// * POST /user/signin
router.post("/signin", userController.signin.post);

// * POST /user/signout
router.get("/signout", userController.signout.get);

// * POST /user/signup
router.post("/signup", userController.signup.post);

// * GET /user/info
router.get("/info", verifyToken, userController.info.get);

router.post("/info", verifyToken, userController.info.post);

router.post("/pwd", verifyToken, userController.pwd.post);

router.post("/googleSignin", userController.googleSignin.post);

module.exports = router;
