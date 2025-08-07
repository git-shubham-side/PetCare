const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const User = require("./models/login.js"); //User Database
const Hospital = require("./models/hospitals.js"); //Hospital database
const PORT = 3000;
const dotenv = require("dotenv").config();
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
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
const methodOverride = require("method-override");
app.use(methodOverride("_method"));
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
    res.render("login");
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
  // console.log(id);
  try {
    let user = await User.findById(id);
    // console.log(user);
    const pet = user;
    res.render("profile", { pet });
  } catch (err) {
    console.log("User Not Found", err);
  }
});

//Edit Profile GET
app.get("/edit-profile/:id", async (req, res) => {
  let id = req.params.id;
  let pet = await User.findById(id);
  // console.log(user);
  res.render("edit-profile", { pet });
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
    district,
    state,
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
      district: district,
      state: state,
    });
    console.log("user Updated");
    res.redirect("/dashboard");
  } catch (err) {
    console.log(err);
  }
});

//Delete Profile -------------------////////////////////////////  Remaining
app.delete("/delete-profile/:id", async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, {
      $unset: {
        ownerName: "",
        phone: "",
        address: "",
        petName: "",
        breed: "",
        age: "",
        gender: "",
        species: "",
        color: "",
        dateOfBirth: "",
        responsibleVet: "",
        medicalHistory: "",
        photo: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
      },
    }).then((res) => {
      console.log("User Deleted");
    });

    let pet = await User.findById(req.params.id);
    res.render("profile.ejs", { pet });
  } catch (err) {
    console.log(err);
  }
});

// -------------------------------------------------------  Hospitals ----------------------------

//Hosptial Finding Route
app.get("/hospitals", async (req, res) => {
  try {
    let hospital = await Hospital.find({});
    res.render("hospitals.ejs", { hospital });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internel error");
  }
});
app.post("/hospitals/find", async (req, res) => {
  let { district } = req.body;
  try {
    let hospital = await Hospital.find({ dist: district });
    res.render("hospitals.ejs", { hospital });
  } catch (err) {
    console.log(err);
    res.status(500).send("Internel error");
  }
  console.log(req.body);
});

//Animal Info Route
app.get("/animal-info/cow-care", (req, res) => {
  res.render("cow-care.ejs");
});
app.get("/animal-info/buffalo-care", (req, res) => {
  res.render("buffalo-care.ejs");
});
app.get("/animal-info/dog-care", (req, res) => {
  res.render("dog-care.ejs");
});
app.get("/animal-info/cat-care", (req, res) => {
  res.render("cat-care.ejs");
});
app.get("/animal-info/goat-care", (req, res) => {
  res.render("goat-care.ejs");
});
app.get("/animal-info/birds-care", (req, res) => {
  res.render("birds-care.ejs");
});

//Snake Rescue
app.get("/petcare/snake-rescue", (req, res) => {
  res.render("snake-rescue.ejs");
});

//Error Handling Middleware
// app.use((err, req, res, next) => {});
app.listen(PORT || process.env.PORT, () => {
  console.log("Server is running!");
});
