/**
 * Chhath Geet — Master Songs Database (62 Local Audio Tracks)
 * Clean native local audio tracks from the music/ folder.
 */

const SONGS_DB = [
  {
    "file": "track_01.mp3",
    "title": "Chhathi Maiya Ke Geet",
    "titleHi": "छठी मैया के गीत",
    "artist": "Anu Dubey",
    "day": "sandhya-arghya",
    "category": "modern",
    "id": 1,
    "src": "music/track_01.mp3"
  },
  {
    "file": "track_02.mp3",
    "title": "Aragh Mora Lei Lihi",
    "titleHi": "अरघ मोरा लेई लीहीं",
    "artist": "Devi",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 2,
    "src": "music/track_02.mp3"
  },
  {
    "file": "track_03.mp3",
    "title": "Aragh Mora Lei Lihi (Special)",
    "titleHi": "अरघ मोरा लेई लिहि (भोजपुरी)",
    "artist": "Devi & Niranjan Swaraj",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 3,
    "src": "music/track_03.mp3"
  },
  {
    "file": "track_04.mp3",
    "title": "Haath Jor Mangi Na Manganwa",
    "titleHi": "हाथ जोड़ माँगी ना मँगनवा ए माई",
    "artist": "Pawan Singh & Khushboo Jain",
    "day": "general",
    "category": "modern",
    "id": 4,
    "src": "music/track_04.mp3"
  },
  {
    "file": "track_05.mp3",
    "title": "Darshan Dekhai Dihi",
    "titleHi": "दर्शन देखाई दीही",
    "artist": "Kalpana Patowary & Ritu",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 5,
    "src": "music/track_05.mp3"
  },
  {
    "file": "track_06.mp3",
    "title": "Aahe Maalin",
    "titleHi": "आहे मालिन",
    "artist": "Beauty Pandey",
    "day": "general",
    "category": "aarti",
    "id": 6,
    "src": "music/track_06.mp3"
  },
  {
    "file": "track_07.mp3",
    "title": "Kaanch Hi Baans Ke Bahangiya",
    "titleHi": "काँच ही बाँस के बहंगिया",
    "artist": "Kalpana Patowary",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 7,
    "src": "music/track_07.mp3"
  },
  {
    "file": "track_08.mp3",
    "title": "Kath Ke Re Naiyya",
    "titleHi": "काठ के रे नईया",
    "artist": "Kalpana Patowary",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 8,
    "src": "music/track_08.mp3"
  },
  {
    "file": "track_09.mp3",
    "title": "Chhath Mai Ke Baratiya",
    "titleHi": "छठ माई के बरतिया",
    "artist": "Khesari Lal Yadav",
    "day": "kharna",
    "category": "modern",
    "id": 9,
    "src": "music/track_09.mp3"
  },
  {
    "file": "track_10.mp3",
    "title": "Yug Yug Rakhiha Suhaag",
    "titleHi": "युग युग रखिह सुहाग हे छठी मईया",
    "artist": "Kalpana Patowary",
    "day": "kharna",
    "category": "paramparik",
    "id": 10,
    "src": "music/track_10.mp3"
  },
  {
    "file": "track_11.mp3",
    "title": "Asiya Puran Hoy",
    "titleHi": "आसिया पूरन होय",
    "artist": "Kavita Paudwal",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 11,
    "src": "music/track_11.mp3"
  },
  {
    "file": "track_12.mp3",
    "title": "Baanjhi Kewdwa Dhaile Thaadh",
    "titleHi": "बाँझी केवड़वा धइले ठाढ़",
    "artist": "Sharda Sinha",
    "day": "general",
    "category": "paramparik",
    "id": 12,
    "src": "music/track_12.mp3"
  },
  {
    "file": "track_13.mp3",
    "title": "Bartin Ke Angna Mein",
    "titleHi": "बरतिन के अंगना में",
    "artist": "Sharda Sinha",
    "day": "nahay-khay",
    "category": "paramparik",
    "id": 13,
    "src": "music/track_13.mp3"
  },
  {
    "file": "track_14.mp3",
    "title": "Chaar Hi Chakka Ke Motarva",
    "titleHi": "चार ही चक्का के मोटरवा",
    "artist": "Anuradha Paudwal",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 14,
    "src": "music/track_14.mp3"
  },
  {
    "file": "track_15.mp3",
    "title": "Chhath Karab Hum Jaroor",
    "titleHi": "छठ करब हम जरूर",
    "artist": "Swati Mishra",
    "day": "nahay-khay",
    "category": "modern",
    "id": 15,
    "src": "music/track_15.mp3"
  },
  {
    "file": "track_16.mp3",
    "title": "Chhathi Maiya Bulaye",
    "titleHi": "छठी मैया बुलाये",
    "artist": "Vishal Mishra & Kaushal Kishore",
    "day": "general",
    "category": "modern",
    "id": 16,
    "src": "music/track_16.mp3"
  },
  {
    "file": "track_17.mp3",
    "title": "Dukhwa Mitayin Chhathi Maiya",
    "titleHi": "दुखवा मिटाईं छठी मैया",
    "artist": "Sharda Sinha",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 17,
    "src": "music/track_17.mp3"
  },
  {
    "file": "track_18.mp3",
    "title": "Aahe Aaditmal",
    "titleHi": "आहे आदितमल",
    "artist": "Karina Pandey & Sovita Pandey",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 18,
    "src": "music/track_18.mp3"
  },
  {
    "file": "track_19.mp3",
    "title": "Maiya Bari Sukwar",
    "titleHi": "मईया बारी सुकवार",
    "artist": "Karina Pandey & Sovita Pandey",
    "day": "general",
    "category": "aarti",
    "id": 19,
    "src": "music/track_19.mp3"
  },
  {
    "file": "track_20.mp3",
    "title": "Ganga Ke Kinare",
    "titleHi": "गंगा के किनारे",
    "artist": "Bunny Sagar",
    "day": "sandhya-arghya",
    "category": "modern",
    "id": 20,
    "src": "music/track_20.mp3"
  },
  {
    "file": "track_21.mp3",
    "title": "Hey Dukh Bhanjan",
    "titleHi": "हे दुख भंजन मारुति नंदन",
    "artist": "Hariharan / Traditional",
    "day": "general",
    "category": "aarti",
    "id": 21,
    "src": "music/track_21.mp3"
  },
  {
    "file": "track_22.mp3",
    "title": "Hey Ganga Maiya",
    "titleHi": "हे गंगा मैया",
    "artist": "Sharda Sinha",
    "day": "nahay-khay",
    "category": "paramparik",
    "id": 22,
    "src": "music/track_22.mp3"
  },
  {
    "file": "track_23.mp3",
    "title": "Ho Deenanath (Original)",
    "titleHi": "हो दीनानाथ",
    "artist": "Sharda Sinha",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 23,
    "src": "music/track_23.mp3"
  },
  {
    "file": "track_24.mp3",
    "title": "Ho Deenanath (Mahima)",
    "titleHi": "हो दीनानाथ (महिमा छठी मईया)",
    "artist": "Sharda Sinha",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 24,
    "src": "music/track_24.mp3"
  },
  {
    "file": "track_25.mp3",
    "title": "Jagdamba Ghar Me",
    "titleHi": "जगदम्बा घर में",
    "artist": "Swati Mishra",
    "day": "general",
    "category": "aarti",
    "id": 25,
    "src": "music/track_25.mp3"
  },
  {
    "file": "track_26.mp3",
    "title": "Jai Chhathi Maiya",
    "titleHi": "जय छठी मैया",
    "artist": "Sonu Nigam, Pawan Singh & Khushboo Jain",
    "day": "general",
    "category": "modern",
    "id": 26,
    "src": "music/track_26.mp3"
  },
  {
    "file": "track_27.mp3",
    "title": "Jode Jode Falwa (Duet)",
    "titleHi": "जोड़े जोड़े फलवा (पवन सिंह व पलक मुच्छल)",
    "artist": "Pawan Singh & Palak Muchhal",
    "day": "sandhya-arghya",
    "category": "modern",
    "id": 27,
    "src": "music/track_27.mp3"
  },
  {
    "file": "track_28.mp3",
    "title": "Jode Jode Falwa Suruj Dev",
    "titleHi": "जोड़े जोड़े फलवा सुरुज देव",
    "artist": "Swati Mishra",
    "day": "sandhya-arghya",
    "category": "modern",
    "id": 28,
    "src": "music/track_28.mp3"
  },
  {
    "file": "track_29.mp3",
    "title": "Jode Jode Supwa Tora Chadaibo",
    "titleHi": "जोड़े जोड़े सुपवा तोरा चढ़ाइबो",
    "artist": "Kalpana Patowary",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 29,
    "src": "music/track_29.mp3"
  },
  {
    "file": "track_30.mp3",
    "title": "Kartik Maas Ijoriya",
    "titleHi": "कार्तिक मास इजोरिया",
    "artist": "Sharda Sinha",
    "day": "nahay-khay",
    "category": "paramparik",
    "id": 30,
    "src": "music/track_30.mp3"
  },
  {
    "file": "track_31.mp3",
    "title": "Kehan Samaiya Aele",
    "titleHi": "केहन समईया अइले",
    "artist": "Sharda Sinha",
    "day": "general",
    "category": "paramparik",
    "id": 31,
    "src": "music/track_31.mp3"
  },
  {
    "file": "track_32.mp3",
    "title": "Kelwa Ke Paat Par (Devi)",
    "titleHi": "केलवा के पात पर (देवी)",
    "artist": "Devi",
    "day": "general",
    "category": "paramparik",
    "id": 32,
    "src": "music/track_32.mp3"
  },
  {
    "file": "track_33.mp3",
    "title": "Kopi Kopi Boleli",
    "titleHi": "कोपी कोपी बोलेली",
    "artist": "Devi",
    "day": "general",
    "category": "paramparik",
    "id": 33,
    "src": "music/track_33.mp3"
  },
  {
    "file": "track_34.mp3",
    "title": "Shiv Se Gori Na Vyaha",
    "titleHi": "शिव से गोरी ना ब्याह",
    "artist": "Sharda Sinha",
    "day": "general",
    "category": "paramparik",
    "id": 34,
    "src": "music/track_34.mp3"
  },
  {
    "file": "track_35.mp3",
    "title": "Maarbo Re Sugva Dhanukh Se",
    "titleHi": "मारबो रे सुगवा धनुख से",
    "artist": "Anuradha Paudwal",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 35,
    "src": "music/track_35.mp3"
  },
  {
    "file": "track_36.mp3",
    "title": "Marabo Re Sugava Dhanus Se (Regional)",
    "titleHi": "मारबो रे सुगवा धनुष से (रीजनल)",
    "artist": "Anuradha Paudwal",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 36,
    "src": "music/track_36.mp3"
  },
  {
    "file": "track_37.mp3",
    "title": "Nadiya Ke Teere Teere",
    "titleHi": "नदिया के तीरे तीरे",
    "artist": "Sharda Sinha",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 37,
    "src": "music/track_37.mp3"
  },
  {
    "file": "track_38.mp3",
    "title": "Nimiya Ke Dadh Maiya",
    "titleHi": "निमिया के डाढ़ मैया",
    "artist": "Swati Mishra",
    "day": "general",
    "category": "aarti",
    "id": 38,
    "src": "music/track_38.mp3"
  },
  {
    "file": "track_39.mp3",
    "title": "Pahile Pahil Chhathi Maiya",
    "titleHi": "पहिले पहिल छठी मईया",
    "artist": "Sharda Sinha",
    "day": "nahay-khay",
    "category": "paramparik",
    "id": 39,
    "src": "music/track_39.mp3"
  },
  {
    "file": "track_40.mp3",
    "title": "Parvati Boli Shankar Se",
    "titleHi": "पार्वती बोली शंकर से",
    "artist": "Hansraj Raghuwanshi",
    "day": "general",
    "category": "aarti",
    "id": 40,
    "src": "music/track_40.mp3"
  },
  {
    "file": "track_41.mp3",
    "title": "Kelwa Ke Paat Par (Sharda Sinha)",
    "titleHi": "केलवा के पात पर (शारदा सिन्हा)",
    "artist": "Sharda Sinha",
    "day": "general",
    "category": "paramparik",
    "id": 41,
    "src": "music/track_41.mp3"
  },
  {
    "file": "track_42.mp3",
    "title": "Ugi He Dinanath (Kalpana)",
    "titleHi": "उगी हे दीनानाथ (कल्पना)",
    "artist": "Kalpana Patowary",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 42,
    "src": "music/track_42.mp3"
  },
  {
    "file": "track_43.mp3",
    "title": "Uthau Suruj Bhaile Bihaan",
    "titleHi": "उठाउ सूरुज भईले बिहान",
    "artist": "Sharda Sinha",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 43,
    "src": "music/track_43.mp3"
  },
  {
    "file": "track_44.mp3",
    "title": "Chal Bhauji Hali Hali",
    "titleHi": "चलs भउजी हाली हाली",
    "artist": "Sonu Nigam & Pawan Singh",
    "day": "sandhya-arghya",
    "category": "modern",
    "id": 44,
    "src": "music/track_44.mp3"
  },
  {
    "file": "track_45.mp3",
    "title": "Koshiya Bharaye Lagal",
    "titleHi": "कोशिया भराये लागल",
    "artist": "Neelkamal Singh & Priyanka Singh",
    "day": "kosi",
    "category": "modern",
    "id": 45,
    "src": "music/track_45.mp3"
  },
  {
    "file": "track_46.mp3",
    "title": "Ugi Hey Dinanath (Swati Mishra)",
    "titleHi": "उगी हे दीनानाथ (स्वाति मिश्रा)",
    "artist": "Swati Mishra",
    "day": "usha-arghya",
    "category": "modern",
    "id": 46,
    "src": "music/track_46.mp3"
  },
  {
    "file": "track_47.mp3",
    "title": "Ye Chamak Ye Damak",
    "titleHi": "ये चमक ये दमक",
    "artist": "Pandit Sudhir Vyas",
    "day": "general",
    "category": "aarti",
    "id": 47,
    "src": "music/track_47.mp3"
  },
  {
    "file": "track_48.mp3",
    "title": "Marbo Re Sugwa Dhanush Se",
    "titleHi": "मारबो रे सुगवा धनुष से (कल्पना पटवारी)",
    "artist": "Kalpana Patowary",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 48,
    "src": "music/track_48.mp3"
  },
  {
    "file": "track_49.mp3",
    "title": "Aath Hi Kaath Ke Kothariya",
    "titleHi": "आठ ही काठ के कोठरिया हो दीनानाथ",
    "artist": "K.P. Pranjal",
    "day": "kosi",
    "category": "paramparik",
    "id": 49,
    "src": "music/track_49.mp3"
  },
  {
    "file": "track_50.mp3",
    "title": "Ugi Suruj Dev",
    "titleHi": "उगी सुरुज देव",
    "artist": "Pawan Singh",
    "day": "usha-arghya",
    "category": "modern",
    "id": 50,
    "src": "music/track_50.mp3"
  },
  {
    "file": "track_51.mp3",
    "title": "Kare Mai Kathin Baratiya",
    "titleHi": "करे माई कठिन बरतिया",
    "artist": "Swati Mishra",
    "day": "nahay-khay",
    "category": "modern",
    "id": 51,
    "src": "music/track_51.mp3"
  },
  {
    "file": "track_52.mp3",
    "title": "Kaanch Hi Baans Ke Bahangiya (Aragh Dehab)",
    "titleHi": "काँच ही बाँस के बहँगिया (अरघ देहब)",
    "artist": "Arvind Akela Kallu",
    "day": "sandhya-arghya",
    "category": "modern",
    "id": 52,
    "src": "music/track_52.mp3"
  },
  {
    "file": "track_53.mp3",
    "title": "Ghare Ghare Hota Chhathi Mai Ke Baratiya",
    "titleHi": "घरे घरे होता छठी माई के बरतिया",
    "artist": "Aamrapali Dubey",
    "day": "kharna",
    "category": "modern",
    "id": 53,
    "src": "music/track_53.mp3"
  },
  {
    "file": "track_54.mp3",
    "title": "Chhath Ke Baratiya",
    "titleHi": "छठ के बरतिया",
    "artist": "Sharda Sinha & Aditya Dev",
    "day": "kharna",
    "category": "paramparik",
    "id": 54,
    "src": "music/track_54.mp3"
  },
  {
    "file": "track_55.mp3",
    "title": "Aadit Manaila",
    "titleHi": "आदित मनाईला",
    "artist": "Anuradha Paudwal",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 55,
    "src": "music/track_55.mp3"
  },
  {
    "file": "track_56.mp3",
    "title": "Uga Hai Suraj Dev (320k HQ)",
    "titleHi": "उगs हे सूरज देव (एचडी)",
    "artist": "Anuradha Paudwal",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 56,
    "src": "music/track_56.mp3"
  },
  {
    "file": "track_57.mp3",
    "title": "Uga Hai Suraj Dev (Bhakti Sagar)",
    "titleHi": "उगs हे सूरज देव",
    "artist": "Anuradha Paudwal",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 57,
    "src": "music/track_57.mp3"
  },
  {
    "file": "track_58.mp3",
    "title": "Kaanch Hi Baans Ke Bahangiya (Anuradha Paudwal)",
    "titleHi": "काँच ही बाँस के बहंगिया (अनुराधा पौडवाल)",
    "artist": "Anuradha Paudwal",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 58,
    "src": "music/track_58.mp3"
  },
  {
    "file": "track_59.mp3",
    "title": "Jode Jode Falwa (Pawan Singh 320k)",
    "titleHi": "जोड़े जोड़े फलवा (पवन सिंह)",
    "artist": "Pawan Singh",
    "day": "sandhya-arghya",
    "category": "modern",
    "id": 59,
    "src": "music/track_59.mp3"
  },
  {
    "file": "track_60.mp3",
    "title": "Jode Jode Falwa (Pawan Singh)",
    "titleHi": "जोड़े जोड़े फलवा",
    "artist": "Pawan Singh",
    "day": "sandhya-arghya",
    "category": "modern",
    "id": 60,
    "src": "music/track_60.mp3"
  },
  {
    "file": "track_61.mp3",
    "title": "Shree Hanuman Chalisa",
    "titleHi": "श्री हनुमान चालीसा",
    "artist": "Gulshan Kumar & Hariharan",
    "day": "general",
    "category": "aarti",
    "id": 61,
    "src": "music/track_61.mp3"
  },
  {
    "file": "track_62.mp3",
    "title": "Sankat Mochan Hanuman Ashtak",
    "titleHi": "संकटमोचन हनुमान अष्टक",
    "artist": "Hariharan",
    "day": "general",
    "category": "aarti",
    "id": 62,
    "src": "music/track_62.mp3"
  }
];

