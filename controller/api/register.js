const user = require("../../schema/userSchema");
const jwt = require("jsonwebtoken");

// Method: Post; Descriptin: Sign in
const sign_in = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ mesage: "success", extraMessage: "WELCOME TO SIGN-IN" });
  } catch (error) {}
};

// Method: Post; Descriptin: Sign up
const sign_up = async (req, res) => {
  try {
    const createdUser = await user.create({
      username: req.body.username,
      password: req.body.password,
    });

    const token = jwt.sign({ user: createdUser }, "bismillah");

    return res
      .status(200)
      .json({ mesage: "success", token: token, data: createdUser });
  } catch (error) {}
};

// Method: Post; Descriptin: Edit
const edit_profile = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ mesage: "success", extraMessage: "WELCOME TO Edit-Profile" });
  } catch (error) {}
};

// Method: Post; Descriptin: Delete
const delete_profile = async (req, res) => {
  try {
    return res
      .status(200)
      .json({ mesage: "success", extraMessage: "WELCOME TO Delete-Profile" });
  } catch (error) {}
};

module.exports = { sign_in, sign_up, edit_profile, delete_profile };
