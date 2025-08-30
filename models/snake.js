const mongoose = require("mongoose");

const snake_rescue = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 100,
    trim: true,
  },
  city: {
    type: String,
    maxLength: 100,
    required: true,
    trim: true,
  },
  area: {
    type: String,
    maxLength: 100,
    trim: true,
  },
  contact: {
    type: String,
    maxLength: 20,
    unique: true,
    trim: true,
  },
});

const snakerescue = mongoose.model("snakerescue", snake_rescue);
module.exports = snakerescue;