// Metadata constants
const DAY_NAMES = {
  'nahay-khay': 'Day 1: Nahay Khay (नहाय खाय)',
  'kharna': 'Day 2: Kharna (खरना)',
  'sandhya-arghya': 'Day 3: Sandhya Arghya (संध्या अर्घ्य)',
  'usha-arghya': 'Day 4: Usha Arghya (उषा अर्घ्य)',
  'kosi': 'Kosi Bharai (कोसी भराई)',
  'general': 'Sarvajanik (सार्वजनिक)'
};

const DAY_COLORS = {
  'nahay-khay': '#2196A6',
  'kharna': '#FF8F00',
  'sandhya-arghya': '#E91E63',
  'usha-arghya': '#FF6B00',
  'kosi': '#9C27B0',
  'general': '#4CAF50'
};

const DAY_ICONS = {
  'nahay-khay': '🌊',
  'kharna': '🌙',
  'sandhya-arghya': '🌅',
  'usha-arghya': '🌄',
  'kosi': '🎋',
  'general': '☀️'
};

const CATEGORY_NAMES = {
  'paramparik': 'Traditional (पारंपरिक)',
  'aarti': 'Aarti & Bhajan (आरती व भजन)',
  'modern': 'Modern (आधुनिक)'
};

// Helper functions
function getFeaturedSongs() {
  return SONGS_DB.slice(0, 6);
}

function getSongsByDay(dayKey) {
  return SONGS_DB.filter(s => s.day === dayKey);
}

function getSongsByCategory(catKey) {
  return SONGS_DB.filter(s => s.category === catKey);
}

function getSongsByArtist(artistName) {
  return SONGS_DB.filter(s => s.artist.toLowerCase().includes(artistName.toLowerCase()));
}

function getAllArtists() {
  const artists = new Set();
  SONGS_DB.forEach(s => {
    if (s.artist) {
      s.artist.split(/[,&]/).forEach(a => artists.add(a.trim()));
    }
  });
  return Array.from(artists).sort();
}

