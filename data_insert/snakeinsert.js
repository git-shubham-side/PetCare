const mongoose = require("mongoose");
const snakerescue = require("../models/snake");
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/profile");
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
}
main();

const rescuedata = [
  // Pune

  {
    name: "Sanjubaba",
    city: "Pune",
    area: "Kharadi Bypass",
    contact: "9876543210",
  },
  {
    name: "Aniket Sarpmitra",
    city: "Pune",
    area: "Revenue Colony, University Road",
    contact: "9876543211",
  },
  {
    name: "RESQ Trust",
    city: "Pune",
    area: "Main Office Area",
    contact: "9890999111",
  },
  {
    name: "Saidas Kusal",
    city: "Pune",
    area: "Not Available",
    contact: "9922239695",
  },
  {
    name: "ART Volunteer Team",
    city: "Pune",
    area: "Citywide",
    contact: "9876543212",
  },
  {
    name: "Katraj Snake Park",
    city: "Pune",
    area: "Katraj",
    contact: "9876543213",
  },
  //Mumbai

  {
    name: "SARRP INDIA",
    city: "Mumbai",
    area: "Citywide",
    contact: "7666993322",
  },
  {
    name: "SARRP INDIA (Alt)",
    city: "Mumbai",
    area: "Citywide",
    contact: "9821134056",
  },
  {
    name: "Snake Catcher (Bhandup)",
    city: "Mumbai",
    area: "Bhandup",
    contact: "7710811713",
  },
  {
    name: "Santosh Shinde (Dahisar–Kandivali)",
    city: "Mumbai",
    area: "Dahisar to Kandivali",
    contact: "9769335531",
  },
  {
    name: "Amar Patil (Vasai–Dahisar)",
    city: "Mumbai",
    area: "Vasai to Dahisar",
    contact: "9821814959",
  },
  {
    name: "Omkar Dherekar (Goregaon)",
    city: "Mumbai",
    area: "Goregaon",
    contact: "9833177232",
  },
  {
    name: "Raju Koli (Across Mumbai)",
    city: "Mumbai",
    area: "Citywide",
    contact: "9892379224",
  },
  {
    name: "Pawan Sharma (Mulund–Vikhroli)",
    city: "Mumbai",
    area: "Mulund to Vikhroli",
    contact: "9869780202",
  },
  {
    name: "Nitin Walmiki (South Mumbai)",
    city: "Mumbai",
    area: "South Mumbai",
    contact: "9869933778",
  },
  {
    name: "Sunil (Borivali)",
    city: "Mumbai",
    area: "Borivali West",
    contact: "9930517827",
  },
  //Latur
  {
    name: "Maharashtra Forest Department (Latur / Yedshi Sanctuary)",
    city: "Latur",
    area: "Latur",
    contact: "1962",
  },
  //Nanded
  {
    name: "Deputy Conservator of Forests (Territorial) – Nanded",
    city: "Nanded",
    area: "Near Mahatma Gandhi Statue, Vagirabad Road, Nanded – 431606",
    phone: "024-2-246556",
  },
  //Nashik
  {
    name: "Snake Catcher",
    city: "Nashik",
    area: "Tarwala Nagar, Dindori Road, Panchavati",
    contact: "08805401323",
  },
];

snakerescue
  .insertMany(rescuedata)
  .then(() => {
    console.log("Data Inserted");
  })
  .catch((err) => {
    console.log(err);
  });
