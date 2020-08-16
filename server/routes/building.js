const express = require("express");
const router = express.Router();

const { buildingController } = require("../controller");
import verifyToken from "./middleware/veifyToken";

router.get("/news", buildingController.news.get);

router.get("/info", buildingController.info.get);

// router.post('/', buildingController.post);
router.post("/invest", verifyToken, buildingController.invest.post);

module.exports = router;
