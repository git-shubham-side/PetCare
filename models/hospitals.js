const mongoose = require("mongoose");

const hospitalSchema = new mongoose.Schema({
  hospitalName: {
    type: String,
    default: "N/A"
  },
  hospitalType: {
    type: String,
    default: "N/A" // e.g., "Government" or "Private"
  },
  dist: {
    type: String,
    default: "N/A"
  },
  taluka: {
    type: String,
    default: "N/A"
  },
  address: {
    type: String,
    default: "N/A"
  },
  longitude: {
    type: Number,
    default: 0
  },
  latitude: {
    type: Number,
    default: 0
  },
  contact: {
    type: String, // Supports +91 format
    default: "N/A"
  },
  email: {
    type: String,
    default: "N/A"
  },
  services: {
    type: [String], // Array for multiple services
    default: ["N/A"]
  },
  opening_hours: {
    type: String,
    default: "N/A"
  },
  website: {
    type: String,
    default: "N/A"
  }
});

const Hospital=mongoose.model("Hospital", hospitalSchema);
module.exports = Hospital;
