// script.js
// --- State info dataset (expand as needed) ---
const stateInfo = {
  "JK": {
  name: "Jammu and Kashmir",
  capital: "Srinagar (summer), Jammu (winter)",
  population: "≈13M (2023 est.)",
  area: "55,538 km²",
  largestCity: "Srinagar",
  language: ["Urdu (official)", "Kashmiri", "Dogri", "Hindi", "Punjabi", "Gojri", "Pahari", "Balti", "Shina", "Ladakhi"],
  knownFor: [
    "Srinagar – Dal Lake, houseboats, and Mughal gardens",
    "Gulmarg – skiing, cable car (Gondola), and winter sports hub",
    "Pahalgam – Lidder Valley, base for Amarnath Yatra",
    "Sonamarg – ‘Meadow of Gold’, gateway to Zoji La Pass",
    "Jammu – temples including Vaishno Devi shrine",
    "Handicrafts – Pashmina shawls, carpets, papier-mâché",
    "Saffron cultivation in Pampore"
  ],
  festivals: [
    "Eid-ul-Fitr and Eid-ul-Adha",
    "Baisakhi (harvest festival in Jammu)",
    "Navratri (especially famous for Vaishno Devi pilgrimage)",
    "Tulip Festival (Srinagar Tulip Garden)",
    "Losar (celebrated by Ladakhi Buddhists)"
  ],
  agriculture: [
    "Saffron (world-famous from Pampore)",
    "Apples",
    "Walnuts",
    "Almonds",
    "Rice",
    "Maize",
    "Wheat",
    "Barley"
  ],
  economy: {
    gdp: "≈$30B (2023 est.)",
    industries: [
      "Tourism (hill stations, religious pilgrimage, winter sports)",
      "Horticulture (apples, walnuts, saffron, almonds)",
      "Handicrafts (pashmina, carpets, wood carving, papier-mâché)",
      "Sheep rearing and wool industry",
      "Hydropower potential"
    ]
  },
  culture: {
    folkDances: ["Rouf", "Chakri", "Bhand Pather", "Dogri Nati"],
    music: "Traditional Kashmiri folk songs, Sufi music, Chakri, and Rabab-based tunes",
    cuisine: [
      "Wazwan (multi-course Kashmiri feast with Rogan Josh, Gushtaba, Yakhni)",
      "Dum Aloo",
      "Kahwa (green tea with saffron and almonds)",
      "Sheer Chai (salted pink tea)",
      "Modur Pulav (sweet saffron rice with dry fruits)"
    ]
  },
  importantCities: [
    "Srinagar (Dal Lake, Mughal Gardens, Tulip Garden)",
    "Jammu (Vaishno Devi, Raghunath Temple, Amar Mahal Palace)",
    "Gulmarg (ski resort, Gondola ride)",
    "Pahalgam (Amarnath Yatra base, Lidder Valley)",
    "Anantnag (Martand Sun Temple, Verinag spring)",
    "Baramulla (Jhelum Valley, Gulmarg access)",
    "Kupwara (lush valleys, border tourism)"
  ]
}
,

  "HP": {
  name: "Himachal Pradesh",
  capital: "Shimla (summer), Dharamshala (winter)",
  population: "≈7.9M (2023 est.)",
  area: "55,673 km²",
  largestCity: "Shimla",
  language: ["Hindi (official)", "Pahari dialects", "Punjabi", "Kangri", "Kinnauri", "Tibetan (in some regions)"],
  knownFor: [
    "Shimla – historic hill station and summer capital of British India",
    "Manali – hub for trekking, skiing, paragliding, and Rohtang Pass",
    "Dharamshala & McLeodganj – Tibetan culture, Dalai Lama’s residence",
    "Kullu Valley – apple orchards and world-famous Kullu Dussehra",
    "Spiti & Lahaul – cold desert valleys with Buddhist monasteries",
    "Kinnaur – Sangla Valley, apple orchards, and traditional wooden temples",
    "Hydropower projects (major contributor to India’s green energy)"
  ],
  festivals: [
    "Kullu Dussehra (internationally famous, week-long celebration)",
    "Losar (Tibetan New Year in Lahaul-Spiti)",
    "Phulaich (flower festival in Kinnaur)",
    "Sair Festival (harvest celebration)",
    "Holi, Diwali, and Lohri (with local traditions)"
  ],
  agriculture: [
    "Apple (Himachal is known as the Apple State of India)",
    "Plums",
    "Apricots",
    "Peaches",
    "Maize",
    "Wheat",
    "Barley",
    "Tea (notably in Kangra Valley)"
  ],
  economy: {
    gdp: "≈$32B (2023 est.)",
    industries: [
      "Hydropower (major electricity producer in India)",
      "Horticulture (apples and other fruits)",
      "Tourism (hill stations, trekking, pilgrimage, monasteries)",
      "Handicrafts (Kullu shawls, carpets, metalware, wood carving)",
      "Tea industry (Kangra Valley)",
      "Emerging IT and pharmaceuticals in towns like Baddi"
    ]
  },
  culture: {
    folkDances: ["Nati (UNESCO-recognized)", "Kulluvi Nati", "Chamba Nati", "Kinnauri Nati"],
    music: "Folk ballads, temple music, and regional instruments (nagada, dhol, shehnai)",
    cuisine: [
      "Dham (traditional festive meal with dal, rice, curd, rajma, and kadi)",
      "Siddu (steamed wheat bread)",
      "Madra (chickpea-based curry)",
      "Babru (stuffed wheat flatbread)",
      "Chha Gosht (mutton curry in yogurt sauce)"
    ]
  },
  importantCities: [
    "Shimla (capital, Mall Road, Ridge, Christ Church)",
    "Manali (adventure hub, Rohtang & Solang Valley)",
    "Dharamshala (Dalai Lama Temple, HPCA Cricket Stadium)",
    "Kullu (valleys, apple orchards, Dussehra festival)",
    "Mandi (temples, gateway to Kullu & Lahaul-Spiti)",
    "Kangra (Kangra Fort, Masroor Temples, tea gardens)",
    "Chamba (Khajjiar – known as Mini Switzerland of India)"
  ]
},

  "UK": {
  name: "Uttarakhand",
  capital: "Dehradun (Winter), Gairsain (Summer)",
  population: "≈11M (2011 Census, est.)",
  area: "53,483 km²",
  largestCity: "Dehradun",
  language: ["Hindi (official)", "Garhwali", "Kumaoni", "Urdu", "Punjabi"],
  knownFor: [
    "Char Dham Yatra (Kedarnath, Badrinath, Gangotri, Yamunotri)",
    "Rishikesh – Yoga Capital of the World",
    "Haridwar – Holy city on the Ganges",
    "Jim Corbett National Park (India’s first national park)",
    "Hill stations like Mussoorie, Nainital, Auli",
    "Trekking destinations (Valley of Flowers, Roopkund)",
    "Adventure sports – rafting, skiing, trekking",
    "Sacred rivers Ganga & Yamuna",
    "High Himalayan peaks like Nanda Devi & Trishul"
  ],
  festivals: [
    "Kumbh Mela (Haridwar, every 12 years)",
    "Makar Sankranti",
    "Harela (agriculture-related festival)",
    "Nanda Devi Raj Jat Yatra",
    "Diwali & Holi",
    "Ganga Dussehra"
  ],
  agriculture: [
    "Rice & wheat",
    "Barley",
    "Maize",
    "Pulses & oilseeds",
    "Fruits: apples, pears, plums, peaches",
    "Medicinal & aromatic plants"
  ],
  economy: {
    gdp: "≈$40B (est.)",
    industries: [
      "Tourism & pilgrimage",
      "Hydroelectric power",
      "Pharmaceuticals",
      "Food processing",
      "Handicrafts & wool industry",
      "Horticulture"
    ]
  },
  culture: {
    classicalDance: "Chholiya (folk dance of Kumaon)",
    music: "Traditional Garhwali & Kumaoni folk songs, devotional bhajans",
    cuisine: [
      "Kafuli (spinach-based dish)",
      "Phaanu (lentil dish)",
      "Baadi (local flour preparation)",
      "Chainsoo (black gram curry)",
      "Bal Mithai (famous sweet)",
      "Singori (sweet wrapped in leaves)"
    ]
  },
  importantCities: ["Dehradun", "Haridwar", "Rishikesh", "Nainital", "Haldwani", "Almora", "Pithoragarh"]
},

  "PB" : {
  name: "Punjab",
  capital: "Chandigarh",
  population: "≈30M (2023 est.)",
  area: "50,362 km²",
  largestCity: "Ludhiana",
  language: ["Punjabi (official)", "Hindi", "English"],
  knownFor: [
    "Golden Temple (Harmandir Sahib) in Amritsar",
    "Bhangra and Giddha folk dances",
    "Green Revolution and fertile agriculture",
    "Indo-Pak Wagah Border ceremony",
    "Punjabi music and cinema",
    "Phulkari embroidery",
    "Major Sikh pilgrimage sites"
  ],
  festivals: [
    "Baisakhi (harvest and Sikh New Year)",
    "Lohri (bonfire festival in January)",
    "Hola Mohalla (Anandpur Sahib)",
    "Diwali",
    "Gurpurabs (celebrating Sikh Gurus)",
    "Teej"
  ],
  agriculture: [
    "Wheat (largest producer in India)",
    "Rice",
    "Sugarcane",
    "Cotton",
    "Maize",
    "Barley",
    "Fruits (kinnow, guava, litchi)",
    "Dairy farming"
  ],
  economy: {
    gdp: "≈$80B (2023 est.)",
    industries: [
      "Agriculture and agro-based industries",
      "Textiles and garments (Ludhiana hub)",
      "Sports goods manufacturing (Jalandhar)",
      "Hand tools and cycle industry",
      "Dairy and poultry farming",
      "Pharmaceuticals and chemicals"
    ]
  },
  culture: {
    folkDances: ["Bhangra", "Giddha", "Jhumar", "Luddi"],
    music: "Punjabi folk music, Sufi music, and globally popular Punjabi pop/Bollywood songs",
    cuisine: [
      "Makki di Roti and Sarson da Saag",
      "Butter Chicken (originated in Punjab)",
      "Amritsari Kulcha",
      "Chole Bhature",
      "Lassi (sweet or salted yogurt drink)",
      "Tandoori dishes",
      "Paneer Tikka"
    ]
  },
  importantCities: [
    "Amritsar (Golden Temple, Jallianwala Bagh, Wagah Border)",
    "Ludhiana (industrial hub, largest city)",
    "Jalandhar (sports goods industry, Devi Talab Mandir)",
    "Patiala (Qila Mubarak, Punjabi royal culture)",
    "Bathinda (thermal power plants, forts, dams)",
    "Mohali (IT hub, cricket stadium)",
    "Chandigarh (shared capital, planned city by Le Corbusier)"
  ]
}
,
  "HR": {
  name: "Haryana",
  capital: "Chandigarh (shared with Punjab)",
  population: "≈28M (2011 Census, est.)",
  area: "44,212 km²",
  largestCity: "Faridabad",
  language: ["Hindi (official)", "Haryanvi (widely spoken)", "Punjabi", "Urdu"],
  knownFor: [
    "Kurukshetra – Land of the Mahabharata",
    "Major sports hub of India (produces many Olympians)",
    "Industrial cities like Gurugram & Faridabad",
    "Sultanpur National Park (bird sanctuary)",
    "Blue pottery and handlooms",
    "Mughal & Vedic heritage",
    "Highway dhabas (Paranthas, lassi, and tandoori food)"
  ],
  festivals: [
    "Holi",
    "Diwali",
    "Baisakhi",
    "Lohri",
    "Teej",
    "Gugga Naumi (folk festival)",
    "Gangore"
  ],
  agriculture: [
    "Rice (basmati)",
    "Wheat",
    "Sugarcane",
    "Barley",
    "Cotton",
    "Mustard",
    "Vegetables like potatoes, onions, and tomatoes"
  ],
  economy: {
    gdp: "≈$120B (est.)",
    industries: [
      "IT & BPO (Gurugram hub)",
      "Automobile manufacturing (Maruti Suzuki, Hero Honda, etc.)",
      "Textiles",
      "Handlooms & handicrafts",
      "Real estate & urban development",
      "Agriculture & dairy farming"
    ]
  },
  culture: {
    folkDances: ["Phag", "Dhamal", "Jhumar", "Ghoomar"],
    music: "Haryanvi folk songs, ragini traditions",
    cuisine: [
      "Bajra Khichdi",
      "Kadhi Pakora",
      "Bajra roti with ghee",
      "Mixed vegetable dishes",
      "Churma (sweet made of wheat or bajra)",
      "Lassi"
    ]
  },
  importantCities: ["Gurugram", "Faridabad", "Panipat", "Ambala", "Rohtak", "Hisar", "Karnal", "Kurukshetra"]
},
  "CH": {
  name: "Chandigarh",
  capital: "Chandigarh (serves as the capital of both Punjab and Haryana)",
  population: "≈1.1M (2011 Census, est. ~1.2M today)",
  area: "114 km²",
  largestCity: "Chandigarh (UT is a single city)",
  language: ["Punjabi", "Hindi", "English"],
  knownFor: [
    "Planned city designed by Le Corbusier",
    "Rock Garden (Nek Chand’s masterpiece)",
    "Sukhna Lake",
    "Rose Garden (Asia’s largest rose garden)",
    "High standard of living & cleanliness",
    "Modern architecture & green cover",
    "Shared capital of Punjab and Haryana"
  ],
  festivals: [
    "Baisakhi",
    "Diwali",
    "Holi",
    "Lohri",
    "Chandigarh Carnival",
    "Rose Festival",
    "Teeyan"
  ],
  agriculture: [
    "Limited agriculture due to being an urban UT",
    "Small-scale cultivation of vegetables & fruits around periphery",
    "Horticulture (flowers, ornamental plants)"
  ],
  economy: {
    gdp: "≈$6B (est.)",
    industries: [
      "IT services",
      "Government & administrative services",
      "Tourism & hospitality",
      "Real estate",
      "Education & research institutions",
      "Small-scale industries (handicrafts, electronics)"
    ]
  },
  culture: {
    folkDances: ["Bhangra", "Giddha", "Jhumar"],
    music: "Punjabi folk, Bollywood, and modern fusion",
    cuisine: [
      "Butter Chicken",
      "Paneer Tikka",
      "Rajma Chawal",
      "Chole Bhature",
      "Stuffed Paranthas with lassi",
      "Makki di Roti with Sarson da Saag"
    ]
  },
  importantCities: ["Chandigarh (only major city, with surrounding towns Panchkula & Mohali forming ‘Tricity’ region)"]
},
  "DL": {
  name: "Delhi (NCT)",
  capital: "New Delhi (also the national capital of India)",
  population: "≈32M (2023 est.)",
  area: "1,484 km²",
  largestCity: "New Delhi",
  language: ["Hindi", "English", "Punjabi", "Urdu"],
  knownFor: [
    "India Gate",
    "Red Fort (UNESCO World Heritage Site)",
    "Qutub Minar",
    "Lotus Temple",
    "Akshardham Temple",
    "Connaught Place (CP)",
    "Delhi Metro",
    "Political & administrative hub of India"
  ],
  festivals: [
    "Diwali",
    "Holi",
    "Eid",
    "Christmas",
    "Republic Day Parade",
    "Independence Day celebrations at Red Fort",
    "Durga Puja",
    "Baisakhi"
  ],
  agriculture: [
    "Minimal agriculture due to urbanization",
    "Peripheral regions grow wheat, mustard, and vegetables",
    "Horticulture (flowers and nursery plants)"
  ],
  economy: {
    gdp: "≈$200B (2023 est.)",
    industries: [
      "Information Technology & ITES",
      "Tourism & hospitality",
      "Textiles & handicrafts",
      "Education & research",
      "Real estate & construction",
      "Retail & wholesale trade",
      "Transport & logistics"
    ]
  },
  culture: {
    folkDances: ["Kathak", "Bhangra (Punjabi influence)", "Classical Bharatanatyam performances"],
    music: "Fusion of classical Hindustani, Bollywood, Sufi, and modern pop",
    cuisine: [
      "Chole Bhature",
      "Paranthas (Paranthe Wali Gali)",
      "Butter Chicken",
      "Biryani",
      "Chaat (Gol Gappe, Aloo Tikki)",
      "Momos",
      "Kebabs & Mughlai dishes"
    ]
  },
  importantCities: [
    "New Delhi (central government hub)",
    "Old Delhi (historic walled city)",
    "Dwarka",
    "Rohini",
    "Saket",
    "Noida & Gurugram (in NCR, adjoining cities)"
  ]
},
  "UP": { 
  name: "Uttar Pradesh",
  capital: "Lucknow",
  population: "≈200M (2011 Census, largest in India)",
  area: "243,286 km² (4th largest in India)",
  largestCity: "Kanpur",
  language: ["Hindi (official)", "Urdu", "Awadhi", "Bhojpuri"],
  knownFor: [
    "Taj Mahal (Agra, UNESCO World Heritage & 7th Wonder of the World)",
    "Ram Mandir (Ayodhya, grand Hindu temple dedicated to Lord Rama)",
    "Kashi Vishwanath Temple (Varanasi, one of 12 Jyotirlingas)",
    "Mathura & Vrindavan – Birthplace and leela-bhoomi of Lord Krishna",
    "Kumbh Mela (Prayagraj – world’s largest religious gathering)",
    "Lucknow Nawabi culture, Chikankari embroidery & Awadhi cuisine",
    "Banarasi Silk Sarees (famous globally)",
    "Historic sites – Fatehpur Sikri, Jhansi Fort, Bara Imambara",
    "Buddhist heritage sites – Sarnath, Kushinagar"
  ],
  festivals: [
    "Diwali",
    "Holi (especially Mathura & Vrindavan)",
    "Eid",
    "Makar Sankranti",
    "Kumbh Mela",
    "Ram Navami",
    "Krishna Janmashtami"
  ],
  agriculture: ["Sugarcane", "Wheat", "Rice", "Potatoes", "Mangoes (Malihabadi Dussehri)"],
  economy: {
    gdp: "≈$240B (major contributor to India’s GDP)",
    industries: ["Textiles", "Leather", "Handicrafts", "Cement"]
  },
  culture: {
    classicalDance: "Kathak (originated in UP)",
    music: "Hindustani Classical (Gharanas of Varanasi, Lucknow, Agra)",
    cuisine: ["Awadhi Biryani", "Tunday Kababi", "Peda", "Petha"]
  },
  importantCities: ["Varanasi", "Prayagraj", "Kanpur", "Agra", "Jhansi"]
},

  "RJ": {
  name: "Rajasthan",
  capital: "Jaipur (Pink City)",
  population: "≈82M (2023 est.)",
  area: "342,239 km² (largest state in India by area)",
  largestCity: "Jaipur",
  language: ["Hindi", "Rajasthani", "Marwari", "Mewari", "Shekhawati"],
  knownFor: [
    "Thar Desert (Great Indian Desert)",
    "Historic forts & palaces (Amber Fort, Mehrangarh Fort, Chittorgarh Fort)",
    "City of Lakes (Udaipur)",
    "Pushkar Camel Fair",
    "Mount Abu (only hill station)",
    "Ranthambore National Park (tigers)",
    "Desert festivals and folk culture"
  ],
  festivals: [
    "Desert Festival (Jaisalmer)",
    "Teej",
    "Gangaur",
    "Pushkar Camel Fair",
    "Mewar Festival",
    "Diwali",
    "Holi",
    "Kite Festival (Makar Sankranti, Jaipur)"
  ],
  agriculture: [
    "Wheat",
    "Barley",
    "Pulses",
    "Millets (Bajra, Jowar)",
    "Oilseeds",
    "Mustard",
    "Cumin",
    "Guar",
    "Cotton (in irrigated areas)"
  ],
  economy: {
    gdp: "≈$220B (2023 est.)",
    industries: [
      "Tourism (heritage palaces, forts, desert safaris)",
      "Mining (zinc, copper, marble, sandstone, granite)",
      "Handicrafts (blue pottery, block printing, jewelry)",
      "Cement and textiles",
      "Agriculture and animal husbandry",
      "Renewable energy (solar power projects in Thar Desert)"
    ]
  },
  culture: {
    folkDances: ["Ghoomar", "Kalbeliya (UNESCO intangible heritage)", "Bhavai", "Chari dance"],
    music: "Manganiyar and Langas folk traditions, Sarangi and dholak music",
    cuisine: [
      "Dal Baati Churma",
      "Ker Sangri",
      "Gatte ki Sabzi",
      "Laal Maas",
      "Mohan Maas",
      "Bajre ki Roti",
      "Pyaaz Kachori"
    ]
  },
  importantCities: [
    "Jaipur (Pink City, capital)",
    "Udaipur (City of Lakes)",
    "Jodhpur (Blue City)",
    "Jaisalmer (Golden City, desert forts)",
    "Ajmer (famous Dargah Sharif)",
    "Bikaner (camel festival, snacks)",
    "Kota (education hub, Chambal riverfront)"
  ]
},
  "GJ":{
  name: "Gujarat",
  capital: "Gandhinagar",
  population: "≈71M (2023 est.)",
  area: "196,024 km²",
  largestCity: "Ahmedabad",
  language: ["Gujarati", "Hindi", "English"],
  knownFor: [
    "Gir National Park (Asiatic lions)",
    "Somnath Temple (Jyotirlinga)",
    "Dwarka (Krishna’s city, Char Dham)",
    "Statue of Unity (world’s tallest statue, Sardar Vallabhbhai Patel)",
    "Rann of Kutch (White Desert)",
    "Saputara Hill Station",
    "Dwarka and Somnath pilgrimage sites",
    "Dandi March (Salt Satyagraha, Gandhi’s movement)"
  ],
  festivals: [
    "Navratri (Garba & Dandiya Raas)",
    "Makar Sankranti (Uttarayan Kite Festival)",
    "Rann Utsav (Kutch)",
    "Janmashtami (Dwarka, Mathura connection)",
    "Diwali",
    "Holi"
  ],
  agriculture: [
    "Cotton (leading producer)",
    "Groundnut (peanuts)",
    "Sugarcane",
    "Rice",
    "Wheat",
    "Millets",
    "Sesame",
    "Mango (Kesar variety)"
  ],
  economy: {
    gdp: "≈$300B (2023 est., one of India’s top 5 economies)",
    industries: [
      "Petrochemicals and refineries (Jamnagar has world’s largest oil refinery)",
      "Textiles and garments",
      "Pharmaceuticals",
      "Diamond cutting and polishing (Surat)",
      "Automobiles and engineering",
      "Ports and logistics (Kandla, Mundra)",
      "Tourism (Somnath, Dwarka, Gir, Kutch)"
    ]
  },
  culture: {
    folkDances: ["Garba", "Dandiya Raas", "Tipani", "Tera Tali"],
    music: "Sugam Sangeet, Bhajans, folk Garba songs",
    cuisine: [
      "Dhokla",
      "Khandvi",
      "Thepla",
      "Fafda-Jalebi",
      "Undhiyu",
      "Khakhra",
      "Handvo",
      "Sev Tameta nu Shaak"
    ]
  },
  importantCities: [
    "Ahmedabad (largest city, Sabarmati Ashram)",
    "Surat (diamond city, textiles)",
    "Vadodara (cultural capital)",
    "Rajkot (industrial hub)",
    "Bhavnagar (ports, temples)",
    "Jamnagar (oil refineries, bird sanctuary)",
    "Gandhinagar (capital, Akshardham Temple)"
  ]
}
,
  "MP": {
  name: "Madhya Pradesh",
  capital: "Bhopal",
  population: "≈87M (2023 est.)",
  area: "308,245 km² (2nd largest state by area)",
  largestCity: "Indore",
  language: ["Hindi (official)", "Bundeli", "Malwi", "Bagheli", "Nimadi"],
  knownFor: [
    "Khajuraho Temples (UNESCO World Heritage)",
    "Sanchi Stupa (Buddhist site, UNESCO World Heritage)",
    "Bhimbetka Rock Shelters (prehistoric cave paintings)",
    "Ujjain (Mahakaleshwar Jyotirlinga, Kumbh Mela city)",
    "Kanha & Bandhavgarh National Parks (tigers)",
    "Gwalior Fort",
    "Omkareshwar & Maheshwar Temples",
    "Chitrakoot (associated with Ramayana)"
  ],
  festivals: [
    "Diwali",
    "Holi",
    "Navratri",
    "Khajuraho Dance Festival",
    "Tansen Music Festival (Gwalior)",
    "Kumbh Mela (Ujjain, Simhastha every 12 years)"
  ],
  agriculture: [
    "Soybean (largest producer in India)",
    "Wheat",
    "Rice",
    "Pulses (gram, lentils)",
    "Maize",
    "Sugarcane",
    "Cotton",
    "Oilseeds (sunflower, mustard)"
  ],
  economy: {
    gdp: "≈$150B (2023 est.)",
    industries: [
      "Agriculture (backbone of economy)",
      "Mining (coal, diamonds, bauxite, limestone, manganese)",
      "Textiles and handloom (Chanderi & Maheshwari sarees)",
      "Cement and mineral-based industries",
      "Pharmaceuticals",
      "Tourism (Khajuraho, Sanchi, Ujjain, tiger reserves)"
    ]
  },
  culture: {
    folkDances: ["Gaur Dance", "Karma Dance", "Matki Dance", "Jawara Dance", "Tertali Dance"],
    music: "Hindustani Classical (Tansen heritage, Gwalior Gharana)",
    cuisine: [
      "Poha-Jalebi (Indore specialty)",
      "Dal Bafla (similar to Rajasthani Dal Baati)",
      "Bhutte ka Kees",
      "Sabudana Khichdi",
      "Malpua",
      "Imarti",
      "Rogan Josh (influence in Malwa/Nimar regions)"
    ]
  },
  importantCities: [
    "Bhopal (capital, lakes, Sanchi nearby)",
    "Indore (largest city, food capital of India, Maheshwar & Omkareshwar nearby)",
    "Gwalior (fort, Scindia heritage, music hub)",
    "Jabalpur (Marble Rocks at Bhedaghat, Kanha nearby)",
    "Ujjain (Mahakaleshwar Temple, Kumbh Mela)",
    "Khajuraho (temples, UNESCO site)",
    "Satna (limestone industries, Chitrakoot nearby)"
  ]
},
  "BR": {
  name: "Bihar",
  capital: "Patna",
  population: "≈125M (2023 est.)",
  area: "94,163 km²",
  largestCity: "Patna",
  language: ["Hindi (official)", "Maithili", "Bhojpuri", "Magahi", "Angika", "Urdu"],
  knownFor: [
    "Nalanda University (ancient center of learning)",
    "Bodh Gaya – where Gautama Buddha attained enlightenment",
    "Patna Sahib – birthplace of Guru Gobind Singh (10th Sikh Guru)",
    "Madhubani paintings (world-famous folk art)",
    "Litti Chokha (traditional dish)",
    "Chhath Puja (grand river festival)",
    "Sonpur Mela (Asia’s largest cattle fair)"
  ],
  festivals: [
    "Chhath Puja (major sun worship festival)",
    "Sonepur Cattle Fair",
    "Makar Sankranti",
    "Sama Chakeva (celebrated by women)",
    "Diwali and Holi (with local traditions)",
    "Ramnavami",
    "Eid (in Muslim communities)"
  ],
  agriculture: [
    "Rice",
    "Wheat",
    "Maize (Bihar is India’s top producer)",
    "Pulses",
    "Sugarcane",
    "Vegetables (potato, onion, cauliflower)",
    "Fruits (litchi, mango, banana, guava)",
    "Makhana (fox nut – Bihar is world’s largest producer)"
  ],
  economy: {
    gdp: "≈$110B (2023 est.)",
    industries: [
      "Agriculture and food processing",
      "Handicrafts (Madhubani art, Bhagalpuri silk)",
      "Tourism (Bodh Gaya, Nalanda, Vaishali, Rajgir)",
      "Sugar industry",
      "Brewing and distilling (liquor ban shifted focus to food products)",
      "Textiles (silk and handloom)"
    ]
  },
  culture: {
    folkDances: ["Jat-Jatin", "Jhijhiya", "Bidesia", "Chhau (in some regions)", "Domkach"],
    music: "Bhojpuri folk songs, Sohar (childbirth songs), Kajari, and Birha",
    cuisine: [
      "Litti Chokha (roasted wheat balls with spiced filling and mashed vegetables)",
      "Thekua (sweet dish for Chhath Puja)",
      "Khaja (sweet layered snack)",
      "Dal Pitha (rice dumplings with dal filling)",
      "Sattu Paratha (roasted gram flour-stuffed bread)",
      "Kadhi Bari (dumplings in yogurt curry)"
    ]
  },
  importantCities: [
    "Patna (capital, Patna Sahib, Gandhi Maidan)",
    "Gaya (Bodh Gaya – UNESCO World Heritage site)",
    "Nalanda (ancient university ruins)",
    "Muzaffarpur (famous for litchis)",
    "Bhagalpur (renowned for silk production)",
    "Vaishali (ancient republic, Buddhist & Jain sites)",
    "Darbhanga (cultural hub, forts, temples, Mithila art)"
  ]
}
,
  "JH": {
  name: "Jharkhand",
  capital: "Ranchi",
  population: "≈40M (2023 est.)",
  area: "79,714 km²",
  largestCity: "Jamshedpur",
  language: ["Hindi (official)", "Nagpuri", "Santali", "Mundari", "Ho", "Kurukh", "Kharia", "Bengali"],
  knownFor: [
    "Rich mineral resources (coal, iron ore, copper, bauxite, mica)",
    "Industrial city of Jamshedpur (Tata Steel hub)",
    "Betla National Park and Palamu Tiger Reserve",
    "Baidhyanath Dham (Deoghar Jyotirlinga)",
    "Dassam & Hundru Waterfalls",
    "Tribal culture and heritage",
    "Chhau dance (UNESCO intangible heritage)",
    "Jharkhand’s forests and tribal handicrafts"
  ],
  festivals: [
    "Sarhul (spring festival of tribals)",
    "Karma (worship of nature & trees)",
    "Tusu Parab (harvest festival)",
    "Sohrai (cattle festival with wall painting art)",
    "Diwali & Holi (widely celebrated)",
    "Eid (in Muslim communities)",
    "Durga Puja (popular in cities like Ranchi, Jamshedpur, Dhanbad)"
  ],
  agriculture: [
    "Rice (main crop)",
    "Wheat",
    "Maize",
    "Pulses",
    "Oilseeds",
    "Fruits (mango, litchi, banana, jackfruit)",
    "Lac (Jharkhand is a major producer)"
  ],
  economy: {
    gdp: "≈$60B (2023 est.)",
    industries: [
      "Mining (coal, iron, bauxite, copper, mica)",
      "Steel and heavy industries (Tata Steel in Jamshedpur, Bokaro Steel Plant)",
      "Power generation (thermal and hydel)",
      "Cement industry",
      "Handicrafts and tribal arts",
      "Tourism (temples, waterfalls, forests)"
    ]
  },
  culture: {
    folkDances: ["Chhau", "Karma", "Paika", "Jhumar"],
    music: "Nagpuri folk songs, tribal drumming, and folk ballads",
    cuisine: [
      "Dhuska (fried rice-lentil pancake)",
      "Chilka Roti (rice flour flatbread)",
      "Handia (traditional rice beer)",
      "Pitha (rice dumplings with sweet/savory filling)",
      "Arsa Roti (sweet dish)",
      "Thekua (festival sweet)",
      "Rice and fish curry (common staple)"
    ]
  },
  importantCities: [
    "Ranchi (capital, waterfalls, educational hub)",
    "Jamshedpur (Tata Steel, industrial city)",
    "Dhanbad (coal capital of India)",
    "Bokaro (steel city of India)",
    "Deoghar (Baidhyanath Dham Jyotirlinga)",
    "Hazaribagh (wildlife sanctuary, hills)",
    "Giridih (parasnath hills – Jain pilgrimage site)"
  ]
}
,
  "WB": {
  name: "West Bengal",
  capital: "Kolkata",
  population: "≈100M (2023 est.)",
  area: "88,752 km²",
  largestCity: "Kolkata",
  language: ["Bengali (official)", "Hindi", "English", "Nepali (Darjeeling)"],
  knownFor: [
    "City of Joy – Kolkata",
    "Howrah Bridge & Victoria Memorial",
    "Sundarbans mangrove forest (home of Royal Bengal Tiger)",
    "Darjeeling tea",
    "Shantiniketan (founded by Rabindranath Tagore)",
    "Terracotta temples of Bishnupur",
    "Durga Puja (UNESCO intangible heritage)",
    "Kalighat & Dakshineswar Kali temples",
    "Historic sites of Murshidabad & Plassey",
    "Colonial heritage and cultural renaissance"
  ],
  festivals: [
    "Durga Puja (grandest celebration)",
    "Kali Puja",
    "Poila Baisakh (Bengali New Year)",
    "Rath Yatra",
    "Eid (large Muslim population in Murshidabad, Kolkata, Malda)",
    "Christmas (Park Street Kolkata famous celebrations)",
    "Saraswati Puja (youth and students festival)"
  ],
  agriculture: [
    "Rice (main crop)",
    "Potato (West Bengal is India’s largest producer)",
    "Jute (major cash crop, jute industry hub)",
    "Tea (Darjeeling, Dooars, Terai)",
    "Sugarcane",
    "Vegetables",
    "Fruits (mango – Malda, litchi – Murshidabad, pineapple – Jalpaiguri)"
  ],
  economy: {
    gdp: "≈$220B (2023 est.)",
    industries: [
      "Jute industry (Kolkata hub)",
      "Tea plantations (Darjeeling, Dooars)",
      "Steel and heavy industries (Durgapur, Asansol, Haldia)",
      "Information Technology (Salt Lake Sector V, Rajarhat)",
      "Petrochemicals (Haldia complex)",
      "Textiles, handicrafts, and handlooms",
      "Tourism (Darjeeling, Sundarbans, Kolkata heritage)"
    ]
  },
  culture: {
    folkDances: ["Chhau (Purulia)", "Gambhira", "Baul singing tradition"],
    music: "Rabindra Sangeet, Baul folk songs, Nazrul Geeti, modern Bengali music",
    cuisine: [
      "Macher Jhol (fish curry, staple dish)",
      "Shorshe Ilish (hilsa in mustard sauce)",
      "Kosha Mangsho (spicy mutton curry)",
      "Luchi & Alur Dom",
      "Panta Bhat (fermented rice with mustard oil & green chili)",
      "Mishti Doi (sweet yogurt)",
      "Sandesh & Rosogolla (famous Bengali sweets)",
      "Chingri Malai Curry (prawn curry in coconut milk)"
    ]
  },
  importantCities: [
    "Kolkata (capital, cultural & economic hub)",
    "Howrah (industrial hub, Howrah Bridge)",
    "Durgapur (steel city)",
    "Asansol (coal & industry)",
    "Siliguri (gateway to Northeast, trade hub)",
    "Darjeeling (tea, Himalayan hill station)",
    "Malda (mango & silk industry)",
    "Murshidabad (historic Nawabi city)",
    "Haldia (port & petrochemical industries)"
  ]
},
  "OR": {
  name: "Odisha",
  capital: "Bhubaneswar",
  population: "≈47M (2023 est.)",
  area: "155,707 km²",
  largestCity: "Bhubaneswar",
  language: ["Odia (official)", "Hindi", "English", "Santali", "Kui", "Koya"],
  knownFor: [
    "Jagannath Temple (Puri, one of the Char Dhams)",
    "Konark Sun Temple (UNESCO World Heritage Site)",
    "Chilika Lake (Asia’s largest brackish water lagoon)",
    "Lingaraj Temple (Bhubaneswar, 11th century)",
    "Odissi dance (classical dance form of India)",
    "Tribal culture & handicrafts",
    "Rath Yatra of Puri",
    "Simlipal Tiger Reserve & Nandankanan Zoological Park",
    "Beaches: Puri, Gopalpur, Chandrabhaga",
    "Handicrafts – Pattachitra paintings, silver filigree (Cuttack)"
  ],
  festivals: [
    "Rath Yatra (Puri, world famous chariot festival)",
    "Durga Puja (especially in Cuttack with silver tableaux)",
    "Makar Sankranti (Magha Mela in Bhubaneswar)",
    "Raja Parba (celebration of womanhood & earth fertility)",
    "Diwali & Kali Puja",
    "Chhau Festival (tribal dance festival)"
  ],
  agriculture: [
    "Rice (main crop, Odisha is rice bowl of Eastern India)",
    "Pulses (black gram, green gram)",
    "Oilseeds (mustard, groundnut, sesame)",
    "Coconut (coastal districts)",
    "Vegetables (brinjal, okra, tomato)",
    "Spices (ginger, turmeric, chili)",
    "Fruits (mango, banana, cashew nut – Odisha is a major cashew producer)"
  ],
  economy: {
    gdp: "≈$110B (2023 est.)",
    industries: [
      "Iron & Steel (Rourkela Steel Plant – one of India’s first)",
      "Aluminium (NALCO, Vedanta – world’s largest alumina complex)",
      "Thermal Power & Hydro Power (Hirakud Dam – Asia’s longest earthen dam)",
      "Mines & Minerals (bauxite, chromite, iron ore, coal)",
      "Textiles & Handicrafts (Pattachitra, Ikat, Sambalpuri sarees)",
      "Tourism (Puri, Konark, Chilika, tribal tourism)"
    ]
  },
  culture: {
    folkDances: ["Chhau", "Gotipua (precursor to Odissi)", "Danda Nata", "Sambalpuri folk"],
    music: "Odissi classical music, tribal music & folk ballads",
    cuisine: [
      "Pakhala Bhata (fermented rice with curd & mustard)",
      "Dalma (dal cooked with vegetables)",
      "Chhena Poda (baked cottage cheese sweet, origin Odisha)",
      "Chhena Jhili & Rasabali (milk sweets)",
      "Machha Besara (fish curry in mustard paste)",
      "Santula (mixed vegetable curry)",
      "Manda Pitha & Enduri Pitha (festive rice cakes)"
    ]
  },
  importantCities: [
    "Bhubaneswar (capital, temple city of India)",
    "Cuttack (judicial capital, silver filigree crafts)",
    "Puri (spiritual & cultural hub, Jagannath Temple, Rath Yatra)",
    "Rourkela (steel city)",
    "Sambalpur (textiles, Hirakud Dam)",
    "Berhampur (trade & textile hub)",
    "Balasore (missile testing range, Chandipur-on-sea)",
    "Paradip (major port, petrochemicals)",
    "Angul (industrial hub – power, aluminium)"
  ]
},
  "CT": {
  name: "Chhattisgarh",
  capital: "Raipur",
  population: "≈31M (2023 est.)",
  area: "135,194 km²",
  largestCity: "Raipur",
  language: ["Hindi", "Chhattisgarhi", "Gondi", "Korwa", "Halbi", "Kudukh"],
  knownFor: [
    "Chitrakote Waterfall (Niagara of India, Bastar)",
    "Tirathgarh Waterfall",
    "Barnawapara Wildlife Sanctuary",
    "Bhoramdeo Temple (known as Khajuraho of Chhattisgarh)",
    "Kanger Valley National Park (limestone caves, tribal culture)",
    "Danteshwari Temple (Dantewada, Shakti Peeth)",
    "Iron & Steel Industry (Bhilai Steel Plant – India’s largest)",
    "Folk art: bell-metal (Dokra), terracotta, tribal handicrafts",
    "Rich tribal culture (Bastar Dussehra is world’s longest festival)"
  ],
  festivals: [
    "Bastar Dussehra (celebrated for 75+ days, unique in the world)",
    "Madai Festival (tribal festival of Bastar & Kanker)",
    "Rajim Kumbh Mela (religious fair near Raipur)",
    "Polay Festival",
    "Diwali, Holi, and Teej (with local tribal flavors)"
  ],
  agriculture: [
    "Rice (main crop, state is known as the 'Rice Bowl of India')",
    "Maize",
    "Pulses (arhar, moong, urad)",
    "Oilseeds (soybean, groundnut, mustard)",
    "Horticulture (mango, banana, cashew, guava, papaya)",
    "Lac & Tendu leaves (for bidi industry)"
  ],
  economy: {
    gdp: "≈$60B (2023 est.)",
    industries: [
      "Iron & Steel (Bhilai Steel Plant, SAIL)",
      "Cement (major production hub in India)",
      "Power generation (thermal & hydroelectric)",
      "Mining (coal, iron ore, bauxite, dolomite, tin)",
      "Aluminium (BALCO – Bharat Aluminium Company)",
      "Handicrafts & tribal art (Dokra metal craft, bell-metal, bamboo craft)",
      "Forestry products (tendu leaves, medicinal plants, lac)"
    ]
  },
  culture: {
    folkDances: ["Panthi", "Raut Nacha", "Saila", "Sua Nacha"],
    music: "Pandavani (narrative singing of Mahabharata), tribal folk songs",
    cuisine: [
      "Chana Samosa & Sabudana Khichdi (popular snacks)",
      "Faraa (steamed rice flour dumplings)",
      "Chusela (rice flour bread)",
      "Dehrori (sweet dish made with curd & rice)",
      "Tilgur & Kusli (festival sweets)",
      "Bafauri (steamed lentil dish)",
      "Handia (traditional rice beer of tribals)"
    ]
  },
  importantCities: [
    "Raipur (capital, industrial & educational hub)",
    "Bhilai (steel city, Bhilai Steel Plant)",
    "Bilaspur (judicial capital, cultural hub, Arpa river)",
    "Korba (power & energy hub, coal mines)",
    "Durg (industrial city, near Bhilai)",
    "Jagdalpur (tribal culture, waterfalls, Bastar Dussehra)",
    "Dantewada (famous for Danteshwari Temple & tribal culture)",
    "Raigarh (power & steel hub)",
    "Ambikapur (surrounded by forests & waterfalls)"
  ]
},
  "MH": {
  name: "Maharashtra",
  capital: "Mumbai (Administrative), Nagpur (Winter)",
  population: "≈125M (2023 est.)",
  area: "307,713 km²",
  largestCity: "Mumbai",
  language: ["Marathi", "Hindi", "English", "Konkani"],
  knownFor: [
    "Gateway of India (Mumbai)",
    "Ajanta & Ellora Caves (UNESCO World Heritage)",
    "Shaniwar Wada (Pune, Maratha Empire)",
    "Bibi Ka Maqbara (Aurangabad, known as 'Mini Taj Mahal')",
    "Marine Drive & Chhatrapati Shivaji Maharaj Terminus (UNESCO site)",
    "Bollywood (largest film industry hub in India)",
    "Lavani Dance & Tamasha (folk art forms)",
    "Ganesh Chaturthi Festival (grand celebrations)",
    "Western Ghats (Sahyadri Hills, biodiversity hotspot)"
  ],
  festivals: [
    "Ganesh Chaturthi (state’s biggest festival)",
    "Gudi Padwa (Marathi New Year)",
    "Ellora Ajanta Festival (cultural fest near Aurangabad)",
    "Nag Panchami (worship of snakes)",
    "Makar Sankranti (kite flying festival)",
    "Diwali & Holi (celebrated with Marathi traditions)"
  ],
  agriculture: [
    "Sugarcane (major cash crop)",
    "Cotton",
    "Soybean",
    "Rice",
    "Jowar & Bajra (staple millets)",
    "Tur (pigeon pea), Moong, Urad (pulses)",
    "Mango (Alphonso from Konkan, world famous)",
    "Grapes (Nashik – Wine capital of India)"
  ],
  economy: {
    gdp: "≈$480B (2023 est., largest in India)",
    industries: [
      "Finance & Banking (Mumbai – financial capital of India, NSE & BSE)",
      "Bollywood & Entertainment Industry",
      "Textiles (Mumbai, Solapur)",
      "IT & Software (Pune, Mumbai, Nagpur)",
      "Automobile (Pune – Tata Motors, Bajaj Auto, Mercedes-Benz, VW)",
      "Petrochemicals & Refineries (Mumbai, Navi Mumbai, Nagothane)",
      "Sugar Industry (Kolhapur, Satara, Sangli)",
      "Wine Industry (Nashik – India’s largest wine hub)"
    ]
  },
  culture: {
    folkDances: ["Lavani", "Tamasha", "Dindi", "Koli Dance"],
    music: "Natya Sangeet, Bhavageet, Powada (ballads of Maratha history)",
    cuisine: [
      "Vada Pav (Mumbai street food icon)",
      "Misal Pav (spicy curry with bread)",
      "Pav Bhaji (Mumbai special)",
      "Puran Poli (sweet flatbread with lentil filling)",
      "Poha (flattened rice breakfast)",
      "Sabudana Khichdi (fasting food)",
      "Modak (Ganesh Chaturthi sweet)",
      "Bharli Vangi (stuffed brinjal curry)",
      "Solkadhi (Kokum drink from Konkan)"
    ]
  },
  importantCities: [
    "Mumbai (financial capital, Bollywood, ports)",
    "Pune (Oxford of the East, IT & auto hub)",
    "Nagpur (Orange city, winter capital, logistics hub)",
    "Aurangabad (Ajanta-Ellora, Bibi Ka Maqbara)",
    "Nashik (wine capital, Kumbh Mela city)",
    "Kolhapur (Mahalaxmi Temple, sugar industry)",
    "Solapur (textiles, Siddheshwar Temple)",
    "Satara (Sahyadri hills, Kaas Plateau – Valley of Flowers)",
    "Sangli (sugar & turmeric hub)"
  ]
},
  "TG": {
  name: "Telangana",
  capital: "Hyderabad",
  population: "≈39M (2023 est.)",
  area: "112,077 km²",
  largestCity: "Hyderabad",
  language: ["Telugu", "Urdu", "Hindi", "English"],
  knownFor: [
    "Charminar (icon of Hyderabad)",
    "Golconda Fort",
    "Ramoji Film City (world’s largest film studio complex)",
    "Hussain Sagar Lake & Buddha Statue",
    "Birla Mandir (Hyderabad)",
    "Kakatiya Kala Thoranam (UNESCO site, Warangal)",
    "Salar Jung Museum (one of the largest art museums in India)",
    "Chowmahalla Palace (Hyderabad)",
    "IT Hub – Cyberabad (HITEC City, Hyderabad, IT/Tech companies)",
    "Bidriware handicraft (metal art from Bidar & Hyderabad)"
  ],
  festivals: [
    "Bonalu (state festival, worship of Goddess Mahakali)",
    "Bathukamma (floral festival unique to Telangana women)",
    "Sankranti (kite festival)",
    "Ugadi (Telugu New Year)",
    "Ramzan (Hyderabad famous for Iftar & Haleem)",
    "Dasara & Diwali (celebrated widely)"
  ],
  agriculture: [
    "Rice (major staple, ‘rice bowl’ of South India)",
    "Cotton",
    "Maize",
    "Groundnut",
    "Chillies (Guntur & Khammam belts)",
    "Turmeric",
    "Sugarcane",
    "Pulses (Red gram, Green gram)",
    "Fruits: Mango (Banganapalle, Benishan varieties), Guava"
  ],
  economy: {
    gdp: "≈$170B (2023 est.)",
    industries: [
      "Information Technology (Hyderabad – HITEC City, IT hub)",
      "Pharmaceuticals & Biotechnology (Genome Valley, Hyderabad)",
      "Film Industry (Tollywood – Ramoji Film City)",
      "Handicrafts (Bidriware, Nirmal paintings, Cheriyal scrolls)",
      "Textiles (Pochampally Ikat, Gadwal sarees, Narayanpet sarees)",
      "Mining (coal from Singareni Collieries)",
      "Agri-processing (rice mills, chilli & turmeric trade)"
    ]
  },
  culture: {
    folkDances: ["Perini Shiv Tandavam", "Lambadi Dance", "Bonalu folk performances"],
    music: "Carnatic classical, Telugu folk songs, Qawwalis in Hyderabad",
    cuisine: [
      "Hyderabadi Biryani (world-famous)",
      "Haleem (special during Ramzan)",
      "Pesarattu (green gram dosa)",
      "Saruva Pindi (crispy rice flour pancake)",
      "Bagara Baingan (stuffed brinjal curry)",
      "Double Ka Meetha (bread pudding dessert)",
      "Qubani Ka Meetha (apricot dessert)",
      "Gongura Pachadi (sorrel leaf chutney)",
      "Chegodilu & Sakinalu (snacks)"
    ]
  },
  importantCities: [
    "Hyderabad (capital, IT hub, Charminar, Biryani, historic monuments)",
    "Warangal (Kakatiya dynasty forts, temples, UNESCO heritage)",
    "Nizamabad (agriculture, sugarcane, turmeric, rice mills)",
    "Khammam (coal mining, temples, agriculture)",
    "Karimnagar (granary of Telangana, Pochampally & Karimnagar handlooms)",
    "Mahbubnagar (historic forts, agriculture hub)",
    "Adilabad (tribal culture, forests, waterfalls like Kuntala)"
  ]
}
,
  "GA": {
  name: "Goa",
  capital: "Panaji",
  population: "≈1.6M (2023 est.)",
  area: "3,702 km²",
  largestCity: "Vasco da Gama",
  language: ["Konkani", "Marathi", "Hindi", "English", "Portuguese (influence)"],
  knownFor: [
    "Beaches – Baga, Calangute, Anjuna, Colva, Palolem",
    "Basilica of Bom Jesus (UNESCO World Heritage, houses St. Francis Xavier’s relics)",
    "Se Cathedral (one of Asia’s largest churches)",
    "Fort Aguada (Portuguese fort on Sinquerim Beach)",
    "Dudhsagar Waterfalls",
    "Goan nightlife – clubs, beach parties, casinos",
    "Spice plantations",
    "Portuguese colonial architecture",
    "Goa Carnival festival",
    "Feni (local cashew liquor)"
  ],
  festivals: [
    "Goa Carnival (Portuguese legacy, parades, music, dance)",
    "Feast of St. Francis Xavier (Old Goa, December)",
    "Shigmo Festival (Holi-like, folk dances, processions)",
    "Christmas & New Year (celebrated with grand beach parties)",
    "Diwali",
    "Eid",
    "Sao Joao Festival (monsoon, celebrated with boat rides & water games)"
  ],
  agriculture: [
    "Rice (staple crop)",
    "Cashew (famous for cashew nuts & feni production)",
    "Coconut (widely cultivated, basis of Goan cuisine)",
    "Arecanut",
    "Spices (black pepper, turmeric, chillies, nutmeg, cinnamon)",
    "Fruits: Mango (Alphonso, Mankurad), Pineapple, Banana, Jackfruit"
  ],
  economy: {
    gdp: "≈$14B (2023 est.)",
    industries: [
      "Tourism (major contributor, domestic & international visitors)",
      "Mining (iron ore, bauxite – currently regulated)",
      "Fisheries & seafood processing",
      "Cashew nut processing & feni distillation",
      "Handicrafts (shell art, bamboo crafts, pottery)",
      "Shipbuilding & ports (Mormugao Port Trust)",
      "IT & small manufacturing industries"
    ]
  },
  culture: {
    folkDances: ["Fugdi", "Dhalo", "Mando (Goan-Portuguese fusion)"],
    music: "Konkani songs, Portuguese folk, Western pop, EDM (Sunburn Festival)",
    cuisine: [
      "Goan Fish Curry & Rice",
      "Vindaloo (spicy pork curry, Portuguese origin)",
      "Xacuti (spiced chicken or lamb curry)",
      "Sorpotel (pork dish, Portuguese influence)",
      "Bebinca (Goan layered dessert)",
      "Feni (cashew/coconut liquor)",
      "Seafood: prawns, crabs, pomfret, mackerel, mussels",
      "Sannas (fermented rice cakes)",
      "Khatkhate (vegetable stew)"
    ]
  },
  importantCities: [
    "Panaji (capital, Mandovi River, Latin Quarter Fontainhas)",
    "Vasco da Gama (largest city, port & naval base)",
    "Margao (cultural hub, Portuguese-style houses, markets)",
    "Mapusa (weekly Friday market, commercial center)",
    "Ponda (spice plantations, temples)",
    "Old Goa (churches, convents, UNESCO sites)"
  ]
},
  "KA": {
  name: "Karnataka",
  capital: "Bengaluru",
  population: "≈70M (2023 est.)",
  area: "191,791 km²",
  largestCity: "Bengaluru",
  language: ["Kannada (official)", "Tulu", "Konkani", "Kodava", "Urdu", "English"],
  knownFor: [
    "Bengaluru – India's Silicon Valley, IT & startups hub",
    "Mysuru Palace (historical royal residence)",
    "Hampi (UNESCO World Heritage site, Vijayanagara ruins)",
    "Jog Falls (one of India’s highest waterfalls)",
    "Coorg (Kodagu – coffee plantations, scenic hills)",
    "Gokarna (beaches & temples)",
    "Badami, Pattadakal, Aihole (Chalukyan temple architecture)",
    "Bandipur & Nagarhole National Parks (tiger reserves)",
    "Shravanabelagola (Gommateshwara Bahubali statue, Jain pilgrimage)",
    "Bidar Fort & Gol Gumbaz (Bijapur)"
  ],
  festivals: [
    "Mysuru Dasara (grand 10-day festival with royal procession)",
    "Ugadi (Kannada New Year)",
    "Makar Sankranti (harvest festival, kite flying)",
    "Karaga Festival (Bengaluru’s oldest folk festival)",
    "Deepavali",
    "Eid",
    "Vairamudi Festival (Melkote, Vishnu temple procession)"
  ],
  agriculture: [
    "Rice (main staple in coastal & southern Karnataka)",
    "Ragi (finger millet, important staple)",
    "Jowar (sorghum, in northern Karnataka)",
    "Pulses (tur, horse gram, green gram)",
    "Sugarcane",
    "Cotton",
    "Coffee (Coorg & Chikmagalur, India’s leading producer)",
    "Arecanut (major crop in Malnad & coastal belt)",
    "Coconut (coastal regions)",
    "Spices (pepper, cardamom, turmeric, ginger)"
  ],
  economy: {
    gdp: "≈$320B (2023 est.)",
    industries: [
      "Information Technology (Bengaluru IT hub, startups, R&D)",
      "Biotechnology (largest hub in India)",
      "Aerospace & defense (HAL, ISRO, DRDO in Bengaluru)",
      "Textiles (cotton, silk – Mysore silk)",
      "Mining (iron ore, manganese, limestone, gold – Kolar Gold Fields)",
      "Agriculture & coffee plantations",
      "Automobile & machine tools (Bengaluru, Hubballi)",
      "Tourism (heritage, wildlife, beaches, hill stations)"
    ]
  },
  culture: {
    folkDances: ["Yakshagana", "Dollu Kunitha", "Veeragase", "Kunitha dances"],
    music: "Carnatic music (Purandara Dasa, Kanakadasa), Janapada (folk songs)",
    cuisine: [
      "Bisi Bele Bath (spiced rice & lentil dish)",
      "Mysore Masala Dosa",
      "Ragi Mudde (millet ball with curry)",
      "Idli, Vada, Sambar",
      "Mangalorean Fish Curry",
      "Coorgi Pandi Curry (pork dish)",
      "Mysore Pak (sweet)",
      "Kesari Bath (sweet semolina dish)",
      "Filter Coffee (famous South Indian style)"
    ]
  },
  importantCities: [
    "Bengaluru (capital, IT hub, aerospace, education)",
    "Mysuru (palace, silk, yoga, Dasara celebrations)",
    "Mangaluru (port city, beaches, education hub)",
    "Hubballi-Dharwad (commercial & educational center)",
    "Belagavi (industrial hub, border city)",
    "Shivamogga (gateway to Western Ghats, Jog Falls)",
    "Ballari (mining hub, near Hampi)"
  ]
},
  "AP": {
  name: "Andhra Pradesh Established: 1 November 1956",
  capital: "Amaravati (planned) | Executive: Visakhapatnam",
  population: "≈54M (2023 est.)",
  area: "162,968 km²",
  largestCity: "Visakhapatnam",
  language: ["Telugu (official)", "Urdu (second official in some districts)", "English"],
  knownFor: [
    "Tirupati Balaji Temple (one of the world’s richest temples)",
    "Amaravati (planned capital, Buddhist heritage site)",
    "Araku Valley (hill station, coffee plantations, Borra Caves)",
    "Belum Caves (longest caves in India, Kurnool)",
    "Lepakshi Temple (hanging pillar, Veerabhadra temple)",
    "Kondapalli Fort & toys (traditional wooden craft)",
    "Srikalahasti Temple (famous for Rahu-Ketu pooja)",
    "Gandikota (Grand Canyon of India)",
    "Mangrove forests (Coringa Wildlife Sanctuary, Kakinada)",
    "Polavaram Project (major irrigation project)"
  ],
  festivals: [
    "Ugadi (Telugu New Year)",
    "Sankranti (harvest festival, kite flying, rangoli competitions)",
    "Brahmotsavam (Tirupati Temple, grand temple festival)",
    "Rath Yatra (Puri tradition observed in Andhra temples too)",
    "Vinayaka Chaturthi",
    "Deepavali",
    "Ram Navami & Dasara",
    "Eid (celebrated widely in Rayalaseema & coastal AP)"
  ],
  agriculture: [
    "Rice (known as 'Rice Bowl of India')",
    "Sugarcane",
    "Cotton",
    "Chillies (Guntur famous worldwide for red chillies)",
    "Tobacco (largest producer in India)",
    "Groundnut",
    "Mangoes (Banganapalli, Chittoor district)",
    "Banana",
    "Coconut",
    "Turmeric & pulses"
  ],
  economy: {
    gdp: "≈$180B (2023 est.)",
    industries: [
      "Information Technology (Visakhapatnam, Vijayawada, Tirupati IT hubs)",
      "Pharmaceuticals (Visakhapatnam Pharma City, APIIC)",
      "Agriculture & agro-processing",
      "Textiles (handlooms from Mangalagiri, Venkatagiri, Dharmavaram silk)",
      "Ports & shipping (Visakhapatnam Port, Kakinada, Krishnapatnam)",
      "Power generation (thermal, solar, wind, Polavaram hydro project)",
      "Mining (bauxite, limestone, mica, barytes)",
      "Tourism (temples, beaches, caves, valleys)"
    ]
  },
  culture: {
    folkDances: ["Kuchipudi (classical dance form of AP)", "Bhamakalapam", "Veeranatyam", "Lambadi dance"],
    music: "Carnatic music, Annamacharya keerthanas, Harikatha traditions",
    cuisine: [
      "Pulihora (tamarind rice)",
      "Gongura Pachadi (sorrel leaves chutney, Andhra specialty)",
      "Andhra Biryani (spicy varieties from Vijayawada & Guntur)",
      "Chepala Pulusu (fish curry)",
      "Royyala Iguru (prawn curry)",
      "Kodi Kura (spicy chicken curry)",
      "Boorelu (sweet stuffed dumplings)",
      "Pootharekulu (paper-thin sweet with ghee and sugar)",
      "Mirchi Bajji (spicy snack with Guntur chillies)"
    ]
  },
  importantCities: [
    "Visakhapatnam (largest city, IT & port hub, shipbuilding, tourism)",
    "Vijayawada (business capital, Kanaka Durga Temple, agriculture hub)",
    "Guntur (famous for chillies, textiles, education)",
    "Tirupati (spiritual capital, Tirumala temple)",
    "Kurnool (historic forts, Belum caves, gateway to Rayalaseema)",
    "Rajahmundry (Godavari bridge, cultural center)",
    "Nellore (aquaculture, rice production, Ranganatha Swamy temple)",
    "Kakinada (Coringa mangroves, seafood, port city)"
  ]
},
  "KL": {
  name: "Kerala",
  capital: "Thiruvananthapuram",
  population: "≈35M (2023 est.)",
  area: "38,863 km²",
  largestCity: "Thiruvananthapuram (urban agglomeration: Kochi)",
  language: ["Malayalam (official)", "English", "Tamil", "Tulu", "Kannada"],
  knownFor: [
    "Backwaters of Alleppey & Kumarakom (houseboats, lagoons)",
    "Beaches (Kovalam, Varkala, Marari, Bekal)",
    "Hill stations (Munnar – tea plantations, Wayanad, Idukki)",
    "Ayurveda & traditional healing therapies",
    "Kathakali & Mohiniyattam classical dances",
    "Kalaripayattu (ancient martial art form)",
    "Periyar Wildlife Sanctuary (Thekkady, elephants, tigers)",
    "Sabarimala Temple (Lord Ayyappa pilgrimage)",
    "Padmanabhaswamy Temple (richest Hindu temple, Thiruvananthapuram)",
    "Bekal Fort (historic coastal fort)"
  ],
  festivals: [
    "Onam (harvest festival with Vallam Kali – snake boat race, Pookalam floral carpets)",
    "Vishu (Malayali New Year)",
    "Thrissur Pooram (grand temple festival with elephants, fireworks)",
    "Christmas & Easter (large Christian population)",
    "Eid (celebrated widely among Muslim community)",
    "Attukal Pongala (largest gathering of women for offering)"
  ],
  agriculture: [
    "Coconut (major producer, 'Land of Coconuts')",
    "Rice (paddy fields in Kuttanad – 'Rice Bowl of Kerala')",
    "Rubber (largest producer in India)",
    "Spices (pepper, cardamom, cinnamon, nutmeg, ginger, turmeric)",
    "Bananas & plantains",
    "Tea & coffee (Munnar, Wayanad, Idukki high ranges)",
    "Cashew (major producer and exporter)",
    "Tapioca",
    "Arecanut"
  ],
  economy: {
    gdp: "≈$150B (2023 est.)",
    industries: [
      "Tourism (beaches, backwaters, Ayurveda, eco-tourism)",
      "Spices & plantation crops (pepper, cardamom, tea, coffee, rubber)",
      "Fisheries & seafood exports",
      "Information Technology (Technopark Trivandrum, Infopark Kochi, Cyberpark Kozhikode)",
      "Shipping & shipbuilding (Cochin Shipyard)",
      "Remittances from Gulf countries (huge part of economy)",
      "Handloom & coir industry",
      "Healthcare & Ayurveda"
    ]
  },
  culture: {
    folkDances: ["Kathakali", "Mohiniyattam", "Theyyam", "Thiruvathira", "Oppana"],
    music: "Carnatic music, Sopana Sangeetham (temple music), Mappila songs (folk Islamic songs)",
    cuisine: [
      "Kerala Sadya (traditional feast served on banana leaf – rice, sambar, avial, olan, payasam)",
      "Appam with Stew",
      "Puttu and Kadala Curry",
      "Fish Molee (coconut milk-based curry)",
      "Malabar Biryani",
      "Kerala Parotta with Beef Curry",
      "Tapioca with Fish Curry",
      "Banana Chips",
      "Payasam (dessert)",
      "Toddy (palm wine, traditional drink)"
    ]
  },
  importantCities: [
    "Thiruvananthapuram (capital, Padmanabhaswamy Temple, Technopark)",
    "Kochi (Queen of Arabian Sea, IT hub, port city, historic Fort Kochi)",
    "Kozhikode (Calicut, spice trade, Cyberpark, educational hub)",
    "Thrissur (cultural capital, Thrissur Pooram, temples, churches)",
    "Alappuzha (Alleppey – backwaters, houseboats)",
    "Kollam (cashew hub, backwaters, Ashtamudi Lake)",
    "Kannur (handloom industry, Theyyam, forts)"
  ]
}
,
  "TN": {
  name: "Tamil Nadu",
  capital: "Chennai",
  population: "≈82M (2023 est.)",
  area: "130,058 km²",
  largestCity: "Chennai",
  language: ["Tamil (official, classical language)", "English (secondary)"],
  knownFor: [
    "Brihadeeswarar Temple (UNESCO World Heritage, Thanjavur)",
    "Meenakshi Amman Temple (Madurai, Dravidian architecture)",
    "Marina Beach (second longest urban beach in the world)",
    "Nilgiri Hills & Ooty (Queen of Hill Stations)",
    "Kanyakumari (southernmost tip of mainland India, Vivekananda Rock Memorial)",
    "Mahabalipuram Shore Temples (UNESCO site)",
    "Rameswaram Ramanathaswamy Temple (Jyotirlinga, one of Char Dhams)",
    "Chidambaram Nataraja Temple (cosmic dance of Shiva)",
    "Pichavaram Mangrove Forests",
    "Auroville (international community near Puducherry)"
  ],
  festivals: [
    "Pongal (harvest festival, celebrated for 4 days)",
    "Tamil New Year (Puthandu)",
    "Deepavali",
    "Karthigai Deepam (festival of lights in temples)",
    "Natyanjali Festival (Chidambaram, Bharatanatyam dance)",
    "Thaipusam (dedicated to Lord Murugan)",
    "Navaratri & Dussehra",
    "Christmas (especially in Chennai & coastal districts)"
  ],
  agriculture: [
    "Rice",
    "Sugarcane",
    "Cotton",
    "Millets (ragi, jowar, bajra)",
    "Bananas (largest producer in India)",
    "Mangoes",
    "Coconut",
    "Turmeric",
    "Groundnut",
    "Jasmine & other floriculture"
  ],
  economy: {
    gdp: "≈$330B (2023 est., 2nd largest in India)",
    industries: [
      "Automobile & Auto Components (Chennai – Detroit of India)",
      "Information Technology (Chennai, Coimbatore, Madurai, Trichy)",
      "Textiles & Garments (Coimbatore, Tiruppur, Erode)",
      "Film Industry (Kollywood, Chennai-based cinema hub)",
      "Electronics & Hardware Manufacturing",
      "Agriculture & Food Processing",
      "Tourism (temples, hill stations, beaches)",
      "Wind Energy (largest wind power capacity in India)"
    ]
  },
  culture: {
    folkDances: ["Bharatanatyam (classical dance of Tamil Nadu)", "Karagattam", "Kavadi Aattam", "Oyilattam"],
    music: "Carnatic music, Thevaram hymns, Nadaswaram traditions",
    cuisine: [
      "Idli & Dosa with Sambar and Chutney",
      "Uttapam",
      "Pongal (sweet & savory versions)",
      "Chettinad Chicken (spicy non-veg specialty)",
      "Rasam",
      "Kootu & Poriyal (vegetable dishes)",
      "Filter Coffee (world-famous South Indian coffee)",
      "Murukku & Banana Chips",
      "Payasam (dessert)"
    ]
  },
  importantCities: [
    "Chennai (capital, IT & automobile hub, Marina Beach, cultural city)",
    "Coimbatore (Manchester of South India, textile & engineering hub)",
    "Madurai (ancient city, Meenakshi Temple, cultural capital)",
    "Tiruchirappalli (historic temples, Srirangam, educational hub)",
    "Salem (steel & textile industries)",
    "Tiruppur (garment & knitwear capital of India)",
    "Erode (turmeric city, textile industries)",
    "Vellore (VIT University, Vellore Fort, medical hub)",
    "Kanchipuram (silk sarees, temple city)",
    "Thoothukudi (port city, pearl fishing, salt pans)"
  ]
}
,
  "SK": {
  name: "Sikkim",
  capital: "Gangtok",
  population: "≈0.7M (2023 est.)",
  area: "7,096 km²",
  largestCity: "Gangtok",
  language: ["Nepali (official)", "English", "Sikkimese (Bhutia)", "Lepcha"],
  knownFor: [
    "Kanchenjunga (3rd highest mountain in the world)",
    "Nathu La Pass (Indo-China border trade route)",
    "Rumtek Monastery (largest monastery in Sikkim, Tibetan Buddhism)",
    "Gurudongmar Lake (one of the highest lakes in the world)",
    "Yumthang Valley (Valley of Flowers of Sikkim)",
    "Tsomgo (Changu) Lake (glacial lake near Gangtok)",
    "Zero Point (snow destination in North Sikkim)",
    "Ravangla Buddha Park",
    "Khecheopalri Lake (sacred lake)",
    "Organic Farming (India’s first fully organic state)"
  ],
  festivals: [
    "Losar (Tibetan New Year)",
    "Saga Dawa (Buddhist festival of Lord Buddha’s life events)",
    "Drupka Teshi (Buddha’s first teaching)",
    "Pang Lhabsol (celebration of Mount Kanchenjunga)",
    "Losoong (Sikkimese New Year, harvest festival)",
    "Dasain (Nepali Hindu festival, similar to Dussehra)",
    "Tihar (festival of lights, similar to Diwali)",
    "Bhumchu Festival (Tashiding Monastery, Buddhist water ceremony)"
  ],
  agriculture: [
    "Cardamom (largest producer in India)",
    "Ginger",
    "Oranges",
    "Tea (Temi Tea Estate, famous organic tea)",
    "Buckwheat",
    "Millets",
    "Vegetables (cabbage, cauliflower, peas, potatoes)",
    "Medicinal Plants & Herbs"
  ],
  economy: {
    gdp: "≈$5.8B (2023 est.)",
    industries: [
      "Organic Farming & Horticulture",
      "Hydroelectric Power Projects",
      "Tourism (eco-tourism, adventure tourism, monasteries, trekking)",
      "Handicrafts (thangka paintings, carpets, woodwork)",
      "Tea Industry (Temi Tea, globally known)",
      "Medicinal Plants & Herbal Products"
    ]
  },
  culture: {
    folkDances: ["Mask Dance (Cham)", "Maruni Dance", "Singhi Cham (snow lion dance)", "Yak Dance"],
    music: "Traditional Nepali folk music, Bhutia & Lepcha folk songs, Buddhist chants",
    cuisine: [
      "Momo (steamed dumplings, most famous food of Sikkim)",
      "Thukpa (noodle soup)",
      "Phagshapa (pork dish with radish & chilies)",
      "Gundruk & Sinki (fermented leafy greens)",
      "Sael Roti (Nepali rice bread)",
      "Chhurpi (fermented yak cheese, chewy snack)",
      "Kinema (fermented soybean curry)",
      "Tongba (millet beer, traditional alcoholic drink)"
    ]
  },
  importantCities: [
    "Gangtok (capital, Buddhist monasteries, MG Marg, Tsomgo Lake nearby)",
    "Namchi (Buddha Park, Samdruptse Hill)",
    "Pelling (Kanchenjunga views, Pemayangtse Monastery)",
    "Mangan (North Sikkim headquarters, gateway to Dzongu)",
    "Ravangla (Buddha Park, hot springs nearby)",
    "Geyzing (West Sikkim, trekking base, monasteries)"
  ]
}
,
  "AR": {
  name: "Arunachal Pradesh",
  capital: "Itanagar",
  population: "≈1.6M (2023 est.)",
  area: "83,743 km²",
  largestCity: "Itanagar",
  language: [
    "English (official)",
    "Nyishi",
    "Adi",
    "Apatani",
    "Monpa",
    "Mishmi",
    "Wancho",
    "Nocte",
    "Tagin",
    "Hindi (widely spoken)"
  ],
  knownFor: [
    "Tawang Monastery (largest in India, 2nd largest in the world)",
    "Ziro Valley (UNESCO heritage site nominee, rice cultivation, Ziro Music Festival)",
    "Namdapha National Park (4th largest in India, biodiversity hotspot)",
    "Sela Pass (snow-covered mountain pass)",
    "Bomdila (Buddhist monasteries, apple orchards)",
    "Mechuka Valley (scenic Indo-Tibet border valley)",
    "Dong Village (first sunrise of India)",
    "Siang River (rafting and adventure sports)",
    "Itanagar Wildlife Sanctuary",
    "Snow-capped peaks, dense forests, and tribal heritage"
  ],
  festivals: [
    "Losar (Monpa Tibetan New Year)",
    "Solung (Adi tribe harvest festival)",
    "Nyokum (Nyishi tribe festival for prosperity)",
    "Dree Festival (Apatani agricultural festival)",
    "Mopin (Galo tribe harvest festival)",
    "Si-Donyi (Tagin tribe religious festival)",
    "Reh (Idu Mishmi festival)",
    "Boori Boot (Nyishi festival of community bonding)",
    "Tamladu Festival (Digaru Mishmi festival)",
    "Sanken (Theravada Buddhist water festival)"
  ],
  agriculture: [
    "Rice (main crop, terrace cultivation in Ziro Valley)",
    "Millets",
    "Maize",
    "Oranges (major fruit crop)",
    "Pineapples",
    "Ginger",
    "Cardamom",
    "Sugarcane",
    "Tea (small plantations in foothills)"
  ],
  economy: {
    gdp: "≈$7.5B (2023 est.)",
    industries: [
      "Hydroelectric Power (huge potential, several projects)",
      "Agriculture & Horticulture (rice, fruits, spices)",
      "Tourism (monasteries, valleys, trekking, culture)",
      "Handicrafts (bamboo, cane, weaving)",
      "Tea cultivation",
      "Border trade with Bhutan, China, Myanmar"
    ]
  },
  culture: {
    folkDances: [
      "Ponung (Adi tribe group dance)",
      "Popir (Galo tribe festival dance)",
      "Apatani folk dances",
      "Lion & Peacock dance (Monpa tribe, Buddhist influence)",
      "Wancho and Nocte warrior dances"
    ],
    music: "Tribal folk songs, Buddhist chants, use of drums and gongs",
    cuisine: [
      "Thukpa (Tibetan noodle soup)",
      "Momo (dumplings, Tibetan influence)",
      "Pika Pila (chili pickle, Apatani specialty)",
      "Apong (traditional rice beer)",
      "Bamboo Shoot Curry",
      "Fish, pork, and smoked meats",
      "Lukter (dry meat with chili flakes)",
      "Chura Sabzi (fermented cheese dish)"
    ]
  },
  importantCities: [
    "Itanagar (capital, Ita Fort, Ganga Lake, monasteries)",
    "Tawang (famous for Tawang Monastery, Sela Pass, Indo-China border)",
    "Ziro (valley, UNESCO site, Apatani culture, Ziro Music Festival)",
    "Bomdila (monasteries, apple orchards)",
    "Pasighat (Siang River rafting, oldest town of Arunachal)",
    "Roing (Mehao Lake, Bhismaknagar Fort)",
    "Tezu (Parasuram Kund, Mishmi Hills, museum)",
    "Naharlagun (twin town of Itanagar, transport hub)",
    "Mechuka (beautiful valley near China border, Buddhist monasteries)"
  ]
},
  "AS": {
  name: "Assam",
  capital: "Dispur (in Guwahati)",
  population: "≈36M (2023 est.)",
  area: "78,438 km²",
  largestCity: "Guwahati",
  language: [
    "Assamese (official)",
    "Bengali (official in Barak Valley)",
    "Bodo (official in Bodoland region)",
    "Hindi",
    "English"
  ],
  knownFor: [
    "Assam Tea (world-famous, largest tea-growing region in India)",
    "Kaziranga National Park (UNESCO site, one-horned rhinoceros)",
    "Majuli (world’s largest river island on Brahmaputra)",
    "Brahmaputra River (lifeline of Assam, cultural and economic significance)",
    "Kamakhya Temple (major Shakti Peetha in Guwahati)",
    "Sualkuchi (Manchester of the East, silk weaving hub)",
    "Manas National Park (UNESCO site, tiger reserve)",
    "Dibrugarh (tea city of India)",
    "Wildlife sanctuaries (Orang, Pobitora, Nameri)",
    "Srimanta Sankardev’s Neo-Vaishnavite culture & Satras"
  ],
  festivals: [
    "Bihu (Rongali, Kongali, and Bhogali – main cultural festivals)",
    "Ambubachi Mela (at Kamakhya Temple, fertility festival)",
    "Durga Puja (especially in Barak Valley)",
    "Ali-Ai-Ligang (Mishing tribe festival for agriculture)",
    "Tea Festival (Jorhat, showcasing Assam’s tea heritage)",
    "Raas Mahotsav (Majuli, Vaishnavite festival)",
    "Bordoichila (spring festival linked with Bihu)"
  ],
  agriculture: [
    "Rice (main crop, staple food of Assam)",
    "Tea (world’s largest producer, Assam tea estates)",
    "Jute",
    "Sugarcane",
    "Pulses",
    "Mustard",
    "Fruits (bananas, pineapples, oranges, litchis)",
    "Vegetables (potatoes, brinjal, cabbage)"
  ],
  economy: {
    gdp: "≈$85B (2023 est.)",
    industries: [
      "Tea Industry (Assam tea exported worldwide)",
      "Oil & Natural Gas (Digboi, Asia’s first oil refinery)",
      "Petrochemicals",
      "Silk (Muga silk, Eri silk – unique to Assam)",
      "Handicrafts (bamboo, cane, pottery)",
      "Tourism (wildlife, culture, river island Majuli)",
      "Cement and Paper industries"
    ]
  },
  culture: {
    folkDances: [
      "Bihu Dance (most famous, linked with Bihu festival)",
      "Sattriya Dance (classical dance founded by Srimanta Sankardev)",
      "Bagurumba (Bodo community dance)",
      "Jhumur (tea tribe folk dance)",
      "Ojapali (theatrical folk dance with music & storytelling)"
    ],
    music: "Bihu songs, Goalparia folk songs, traditional Sattriya music, bamboo flutes and dhol",
    cuisine: [
      "Rice with Fish Curry (staple food)",
      "Khar (alkaline dish made with raw papaya & pulses)",
      "Masor Tenga (sour fish curry with tomatoes or lemon)",
      "Duck Curry (with ash gourd)",
      "Pork with Bamboo Shoot (popular among tribal communities)",
      "Aloo Pitika (mashed potato dish with mustard oil)",
      "Pitha (rice cakes, festive sweet)",
      "Laru (coconut or sesame ladoos during Bihu)"
    ]
  },
  importantCities: [
    "Guwahati (largest city, Kamakhya Temple, Umananda Island)",
    "Dispur (state capital)",
    "Dibrugarh (oil & tea industry hub)",
    "Jorhat (tea research, Majuli nearby)",
    "Silchar (Barak Valley, trade center)",
    "Tezpur (cultural hub, Agnigarh Hill, Nameri NP nearby)",
    "Sivasagar (historic Ahom kingdom monuments, Rang Ghar, Talatal Ghar)",
    "Tinsukia (Dibru-Saikhowa NP, tea & oil industries)",
    "Barpeta (Satras of Vaishnavite culture)",
    "North Lakhimpur (gateway to Arunachal Pradesh)"
  ]
},
  "NL": {
  name: "Nagaland",
  capital: "Kohima",
  population: "≈2.3M (2023 est.)",
  area: "16,579 km²",
  largestCity: "Dimapur",
  language: [
    "English (official)",
    "Nagamese (lingua franca, creole)",
    "Ao",
    "Angami",
    "Sema",
    "Lotha",
    "Konyak",
    "Chakhesang",
    "Other Naga tribal languages"
  ],
  knownFor: [
    "Hornbill Festival (grand annual cultural festival, ‘Festival of Festivals’)",
    "Traditional Naga Morungs (youth dormitories, cultural centers)",
    "Mount Saramati (highest peak in Nagaland, 3,841m)",
    "Dzukou Valley (lush valley with seasonal lilies, trekking)",
    "Japfu Peak (famous for giant rhododendron tree, near Kohima)",
    "Naga Shawls & Handicrafts (tribal weaving, beadwork, woodcraft)",
    "WWII Cemetery (Kohima, famous WWII battle site)",
    "Dimapur (commercial hub, gateway to Nagaland)",
    "Tribal Villages (Khonoma – Asia’s first green village, Mokokchung cultural hub)"
  ],
  festivals: [
    "Hornbill Festival (statewide, showcases all Naga tribes)",
    "Moatsu Festival (Ao tribe, marking end of sowing season)",
    "Sekrenyi (Angami tribe purification festival)",
    "Aoleang Festival (Konyak tribe, marking arrival of spring)",
    "Tuluni Festival (Sumi tribe, celebrating fertility & unity)",
    "Metemneo Festival (Yimkhiung tribe, thanksgiving festival)",
    "Christmas (widely celebrated, Christian-majority state)"
  ],
  agriculture: [
    "Rice (main staple, shifting cultivation/jhum)",
    "Maize",
    "Millets",
    "Pulses",
    "Sugarcane",
    "Oilseeds",
    "Fruits (oranges, pineapples, bananas, passion fruit)",
    "Vegetables (potatoes, cabbages, chillies)"
  ],
  economy: {
    gdp: "≈$12B (2023 est.)",
    industries: [
      "Agriculture (jhum cultivation, terrace farming, horticulture)",
      "Handicrafts (weaving, bamboo crafts, wood carving, bead jewelry)",
      "Forest Products (timber, cane, bamboo)",
      "Tourism (tribal festivals, trekking, eco-tourism)",
      "Small-scale industries (handloom, handicrafts, cottage industries)"
    ]
  },
  culture: {
    tribes: [
      "Ao",
      "Angami",
      "Konyak",
      "Sema (Sumi)",
      "Lotha",
      "Chakhesang",
      "Rengma",
      "Zeliang",
      "Yimkhiung",
      "Chang",
      "Phom",
      "Pochury",
      "Khiamniungan"
    ],
    folkDances: [
      "War Dance (performed by various tribes, symbolic of valor)",
      "Folk Harvest Dances (thanksgiving to nature)",
      "Aoling Dance (Konyak tribe)",
      "Zeliang Dance (community dance during festivals)"
    ],
    music: "Folk songs with log drums, bamboo flutes, gongs, and modern Naga rock bands",
    cuisine: [
      "Smoked Pork with Bamboo Shoot (signature dish)",
      "Axone (fermented soybean, used in chutneys and curries)",
      "Anishi (fermented yam leaves curry)",
      "Galho (rice porridge with vegetables/meat, like khichdi)",
      "Zutho (local rice beer)",
      "Dry Fish Curry",
      "Chutneys (made with king chillies – Bhut Jolokia)"
    ]
  },
  importantCities: [
    "Kohima (capital, WWII Cemetery, Dzukou Valley nearby)",
    "Dimapur (largest city, commercial hub, airport, gateway to state)",
    "Mokokchung (cultural hub of Ao Nagas)",
    "Mon (home of Konyak Nagas, known for tattooed warriors)",
    "Tuensang (major tribal and cultural center)",
    "Wokha (home of Lotha tribe, Doyang Lake nearby)",
    "Zunheboto (known for Sumi Nagas, Sumi Baptist Church)",
    "Phek (near Japfu Peak, known for Chakesang culture)"
  ]
}
,
  "ML": {
  name: "Meghalaya",
  capital: "Shillong",
  population: "≈3.8M (2023 est.)",
  area: "22,429 km²",
  largestCity: "Shillong",
  language: [
    "English (official)",
    "Khasi",
    "Garo",
    "Pnar (Jaintia)",
    "Hindi",
    "Bengali",
    "Nepali"
  ],
  knownFor: [
    "Cherrapunji & Mawsynram (wettest places on Earth, record rainfall)",
    "Living Root Bridges (unique bio-engineering by Khasi & Jaintia tribes)",
    "Shillong (Scotland of the East, hill station, rock music capital)",
    "Mawlynnong (Asia’s cleanest village)",
    "Umiam Lake (popular for water sports near Shillong)",
    "Shillong Peak (highest point near city with panoramic views)",
    "Nohkalikai Falls (tallest plunge waterfall in India, near Cherrapunji)",
    "Dawki River (Umngot River with crystal-clear waters, boat rides)",
    "Sacred Groves (preserved forests by Khasi tribes)",
    "Garo Hills (wildlife, Nokrek National Park, Balpakram National Park)"
  ],
  festivals: [
    "Shad Suk Mynsiem (Khasi spring dance festival)",
    "Nongkrem Dance Festival (Khasi thanksgiving festival)",
    "Behdienkhlam (Jaintia festival driving away evil spirits)",
    "Wangala Festival (Garo post-harvest festival dedicated to Sun God)",
    "Christmas (widely celebrated, large Christian population)"
  ],
  agriculture: [
    "Rice (staple crop, both plain & terrace farming)",
    "Maize",
    "Millets",
    "Pulses",
    "Spices (ginger, turmeric, black pepper, bay leaf)",
    "Fruits (oranges, pineapples, bananas, litchis, jackfruit)",
    "Betel Leaf & Areca Nut (important cash crops)",
    "Tea & Coffee (grown in some parts)"
  ],
  economy: {
    gdp: "≈$16B (2023 est.)",
    industries: [
      "Agriculture & Horticulture (fruits, spices, plantation crops)",
      "Tourism (waterfalls, living root bridges, eco-tourism)",
      "Handicrafts (bamboo & cane crafts, weaving, wood carving)",
      "Cottage Industries (weaving, handloom shawls, tribal jewelry)",
      "Mining (coal & limestone, though declining due to regulations)"
    ]
  },
  culture: {
    tribes: [
      "Khasi",
      "Garo",
      "Jaintia (Pnar)",
      "Other smaller tribal groups"
    ],
    folkDances: [
      "Shad Suk Mynsiem (Khasi traditional dance of joy & thanksgiving)",
      "Nongkrem Dance (Khasi ritual harvest dance)",
      "Wangala Dance (Garo harvest festival dance with drums & flutes)",
      "Behdienkhlam Ritual Dance (Jaintia ceremonial festival dance)"
    ],
    music: "Shillong is the ‘Rock Capital of India’; famous for western music bands, choirs, and folk music using drums, flutes, and traditional instruments.",
    cuisine: [
      "Jadoh (red rice cooked with pork & spices, signature Khasi dish)",
      "Dohneiiong (pork with black sesame seeds)",
      "Tungrymbai (fermented soybean chutney)",
      "Nakham Bitchi (Garo hot fish soup with chilies)",
      "Pumaloi (steamed rice dish)",
      "Dohkhlieh (pork salad with onions, chillies, ginger)",
      "Kyat (local rice beer)",
      "Bamboo Shoot Curries"
    ]
  },
  importantCities: [
    "Shillong (capital, cultural hub, educational & music center)",
    "Tura (largest town in Garo Hills, close to Nokrek & Balpakram National Parks)",
    "Jowai (Jaintia Hills, known for Behdienkhlam Festival)",
    "Nongpoh (gateway town between Guwahati & Shillong)",
    "Baghmara (near Balpakram National Park)",
    "Cherrapunji (tourist town famous for waterfalls & rainfall)"
  ]
},
  "MN": {
  name: "Manipur",
  capital: "Imphal",
  population: "≈3.1M (2023 est.)",
  area: "22,327 km²",
  largestCity: "Imphal",
  language: [
    "Meitei (Manipuri, official)",
    "English (official)",
    "Hindi",
    "Tangkhul",
    "Thadou",
    "Paite",
    "Hmar",
    "Other Naga & Kuki dialects"
  ],
  knownFor: [
    "Loktak Lake (largest freshwater lake in Northeast India, with floating phumdis)",
    "Keibul Lamjao National Park (only floating national park in the world, home to Sangai deer)",
    "Ima Keithel (all-women run market, unique in Asia)",
    "Kangla Fort (historic & cultural heritage site in Imphal)",
    "Manipuri Classical Dance (Raas Leela, devotional dance form)",
    "Shirui Lily (rare flower found only in Ukhrul district)",
    "Polo (originated in Manipur, known as Sagol Kangjei)",
    "Dzuko Valley (shared with Nagaland, trekking destination)",
    "Thalon Cave (prehistoric caves of archaeological significance)",
    "Ukhrul Hills (beautiful landscapes, Tangkhul Naga culture)"
  ],
  festivals: [
    "Yaoshang (Manipuri version of Holi, with Thabal Chongba folk dance)",
    "Cheiraoba (Manipuri New Year festival)",
    "Ningol Chakouba (festival where married women visit parental homes)",
    "Lai Haraoba (festival of deities with dance & rituals)",
    "Kang Festival (Rath Yatra in Manipur)",
    "Kut Festival (Kuki-Chin-Mizo harvest festival)"
  ],
  agriculture: [
    "Rice (staple crop, grown in valley & hill terraces)",
    "Pulses",
    "Maize",
    "Oilseeds (mustard, soybean, sunflower)",
    "Fruits (pineapple, orange, lemon, banana, passion fruit)",
    "Vegetables (ginger, turmeric, chilli)",
    "Tea & Bamboo (grown in hills)"
  ],
  economy: {
    gdp: "≈$15B (2023 est.)",
    industries: [
      "Agriculture (paddy, fruits, spices, bamboo)",
      "Handloom & Handicrafts (shawls, bamboo crafts, wood carving)",
      "Tourism (cultural heritage, Loktak Lake, Dzuko Valley)",
      "Sports (polo, boxing, football, weightlifting, archery)",
      "Small-scale industries (sericulture, weaving, pottery)"
    ]
  },
  culture: {
    tribes: [
      "Meitei (majority in Imphal Valley)",
      "Nagas (Tangkhul, Mao, Rongmei, Zeme, Poumai, etc.)",
      "Kukis (Thadou, Paite, Hmar, Simte, Zou, etc.)",
      "Other smaller tribal groups"
    ],
    folkDances: [
      "Raas Leela (classical Manipuri dance based on Krishna & Radha)",
      "Thabal Chongba (folk dance during Yaoshang festival)",
      "Lai Haraoba Dance (ritualistic dance dedicated to deities)",
      "Kabui Naga Dance (performed by Kabui Nagas during festivals)"
    ],
    music: "Manipuri music blends devotional songs (Raas Leela), tribal folk instruments (drums, pena, flutes), and modern genres. Pena (single-stringed instrument) is iconic.",
    cuisine: [
      "Eromba (spicy mashed dish of boiled vegetables with fermented fish)",
      "Ngari (fermented fish used in many dishes)",
      "Chamthong / Kangsoi (vegetable stew with herbs)",
      "Singju (spicy Manipuri salad)",
      "Morok Metpa (chilli chutney with ngari)",
      "Nga Atoiba Thongba (fish curry)",
      "Paknam (steamed dish made of gram flour, vegetables & herbs wrapped in banana leaf)",
      "Chak-hao Kheer (black rice pudding, unique Manipuri dessert)"
    ]
  },
  importantCities: [
    "Imphal (capital, cultural & economic hub)",
    "Ukhrul (famous for Shirui Lily, Tangkhul Naga culture)",
    "Churachandpur (trade & multi-tribal cultural center)",
    "Thoubal (agriculture & handloom center)",
    "Bishnupur (historic temples & Loktak Lake access)",
    "Senapati (gateway to Dzuko Valley, Naga cultural hub)"
  ]
},
  "MZ": {
  name: "Mizoram",
  capital: "Aizawl",
  population: "≈1.3M (2023 est.)",
  area: "21,081 km²",
  largestCity: "Aizawl",
  language: [
    "Mizo (Lusei, official)",
    "English (official)",
    "Hindi",
    "Hmar",
    "Paite",
    "Mara",
    "Chakma"
  ],
  knownFor: [
    "Durtlang Hills (scenic views of Aizawl city)",
    "Blue Mountain / Phawngpui (highest peak of Mizoram, 2,157 m)",
    "Reiek Tlang (hill & cultural village near Aizawl)",
    "Chapchar Kut (largest traditional festival)",
    "Tam Dil Lake (serene natural lake, boating & camping)",
    "Vantawng Falls (tallest waterfall in Mizoram, 229m)",
    "Murlen National Park (dense forest, rich biodiversity)",
    "Dampa Tiger Reserve (largest wildlife sanctuary in Mizoram)",
    "Thenzawl (handloom weaving hub, golf course, adventure tourism)",
    "Lunglei (second largest town, scenic landscapes)",
    "Rih Dil (heart-shaped lake in Myanmar, culturally significant to Mizos)"
  ],
  festivals: [
    "Chapchar Kut (spring festival, celebrated with bamboo dance & music)",
    "Mim Kut (harvest festival, offering first maize to ancestors)",
    "Pawl Kut (harvest festival, thanksgiving for good harvest)",
    "Christmas (widely celebrated due to Christian majority)",
    "New Year Festival (church gatherings, cultural programs)"
  ],
  agriculture: [
    "Rice (shifting cultivation / jhum & valley cultivation)",
    "Maize",
    "Oilseeds (sesame, mustard)",
    "Vegetables (cabbage, beans, chillies)",
    "Fruits (oranges, bananas, pineapples, passion fruit)",
    "Ginger & Turmeric",
    "Bamboo (widely grown, used for craft & construction)"
  ],
  economy: {
    gdp: "≈$5B (2023 est.)",
    industries: [
      "Agriculture (rice, fruits, ginger, turmeric)",
      "Bamboo & Cane Products (handicrafts, furniture, mats, baskets)",
      "Handloom & Weaving (traditional puan textiles)",
      "Tourism (cultural festivals, trekking, waterfalls)",
      "Forestry & Cottage industries",
      "Sericulture (silk production, small scale)"
    ]
  },
  culture: {
    tribes: [
      "Mizo (Lusei, Hmar, Ralte, Paite, Lai, Mara, Chakma, etc.)",
      "Majority follow Christianity (Presbyterian, Baptist, Catholic)"
    ],
    folkDances: [
      "Cheraw Dance (bamboo dance, most famous dance of Mizoram)",
      "Khuallam (dance of hospitality performed during festivals)",
      "Chheihlam (group dance performed with singing & drumming)",
      "Chai Dance (traditional dance of celebration)"
    ],
    music: "Strong influence of Western music & church hymns. Mizo youth actively engage in rock, gospel, and folk fusion. Traditional instruments: Khuang (drum), Tuium (flute), Darkhuang (gong).",
    cuisine: [
      "Bai (steamed dish with vegetables, bamboo shoot, pork/fish)",
      "Sawhchiar (rice cooked with meat or chicken)",
      "Vawksa Rep (smoked pork delicacy)",
      "Chhum Han (steamed vegetables with herbs)",
      "Arsa Buhchiar (rice porridge with meat)",
      "Sanpiau (rice porridge with tangy sauce)",
      "Bekang (fermented soybean, staple in many dishes)",
      "Sawhchiar (rice & meat one-pot dish)"
    ]
  },
  importantCities: [
    "Aizawl (capital, cultural & administrative center)",
    "Lunglei (largest town after Aizawl, scenic & commercial hub)",
    "Champhai (border trade town with Myanmar, wine & grapes)",
    "Serchhip (famous for Vantawng Falls & handloom weaving)",
    "Kolasib (agriculture & fruit-growing region)",
    "Saiha (home of Mara tribe, gateway to Palak Lake)"
  ]
},
  "TR": {
  name: "Tripura",
  capital: "Agartala",
  population: "≈4.2M (2023 est.)",
  area: "10,491 km²",
  largestCity: "Agartala",
  language: [
    "Bengali (official)",
    "Kokborok (Tripuri, official)",
    "English",
    "Manipuri",
    "Mog",
    "Chakma"
  ],
  knownFor: [
    "Ujjayanta Palace (royal palace in Agartala, now a museum)",
    "Neermahal (Lake palace in Melaghar, ‘Lake Palace of Tripura’)",
    "Tripura Sundari Temple (51 Shakti Peethas, one of the holiest sites)",
    "Sepahijala Wildlife Sanctuary (clouded leopards, migratory birds)",
    "Unakoti Hills (rock carvings & sculptures, Shaivite pilgrimage site)",
    "Jampui Hills (orange plantations, panoramic sunrise & sunset)",
    "Dumboor Lake (island-studded freshwater lake, migratory birds)",
    "Heritage Park (Agartala, miniature Tripura attractions)",
    "Chabimura (rock carvings of deities along river bank)",
    "Pilak (Buddhist and Hindu archaeological site)",
    "Buddhist Stupa at Boxanagar (ancient Buddhist relic site)"
  ],
  festivals: [
    "Kharchi Puja (worship of 14 deities, major state festival)",
    "Durga Puja (grand celebration across Tripura)",
    "Diwali (widely celebrated in Agartala & towns)",
    "Poush Sankranti (harvest festival, tribal fairs)",
    "Garia Puja (tribal festival praying for prosperity)",
    "Ashokastami Mela (at Unakoti, cultural & spiritual fair)"
  ],
  agriculture: [
    "Rice (main crop, staple food)",
    "Pineapple (Queen Pineapple, GI-tagged)",
    "Jackfruit",
    "Tea (Tripura is India’s 5th largest tea-producing state)",
    "Rubber (major plantation crop)",
    "Bamboo & Cane",
    "Oilseeds (mustard, sesame)",
    "Horticulture (banana, papaya, orange, litchi)"
  ],
  economy: {
    gdp: "≈$8B (2023 est.)",
    industries: [
      "Tea Industry (over 58 tea estates)",
      "Natural Rubber Industry (2nd largest producer in India)",
      "Bamboo & Handicrafts (furniture, mats, baskets, toys)",
      "Handloom & Textiles (tribal traditional wear like Rignai, Risa)",
      "Food Processing (pineapple, jackfruit, orange products)",
      "Tourism (palaces, rock carvings, wildlife sanctuaries)",
      "Information Technology (emerging IT hubs in Agartala)"
    ]
  },
  culture: {
    tribes: [
      "Tripuri",
      "Reang (Bru)",
      "Jamatia",
      "Noatia",
      "Chakma",
      "Mog",
      "Halams"
    ],
    folkDances: [
      "Hojagiri Dance (Reang women balancing on earthen pitchers)",
      "Lebang Boomani (performed during Lebang insect catching season)",
      "Garia Dance (performed during Garia Puja festival)",
      "Bizu Dance (Chakma community, during New Year)",
      "Wangala Dance (performed by Garo tribe)"
    ],
    music: "Traditional tribal music uses instruments like Kham (drum), Sumui (flute), Sarinda. Folk songs include love songs, religious chants, and ballads of kings. Modern Bengali music also popular in urban Tripura.",
    cuisine: [
      "Mui Borok (traditional Tripuri platter with rice, meat, and vegetables)",
      "Wahan Mosdeng (spicy chutney made with pork, green chilli, onion, garlic)",
      "Chakhwi (bamboo shoot curry with pork or chicken)",
      "Berma (fermented dry fish, central to Tripuri cuisine)",
      "Mosdeng Serma (chilli chutney with fermented fish)",
      "Rice Beer (local beverage prepared during festivals)"
    ]
  },
  importantCities: [
    "Agartala (capital, administrative & cultural hub)",
    "Udaipur (historic Tripura Sundari Temple, cultural town)",
    "Dharmanagar (trade hub, gateway to North Tripura)",
    "Kailashahar (near Unakoti rock carvings, historic capital of Tripura kingdom)",
    "Ambassa (cultural center of Dhalai district)",
    "Belonia (border town, emerging trade center)"
  ]
},
  "DD": {
  name: "Daman and Diu",
  capital: "Daman",
  population: "≈0.24M (2023 est.)",
  area: "112 km²",
  largestCity: "Daman",
  language: [
    "Gujarati (widely spoken)",
    "Hindi",
    "Marathi",
    "English",
    "Konkani",
    "Portuguese (heritage influence, still used in some churches)"
  ],
  knownFor: [
    "Diu Fort (Portuguese fort overlooking Arabian Sea, UNESCO tentative site)",
    "Nagoa Beach (famous beach in Diu, water sports hub)",
    "Jampore Beach (quiet beach in Daman)",
    "Devka Beach (popular sunset spot in Daman)",
    "St. Paul’s Church (Portuguese Baroque-style church in Diu)",
    "Se Cathedral (historic Portuguese church in Diu)",
    "Bom Jesus Church (one of the oldest churches in Daman)",
    "Diu Museum (St. Thomas Church, now museum of Portuguese artifacts)",
    "Diu Lighthouse (offering panoramic sea views)",
    "Naida Caves (natural caves with Portuguese touches, Diu)"
  ],
  festivals: [
    "Nariyal Poornima (offering coconuts to sea for safety of fishermen)",
    "Navratri (dandiya and garba celebrations)",
    "Diwali (widely celebrated in both Daman & Diu)",
    "Christmas (grand Portuguese-style celebrations with midnight mass)",
    "Festa de Diu (Asia’s longest beach festival, concerts, cultural events)"
  ],
  agriculture: [
    "Coconut (widely cultivated along coastal belt)",
    "Banana",
    "Mango",
    "Cashew",
    "Sapota (Chikoo, locally famous fruit)",
    "Rice (limited cultivation due to area)",
    "Vegetables & Spices (grown for local use)"
  ],
  economy: {
    gdp: "≈$2.5B (2023 est., merged with Dadra & Nagar Haveli)",
    industries: [
      "Tourism (beaches, forts, Portuguese heritage sites)",
      "Liquor Industry (duty-free alcohol, attracts visitors from Gujarat & Maharashtra)",
      "Fishing & Fish Processing (Diu is a major fishing hub)",
      "Handicrafts (shell crafts, bamboo mats, wooden artifacts)",
      "Horticulture (coconut, chikoo, banana-based industries)",
      "Power Generation (industrial hub in Daman)"
    ]
  },
  culture: {
    heritage: [
      "Portuguese Colonial Heritage (churches, forts, traditions)",
      "Indo-Portuguese Architecture (seen in Diu’s churches & homes)",
      "Folk music blending Gujarati, Konkani & Portuguese influences"
    ],
    folkDances: [
      "Mando Dance (influenced by Portuguese tradition)",
      "Dandiya & Garba (Gujarati dance forms during Navratri)",
      "Portuguese Folk Songs (sung during church feasts & festivals)"
    ],
    cuisine: [
      "Fish Curry Rice (staple coastal dish)",
      "Vindaloo (Portuguese-style spicy pork curry)",
      "Feni (cashew/coconut liquor, Goan influence)",
      "Diu Prawn Curry",
      "Bebinca (Portuguese layered dessert)",
      "Patra ni Machhi (Parsi-style steamed fish, also popular here)",
      "Coconut-based sweets & curries"
    ]
  },
  importantCities: [
    "Daman (administrative capital, beach & heritage city)",
    "Diu (historic Portuguese town, major tourism hub)"
  ]
},
  "DNH": {
  name: "Dadra and Nagar Haveli",
  capital: "Silvassa",
  population: "≈1M (2023 est.)",
  area: "491 km²",
  largestCity: "Silvassa",
  language: [
    "Gujarati",
    "Hindi",
    "Marathi",
    "English",
    "Warli (spoken by Warli tribal community)",
    "Konkani"
  ],
  knownFor: [
    "Warli Art (tribal paintings on mud walls, UNESCO heritage candidate)",
    "Tribal Culture (Warli, Dhodia, Kokna tribes)",
    "Hirwa Van Garden (lush green garden in Silvassa)",
    "Vanganga Lake Garden (Japanese-style garden in Dadra)",
    "Dudhni Lake (famous boating & water sports destination)",
    "Lion Safari Wildlife Park (Vasona, near Silvassa)",
    "Satmaliya Deer Park",
    "Kauncha (scenic village near Madhuban Dam)",
    "Tribal Museum (Silvassa, showcasing tribal heritage)",
    "Swaminarayan Temple (Silvassa)"
  ],
  festivals: [
    "Khanvel Festival (tribal dances, music, and food fair)",
    "Varli Dances during harvest season",
    "Diwali",
    "Holi",
    "Navratri (celebrated with garba and dandiya)",
    "Christmas (celebrated in Silvassa due to Christian population)"
  ],
  agriculture: [
    "Rice (staple crop)",
    "Jowar",
    "Nagli (finger millet, staple for tribal diets)",
    "Turmeric",
    "Sugarcane",
    "Banana",
    "Mango",
    "Sapota (Chikoo)",
    "Vegetables"
  ],
  economy: {
    gdp: "≈$3.5B (2023 est., combined UT GDP with Daman & Diu)",
    industries: [
      "Industrial Hub (Silvassa is home to >3000 small and large industries)",
      "Textiles",
      "Plastics",
      "Pharmaceuticals",
      "Electronics",
      "Chemicals",
      "Tourism (eco-tourism, tribal culture, gardens, lakes)"
    ]
  },
  culture: {
    heritage: [
      "Tribal Heritage (Warli, Dhodia, Kokna tribes)",
      "Warli Painting (geometric tribal art form, world-famous)",
      "Folk music with tribal instruments like Tarpa"
    ],
    folkDances: [
      "Tarpa Dance (performed in circular formations with Tarpa instrument)",
      "Warli Dance (depicting daily life and rituals)",
      "Dhol Dance (tribal rhythmic dance)"
    ],
    cuisine: [
      "Warli Porridge (made from nagli/finger millet)",
      "Rice & Lentil-based Tribal Meals",
      "Fish Curry (common along river belts)",
      "Chutneys made from local herbs & spices",
      "Chikoo-based sweets (Silvassa is famous for chikoo orchards)"
    ]
  },
  importantCities: [
    "Silvassa (capital, industrial & cultural hub)",
    "Khanvel (scenic town near wildlife areas)",
    "Dadra (picturesque town with lake garden)"
  ]
}
};


