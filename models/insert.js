const mongoose = require("mongoose");
const Hospital = require("../models/hospitals.js"); // your schema file
async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/profile");
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
  }
}
main();

const hospitals = [
  //Parbhani
  {
    hospitalName: "College of Veterinary and Animal Sciences, Parbhani",
    hospitalType: "Government",
    dist: "Parbhani",
    taluka: "",
    address:
      " Inside campus, Vasantrao Naik Marathwada Krishi Vidyapeeth, Maharashtra 431402",
    longitude: 19.25382376304364,
    latitude: 76.7771012252274,
    contact: "024522-26188",
    email: "",
    services: ["Animal College", "Animal Hospital", "Surgeries", "Vaccination"],
    opening_hours: "Mon-Sat: 9:15 AM to 6:15 PM Sunday Closed.",
    website: "https://covaspbn.co.in/",
  },
  {
    hospitalName: "Anvi Pet Clinic & Pet Shop",
    hospitalType: "Private",
    dist: "Parbhani",
    taluka: "",
    address:
      "Aryanandi Chowk, Vikas Nagar, Karegaon Road, Gajanan Nagar-431401",
    longitude: 19.259375879605038,
    latitude: 76.79357653808391,
    contact: "79471-85680",
    email: "",
    services: ["top-notch treatments", "Surgeries"],
    opening_hours: "",
    website: "",
  },
  {
    hospitalName: "Parbhani Pet Clinic",
    hospitalType: "Private",
    dist: "Parbhani",
    taluka: "",
    address:
      "Jagruti complx, Basmat Rd, near HDFC bank, Vivek Nagar, Acharya Nagar, Parbhani, Maharashtra 431401",
    longitude: 19.253931626833367,
    latitude: 76.7909608245924,
    contact: "82080-85071",
    email: "",
    services: ["wide range of pet treatments", "Surgeries", "Routine Checkups"],
    opening_hours: "Open 24/7",
    website: "",
  },
  {
    hospitalName: "Veteran Pet Clinic and Veterinary Pathology Lab.",
    hospitalType: "Private",
    dist: "Parbhani",
    taluka: "",
    address:
      " Veteran Pet Clinic and Veterinary Pathology Lab infront of Police Petrol Pump, Road, Nanalpeth, Parbhani, Maharashtra 431401",
    longitude: 19.272391244385805,
    latitude: 76.76828789575667,
    contact: "94218-75259",
    email: "",
    services: ["Routine Checkup", "Pathology Lab"],
    opening_hours: "Mon-Sat: 6:00 AM to 9:00 PM Sunday Closed",
    website: "",
  },
  //Latur
  {
    hospitalName: "Shree Pet Dog Clinic",
    hospitalType: "Private",
    dist: "Latur",
    taluka: "",
    address:
      "datta temple campus, Ausa Rd, Ram Nagar, Latur, Maharashtra 413531",
    longitude: 18.38614738121386,
    latitude: 76.56002088224271,
    contact: "73832-59803",
    email: "",
    services: [
      "Veterinary Consultation",
      "Veterinary Services",
      "General Check up",
      "Veterinary Physician",
      "Grooming",
    ],
    opening_hours: "Mon-Sat: 10:00 Am to 2:00 PM - Sunday Closed",
    website: "",
  },
  {
    hospitalName: "Utkarsh-Animal Hospital",
    hospitalType: "Private",
    dist: "Latur",
    taluka: "",
    address: "Near to Sai Tourist Point, Sai, Arvi-413512 latur",
    longitude: 18.468777960534265,
    latitude: 76.54911269388235,
    contact: "89767-49101",
    email: "",
    services: ["treatments", "Surgeries"],
    opening_hours: "Mon-Sat: 9:00 AM to 6:30 PM -- Sunday: 5:30 AM to 12:00 AM",
    website: "https://www.utkarshglobalfoundation.org/animalwelfare",
  },
  //Sambhaji nagar
  {
    hospitalName: "Municipal Corporation Veterinary Hospital",
    hospitalType: "Government",
    dist: "Sambhaji-nagar",
    address:
      "V9M3+HC9, Rahemania Colony, Kiradpura, Chhatrapati Sambhajinagar, Maharashtra 431003",
    contact: " 0240-230-1354",
    email: "/",
    services: ["Routine Checkup", "Sterlization", "Vaccination"],
    opening_hours:
      "09:00 AM to 01:00 PM || 03:00 PM to 05:00 PM - Sunday closed",
    website: "",
  },
  {
    hospitalName: "Dr Ameet’s Animal Clinic of Chhatrapati Sambhajinagar",
    hospitalType: "Private",
    dist: "Sambhaji-nagar",
    taluka: "",
    address:
      "Shop No 6, Kalyani-Gurumukh Heights, Eknath Nagar Rd, near Blackstone Cafe, near S.S.C Board, New Usmanpura, Chhatrapati Sambhajinagar, Maharashtra 431005",
    longitude: 0,
    latitude: 0,
    contact: "84859-47938",
    email: "",
    services: [
      "Emergency Service",
      "Vetenary Physician",
      "Surgery",
      "Annual-Vaccination",
      "Anti-Tick Management",
    ],
    opening_hours: "Mon-Sun: 11:00 AM to 9:00 PM",
    website: "",
  },
  {
    hospitalName: "Dr. Bhadekar - Veterinarian",
    hospitalType: "Private",
    dist: "Sambhaji-nagar",
    taluka: "",
    address:
      "Jay Nagar, Jyoti Nagar, New Usmanpura, Chhatrapati Sambhajinagar, Maharashtra 431005",
    longitude: 0,
    latitude: 0,
    contact: "98500-04518",
    email: "",
    services: ["Routine Checkup", "Vaccination"],
    opening_hours: "N/A",
    website: "",
  },
  {
    hospitalName: "Naksh Pet Clinic",
    hospitalType: "Private",
    dist: "Sambhaji-nagar",
    address:
      "Shop no,6, Aman Complex, Beed Bypass Rd, Near MIT College, Disha Nagari, Chhatrapati Sambhajinagar, Maharashtra 431001",
    contact: "98815-71313",
    email: "",
    services: [
      "Low Cost Pet Services",
      "Home Visit",
      "Surgery",
      "Pet-Food",
      "Treatment",
    ],
    opening_hours: "Mon-Sat: 11:00 AM to 02:00 PM || 06:00PM 09:00PM",
    website: "",
  },
  //Nashik
  {
    hospitalName: "Government Veterinary Hospital, Nashik",
    hospitalType: "Government",
    dist: "Nashik",
    address:
      " Ashok Stambh Cir, Ashok Stambh, Raviwar Karanja, Panchavati, Nashik, Maharashtra 422002",
    contact: "",
    email: "",
    services: ["Surgery", "Vaccination", "Deworming"],
    opening_hours:
      "Mon-Sat: 09:00 AM to 01:00 PM || 01:30 PM to 04:30 PM Sunday Closed",
    website: "",
  },
  {
    hospitalName: "Nashik Pet Hospital",
    hospitalType: "Private",
    dist: "Nashik",
    address:
      "Shop No.18, Pet Hospital Samrat Nucleus, Kathe Galli - Mumbai Naka link Rd, Bhabha Nagar, Mumbai Naka, Mirajkar Nagar, Dr.Homi Bhabha Nagar, Nashik, Maharashtra 422011",
    contact: "91300-09832",
    email: "/",
    services: ["Veterinary", "Pet Boarding", "Grooming"],
    opening_hours: "Opens 24 Hrs",
    website: "",
  },
  {
    hospitalName: "Pets Care Hospital",
    hospitalType: "Private",
    dist: "Nashik",
    address:
      "Shop No.B-2,Siddhivinayak Park,, Ashoka Marg, Siddhivinayak Park, Ganesh Baba Nagar, Nashik, Maharashtra 422011",
    contact: "98225-44502",
    email: "/",
    services: ["Vet Checkup", "Vaccination", "Grooming", "Pet-Foods"],
    opening_hours: "Mon-Sun: 09:30 AM to 01:00 PM || 04:00 PM to 08 PM ",
    website: "",
  },
  {
    hospitalName: "NOMADICS- Small Animal Clinic",
    hospitalType: "Private",
    dist: "Nashik",
    address:
      "Amrutdham, Nr Litel Heart Eng Medium School, Aurangabad Road, Bidi Kamgar Colony-422006",
    contact: "94234-52885",
    email: "",
    services: [
      "Veterinary Surgeries",
      "Orthopedic Surgery",
      "Major and Minor Surgery",
    ],
    opening_hours: "Mon-Sun: 09:30 AM to 09:30 PM",
    website: "",
  },
  //Pune
  {
    hospitalName: "Government Veterinary Hospital, Aundh",
    hospitalType: "Government",
    dist: "Pune",
    address: "Near Pune University, Aundh, Pune, Maharashtra 411007",
    contact: "",
    email: "",
    services: ["Vaccinations", "General Checkup", "Minor Surgeries"],
    opening_hours: "9:00 AM - 5:00 PM",
    website: "",
  },
  {
    hospitalName: "Petaegis Veterinary Hospital",
    hospitalType: "Private",
    dist: "Pune",
    address:
      "Sr No‑19, Sinhgad Rd, behind Ranka Jeweller, Vitthalwadi, Pune, Maharashtra 411041",
    contact: "+91 99210 82172",
    email: "",
    services: [
      "Diagnostics",
      "Surgeries",
      "Emergency Care",
      "Grooming",
      "Pharmacy",
    ],
    opening_hours: "24/7",
    website: "https://petaegisveterinaryhospital.com",
  },
  {
    hospitalName: "Vetic Pet Clinic - Aundh",
    hospitalType: "Private",
    dist: "Pune",
    address: "Near Bremen Chowk, Aundh, Pune, Maharashtra",
    contact: "+91 90218 00050",
    email: "",
    services: [
      "Consultations",
      "Vaccinations",
      "Surgeries",
      "Diagnostics",
      "24/7 Emergency",
    ],
    opening_hours: "24/7",
    website: "https://vetic.in",
  },
  {
    hospitalName: "Dr. Gorhe's Pet Clinic",
    hospitalType: "Private",
    dist: "Pune",
    address: "Near Paud Road, Kothrud, Pune, Maharashtra",
    contact: "+91 98228 35060",
    email: "",
    services: [
      "General Checkup",
      "Ultrasound",
      "Dentistry",
      "Grooming",
      "Surgeries",
    ],
    opening_hours: "10:00 AM - 8:00 PM",
    website: "",
  },
  {
    hospitalName: "Tailsmen Veterinary Specialty",
    hospitalType: "Private",
    dist: "Pune",
    address: "Opp. Euro School, Baner, Pune, Maharashtra",
    contact: "+91 97644 44414",
    email: "",
    services: [
      "Specialty Surgeries",
      "Diagnostics",
      "Emergency Care",
      "Wellness Treatments",
    ],
    opening_hours: "9:00 AM - 9:00 PM",
    website: "",
  },
  {
    hospitalName: "Companion Pet Clinic & Surgical Centre",
    hospitalType: "Private",
    dist: "Pune",
    address: "Katraj Chowk, Pune, Maharashtra",
    contact: "+91 98231 42252",
    email: "",
    services: ["Surgeries", "Diagnostics", "Vaccinations", "Consultations"],
    opening_hours: "10:00 AM - 8:00 PM",
    website: "",
  },
  //Mumbai
  {
    hospitalName: "Dr. Dave's Pet Clinic & Surgery Centre",
    hospitalType: "Private",
    dist: "Mumbai",
    address:
      "Avirahi Homes Bldg No.3, near Mandpeshwar Metro Station, Link Road, IC Colony, Borivali West, Mumbai, Maharashtra 400103",
    contact: "",
    email: "",
    services: [
      "Medical care",
      "X‑Ray",
      "Ultrasound",
      "Dental extraction",
      "Surgeries including orthopedics",
      "Grooming",
    ],
    opening_hours: "",
    website: "",
  },
  {
    hospitalName: "Happy Tails Veterinary Specialty",
    hospitalType: "Private",
    dist: "Mumbai",
    address:
      "Shop No.1 & 2, Mangal Smruti, 14th Road, Khar West, Mumbai, Maharashtra 400052",
    contact: "",
    email: "",
    services: [
      "Dermatology",
      "Oncology",
      "Diagnostics",
      "Surgery",
      "Internal medicine",
      "Dental care",
    ],
    opening_hours: "",
    website: "",
  },
  {
    hospitalName: "Paw Prints Veterinary Clinic",
    hospitalType: "Private",
    dist: "Mumbai",
    address:
      "Shop No.8, Ground Floor, Vaibhav CHS, Shastri Nagar Road, Goregaon West, Mumbai, Maharashtra 400104",
    contact: "",
    email: "",
    services: [
      "Radiology",
      "Lab Testing",
      "Ultrasound",
      "Vaccination",
      "Microchipping",
      "Surgery",
    ],
    opening_hours: "",
    website: "",
  },
  {
    hospitalName: "Petbliss Veterinary Clinic",
    hospitalType: "Private",
    dist: "Mumbai",
    address:
      "New Krishna Cottage, Hanuman Road, near Hanuman Mandir, Vile Parle East, Mumbai, Maharashtra 400057",
    contact: "",
    email: "",
    services: [
      "General checks",
      "Vaccination",
      "Diagnostic labs",
      "Minor surgeries",
    ],
    opening_hours: "",
    website: "",
  },
  {
    hospitalName: "Urban Paws Pet Clinic",
    hospitalType: "Private",
    dist: "Mumbai",
    address:
      "Shop No.3, Naval Ghar, Opp. St. Elias High School, Dr Ambedkar Road, Khar West, Mumbai, Maharashtra 400052",
    contact: "",
    email: "",
    services: ["Vaccinations", "Surgery", "Diagnostics", "Wellness care"],
    opening_hours: "",
    website: "",
  },
  {
    hospitalName: "Dr. Amol's Small Animal Surgery & Health Care",
    hospitalType: "Private",
    dist: "Mumbai",
    address:
      "Shop A‑9, RTO Road, Sahayog Nagar, Four Bungalows, Andheri West, Mumbai, Maharashtra 400053",
    contact: "+91 63763 29706",
    email: "",
    services: [
      "Surgery",
      "Spay/Neuter",
      "Dental care",
      "Emergency vet",
      "Boarding",
      "Grooming",
    ],
    opening_hours: "10:00 AM – 9:00 PM",
    website: "",
  },
];

// Insert data
Hospital.insertMany(hospitals)
  .then(() => {
    console.log("Hospital data inserted successfully!");
    mongoose.connection.close();
  })
  .catch((err) => console.log(err));
