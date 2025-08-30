const mongoose = require("mongoose");

const breedSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  marathi_desc: {
    type: String,
  },
  cat: {
    type: String,
  },
});

const breed = mongoose.model("breed", breedSchema);
module.exports = breed;
