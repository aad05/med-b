const { Router } = require("express");

const router = Router();

router.use("/api", require("./api"));
router.use("/session", require("./session"));

module.exports = router;
