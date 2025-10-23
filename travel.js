const travelData = {
  "Jammu and Kashmir": {
    bestTime: "March to October (for valleys), December to February (for snow sports).",
    transport: ["Srinagar Airport", "Jammu Tawi Railway Station", "National Highway 44"],
    destinations: ["Srinagar", "Gulmarg", "Pahalgam", "Leh"],
    tips: ["Carry warm clothes", "Pre-book hotels during peak season", "Check weather updates before traveling"]
  },
  "Himachal Pradesh": {
  bestTime: "March to June, September to November, December to February (for snow sports).",
  transport: ["Shimla Airport", "Kangra Airport", "Kalka–Shimla Toy Train", "National Highways 3, 5, 154"],
  destinations: ["Shimla", "Manali", "Dharamshala", "Spiti Valley"],
  tips: ["Carry woolens", "Avoid monsoon travel due to landslides", "Pre-book hotels in peak season"]
},
"Uttarakhand": {
  bestTime: "March to June (summer), September to November (autumn), December to February (snow in hills).",
  transport: ["Dehradun Jolly Grant Airport", "Haridwar Railway Station", "National Highways 7, 109, 534"],
  destinations: ["Dehradun", "Mussoorie", "Nainital", "Rishikesh", "Kedarnath", "Badrinath"],
  tips: ["Carry woolens for hill stations", "Check weather during monsoon", "Book Char Dham Yatra in advance"]
},
"Haryana": {
  bestTime: "October to March (pleasant weather).",
  transport: ["Chandigarh Airport", "Ambala Cantt Railway Station", "National Highways 44, 48, 9"],
  destinations: ["Kurukshetra", "Pinjore Gardens", "Sultanpur Bird Sanctuary", "Gurugram"],
  tips: ["Explore traditional Haryanvi cuisine", "Best explored via road trips", "Plan Gurgaon visits on weekdays to avoid rush"]
},
"Rajasthan": {
  bestTime: "October to March (ideal for desert and forts).",
  transport: ["Jaipur International Airport", "Jodhpur Railway Station", "National Highways 8, 62, 52"],
  destinations: ["Jaipur", "Udaipur", "Jaisalmer", "Jodhpur"],
  tips: ["Carry light cottons for daytime", "Book desert camps early", "Stay hydrated in summers"]
},

"Gujarat": {
  bestTime: "October to February (pleasant winter).",
  transport: ["Ahmedabad Airport", "Vadodara Railway Station", "National Highways 48, 947"],
  destinations: ["Gir National Park", "Somnath", "Dwarka", "Statue of Unity"],
  tips: ["Book Gir safari in advance", "Try local Gujarati thali", "Navratri is best for cultural vibes"]
},

"Madhya Pradesh": {
  bestTime: "October to March (cool season).",
  transport: ["Bhopal Airport", "Indore Railway Station", "National Highways 44, 52"],
  destinations: ["Khajuraho", "Bandhavgarh", "Ujjain", "Sanchi Stupa"],
  tips: ["Ideal for wildlife lovers", "Carry sunscreen for summer", "Respect heritage sites"]
},

"Bihar": {
  bestTime: "October to March (cool season).",
  transport: ["Patna Airport", "Gaya Railway Station", "National Highways 31, 19"],
  destinations: ["Bodh Gaya", "Nalanda", "Vaishali", "Patna Sahib"],
  tips: ["Dress modestly at religious sites", "Try local litti-chokha", "Visit during Chhath festival for cultural experience"]
},

"Jharkhand": {
  bestTime: "October to March (best season).",
  transport: ["Ranchi Airport", "Dhanbad Railway Station", "National Highways 33, 75"],
  destinations: ["Ranchi", "Netarhat", "Deoghar", "Betla National Park"],
  tips: ["Carry light woolens in winter", "Avoid remote travel in monsoon", "Great for nature lovers"]
},

"West Bengal": {
  bestTime: "October to March (festive & pleasant).",
  transport: ["Kolkata Airport", "Howrah Railway Station", "National Highways 16, 34"],
  destinations: ["Kolkata", "Darjeeling", "Sundarbans", "Kalimpong"],
  tips: ["Durga Puja is the best time to visit", "Carry warm clothes for Darjeeling", "Try Bengali sweets"]
},

"Odisha": {
  bestTime: "October to March (cool & dry).",
  transport: ["Bhubaneswar Airport", "Puri Railway Station", "National Highways 16, 59"],
  destinations: ["Puri Jagannath Temple", "Konark Sun Temple", "Chilika Lake"],
  tips: ["Respect temple customs", "Best explored during Rath Yatra", "Carry sunscreen for coastal trips"]
},

"Chhattisgarh": {
  bestTime: "October to February (mild winter).",
  transport: ["Raipur Airport", "Bilaspur Railway Station", "National Highways 30, 44"],
  destinations: ["Chitrakote Falls", "Barnawapara Sanctuary", "Sirpur", "Raipur"],
  tips: ["Great for eco-tourism", "Avoid forests after dark", "Best for offbeat travelers"]
},

"Maharashtra": {
  bestTime: "October to March (pleasant weather).",
  transport: ["Mumbai Airport", "Pune Railway Station", "National Highways 48, 66"],
  destinations: ["Mumbai", "Ajanta-Ellora Caves", "Mahabaleshwar", "Shirdi"],
  tips: ["Monsoon is best for hill stations", "Pre-book trains for Shirdi", "Try local street food"]
},

"Telangana": {
  bestTime: "October to March (ideal weather).",
  transport: ["Hyderabad Airport", "Secunderabad Railway Station", "National Highways 44, 65"],
  destinations: ["Charminar", "Golconda Fort", "Warangal", "Ramoji Film City"],
  tips: ["Best time during Hyderabad festivals", "Carry water during summer", "Try Hyderabadi biryani"]
},

"Andhra Pradesh": {
  bestTime: "November to March (cool season).",
  transport: ["Vijayawada Airport", "Visakhapatnam Railway Station", "National Highways 16, 65"],
  destinations: ["Tirupati Temple", "Araku Valley", "Visakhapatnam", "Amaravati"],
  tips: ["Pre-book Tirupati darshan", "Carry cotton clothes", "Try coastal seafood"]
},

"Karnataka": {
  bestTime: "October to February (pleasant winter).",
  transport: ["Bengaluru Airport", "Mysuru Railway Station", "National Highways 48, 275"],
  destinations: ["Bengaluru", "Hampi", "Coorg", "Mysuru Palace"],
  tips: ["Mysuru Dasara is must-see", "Carry raincoat in monsoon", "Best mix of heritage & nature"]
},

"Kerala": {
  bestTime: "September to March (cool & dry).",
  transport: ["Kochi Airport", "Trivandrum Railway Station", "National Highways 66, 544"],
  destinations: ["Alleppey Backwaters", "Munnar", "Kochi", "Kumarakom"],
  tips: ["Book houseboats in advance", "Avoid heavy monsoon for travel", "Try Ayurvedic spa treatments"]
},

"Tamil Nadu": {
  bestTime: "October to March (cool season).",
  transport: ["Chennai Airport", "Madurai Railway Station", "National Highways 44, 32"],
  destinations: ["Chennai", "Madurai", "Kodaikanal", "Rameswaram"],
  tips: ["Respect temple dress codes", "Carry light cottons", "Try South Indian filter coffee"]
},

"Sikkim": {
  bestTime: "March to June, September to November.",
  transport: ["Bagdogra Airport", "New Jalpaiguri Railway Station", "National Highway 10"],
  destinations: ["Gangtok", "Nathula Pass", "Lachung", "Pelling"],
  tips: ["Carry permits for restricted areas", "Pack warm clothes", "Avoid monsoon landslides"]
},

"Arunachal Pradesh": {
  bestTime: "October to April (pleasant season).",
  transport: ["Lilabari Airport", "Naharlagun Railway Station", "National Highway 13"],
  destinations: ["Tawang", "Ziro Valley", "Bomdila", "Itanagar"],
  tips: ["ILP permit required", "Carry warm clothing", "Avoid remote travel in monsoon"]
},

"Assam": {
  bestTime: "October to April (cool & festive).",
  transport: ["Guwahati Airport", "Guwahati Railway Station", "National Highways 27, 37"],
  destinations: ["Kaziranga National Park", "Majuli Island", "Guwahati", "Sivasagar"],
  tips: ["Book Kaziranga safari early", "Bihu is the best time to visit", "Carry insect repellent"]
},

"Nagaland": {
  bestTime: "October to May (pleasant weather).",
  transport: ["Dimapur Airport", "Dimapur Railway Station", "National Highway 29"],
  destinations: ["Kohima", "Dzukou Valley", "Mon", "Hornbill Festival"],
  tips: ["Attend Hornbill Festival", "Respect local traditions", "ILP permit required"]
},

"Meghalaya": {
  bestTime: "October to April (best season).",
  transport: ["Shillong Airport", "Guwahati Railway Station", "National Highway 6"],
  destinations: ["Shillong", "Cherrapunji", "Mawsynram", "Dawki"],
  tips: ["Carry umbrella in monsoon", "Try local Khasi cuisine", "Book homestays for authentic experience"]
},

"Manipur": {
  bestTime: "October to March (pleasant season).",
  transport: ["Imphal Airport", "Dimapur Railway Station", "National Highway 2"],
  destinations: ["Imphal", "Loktak Lake", "Kangla Fort", "Keibul Lamjao National Park"],
  tips: ["ILP required", "Try Manipuri dance performances", "Avoid travel after dark in remote areas"]
},

"Mizoram": {
  bestTime: "October to March (ideal time).",
  transport: ["Lengpui Airport", "Silchar Railway Station", "National Highway 54"],
  destinations: ["Aizawl", "Champhai", "Murlen National Park"],
  tips: ["ILP required", "Respect local customs", "Avoid heavy monsoon travel"]
},

"Tripura": {
  bestTime: "October to March (cool season).",
  transport: ["Agartala Airport", "Agartala Railway Station", "National Highway 8"],
  destinations: ["Ujjayanta Palace", "Neermahal", "Sepahijala Sanctuary", "Tripurasundari Temple"],
  tips: ["Ideal for cultural tourism", "Respect temple traditions", "Try local bamboo handicrafts"]
},

"Goa": {
  bestTime: "November to February (peak beach season).",
  transport: ["Goa Airport (Dabolim)", "Madgaon Railway Station", "National Highways 66, 748"],
  destinations: ["Baga Beach", "Fort Aguada", "Dudhsagar Falls", "Old Goa Churches"],
  tips: ["Book hotels early in December", "Best for nightlife & beaches", "Rent a scooter to explore"]
},
"Chandigarh": {
  bestTime: "October to March (pleasant winter).",
  transport: ["Chandigarh Airport", "Chandigarh Railway Station", "National Highways 5, 7"],
  destinations: ["Rock Garden", "Sukhna Lake", "Rose Garden", "Capitol Complex"],
  tips: ["Ideal for weekend trips", "Carry light woolens in winter", "Best explored by auto or rented bicycle"]
},


};
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

document.addEventListener("DOMContentLoaded", () => {
  const stateName = getQueryParam("state");
  const stateEl = document.getElementById("stateName");
  stateEl.textContent = stateName ? `Travel Guide for ${stateName}` : "Travel Guide";

  const stateData = travelData[stateName];

  if (stateData) {
    document.getElementById("bestTime").textContent = stateData.bestTime;

    document.getElementById("transportOptions").innerHTML =
      stateData.transport.map(t => `<li>${t}</li>`).join("");

    document.getElementById("destinations").innerHTML =
      stateData.destinations.map(d => `<li>${d}</li>`).join("");

    document.getElementById("travelTips").innerHTML =
      stateData.tips.map(t => `<li>${t}</li>`).join("");
  } else {
    document.querySelector("main").innerHTML =
      `<p style="font-size:1.2rem;">Sorry, we don't have travel info for <strong>${stateName}</strong> yet.</p>`;
  }
});
