const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const User = require("./models/login.js");

const PORT = 8080;
const dotenv=require('dotenv').config();

// Connect MongoDB
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/profile");
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
}
main();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Session
app.use(
  session({
    secret: "secretKey",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb://127.0.0.1:27017/profile",
    }),
  })
);

//Middleware to protect routes
function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    return next();
  }
  res.redirect("/login");
}

//Index Route
app.get("/", (req, res) => {
  res.redirect("/signup");
});
//signup
app.get("/signup", (req, res) => {
  res.render("signup");
});
//Signup
app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    await User.create({ username, email, password: hashedPassword });
    res.redirect("/login");
  } catch (err) {
    res.status(409).send("User already exists");
  }
});
//Login
app.get("/login", (req, res) => {
  res.render("login");
});
//Login Authentication
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  // console.log(user);
  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.userId = user._id;
    // res.render("dashboard", { user });
    res.redirect("/dashboard");
  } else {
    res.send("Invalid Credentials");
  }
});
// Dashboard route (protected)
app.get("/dashboard", isAuthenticated, async (req, res) => {
  const user = await User.findById(req.session.userId);
  res.render("dashboard", { user });
});

//Profile--------------------------
app.get("/profile/:id", async (req, res) => {
  let id = req.params.id;
  console.log(id);
  try {
    let user = await User.findById(id);
    console.log(user);
    const pet = user;
    res.render("profile", { pet });
  } catch (err) {
    console.log("User Not Found", err);
  }
});

//Edit Profile GET
app.get("/edit-profile/:id", async (req, res) => {
  let id = req.params.id;
  let user = await User.findById(id);
  // console.log(user);
  res.render("edit-profile", { id });
});
// Edit profile POST
app.post("/edit-profile/:id", async (req, res) => {
  let id = req.params.id;
  let {
    Name,
    photo,
    breed,
    gender,
    age,
    species,
    color,
    dateOfBirth,
    responsibleVet,
    medicalHistory,
    owner,
    phone,
    address,
  } = req.body;
  try {
    await User.findByIdAndUpdate(id, {
      petName: Name,
      photo: photo,
      breed: breed,
      gender: gender,
      age: age,
      species: species,
      color: color,
      dateOfBirth: dateOfBirth,
      responsibleVet: responsibleVet,
      medicalHistory: medicalHistory,
      ownerName: owner,
      phone: phone,
      address: address,
    });
    console.log("user Updated");
    res.redirect("/dashboard");
  } catch (err) {
    cosnsole.log(err);
  }
});
app.listen(PORT || process.env.PORT, () => {
  console.log("Server is running!");
});
