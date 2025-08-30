const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const User = require("./models/login.js"); //User Database
const Hospital = require("./models/hospitals.js"); //Hospital database
const snakerescue = require("./models/snake.js"); // Snake Rescue Database
const breed = require("./models/breeds.js"); //Breed Data
const PORT = 3000;
const dotenv = require("dotenv").config();
const path = require("path");
app.use(express.static(path.join(__dirname, "public")));
// Connect MongoDB
async function main() {
  try {
    await mongoose.connect(process.env.MONGOOSE);
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
  res.render("Signup/signup");
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
  res.render("Login/login");
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
    res.render("Profile/profile", { pet });
  } catch (err) {
    console.log("User Not Found", err);
  }
});

//Edit Profile GET
app.get("/edit-profile/:id", async (req, res) => {
  let id = req.params.id;
  let pet = await User.findById(id);
  // console.log(user);
  res.render("Profile/edit-profile", { pet });
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

//--------------------------------Animal Info Routes

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

//------------------------------Snake Rescue
app.get("/petcare/snake-rescue", async (req, res) => {
  try {
    let data = await snakerescue.find({});
    res.render("snake-rescue.ejs", { data });
  } catch (err) {
    console.log(err);
  }
});
app.post("/petcare/find", async (req, res) => {
  let { city } = req.body;
  try {
    if (city === "All") {
      let data = await snakerescue.find({});
      res.render("snake-rescue.ejs", { data });
    } else {
      let data = await snakerescue.find({ city: city });
      res.render("snake-rescue.ejs", { data });
    }
  } catch (err) {
    console.log(err);
  }
});

//-------------Book Appoitment----------

app.get("/hospitals/appointment/:id", (req, res) => {
  res.render("appoitment.ejs");
});

//  Cow
app.get("/animal-info/cow-breeds", async (req, res) => {
  try {
    const breeds = await breed.find({ cat: "cow" });
    res.render("cow-breeds", { breeds });
  } catch (err) {
    console.log(err);
  }
});

//Buffalo
app.get("/animal-info/buffalo-breeds", async (req, res) => {
  try {
    const breeds = await breed.find({ cat: "buffalo" });
    res.render("buffalo-breed", { breeds });
  } catch (err) {
    console.log(err);
  }
});
//Dog
app.get("/animal-info/dog-breeds", async (req, res) => {
  try {
    const breeds = await breed.find({ cat: "dog" });
    res.render("dog-breed", { breeds });
  } catch (err) {
    console.log(err);
  }
});
//Cat
app.get("/animal-info/cat-breeds", async (req, res) => {
  try {
    const breeds = await breed.find({ cat: "cat" });
    res.render("cat-breed", { breeds });
  } catch (err) {
    console.log(err);
  }
});
//Birds
app.get("/animal-info/birds-breeds", async (req, res) => {
  try {
    const breeds = await breed.find({ cat: "bird" });

    res.render("bird-breed", { breeds });
  } catch (err) {
    console.log(err);
  }
});
//Goat Care
app.get("/animal-info/goat-breeds", async (req, res) => {
  try {
    const breeds = await breed.find({ cat: "goat" });

    res.render("goat-breed", { breeds });
  } catch (err) {
    console.log(err);
  }
});

app.get("/rescue-teams", (req, res) => {
  const rescueTeams = [
    { name: "Nanded Animal Rescue", location: "Nanded", phone: "9876543210" },
    { name: "Mumbai Pashu Seva", location: "Mumbai", phone: "9123456780" },
    { name: "Pune Animal Help", location: "Pune", phone: "9988776655" },
    { name: "Nagpur Animal Aid", location: "Nagpur", phone: "9012345678" },
    {
      name: "Aurangabad Rescue Force",
      location: "Aurangabad",
      phone: "8765432109",
    },
  ];
  res.render("rescue-teams", { rescueTeams });
});

//Error Handling Middleware
// app.use((err, req, res, next) => {});
app.listen(PORT || process.env.PORT, () => {
  console.log("Server is running!");
});
