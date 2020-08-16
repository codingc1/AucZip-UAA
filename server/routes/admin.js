const express = require("express");
const router = express.Router();

const { adminController } = require("../controller");
import verifyToken from "./middleware/veifyToken";

// * GET /board
// router.get('/', adminController.get);
// // * POST /board
// router.post('/', adminController.post);
router.get("/userList", verifyToken, adminController.userList.get);

router.post("/delUser", verifyToken, adminController.delUser.post);

module.exports = router;
