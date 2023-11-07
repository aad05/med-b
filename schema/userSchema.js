const mongoose = require("mongoose");
const { user_db } = require("../config/db");

const user_schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  full_name: {
    type: String,
    require: false,
  },
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: false,
  },
  password: {
    type: String,
    require: true,
  },
});

const user = user_db.model("users", user_schema);

module.exports = user;
