const controller = require("../controller/user.controller");
const express = require("express");
const router = express.Router();

router.get("/:id", controller.find);

router.post("/", controller.add);

module.exports = router;