document.addEventListener("DOMContentLoaded", () => {
  loadAndInjectSVG("map.svg");
});

function typeWriterEffectHTML(el, html, speed = 15, onComplete) {
  el.innerHTML = ""; // clear old content
  let i = 0;

  function type() {
    if (i < html.length) {
      el.innerHTML = html.slice(0, i) + (i % 2 ? "|" : ""); // blinking cursor effect
      i++;
      setTimeout(type, speed);
    } else {
      el.innerHTML = html; // finalize without cursor
      if (typeof onComplete === "function") onComplete();  // ✅ callback after typing done
    }
  }

  type();
}

async function loadAndInjectSVG(svgUrl) {
  const container = document.querySelector(".map-wrapper");
  const infoPanel = document.getElementById("info");
  const tooltip = document.getElementById("tooltip");

  try {
    const res = await fetch(svgUrl);
    if (!res.ok) throw new Error("Failed to fetch " + svgUrl + " (HTTP " + res.status + ")");
    const svgText = await res.text();

    container.innerHTML = svgText;
    const svgEl = container.querySelector("svg");
    if (!svgEl) throw new Error("No <svg> element found inside " + svgUrl);

    // Remove browser default tooltips
    svgEl.querySelectorAll("title").forEach(t => t.remove());

    setupInteractions(svgEl, infoPanel, tooltip);
  } catch (err) {
    console.error(err);
    infoPanel.innerHTML = `<h2>Error</h2><p>Unable to load map.svg: ${err.message}</p>
      <p>Make sure you are running via Live Server / localhost, not opening the file directly.</p>`;
  }
}

