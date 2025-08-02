const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // Login Details
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },

  // Owner Details
  ownerName: {
    type: String,
    default: "",
  },
  phone: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },

  // Pet Details
  petName: {
    type: String,
    default: "",
  },
  breed: {
    type: String,
    default: "",
  },
  age: {
    type: String,
    default: "",
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "NAN"],
    default: "NAN",
  },
  species: {
    type: String,
    default: "",
  },
  color: {
    type: String,
    default: "",
  },
  dateOfBirth: {
    type: Date,
    default: new Date().getFullYear(),
  },
  responsibleVet: {
    type: String,
    default: "",
  },
  medicalHistory: {
    type: String,
    default: "",
  },
  photo: {
    type: String,
    default: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
  },

  role: { type: String, enum: ["user", "admin"], default: "user" },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
module.exports = User;
