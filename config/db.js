// DB Config
const mongoose = require("mongoose");

const user_db = mongoose.createConnection(
  "mongodb+srv://asadbek-admin:12345678910@cluster0.df4z3jv.mongodb.net/user"
);

// user -> db
// --- users -> table
// --- doctors -> table

module.exports = { user_db };