function setupInteractions(svgEl, infoPanel, tooltipEl) {
  const interactive = svgEl.querySelectorAll("path[id], polygon[id]");

  function showTooltip(text, x, y) {
    tooltipEl.style.left = (x + 12) + "px";
    tooltipEl.style.top = (y + 12) + "px";
    tooltipEl.textContent = text;
    tooltipEl.style.display = "block";
  }
  function hideTooltip() {
    tooltipEl.style.display = "none";
  }

  interactive.forEach(el => {
    const id = el.getAttribute("id");
    const data = id && stateInfo[id];
    const label = data?.name || id;

    el.setAttribute("tabindex", "-1");
    el.style.outline = "none";
    el.style.cursor = "url('pin.png') 12 12, pointer";

    el.addEventListener("mouseenter", (ev) => {
      el.classList.add("hovered");
      showTooltip(label, ev.pageX, ev.pageY);
    });

    el.addEventListener("mousemove", (ev) => {
      showTooltip(label, ev.pageX, ev.pageY);
    });

    el.addEventListener("mouseleave", () => {
      el.classList.remove("hovered");
      hideTooltip();
    });

    el.addEventListener("click", (ev) => {
      svgEl.querySelectorAll(".highlighted").forEach(s => s.classList.remove("highlighted"));
      el.classList.add("highlighted");

      if (data) {
        const contentHTML = `
          <h2>${data.name}</h2>
          <p><strong>Capital:</strong> ${data.capital}</p>
          <p><strong>Population:</strong> ${data.population}</p>
          <p><strong>Area:</strong> ${data.area}</p>
          <p><strong>Largest City:</strong> ${data.largestCity}</p>
          <p><strong>Languages:</strong> ${(data.language || []).join(", ")}</p>

          <h3>Known For:</h3>
          <ul>${(data.knownFor || []).map(item => `<li>${item}</li>`).join("")}</ul>

          <h3>Festivals:</h3>
          <ul>${(data.festivals || []).map(item => `<li>${item}</li>`).join("")}</ul>

          <h3>Agriculture:</h3>
          <ul>${(data.agriculture || []).map(item => `<li>${item}</li>`).join("")}</ul>

          <h3>Economy:</h3>
          <p><strong>GDP:</strong> ${data.economy?.gdp || "N/A"}</p>
          <ul>${(data.economy?.industries || []).map(item => `<li>${item}</li>`).join("")}</ul>

          <h3>Culture:</h3>
          <p><strong>Folk Dances:</strong> ${(data.culture?.folkDances || []).join(", ")}</p>
          <p><strong>Music:</strong> ${data.culture?.music || ""}</p>
          <p><strong>Cuisine:</strong></p>
          <ul>${(data.culture?.cuisine || []).map(item => `<li>${item}</li>`).join("")}</ul>

          <h3>Important Cities:</h3>
          <ul>${(data.importantCities || []).map(item => `<li>${item}</li>`).join("")}</ul>

          <div style="margin-top:20px; text-align:center;">
            <button id="travelBtn" class="travel-button">Plan Your Travel</button>
          </div>
        `;

        // ✅ Run typewriter, then attach event
        typeWriterEffectHTML(infoPanel, contentHTML, 10, () => {
          const travelBtn = document.getElementById("travelBtn");
          if (travelBtn) {
            travelBtn.addEventListener("click", () => {
              window.location.href = `travel.html?state=${encodeURIComponent(data.name)}`;
            });
          }
        });

      } else {
        const contentHTML = `<h2>No info available</h2><p>Add ${id} to <code>stateInfo</code> in script.js.</p>`;
        typeWriterEffectHTML(infoPanel, contentHTML, 10);
      }

      ev.preventDefault();
    });
  });

  /* --- Sidebar drag-to-resize --- */
  const dragHandle = document.getElementById("dragHandle");
  if (dragHandle) {
    let isDragging = false;

    dragHandle.addEventListener("mousedown", () => {
      isDragging = true;
      document.body.style.userSelect = "none";
    });

    document.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      let newWidth = window.innerWidth - e.clientX - 20; // adjust padding
      newWidth = Math.max(260, Math.min(newWidth, 600)); // clamp
      infoPanel.style.width = newWidth + "px";
    });

    document.addEventListener("mouseup", () => {
      isDragging = false;
      document.body.style.userSelect = "auto";
    });
  }
}
