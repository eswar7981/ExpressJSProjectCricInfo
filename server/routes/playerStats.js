const express = require("express");
const router = express.Router();

const PlayerStatController = require("../controllers/playersController");


router.get("/searchPlayer/:name", PlayerStatController.SearchPlayer);

router.post("/submitPlayerData", PlayerStatController.SubmitPlayerData);

router.post("/editPlayerInfo/:name", PlayerStatController.editPlayerInfo);

module.exports = router;
