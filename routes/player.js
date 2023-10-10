const express = require("express");
const playerControllers = require("../controllers/player")

const router = express.Router();

router.post("/add-data",playerControllers.postPlayerData);

router.post("/get-data",playerControllers.getPlayerData);

router.delete("/edit-data/:id",playerControllers.editPlayerData)





module.exports = router;