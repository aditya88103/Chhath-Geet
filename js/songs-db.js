/**
 * Chhath Geet Gatha — Master Songs Database (62 Local Audio Tracks)
 * Clean native local audio tracks from the music/ folder.
 */

const SONGS_DB = [
  {
    "file": "#Anu_Dubey का ये छठ गीत महिलायों के बीच बहुत ही पसंद किया जा रहा है #Chhath #Geet 2023 - Bhakti Wave Series (192k).mp3",
    "title": "Chhathi Maiya Ke Geet",
    "titleHi": "छठी मैया के गीत",
    "artist": "Anu Dubey",
    "day": "sandhya-arghya",
    "category": "modern",
    "id": 1,
    "src": "music/%23Anu_Dubey%20%E0%A4%95%E0%A4%BE%20%E0%A4%AF%E0%A5%87%20%E0%A4%9B%E0%A4%A0%20%E0%A4%97%E0%A5%80%E0%A4%A4%20%E0%A4%AE%E0%A4%B9%E0%A4%BF%E0%A4%B2%E0%A4%BE%E0%A4%AF%E0%A5%8B%E0%A4%82%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A5%80%E0%A4%9A%20%E0%A4%AC%E0%A4%B9%E0%A5%81%E0%A4%A4%20%E0%A4%B9%E0%A5%80%20%E0%A4%AA%E0%A4%B8%E0%A4%82%E0%A4%A6%20%E0%A4%95%E0%A4%BF%E0%A4%AF%E0%A4%BE%20%E0%A4%9C%E0%A4%BE%20%E0%A4%B0%E0%A4%B9%E0%A4%BE%20%E0%A4%B9%E0%A5%88%20%23Chhath%20%23Geet%202023%20-%20Bhakti%20Wave%20Series%20%28192k%29.mp3"
  },
  {
    "file": "#Devi Singer #New #Chhath #Video #Song-अरघ मोरा लेइ लीहीं - Bhojpuri Song 2020 - Pink Music Bhojpuri (192k).mp3",
    "title": "Aragh Mora Lei Lihi",
    "titleHi": "अरघ मोरा लेई लीहीं",
    "artist": "Devi",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 2,
    "src": "music/%23Devi%20Singer%20%23New%20%23Chhath%20%23Video%20%23Song-%E0%A4%85%E0%A4%B0%E0%A4%98%20%E0%A4%AE%E0%A5%8B%E0%A4%B0%E0%A4%BE%20%E0%A4%B2%E0%A5%87%E0%A4%87%20%E0%A4%B2%E0%A5%80%E0%A4%B9%E0%A5%80%E0%A4%82%20-%20Bhojpuri%20Song%202020%20-%20Pink%20Music%20Bhojpuri%20%28192k%29.mp3"
  },
  {
    "file": "#devi song अरघ मोरा लेइ लिहि #newsong #devichhathsong #chhathpuja - Niranjan swaraj official (192k).mp3",
    "title": "Aragh Mora Lei Lihi (Special)",
    "titleHi": "अरघ मोरा लेई लिहि (भोजपुरी)",
    "artist": "Devi & Niranjan Swaraj",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 3,
    "src": "music/%23devi%20song%20%E0%A4%85%E0%A4%B0%E0%A4%98%20%E0%A4%AE%E0%A5%8B%E0%A4%B0%E0%A4%BE%20%E0%A4%B2%E0%A5%87%E0%A4%87%20%E0%A4%B2%E0%A4%BF%E0%A4%B9%E0%A4%BF%20%23newsong%20%23devichhathsong%20%23chhathpuja%20-%20Niranjan%20swaraj%20official%20%28192k%29.mp3"
  },
  {
    "file": "#Video #Pawan Singh - हाथ ज़ोर माँगी ना मँगनवा ए माई - Khushboo Jain #Bhojpuri Devi Geet 2023 - Tak Tak Music (192k).mp3",
    "title": "Haath Jor Mangi Na Manganwa",
    "titleHi": "हाथ जोड़ माँगी ना मँगनवा ए माई",
    "artist": "Pawan Singh & Khushboo Jain",
    "day": "general",
    "category": "modern",
    "id": 4,
    "src": "music/%23Video%20%23Pawan%20Singh%20-%20%E0%A4%B9%E0%A4%BE%E0%A4%A5%20%E0%A4%9C%E0%A4%BC%E0%A5%8B%E0%A4%B0%20%E0%A4%AE%E0%A4%BE%E0%A4%81%E0%A4%97%E0%A5%80%20%E0%A4%A8%E0%A4%BE%20%E0%A4%AE%E0%A4%81%E0%A4%97%E0%A4%A8%E0%A4%B5%E0%A4%BE%20%E0%A4%8F%20%E0%A4%AE%E0%A4%BE%E0%A4%88%20-%20Khushboo%20Jain%20%23Bhojpuri%20Devi%20Geet%202023%20-%20Tak%20Tak%20Music%20%28192k%29.mp3"
  },
  {
    "file": "#Video - पारम्परिक छठ गीत - दर्शन देखाई दीही- #Kalpana Patawory - #Ritu -Bhojpuri Chhath Geet 2023 - Trimurti Music World (192k).mp3",
    "title": "Darshan Dekhai Dihi",
    "titleHi": "दर्शन देखाई दीही",
    "artist": "Kalpana Patowary & Ritu",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 5,
    "src": "music/%23Video%20-%20%E0%A4%AA%E0%A4%BE%E0%A4%B0%E0%A4%AE%E0%A5%8D%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%95%20%E0%A4%9B%E0%A4%A0%20%E0%A4%97%E0%A5%80%E0%A4%A4%20-%20%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%B6%E0%A4%A8%20%E0%A4%A6%E0%A5%87%E0%A4%96%E0%A4%BE%E0%A4%88%20%E0%A4%A6%E0%A5%80%E0%A4%B9%E0%A5%80-%20%23Kalpana%20Patawory%20-%20%23Ritu%20-Bhojpuri%20Chhath%20Geet%202023%20-%20Trimurti%20Music%20World%20%28192k%29.mp3"
  },
  {
    "file": "#Video आहे मालिन Aahe Maalin #Beauty Pandey Navratri Song 2025 - Sanskar Devotional (192k).mp3",
    "title": "Aahe Maalin",
    "titleHi": "आहे मालिन",
    "artist": "Beauty Pandey",
    "day": "general",
    "category": "aarti",
    "id": 6,
    "src": "music/%23Video%20%E0%A4%86%E0%A4%B9%E0%A5%87%20%E0%A4%AE%E0%A4%BE%E0%A4%B2%E0%A4%BF%E0%A4%A8%20Aahe%20Maalin%20%23Beauty%20Pandey%20Navratri%20Song%202025%20-%20Sanskar%20Devotional%20%28192k%29.mp3"
  },
  {
    "file": "#video कांच ही बाँस के बहंगिया Kalpana Patowary Chhath परंपरा और आधुनिकता का संगम - MUSIC BOX Kalpana Pattowary (192k).mp3",
    "title": "Kaanch Hi Baans Ke Bahangiya",
    "titleHi": "काँच ही बाँस के बहंगिया",
    "artist": "Kalpana Patowary",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 7,
    "src": "music/%23video%20%E0%A4%95%E0%A4%BE%E0%A4%82%E0%A4%9A%20%E0%A4%B9%E0%A5%80%20%E0%A4%AC%E0%A4%BE%E0%A4%81%E0%A4%B8%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%B9%E0%A4%82%E0%A4%97%E0%A4%BF%E0%A4%AF%E0%A4%BE%20Kalpana%20Patowary%20Chhath%20%E0%A4%AA%E0%A4%B0%E0%A4%82%E0%A4%AA%E0%A4%B0%E0%A4%BE%20%E0%A4%94%E0%A4%B0%20%E0%A4%86%E0%A4%A7%E0%A5%81%E0%A4%A8%E0%A4%BF%E0%A4%95%E0%A4%A4%E0%A4%BE%20%E0%A4%95%E0%A4%BE%20%E0%A4%B8%E0%A4%82%E0%A4%97%E0%A4%AE%20-%20MUSIC%20BOX%20Kalpana%20Pattowary%20%28192k%29.mp3"
  },
  {
    "file": "#video काठ के रे नईया Kath Ke Re Naiyya ♪ कल्पना पटवारी छठ गीत - MUSIC BOX Kalpana Pattowary (192k).mp3",
    "title": "Kath Ke Re Naiyya",
    "titleHi": "काठ के रे नईया",
    "artist": "Kalpana Patowary",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 8,
    "src": "music/%23video%20%E0%A4%95%E0%A4%BE%E0%A4%A0%20%E0%A4%95%E0%A5%87%20%E0%A4%B0%E0%A5%87%20%E0%A4%A8%E0%A4%88%E0%A4%AF%E0%A4%BE%20Kath%20Ke%20Re%20Naiyya%20%E2%99%AA%20%E0%A4%95%E0%A4%B2%E0%A5%8D%E0%A4%AA%E0%A4%A8%E0%A4%BE%20%E0%A4%AA%E0%A4%9F%E0%A4%B5%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%9B%E0%A4%A0%20%E0%A4%97%E0%A5%80%E0%A4%A4%20-%20MUSIC%20BOX%20Kalpana%20Pattowary%20%28192k%29.mp3"
  },
  {
    "file": "#Video छठ माई के बरतिया Khesari Lal Yadav Chhath Mai Ke Baratiya Nagin Movie #Chhath Song - Wave Music (192k).mp3",
    "title": "Chhath Mai Ke Baratiya",
    "titleHi": "छठ माई के बरतिया",
    "artist": "Khesari Lal Yadav",
    "day": "kharna",
    "category": "modern",
    "id": 9,
    "src": "music/%23Video%20%E0%A4%9B%E0%A4%A0%20%E0%A4%AE%E0%A4%BE%E0%A4%88%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%B0%E0%A4%A4%E0%A4%BF%E0%A4%AF%E0%A4%BE%20Khesari%20Lal%20Yadav%20Chhath%20Mai%20Ke%20Baratiya%20Nagin%20Movie%20%23Chhath%20Song%20-%20Wave%20Music%20%28192k%29.mp3"
  },
  {
    "file": "#कल्पना का पारम्परिक छठ गीत 2021 युग युग रखिह सुहाग हे छठी मईया Bhojpuri Chath Geet 2021 - Bhojpuri Lokgeet .mp3",
    "title": "Yug Yug Rakhiha Suhaag",
    "titleHi": "युग युग रखिह सुहाग हे छठी मईया",
    "artist": "Kalpana Patowary",
    "day": "kharna",
    "category": "paramparik",
    "id": 10,
    "src": "music/%23%E0%A4%95%E0%A4%B2%E0%A5%8D%E0%A4%AA%E0%A4%A8%E0%A4%BE%20%E0%A4%95%E0%A4%BE%20%E0%A4%AA%E0%A4%BE%E0%A4%B0%E0%A4%AE%E0%A5%8D%E0%A4%AA%E0%A4%B0%E0%A4%BF%E0%A4%95%20%E0%A4%9B%E0%A4%A0%20%E0%A4%97%E0%A5%80%E0%A4%A4%202021%20%E0%A4%AF%E0%A5%81%E0%A4%97%20%E0%A4%AF%E0%A5%81%E0%A4%97%20%E0%A4%B0%E0%A4%96%E0%A4%BF%E0%A4%B9%20%E0%A4%B8%E0%A5%81%E0%A4%B9%E0%A4%BE%E0%A4%97%20%E0%A4%B9%E0%A5%87%20%E0%A4%9B%E0%A4%A0%E0%A5%80%20%E0%A4%AE%E0%A4%88%E0%A4%AF%E0%A4%BE%20Bhojpuri%20Chath%20Geet%202021%20-%20Bhojpuri%20Lokgeet%20.mp3"
  },
  {
    "file": "Asiya Puran Hoy Chhath Pooja Ke Geet KAVITA PAUDWAL Full Audio - T-Series Bhakti Sagar (192k).mp3",
    "title": "Asiya Puran Hoy",
    "titleHi": "आसिया पूरन होय",
    "artist": "Kavita Paudwal",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 11,
    "src": "music/Asiya%20Puran%20Hoy%20Chhath%20Pooja%20Ke%20Geet%20KAVITA%20PAUDWAL%20Full%20Audio%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "Baanjhi Kewdwa Dhaile Thaadh BHOJPURI CHHATH GEET SHARDA SINHA I Full VideoI MAHIMA CHHATHI MAIYA KE - T-Series Bhakti Sagar (192k).mp3",
    "title": "Baanjhi Kewdwa Dhaile Thaadh",
    "titleHi": "बाँझी केवड़वा धइले ठाढ़",
    "artist": "Sharda Sinha",
    "day": "general",
    "category": "paramparik",
    "id": 12,
    "src": "music/Baanjhi%20Kewdwa%20Dhaile%20Thaadh%20BHOJPURI%20CHHATH%20GEET%20SHARDA%20SINHA%20I%20Full%20VideoI%20MAHIMA%20CHHATHI%20MAIYA%20KE%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "Bartin Ke Angna Mein Bhojpuri Chhath Sharda Sinha [Full Song] I Sakal Jagtarni Hey Chhathi Maiya - T-Series Bhakti Sagar (192k).mp3",
    "title": "Bartin Ke Angna Mein",
    "titleHi": "बरतिन के अंगना में",
    "artist": "Sharda Sinha",
    "day": "nahay-khay",
    "category": "paramparik",
    "id": 13,
    "src": "music/Bartin%20Ke%20Angna%20Mein%20Bhojpuri%20Chhath%20Sharda%20Sinha%20%5BFull%20Song%5D%20I%20Sakal%20Jagtarni%20Hey%20Chhathi%20Maiya%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "Chaar Hi Chakka Ke Motarva Bhojpuri Chhath Geet [Full Video] I Chhath Pooja Ke Geet - T-Series Bhakti Sagar (192k).mp3",
    "title": "Chaar Hi Chakka Ke Motarva",
    "titleHi": "चार ही चक्का के मोटरवा",
    "artist": "Anuradha Paudwal",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 14,
    "src": "music/Chaar%20Hi%20Chakka%20Ke%20Motarva%20Bhojpuri%20Chhath%20Geet%20%5BFull%20Video%5D%20I%20Chhath%20Pooja%20Ke%20Geet%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "Chath Karab hum jaroor(छठ करब हम जरूर) Swati Mishra Chath Song 2024 - Swati Mishra bhojpuri (192k).mp3",
    "title": "Chhath Karab Hum Jaroor",
    "titleHi": "छठ करब हम जरूर",
    "artist": "Swati Mishra",
    "day": "nahay-khay",
    "category": "modern",
    "id": 15,
    "src": "music/Chath%20Karab%20hum%20jaroor%28%E0%A4%9B%E0%A4%A0%20%E0%A4%95%E0%A4%B0%E0%A4%AC%20%E0%A4%B9%E0%A4%AE%20%E0%A4%9C%E0%A4%B0%E0%A5%82%E0%A4%B0%29%20Swati%20Mishra%20Chath%20Song%202024%20-%20Swati%20Mishra%20bhojpuri%20%28192k%29.mp3"
  },
  {
    "file": "Chhathi Maiya Bulaye - Vishal Mishra Kaushal Kishore Desh Unplugged Chhath Song 2021 - CLIK RECORDS (192k).mp3",
    "title": "Chhathi Maiya Bulaye",
    "titleHi": "छठी मैया बुलाये",
    "artist": "Vishal Mishra & Kaushal Kishore",
    "day": "general",
    "category": "modern",
    "id": 16,
    "src": "music/Chhathi%20Maiya%20Bulaye%20-%20Vishal%20Mishra%20Kaushal%20Kishore%20Desh%20Unplugged%20Chhath%20Song%202021%20-%20CLIK%20RECORDS%20%28192k%29.mp3"
  },
  {
    "file": "Dukhwa Mitayin Chhathi Maiya Sharda Sinha New Song 2024 Chhath2024 Video Release - Sharda Sinha Official (192k).mp3",
    "title": "Dukhwa Mitayin Chhathi Maiya",
    "titleHi": "दुखवा मिटाईं छठी मैया",
    "artist": "Sharda Sinha",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 17,
    "src": "music/Dukhwa%20Mitayin%20Chhathi%20Maiya%20Sharda%20Sinha%20New%20Song%202024%20Chhath2024%20Video%20Release%20-%20Sharda%20Sinha%20Official%20%28192k%29.mp3"
  },
  {
    "file": "Full Video आहे आदितमल #Karina Pandey #Sovita Pandey Aahe Aaditmal Chhath Special Song 2025 - PANDEY SISTERS OFFICIAL (192k).mp3",
    "title": "Aahe Aaditmal",
    "titleHi": "आहे आदितमल",
    "artist": "Karina Pandey & Sovita Pandey",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 18,
    "src": "music/Full%20Video%20%E0%A4%86%E0%A4%B9%E0%A5%87%20%E0%A4%86%E0%A4%A6%E0%A4%BF%E0%A4%A4%E0%A4%AE%E0%A4%B2%20%23Karina%20Pandey%20%23Sovita%20Pandey%20Aahe%20Aaditmal%20Chhath%20Special%20Song%202025%20-%20PANDEY%20SISTERS%20OFFICIAL%20%28192k%29.mp3"
  },
  {
    "file": "Full Video मईया बारी सुकवार #Karina Pandey #Sovita Pandey Maiya Bari Sukwar Navratri Song - PANDEY SISTERS OFFICIAL (192k).mp3",
    "title": "Maiya Bari Sukwar",
    "titleHi": "मईया बारी सुकवार",
    "artist": "Karina Pandey & Sovita Pandey",
    "day": "general",
    "category": "aarti",
    "id": 19,
    "src": "music/Full%20Video%20%E0%A4%AE%E0%A4%88%E0%A4%AF%E0%A4%BE%20%E0%A4%AC%E0%A4%BE%E0%A4%B0%E0%A5%80%20%E0%A4%B8%E0%A5%81%E0%A4%95%E0%A4%B5%E0%A4%BE%E0%A4%B0%20%23Karina%20Pandey%20%23Sovita%20Pandey%20Maiya%20Bari%20Sukwar%20Navratri%20Song%20-%20PANDEY%20SISTERS%20OFFICIAL%20%28192k%29.mp3"
  },
  {
    "file": "Ganga Ke Kinare Bunny Sagar Kripa Record - Kripa Record (192k).mp3",
    "title": "Ganga Ke Kinare",
    "titleHi": "गंगा के किनारे",
    "artist": "Bunny Sagar",
    "day": "sandhya-arghya",
    "category": "modern",
    "id": 20,
    "src": "music/Ganga%20Ke%20Kinare%20Bunny%20Sagar%20Kripa%20Record%20-%20Kripa%20Record%20%28192k%29.mp3"
  },
  {
    "file": "Hey Dukh Bhanjan Powerful Hanuman Bhajan मन को शांति देने वाला हनुमान भजन Hanuman Chalisa Vibes - NMF BHAKTI (192k).mp3",
    "title": "Hey Dukh Bhanjan",
    "titleHi": "हे दुख भंजन मारुति नंदन",
    "artist": "Hariharan / Traditional",
    "day": "general",
    "category": "aarti",
    "id": 21,
    "src": "music/Hey%20Dukh%20Bhanjan%20Powerful%20Hanuman%20Bhajan%20%E0%A4%AE%E0%A4%A8%20%E0%A4%95%E0%A5%8B%20%E0%A4%B6%E0%A4%BE%E0%A4%82%E0%A4%A4%E0%A4%BF%20%E0%A4%A6%E0%A5%87%E0%A4%A8%E0%A5%87%20%E0%A4%B5%E0%A4%BE%E0%A4%B2%E0%A4%BE%20%E0%A4%B9%E0%A4%A8%E0%A5%81%E0%A4%AE%E0%A4%BE%E0%A4%A8%20%E0%A4%AD%E0%A4%9C%E0%A4%A8%20Hanuman%20Chalisa%20Vibes%20-%20NMF%20BHAKTI%20%28192k%29.mp3"
  },
  {
    "file": "Hey Ganga Maiya By Sharda Sinha Bhojpuri Chhath Songs [Full HD Song] Chhathi Maiya - T-Series Bhakti Sagar (192k).mp3",
    "title": "Hey Ganga Maiya",
    "titleHi": "हे गंगा मैया",
    "artist": "Sharda Sinha",
    "day": "nahay-khay",
    "category": "paramparik",
    "id": 22,
    "src": "music/Hey%20Ganga%20Maiya%20By%20Sharda%20Sinha%20Bhojpuri%20Chhath%20Songs%20%5BFull%20HD%20Song%5D%20Chhathi%20Maiya%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "Ho Deenanath - Sharda Sinha - Topic (192k).mp3",
    "title": "Ho Deenanath (Original)",
    "titleHi": "हो दीनानाथ",
    "artist": "Sharda Sinha",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 23,
    "src": "music/Ho%20Deenanath%20-%20Sharda%20Sinha%20-%20Topic%20%28192k%29.mp3"
  },
  {
    "file": "Ho Deenanath By Sharda Sinha Bhojpuri Chhath Pooja Geet [Full HD Song] I CHHATHI MAIYA - T-Series Bhakti Sagar (192k).mp3",
    "title": "Ho Deenanath (Mahima)",
    "titleHi": "हो दीनानाथ (महिमा छठी मईया)",
    "artist": "Sharda Sinha",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 24,
    "src": "music/Ho%20Deenanath%20By%20Sharda%20Sinha%20Bhojpuri%20Chhath%20Pooja%20Geet%20%5BFull%20HD%20Song%5D%20I%20CHHATHI%20MAIYA%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "Jagdamba Ghar Me Swati Mishra Mohit Musik Bhojpuri Navratri Song 2025 Devi Geet - Swati Mishra bhojpuri (192k).mp3",
    "title": "Jagdamba Ghar Me",
    "titleHi": "जगदम्बा घर में",
    "artist": "Swati Mishra",
    "day": "general",
    "category": "aarti",
    "id": 25,
    "src": "music/Jagdamba%20Ghar%20Me%20Swati%20Mishra%20Mohit%20Musik%20Bhojpuri%20Navratri%20Song%202025%20Devi%20Geet%20-%20Swati%20Mishra%20bhojpuri%20%28192k%29.mp3"
  },
  {
    "file": "Jai Chhathi Maiya Sonu Nigam, Pawan Singh & Khushboo Jain Harshika Poonacha Chhath Geet 2021 - I Believe Music (192k).mp3",
    "title": "Jai Chhathi Maiya",
    "titleHi": "जय छठी मैया",
    "artist": "Sonu Nigam, Pawan Singh & Khushboo Jain",
    "day": "general",
    "category": "modern",
    "id": 26,
    "src": "music/Jai%20Chhathi%20Maiya%20Sonu%20Nigam%2C%20Pawan%20Singh%20%26%20Khushboo%20Jain%20Harshika%20Poonacha%20Chhath%20Geet%202021%20-%20I%20Believe%20Music%20%28192k%29.mp3"
  },
  {
    "file": "Jode Jode Falwa (Pawan Singh & Palak Muchhal) - Bihar Beat (192k).mp3",
    "title": "Jode Jode Falwa (Duet)",
    "titleHi": "जोड़े जोड़े फलवा (पवन सिंह व पलक मुच्छल)",
    "artist": "Pawan Singh & Palak Muchhal",
    "day": "sandhya-arghya",
    "category": "modern",
    "id": 27,
    "src": "music/Jode%20Jode%20Falwa%20%28Pawan%20Singh%20%26%20Palak%20Muchhal%29%20-%20Bihar%20Beat%20%28192k%29.mp3"
  },
  {
    "file": "Jode Jode Falwa Suruj dev Swati Mishra Chath Geet - Swati Mishra (192k).mp3",
    "title": "Jode Jode Falwa Suruj Dev",
    "titleHi": "जोड़े जोड़े फलवा सुरुज देव",
    "artist": "Swati Mishra",
    "day": "sandhya-arghya",
    "category": "modern",
    "id": 28,
    "src": "music/Jode%20Jode%20Falwa%20Suruj%20dev%20Swati%20Mishra%20Chath%20Geet%20-%20Swati%20Mishra%20%28192k%29.mp3"
  },
  {
    "file": "Jode Jode Supwa Tora Chadaibo Bhojpuri Chhath Geet KALPANA [Full Video] I CHHATH GHATE CHALIHA PAPA - T-Series Bhakti Sagar (192k).mp3",
    "title": "Jode Jode Supwa Tora Chadaibo",
    "titleHi": "जोड़े जोड़े सुपवा तोरा चढ़ाइबो",
    "artist": "Kalpana Patowary",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 29,
    "src": "music/Jode%20Jode%20Supwa%20Tora%20Chadaibo%20Bhojpuri%20Chhath%20Geet%20KALPANA%20%5BFull%20Video%5D%20I%20CHHATH%20GHATE%20CHALIHA%20PAPA%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "Kartik Maas Ijoriya Bhojpuri Chhath Geet By Sharda Sinha [Full Song] I Arag - T-Series Bhakti Sagar (192k).mp3",
    "title": "Kartik Maas Ijoriya",
    "titleHi": "कार्तिक मास इजोरिया",
    "artist": "Sharda Sinha",
    "day": "nahay-khay",
    "category": "paramparik",
    "id": 30,
    "src": "music/Kartik%20Maas%20Ijoriya%20Bhojpuri%20Chhath%20Geet%20By%20Sharda%20Sinha%20%5BFull%20Song%5D%20I%20Arag%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "KEHAN SAMAIYA AELE I Bhojpuri Chhath Geet By Sharda Sinha [Full Song] I Arag - T-Series Bhakti Sagar (192k).mp3",
    "title": "Kehan Samaiya Aele",
    "titleHi": "केहन समईया अइले",
    "artist": "Sharda Sinha",
    "day": "general",
    "category": "paramparik",
    "id": 31,
    "src": "music/KEHAN%20SAMAIYA%20AELE%20I%20Bhojpuri%20Chhath%20Geet%20By%20Sharda%20Sinha%20%5BFull%20Song%5D%20I%20Arag%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "KELWA KE PAAT PAR Bhojpuri Chhath Pooja Geet DEVI I Full HD Video Song I BAHANGI CHHATH MAAI KE JAAY - T-Series Bhakti Sagar (192k).mp3",
    "title": "Kelwa Ke Paat Par (Devi)",
    "titleHi": "केलवा के पात पर (देवी)",
    "artist": "Devi",
    "day": "general",
    "category": "paramparik",
    "id": 32,
    "src": "music/KELWA%20KE%20PAAT%20PAR%20Bhojpuri%20Chhath%20Pooja%20Geet%20DEVI%20I%20Full%20HD%20Video%20Song%20I%20BAHANGI%20CHHATH%20MAAI%20KE%20JAAY%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "KOPI KOPI BOLELI Bhojpuri Chhath Pooja Geet DEVI I Full HD Video Song I BAHANGI CHHATH MAAI KE JAAY - T-Series Bhakti Sagar (192k).mp3",
    "title": "Kopi Kopi Boleli",
    "titleHi": "कोपी कोपी बोलेली",
    "artist": "Devi",
    "day": "general",
    "category": "paramparik",
    "id": 33,
    "src": "music/KOPI%20KOPI%20BOLELI%20Bhojpuri%20Chhath%20Pooja%20Geet%20DEVI%20I%20Full%20HD%20Video%20Song%20I%20BAHANGI%20CHHATH%20MAAI%20KE%20JAAY%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "Lyrical Video - SHIV SE GORI NA VYAHA Bhojpuri OLD MEHNDI GEET SINGER - SHARDA SINHA T-Series - T-Series Hamaar Bhojpuri (192k).mp3",
    "title": "Shiv Se Gori Na Vyaha",
    "titleHi": "शिव से गोरी ना ब्याह",
    "artist": "Sharda Sinha",
    "day": "general",
    "category": "paramparik",
    "id": 34,
    "src": "music/Lyrical%20Video%20-%20SHIV%20SE%20GORI%20NA%20VYAHA%20Bhojpuri%20OLD%20MEHNDI%20GEET%20SINGER%20-%20SHARDA%20SINHA%20T-Series%20-%20T-Series%20Hamaar%20Bhojpuri%20%28192k%29.mp3"
  },
  {
    "file": "Maarbo Re Sugva Dhanukh Se Bhojpuri Chhath Songs I ANURADHA PAUDWAL I Bahangi Chhath Mayee Ke Jaay - T-Series Bhakti Sagar (192k).mp3",
    "title": "Maarbo Re Sugva Dhanukh Se",
    "titleHi": "मारबो रे सुगवा धनुख से",
    "artist": "Anuradha Paudwal",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 35,
    "src": "music/Maarbo%20Re%20Sugva%20Dhanukh%20Se%20Bhojpuri%20Chhath%20Songs%20I%20ANURADHA%20PAUDWAL%20I%20Bahangi%20Chhath%20Mayee%20Ke%20Jaay%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "Marabo Re Sugava Dhanus Se [Full Video Song] Hey Chhath Maiya - T-Series Regional (192k).mp3",
    "title": "Marabo Re Sugava Dhanus Se (Regional)",
    "titleHi": "मारबो रे सुगवा धनुष से (रीजनल)",
    "artist": "Anuradha Paudwal",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 36,
    "src": "music/Marabo%20Re%20Sugava%20Dhanus%20Se%20%5BFull%20Video%20Song%5D%20Hey%20Chhath%20Maiya%20-%20T-Series%20Regional%20%28192k%29.mp3"
  },
  {
    "file": "Nadiya Ke Teere Teere Bhojpuri Chhath Geet By Sharda Sinha [Full Song] I Arag - T-Series Bhakti Sagar (192k).mp3",
    "title": "Nadiya Ke Teere Teere",
    "titleHi": "नदिया के तीरे तीरे",
    "artist": "Sharda Sinha",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 37,
    "src": "music/Nadiya%20Ke%20Teere%20Teere%20Bhojpuri%20Chhath%20Geet%20By%20Sharda%20Sinha%20%5BFull%20Song%5D%20I%20Arag%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "Nimiya ke Dadh Maiya Swati Mishra Bhakti Mohit Musik Navratri Special Song - Swati Mishra Bhakti (192k).mp3",
    "title": "Nimiya Ke Dadh Maiya",
    "titleHi": "निमिया के डाढ़ मैया",
    "artist": "Swati Mishra",
    "day": "general",
    "category": "aarti",
    "id": 38,
    "src": "music/Nimiya%20ke%20Dadh%20Maiya%20Swati%20Mishra%20Bhakti%20Mohit%20Musik%20Navratri%20Special%20Song%20-%20Swati%20Mishra%20Bhakti%20%28192k%29.mp3"
  },
  {
    "file": "Pahile Pahil Chhathi Maiya #Sharda Sinha Chhath Song @WorldwideRecordsBhojpuri - Worldwide Records Bhojpuri (192k).mp3",
    "title": "Pahile Pahil Chhathi Maiya",
    "titleHi": "पहिले पहिल छठी मईया",
    "artist": "Sharda Sinha",
    "day": "nahay-khay",
    "category": "paramparik",
    "id": 39,
    "src": "music/Pahile%20Pahil%20Chhathi%20Maiya%20%23Sharda%20Sinha%20Chhath%20Song%20%40WorldwideRecordsBhojpuri%20-%20Worldwide%20Records%20Bhojpuri%20%28192k%29.mp3"
  },
  {
    "file": "Parvati Boli Shankar Se - O Bholenath Ji Hansraj Raghuwanshi Full Song Bhole Baba Song - NAV Records (192k).mp3",
    "title": "Parvati Boli Shankar Se",
    "titleHi": "पार्वती बोली शंकर से",
    "artist": "Hansraj Raghuwanshi",
    "day": "general",
    "category": "aarti",
    "id": 40,
    "src": "music/Parvati%20Boli%20Shankar%20Se%20-%20O%20Bholenath%20Ji%20Hansraj%20Raghuwanshi%20Full%20Song%20Bhole%20Baba%20Song%20-%20NAV%20Records%20%28192k%29.mp3"
  },
  {
    "file": "SHARDA SINHA 🙏शारदा सिन्हा🙏 Kelwa Ke Paat Par with Lyrics Kelva Ke Paat Par🙏🙏 Lyrical Video - T-Series Bhakti Sagar (192k).mp3",
    "title": "Kelwa Ke Paat Par (Sharda Sinha)",
    "titleHi": "केलवा के पात पर (शारदा सिन्हा)",
    "artist": "Sharda Sinha",
    "day": "general",
    "category": "paramparik",
    "id": 41,
    "src": "music/SHARDA%20SINHA%20%F0%9F%99%8F%E0%A4%B6%E0%A4%BE%E0%A4%B0%E0%A4%A6%E0%A4%BE%20%E0%A4%B8%E0%A4%BF%E0%A4%A8%E0%A5%8D%E0%A4%B9%E0%A4%BE%F0%9F%99%8F%20Kelwa%20Ke%20Paat%20Par%20with%20Lyrics%20Kelva%20Ke%20Paat%20Par%F0%9F%99%8F%F0%9F%99%8F%20Lyrical%20Video%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "Ugi He Dinanath उगी हे दीनानाथ Ugi Hey Dinanath Kalpna Bhojpuri Chhath Geet 2025 - Wave Music Bhakti (192k).mp3",
    "title": "Ugi He Dinanath (Kalpana)",
    "titleHi": "उगी हे दीनानाथ (कल्पना)",
    "artist": "Kalpana Patowary",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 42,
    "src": "music/Ugi%20He%20Dinanath%20%E0%A4%89%E0%A4%97%E0%A5%80%20%E0%A4%B9%E0%A5%87%20%E0%A4%A6%E0%A5%80%E0%A4%A8%E0%A4%BE%E0%A4%A8%E0%A4%BE%E0%A4%A5%20Ugi%20Hey%20Dinanath%20Kalpna%20Bhojpuri%20Chhath%20Geet%202025%20-%20Wave%20Music%20Bhakti%20%28192k%29.mp3"
  },
  {
    "file": "Uthau Suruj Bhaile Bihaan By Sharda Sinha Bhojpuri Chhath Songs [Full Song] Chhathi Maiya - T-Series Bhakti Sagar (192k).mp3",
    "title": "Uthau Suruj Bhaile Bihaan",
    "titleHi": "उठाउ सूरुज भईले बिहान",
    "artist": "Sharda Sinha",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 43,
    "src": "music/Uthau%20Suruj%20Bhaile%20Bihaan%20By%20Sharda%20Sinha%20Bhojpuri%20Chhath%20Songs%20%5BFull%20Song%5D%20Chhathi%20Maiya%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "Video #Sonu Nigam & Pawan Singh चलS भउजी हाली हाली Chal Bhauji Hali Bhojpuri Chhath Song 2024 - GM Records Bhojpuri (192k).mp3",
    "title": "Chal Bhauji Hali Hali",
    "titleHi": "चलs भउजी हाली हाली",
    "artist": "Sonu Nigam & Pawan Singh",
    "day": "sandhya-arghya",
    "category": "modern",
    "id": 44,
    "src": "music/Video%20%23Sonu%20Nigam%20%26%20Pawan%20Singh%20%E0%A4%9A%E0%A4%B2S%20%E0%A4%AD%E0%A4%89%E0%A4%9C%E0%A5%80%20%E0%A4%B9%E0%A4%BE%E0%A4%B2%E0%A5%80%20%E0%A4%B9%E0%A4%BE%E0%A4%B2%E0%A5%80%20Chal%20Bhauji%20Hali%20Bhojpuri%20Chhath%20Song%202024%20-%20GM%20Records%20Bhojpuri%20%28192k%29.mp3"
  },
  {
    "file": "Video #छठ_गीत #Neelkamal Singh कोशिया भराये लागल #Priyanka Singh Bhojpuri Chhath Geet 2023 - Neelkamal Singh Shorts (192k).mp3",
    "title": "Koshiya Bharaye Lagal",
    "titleHi": "कोशिया भराये लागल",
    "artist": "Neelkamal Singh & Priyanka Singh",
    "day": "kosi",
    "category": "modern",
    "id": 45,
    "src": "music/Video%20%23%E0%A4%9B%E0%A4%A0_%E0%A4%97%E0%A5%80%E0%A4%A4%20%23Neelkamal%20Singh%20%E0%A4%95%E0%A5%8B%E0%A4%B6%E0%A4%BF%E0%A4%AF%E0%A4%BE%20%E0%A4%AD%E0%A4%B0%E0%A4%BE%E0%A4%AF%E0%A5%87%20%E0%A4%B2%E0%A4%BE%E0%A4%97%E0%A4%B2%20%23Priyanka%20Singh%20Bhojpuri%20Chhath%20Geet%202023%20-%20Neelkamal%20Singh%20Shorts%20%28192k%29.mp3"
  },
  {
    "file": "Video - Ugi Hey Dinanath Swati Mishra New Chhath Geet Chhath Pooja Special Song 2024 - Trishul Music Spiritual (192k).mp3",
    "title": "Ugi Hey Dinanath (Swati Mishra)",
    "titleHi": "उगी हे दीनानाथ (स्वाति मिश्रा)",
    "artist": "Swati Mishra",
    "day": "usha-arghya",
    "category": "modern",
    "id": 46,
    "src": "music/Video%20-%20Ugi%20Hey%20Dinanath%20Swati%20Mishra%20New%20Chhath%20Geet%20Chhath%20Pooja%20Special%20Song%202024%20-%20Trishul%20Music%20Spiritual%20%28192k%29.mp3"
  },
  {
    "file": "Ye Chamak Ye Damak 2.0 Sab Kuch Sarkar Tumhi Se Hai Original Song Sudhir Vyas New Ram Bhajan - Pandit Sudhir Vyas (192k).mp3",
    "title": "Ye Chamak Ye Damak",
    "titleHi": "ये चमक ये दमक",
    "artist": "Pandit Sudhir Vyas",
    "day": "general",
    "category": "aarti",
    "id": 47,
    "src": "music/Ye%20Chamak%20Ye%20Damak%202.0%20Sab%20Kuch%20Sarkar%20Tumhi%20Se%20Hai%20Original%20Song%20Sudhir%20Vyas%20New%20Ram%20Bhajan%20-%20Pandit%20Sudhir%20Vyas%20%28192k%29.mp3"
  },
  {
    "file": "αñ¢αñá αñ¬αñ░αÑìαñ╡ αñòαñ╛ αñ╕αñ¼αñ╕αÑç αñ▓αÑïαñòαñ¬αÑìαñ░αñ┐αñ» αñùαÑÇαññ ΓÇö αñ«αñ╛αñ░αñ¼αÑï αñ░αÑç αñ╕αÑüαñùαñ╡αñ╛ αñºαñ¿αÑüαñ╖ αñ╕αÑç αñòαñ▓αÑìαñ¬αñ¿αñ╛ αñ¬αñƒαñ╡αñ╛αñ░αÑÇ αñòαÑÇ αñ╕αÑìαñ╡αñ░ αñ╕α.mp3",
    "title": "Marbo Re Sugwa Dhanush Se",
    "titleHi": "मारबो रे सुगवा धनुष से (कल्पना पटवारी)",
    "artist": "Kalpana Patowary",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 48,
    "src": "music/%CE%B1%C3%B1%C2%A2%CE%B1%C3%B1%C3%A1%20%CE%B1%C3%B1%C2%AC%CE%B1%C3%B1%E2%96%91%CE%B1%C3%91%C3%AC%CE%B1%C3%B1%E2%95%A1%20%CE%B1%C3%B1%C3%B2%CE%B1%C3%B1%E2%95%9B%20%CE%B1%C3%B1%E2%95%95%CE%B1%C3%B1%C2%BC%CE%B1%C3%B1%E2%95%95%CE%B1%C3%91%C3%A7%20%CE%B1%C3%B1%E2%96%93%CE%B1%C3%91%C3%AF%CE%B1%C3%B1%C3%B2%CE%B1%C3%B1%C2%AC%CE%B1%C3%91%C3%AC%CE%B1%C3%B1%E2%96%91%CE%B1%C3%B1%E2%94%90%CE%B1%C3%B1%C2%BB%20%CE%B1%C3%B1%C3%B9%CE%B1%C3%91%C3%87%CE%B1%C3%B1%C3%B1%20%CE%93%C3%87%C3%B6%20%CE%B1%C3%B1%C2%AB%CE%B1%C3%B1%E2%95%9B%CE%B1%C3%B1%E2%96%91%CE%B1%C3%B1%C2%BC%CE%B1%C3%91%C3%AF%20%CE%B1%C3%B1%E2%96%91%CE%B1%C3%91%C3%A7%20%CE%B1%C3%B1%E2%95%95%CE%B1%C3%91%C3%BC%CE%B1%C3%B1%C3%B9%CE%B1%C3%B1%E2%95%A1%CE%B1%C3%B1%E2%95%9B%20%CE%B1%C3%B1%C2%BA%CE%B1%C3%B1%C2%BF%CE%B1%C3%91%C3%BC%CE%B1%C3%B1%E2%95%96%20%CE%B1%C3%B1%E2%95%95%CE%B1%C3%91%C3%A7%20%CE%B1%C3%B1%C3%B2%CE%B1%C3%B1%E2%96%93%CE%B1%C3%91%C3%AC%CE%B1%C3%B1%C2%AC%CE%B1%C3%B1%C2%BF%CE%B1%C3%B1%E2%95%9B%20%CE%B1%C3%B1%C2%AC%CE%B1%C3%B1%C6%92%CE%B1%C3%B1%E2%95%A1%CE%B1%C3%B1%E2%95%9B%CE%B1%C3%B1%E2%96%91%CE%B1%C3%91%C3%87%20%CE%B1%C3%B1%C3%B2%CE%B1%C3%91%C3%87%20%CE%B1%C3%B1%E2%95%95%CE%B1%C3%91%C3%AC%CE%B1%C3%B1%E2%95%A1%CE%B1%C3%B1%E2%96%91%20%CE%B1%C3%B1%E2%95%95%CE%B1.mp3"
  },
  {
    "file": "आठ ही काठ के कोठरिया हो दीनानाथ । Kath ke kothariya ho dinanaath । Kath ke kothariya - K.P. Pranjl (192k).mp3",
    "title": "Aath Hi Kaath Ke Kothariya",
    "titleHi": "आठ ही काठ के कोठरिया हो दीनानाथ",
    "artist": "K.P. Pranjal",
    "day": "kosi",
    "category": "paramparik",
    "id": 49,
    "src": "music/%E0%A4%86%E0%A4%A0%20%E0%A4%B9%E0%A5%80%20%E0%A4%95%E0%A4%BE%E0%A4%A0%20%E0%A4%95%E0%A5%87%20%E0%A4%95%E0%A5%8B%E0%A4%A0%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE%20%E0%A4%B9%E0%A5%8B%20%E0%A4%A6%E0%A5%80%E0%A4%A8%E0%A4%BE%E0%A4%A8%E0%A4%BE%E0%A4%A5%20%E0%A5%A4%20Kath%20ke%20kothariya%20ho%20dinanaath%20%E0%A5%A4%20Kath%20ke%20kothariya%20-%20K.P.%20Pranjl%20%28192k%29.mp3"
  },
  {
    "file": "उगी सुरुज देव #Pawan Singh New Chhath Geet Video Ugi Suruj Dev Chhath Song 2022 DRJ Records - DRJ Records (192k).mp3",
    "title": "Ugi Suruj Dev",
    "titleHi": "उगी सुरुज देव",
    "artist": "Pawan Singh",
    "day": "usha-arghya",
    "category": "modern",
    "id": 50,
    "src": "music/%E0%A4%89%E0%A4%97%E0%A5%80%20%E0%A4%B8%E0%A5%81%E0%A4%B0%E0%A5%81%E0%A4%9C%20%E0%A4%A6%E0%A5%87%E0%A4%B5%20%23Pawan%20Singh%20New%20Chhath%20Geet%20Video%20Ugi%20Suruj%20Dev%20Chhath%20Song%202022%20DRJ%20Records%20-%20DRJ%20Records%20%28192k%29.mp3"
  },
  {
    "file": "करे माई कठिन बरतिया Lyrics -Swati Mishra Official Chath Song - Swati Mishra (192k).mp3",
    "title": "Kare Mai Kathin Baratiya",
    "titleHi": "करे माई कठिन बरतिया",
    "artist": "Swati Mishra",
    "day": "nahay-khay",
    "category": "modern",
    "id": 51,
    "src": "music/%E0%A4%95%E0%A4%B0%E0%A5%87%20%E0%A4%AE%E0%A4%BE%E0%A4%88%20%E0%A4%95%E0%A4%A0%E0%A4%BF%E0%A4%A8%20%E0%A4%AC%E0%A4%B0%E0%A4%A4%E0%A4%BF%E0%A4%AF%E0%A4%BE%20Lyrics%20-Swati%20Mishra%20Official%20Chath%20Song%20-%20Swati%20Mishra%20%28192k%29.mp3"
  },
  {
    "file": "कांच ही बांस के बहँगिया - Aragh Dehab Suraj Dev Ke Arvind Akela Kalluji Chhath Pooja Song 2025 - Wave Music Bhakti (192k).mp3",
    "title": "Kaanch Hi Baans Ke Bahangiya (Aragh Dehab)",
    "titleHi": "काँच ही बाँस के बहँगिया (अरघ देहब)",
    "artist": "Arvind Akela Kallu",
    "day": "sandhya-arghya",
    "category": "modern",
    "id": 52,
    "src": "music/%E0%A4%95%E0%A4%BE%E0%A4%82%E0%A4%9A%20%E0%A4%B9%E0%A5%80%20%E0%A4%AC%E0%A4%BE%E0%A4%82%E0%A4%B8%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%B9%E0%A4%81%E0%A4%97%E0%A4%BF%E0%A4%AF%E0%A4%BE%20-%20Aragh%20Dehab%20Suraj%20Dev%20Ke%20Arvind%20Akela%20Kalluji%20Chhath%20Pooja%20Song%202025%20-%20Wave%20Music%20Bhakti%20%28192k%29.mp3"
  },
  {
    "file": "घरे घरे होता Chhathi Maai के Varatiya Aamrapali Dubey भोजपुरी Chhath गीत Song 2019 - SRK Music - Bhakti (192k).mp3",
    "title": "Ghare Ghare Hota Chhathi Mai Ke Baratiya",
    "titleHi": "घरे घरे होता छठी माई के बरतिया",
    "artist": "Aamrapali Dubey",
    "day": "kharna",
    "category": "modern",
    "id": 53,
    "src": "music/%E0%A4%98%E0%A4%B0%E0%A5%87%20%E0%A4%98%E0%A4%B0%E0%A5%87%20%E0%A4%B9%E0%A5%8B%E0%A4%A4%E0%A4%BE%20Chhathi%20Maai%20%E0%A4%95%E0%A5%87%20Varatiya%20Aamrapali%20Dubey%20%E0%A4%AD%E0%A5%8B%E0%A4%9C%E0%A4%AA%E0%A5%81%E0%A4%B0%E0%A5%80%20Chhath%20%E0%A4%97%E0%A5%80%E0%A4%A4%20Song%202019%20-%20SRK%20Music%20-%20Bhakti%20%28192k%29.mp3"
  },
  {
    "file": "छठ पूजा I छठ के बरतिया I Chhath Ke Baratiya I Sharda Sinha Aditya Dev I Vishal Singh IAnand Mishra - Apni Dhun Devotional (192k).mp3",
    "title": "Chhath Ke Baratiya",
    "titleHi": "छठ के बरतिया",
    "artist": "Sharda Sinha & Aditya Dev",
    "day": "kharna",
    "category": "paramparik",
    "id": 54,
    "src": "music/%E0%A4%9B%E0%A4%A0%20%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%BE%20I%20%E0%A4%9B%E0%A4%A0%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%B0%E0%A4%A4%E0%A4%BF%E0%A4%AF%E0%A4%BE%20I%20Chhath%20Ke%20Baratiya%20I%20Sharda%20Sinha%20Aditya%20Dev%20I%20Vishal%20Singh%20IAnand%20Mishra%20-%20Apni%20Dhun%20Devotional%20%28192k%29.mp3"
  },
  {
    "file": "छठ पूजा Special आदित मनाईला Aadit Manaila I ANURADHA PAUDWAL I Full HD Video Song - T-Series Bhakti Sagar (192k).mp3",
    "title": "Aadit Manaila",
    "titleHi": "आदित मनाईला",
    "artist": "Anuradha Paudwal",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 55,
    "src": "music/%E0%A4%9B%E0%A4%A0%20%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%BE%20Special%20%E0%A4%86%E0%A4%A6%E0%A4%BF%E0%A4%A4%20%E0%A4%AE%E0%A4%A8%E0%A4%BE%E0%A4%88%E0%A4%B2%E0%A4%BE%20Aadit%20Manaila%20I%20ANURADHA%20PAUDWAL%20I%20Full%20HD%20Video%20Song%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "छठ पूजा Special उगs हे सूरज देव Uga Hai Suraj Dev,ANURADHA PAUDWAL,Hindi English Lyrics,Chhath Puja - (320 Kbps).mp3",
    "title": "Uga Hai Suraj Dev (320k HQ)",
    "titleHi": "उगs हे सूरज देव (एचडी)",
    "artist": "Anuradha Paudwal",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 56,
    "src": "music/%E0%A4%9B%E0%A4%A0%20%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%BE%20Special%20%E0%A4%89%E0%A4%97s%20%E0%A4%B9%E0%A5%87%20%E0%A4%B8%E0%A5%82%E0%A4%B0%E0%A4%9C%20%E0%A4%A6%E0%A5%87%E0%A4%B5%20Uga%20Hai%20Suraj%20Dev%2CANURADHA%20PAUDWAL%2CHindi%20English%20Lyrics%2CChhath%20Puja%20-%20%28320%20Kbps%29.mp3"
  },
  {
    "file": "छठ पूजा Special उगs हे सूरज देव Uga Hai Suraj Dev,ANURADHA PAUDWAL,Hindi English Lyrics,Chhath Puja - T-Series Bhakti Sagar (192k).mp3",
    "title": "Uga Hai Suraj Dev (Bhakti Sagar)",
    "titleHi": "उगs हे सूरज देव",
    "artist": "Anuradha Paudwal",
    "day": "usha-arghya",
    "category": "paramparik",
    "id": 57,
    "src": "music/%E0%A4%9B%E0%A4%A0%20%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%BE%20Special%20%E0%A4%89%E0%A4%97s%20%E0%A4%B9%E0%A5%87%20%E0%A4%B8%E0%A5%82%E0%A4%B0%E0%A4%9C%20%E0%A4%A6%E0%A5%87%E0%A4%B5%20Uga%20Hai%20Suraj%20Dev%2CANURADHA%20PAUDWAL%2CHindi%20English%20Lyrics%2CChhath%20Puja%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "छठ पूजा काँच ही बाँस के बहंगिया WITH LYRICS I Kaanch Hi Baans Ke Bahangiya I ANURADHA PAUDWAL - T-Series Bhakti Sagar (192k).mp3",
    "title": "Kaanch Hi Baans Ke Bahangiya (Anuradha Paudwal)",
    "titleHi": "काँच ही बाँस के बहंगिया (अनुराधा पौडवाल)",
    "artist": "Anuradha Paudwal",
    "day": "sandhya-arghya",
    "category": "paramparik",
    "id": 58,
    "src": "music/%E0%A4%9B%E0%A4%A0%20%E0%A4%AA%E0%A5%82%E0%A4%9C%E0%A4%BE%20%E0%A4%95%E0%A4%BE%E0%A4%81%E0%A4%9A%20%E0%A4%B9%E0%A5%80%20%E0%A4%AC%E0%A4%BE%E0%A4%81%E0%A4%B8%20%E0%A4%95%E0%A5%87%20%E0%A4%AC%E0%A4%B9%E0%A4%82%E0%A4%97%E0%A4%BF%E0%A4%AF%E0%A4%BE%20WITH%20LYRICS%20I%20Kaanch%20Hi%20Baans%20Ke%20Bahangiya%20I%20ANURADHA%20PAUDWAL%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "पवन सिंह का सबसे ज्यादा बजने वाला छठ गीत - जोड़े जोड़े फलवा T-Series #chhathpuja Jode Jode Falwa - (320 Kbps).mp3",
    "title": "Jode Jode Falwa (Pawan Singh 320k)",
    "titleHi": "जोड़े जोड़े फलवा (पवन सिंह)",
    "artist": "Pawan Singh",
    "day": "sandhya-arghya",
    "category": "modern",
    "id": 59,
    "src": "music/%E0%A4%AA%E0%A4%B5%E0%A4%A8%20%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%B9%20%E0%A4%95%E0%A4%BE%20%E0%A4%B8%E0%A4%AC%E0%A4%B8%E0%A5%87%20%E0%A4%9C%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%A6%E0%A4%BE%20%E0%A4%AC%E0%A4%9C%E0%A4%A8%E0%A5%87%20%E0%A4%B5%E0%A4%BE%E0%A4%B2%E0%A4%BE%20%E0%A4%9B%E0%A4%A0%20%E0%A4%97%E0%A5%80%E0%A4%A4%20-%20%E0%A4%9C%E0%A5%8B%E0%A5%9C%E0%A5%87%20%E0%A4%9C%E0%A5%8B%E0%A5%9C%E0%A5%87%20%E0%A4%AB%E0%A4%B2%E0%A4%B5%E0%A4%BE%20T-Series%20%23chhathpuja%20Jode%20Jode%20Falwa%20-%20%28320%20Kbps%29.mp3"
  },
  {
    "file": "पवन सिंह का सबसे ज्यादा बजने वाला छठ गीत - जोड़े जोड़े फलवा T-Series #chhathpuja Jode Jode Falwa - T-Series Hamaar.mp3",
    "title": "Jode Jode Falwa (Pawan Singh)",
    "titleHi": "जोड़े जोड़े फलवा",
    "artist": "Pawan Singh",
    "day": "sandhya-arghya",
    "category": "modern",
    "id": 60,
    "src": "music/%E0%A4%AA%E0%A4%B5%E0%A4%A8%20%E0%A4%B8%E0%A4%BF%E0%A4%82%E0%A4%B9%20%E0%A4%95%E0%A4%BE%20%E0%A4%B8%E0%A4%AC%E0%A4%B8%E0%A5%87%20%E0%A4%9C%E0%A5%8D%E0%A4%AF%E0%A4%BE%E0%A4%A6%E0%A4%BE%20%E0%A4%AC%E0%A4%9C%E0%A4%A8%E0%A5%87%20%E0%A4%B5%E0%A4%BE%E0%A4%B2%E0%A4%BE%20%E0%A4%9B%E0%A4%A0%20%E0%A4%97%E0%A5%80%E0%A4%A4%20-%20%E0%A4%9C%E0%A5%8B%E0%A5%9C%E0%A5%87%20%E0%A4%9C%E0%A5%8B%E0%A5%9C%E0%A5%87%20%E0%A4%AB%E0%A4%B2%E0%A4%B5%E0%A4%BE%20T-Series%20%23chhathpuja%20Jode%20Jode%20Falwa%20-%20T-Series%20Hamaar.mp3"
  },
  {
    "file": "श्री हनुमान चालीसा 🌺🙏 Shree Hanuman Chalisa Original Video 🙏🌺 GULSHAN KUMAR HARIHARAN 8K - T-Series Bhakti Sagar (192k).mp3",
    "title": "Shree Hanuman Chalisa",
    "titleHi": "श्री हनुमान चालीसा",
    "artist": "Gulshan Kumar & Hariharan",
    "day": "general",
    "category": "aarti",
    "id": 61,
    "src": "music/%E0%A4%B6%E0%A5%8D%E0%A4%B0%E0%A5%80%20%E0%A4%B9%E0%A4%A8%E0%A5%81%E0%A4%AE%E0%A4%BE%E0%A4%A8%20%E0%A4%9A%E0%A4%BE%E0%A4%B2%E0%A5%80%E0%A4%B8%E0%A4%BE%20%F0%9F%8C%BA%F0%9F%99%8F%20Shree%20Hanuman%20Chalisa%20Original%20Video%20%F0%9F%99%8F%F0%9F%8C%BA%20GULSHAN%20KUMAR%20HARIHARAN%208K%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  },
  {
    "file": "संकटमोचन हनुमान अष्टक, Sankat Mochan Hanuman Ashtak,HARIHARAN,Hindi, English Lyrics, Hanuman Chalisa - T-Series Bhakti Sagar (192k).mp3",
    "title": "Sankat Mochan Hanuman Ashtak",
    "titleHi": "संकटमोचन हनुमान अष्टक",
    "artist": "Hariharan",
    "day": "general",
    "category": "aarti",
    "id": 62,
    "src": "music/%E0%A4%B8%E0%A4%82%E0%A4%95%E0%A4%9F%E0%A4%AE%E0%A5%8B%E0%A4%9A%E0%A4%A8%20%E0%A4%B9%E0%A4%A8%E0%A5%81%E0%A4%AE%E0%A4%BE%E0%A4%A8%20%E0%A4%85%E0%A4%B7%E0%A5%8D%E0%A4%9F%E0%A4%95%2C%20Sankat%20Mochan%20Hanuman%20Ashtak%2CHARIHARAN%2CHindi%2C%20English%20Lyrics%2C%20Hanuman%20Chalisa%20-%20T-Series%20Bhakti%20Sagar%20%28192k%29.mp3"
  }
];

// ═══════════════════════════════════════════════
// METADATA CONSTANTS
// ═══════════════════════════════════════════════
const DAY_NAMES = {
  'nahay-khay': 'Nahay Khay (Day 1)',
  'kharna': 'Kharna (Day 2)',
  'sandhya-arghya': 'Sandhya Arghya (Day 3)',
  'usha-arghya': 'Usha Arghya (Day 4)',
  'kosi': 'Kosi Bharai',
  'general': 'All Days (Sarvajanik)'
};

const DAY_NAMES_HI = {
  'nahay-khay': 'नहाय खाय',
  'kharna': 'खरना',
  'sandhya-arghya': 'संध्या अर्घ्य',
  'usha-arghya': 'उषा अर्घ्य',
  'kosi': 'कोसी भराई',
  'general': 'सार्वजनिक'
};

const DAY_COLORS = {
  'nahay-khay': '#4A8505',
  'kharna': '#D47500',
  'sandhya-arghya': '#BF4E30',
  'usha-arghya': '#E69500',
  'kosi': '#A855F7',
  'general': '#E06D10'
};

const DAY_ICONS = {
  'nahay-khay': '🌿',
  'kharna': '🪔',
  'sandhya-arghya': '🌅',
  'usha-arghya': '☀️',
  'kosi': '✨',
  'general': '🎵'
};

const CATEGORY_NAMES = {
  'paramparik': 'Traditional (पारंपरिक)',
  'modern': 'Modern (आधुनिक)',
  'aarti': 'Aarti & Bhajan (आरती व भजन)',
  'kosi': 'Kosi Geet (कोसी गीत)'
};

function getFeaturedSongs() {
  return SONGS_DB.slice(0, 10);
}

function getSongsByDay(day) {
  if (day === 'all') return SONGS_DB;
  return SONGS_DB.filter(s => s.day === day);
}

function getSongsByCategory(category) {
  if (category === 'all') return SONGS_DB;
  return SONGS_DB.filter(s => s.category === category);
}

function getSongsByArtist(artist) {
  if (!artist || artist === 'all') return SONGS_DB;
  return SONGS_DB.filter(s => s.artist.toLowerCase().includes(artist.toLowerCase()));
}

function getAllArtists() {
  const artists = new Set();
  SONGS_DB.forEach(s => {
    s.artist.split(/[,&]/).forEach(a => artists.add(a.trim()));
  });
  return Array.from(artists).sort();
}
