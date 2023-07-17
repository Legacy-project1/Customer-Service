const mongoose = require("mongoose");
const db = require("./connection");

const User = mongoose.model("user", {
  // username: String,
  // email: String,
  // password: String,
  // phone: String,
 username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  phone: {
    type: String,
    default: "user",
  },
});

module.exports = User;
