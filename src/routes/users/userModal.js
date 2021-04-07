const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  name: String,
  username: String,
  email: String,
  phone: String,
});

module.exports = mongoose.model("users", usersSchema);
