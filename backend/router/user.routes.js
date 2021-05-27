const controller = require("../controller/user.controller");
const router = require("express").Router;

router.post("/", controller.add);

router.get("/:id", controller.find);

router.put("/", controller.update);

router.delete("/", controller.delete);

module.exports = router;
