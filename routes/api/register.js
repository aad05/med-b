const { Router } = require("express");
const {
  sign_in,
  sign_up,
  edit_profile,
  delete_profile,
} = require("../../controller/api/register");

const router = Router();

// Login
router.post("/sign-in", sign_in);

// Login
router.post("/sign-up", sign_up);

// Edit
router.put("/edit-profile", edit_profile);

// Delete
router.delete("/delete-profile", delete_profile);

module.exports = router;

// X webpack require
// default webpack import/export
