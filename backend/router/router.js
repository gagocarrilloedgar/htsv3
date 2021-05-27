const user = require("./user.routes");
const router = require("express").Router;

router.use("/user", user);

module.exports = router;
