const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  id: Number,
  img: String,
  name: String,
  message: String,
  createDate: Date,
});

module.exports = taskSchema;
