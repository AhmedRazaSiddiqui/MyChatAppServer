const mongoose = require("mongoose");

const usersSchema = mongoose.Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String },
  phone: { type: String },
});

module.exports = mongoose.model("users", usersSchema);
