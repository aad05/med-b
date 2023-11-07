const { Router } = require("express");

const router = Router();

router.get("/", (_, res) => {
  res.status(200).json({
    message: "success",
    etxraMessage: "Welcome to private api!",
  });
});

module.exports = router;
