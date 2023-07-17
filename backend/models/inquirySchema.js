// //second schema after login
// const mongoose = require("mongoose");
// // const db = require("./connection");

const mongoose = require("mongoose");

const inquirySchema = new mongoose.Schema({
  userId: String,
  inquiry: String,
  checkIn: String,
  checkOut: String,
  room: String,
  date: String,
  comment: String,
});

module.exports = mongoose.model("Inquiry", inquirySchema);