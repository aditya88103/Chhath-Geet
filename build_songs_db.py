# -*- coding: utf-8 -*-
import os
import json
import urllib.parse

songs_metadata = [
  {
    "file": "#Anu_Dubey का ये छठ गीत महिलायों के बीच बहुत ही पसंद किया जा रहा है #Chhath #Geet 2023 - Bhakti Wave Series (192k).mp3",
    "title": "Chhathi Maiya Ke Geet",
    "titleHi": "छठी मैया के गीत",
    "artist": "Anu Dubey",
    "day": "sandhya-arghya",
    "category": "modern"
  },
  {
    "file": "#Devi Singer #New #Chhath #Video #Song-अरघ मोरा लेइ लीहीं - Bhojpuri Song 2020 - Pink Music Bhojpuri (192k).mp3",
    "title": "Aragh Mora Lei Lihi",
    "titleHi": "अरघ मोरा लेई लीहीं",
    "artist": "Devi",
    "day": "sandhya-arghya",
    "category": "paramparik"
  },
  {
    "file": "#devi song अरघ मोरा लेइ लिहि #newsong #devichhathsong #chhathpuja - Niranjan swaraj official (192k).mp3",
    "title": "Aragh Mora Lei Lihi (Special)",
    "titleHi": "अरघ मोरा लेई लिहि (भोजपुरी)",
    "artist": "Devi & Niranjan Swaraj",
    "day": "sandhya-arghya",
    "category": "paramparik"
  },
  {
    "file": "#Video #Pawan Singh - हाथ ज़ोर माँगी ना मँगनवा ए माई - Khushboo Jain #Bhojpuri Devi Geet 2023 - Tak Tak Music (192k).mp3",
    "title": "Haath Jor Mangi Na Manganwa",
    "titleHi": "हाथ जोड़ माँगी ना मँगनवा ए माई",
    "artist": "Pawan Singh & Khushboo Jain",
    "day": "general",
    "category": "modern"
  },
  {
    "file": "#Video - पारम्परिक छठ गीत - दर्शन देखाई दीही- #Kalpana Patawory - #Ritu -Bhojpuri Chhath Geet 2023 - Trimurti Music World (192k).mp3",
    "title": "Darshan Dekhai Dihi",
    "titleHi": "दर्शन देखाई दीही",
    "artist": "Kalpana Patowary & Ritu",
    "day": "usha-arghya",
    "category": "paramparik"
  },
  {
    "file": "#Video आहे मालिन Aahe Maalin #Beauty Pandey Navratri Song 2025 - Sanskar Devotional (192k).mp3",
    "title": "Aahe Maalin",
    "titleHi": "आहे मालिन",
    "artist": "Beauty Pandey",
    "day": "general",
    "category": "aarti"
  },
  {
    "file": "#video कांच ही बाँस के बहंगिया Kalpana Patowary Chhath परंपरा और आधुनिकता का संगम - MUSIC BOX Kalpana Pattowary (192k).mp3",
    "title": "Kaanch Hi Baans Ke Bahangiya",
    "titleHi": "काँच ही बाँस के बहंगिया",
    "artist": "Kalpana Patowary",
    "day": "sandhya-arghya",
    "category": "paramparik"
  },
  {
    "file": "#video काठ के रे नईया Kath Ke Re Naiyya ♪ कल्पना पटवारी छठ गीत - MUSIC BOX Kalpana Pattowary (192k).mp3",
    "title": "Kath Ke Re Naiyya",
    "titleHi": "काठ के रे नईया",
    "artist": "Kalpana Patowary",
    "day": "sandhya-arghya",
    "category": "paramparik"
  },
  {
    "file": "#Video छठ माई के बरतिया Khesari Lal Yadav Chhath Mai Ke Baratiya Nagin Movie #Chhath Song - Wave Music (192k).mp3",
    "title": "Chhath Mai Ke Baratiya",
    "titleHi": "छठ माई के बरतिया",
    "artist": "Khesari Lal Yadav",
    "day": "kharna",
    "category": "modern"
  },
  {
    "file": "#कल्पना का पारम्परिक छठ गीत 2021 युग युग रखिह सुहाग हे छठी मईया Bhojpuri Chath Geet 2021 - Bhojpuri Lokgeet .mp3",
    "title": "Yug Yug Rakhiha Suhaag",
    "titleHi": "युग युग रखिह सुहाग हे छठी मईया",
    "artist": "Kalpana Patowary",
    "day": "kharna",
    "category": "paramparik"
  },
  {
    "file": "Asiya Puran Hoy Chhath Pooja Ke Geet KAVITA PAUDWAL Full Audio - T-Series Bhakti Sagar (192k).mp3",
    "title": "Asiya Puran Hoy",
    "titleHi": "आसिया पूरन होय",
    "artist": "Kavita Paudwal",
    "day": "usha-arghya",
    "category": "paramparik"
  },
  {
    "file": "Baanjhi Kewdwa Dhaile Thaadh BHOJPURI CHHATH GEET SHARDA SINHA I Full VideoI MAHIMA CHHATHI MAIYA KE - T-Series Bhakti Sagar (192k).mp3",
    "title": "Baanjhi Kewdwa Dhaile Thaadh",
    "titleHi": "बाँझी केवड़वा धइले ठाढ़",
    "artist": "Sharda Sinha",
    "day": "general",
    "category": "paramparik"
  },
  {
    "file": "Bartin Ke Angna Mein Bhojpuri Chhath Sharda Sinha [Full Song] I Sakal Jagtarni Hey Chhathi Maiya - T-Series Bhakti Sagar (192k).mp3",
    "title": "Bartin Ke Angna Mein",
    "titleHi": "बरतिन के अंगना में",
    "artist": "Sharda Sinha",
    "day": "nahay-khay",
    "category": "paramparik"
  },
  {
    "file": "Chaar Hi Chakka Ke Motarva Bhojpuri Chhath Geet [Full Video] I Chhath Pooja Ke Geet - T-Series Bhakti Sagar (192k).mp3",
    "title": "Chaar Hi Chakka Ke Motarva",
    "titleHi": "चार ही चक्का के मोटरवा",
    "artist": "Anuradha Paudwal",
    "day": "sandhya-arghya",
    "category": "paramparik"
  },
  {
    "file": "Chath Karab hum jaroor(छठ करब हम जरूर) Swati Mishra Chath Song 2024 - Swati Mishra bhojpuri (192k).mp3",
    "title": "Chhath Karab Hum Jaroor",
    "titleHi": "छठ करब हम जरूर",
    "artist": "Swati Mishra",
    "day": "nahay-khay",
    "category": "modern"
  },
  {
    "file": "Chhathi Maiya Bulaye - Vishal Mishra Kaushal Kishore Desh Unplugged Chhath Song 2021 - CLIK RECORDS (192k).mp3",
    "title": "Chhathi Maiya Bulaye",
    "titleHi": "छठी मैया बुलाये",
    "artist": "Vishal Mishra & Kaushal Kishore",
    "day": "general",
    "category": "modern"
  },
  {
    "file": "Dukhwa Mitayin Chhathi Maiya Sharda Sinha New Song 2024 Chhath2024 Video Release - Sharda Sinha Official (192k).mp3",
    "title": "Dukhwa Mitayin Chhathi Maiya",
    "titleHi": "दुखवा मिटाईं छठी मैया",
    "artist": "Sharda Sinha",
    "day": "usha-arghya",
    "category": "paramparik"
  },
  {
    "file": "Full Video आहे आदितमल #Karina Pandey #Sovita Pandey Aahe Aaditmal Chhath Special Song 2025 - PANDEY SISTERS OFFICIAL (192k).mp3",
    "title": "Aahe Aaditmal",
    "titleHi": "आहे आदितमल",
    "artist": "Karina Pandey & Sovita Pandey",
    "day": "usha-arghya",
    "category": "paramparik"
  },
  {
    "file": "Full Video मईया बारी सुकवार #Karina Pandey #Sovita Pandey Maiya Bari Sukwar Navratri Song - PANDEY SISTERS OFFICIAL (192k).mp3",
    "title": "Maiya Bari Sukwar",
    "titleHi": "मईया बारी सुकवार",
    "artist": "Karina Pandey & Sovita Pandey",
    "day": "general",
    "category": "aarti"
  },
  {
    "file": "Ganga Ke Kinare Bunny Sagar Kripa Record - Kripa Record (192k).mp3",
    "title": "Ganga Ke Kinare",
    "titleHi": "गंगा के किनारे",
    "artist": "Bunny Sagar",
    "day": "sandhya-arghya",
    "category": "modern"
  },
  {
    "file": "Hey Dukh Bhanjan Powerful Hanuman Bhajan मन को शांति देने वाला हनुमान भजन Hanuman Chalisa Vibes - NMF BHAKTI (192k).mp3",
    "title": "Hey Dukh Bhanjan",
    "titleHi": "हे दुख भंजन मारुति नंदन",
    "artist": "Hariharan / Traditional",
    "day": "general",
    "category": "aarti"
  },
  {
    "file": "Hey Ganga Maiya By Sharda Sinha Bhojpuri Chhath Songs [Full HD Song] Chhathi Maiya - T-Series Bhakti Sagar (192k).mp3",
    "title": "Hey Ganga Maiya",
    "titleHi": "हे गंगा मैया",
    "artist": "Sharda Sinha",
    "day": "nahay-khay",
    "category": "paramparik"
  },
  {
    "file": "Ho Deenanath - Sharda Sinha - Topic (192k).mp3",
    "title": "Ho Deenanath (Original)",
    "titleHi": "हो दीनानाथ",
    "artist": "Sharda Sinha",
    "day": "usha-arghya",
    "category": "paramparik"
  },
  {
    "file": "Ho Deenanath By Sharda Sinha Bhojpuri Chhath Pooja Geet [Full HD Song] I CHHATHI MAIYA - T-Series Bhakti Sagar (192k).mp3",
    "title": "Ho Deenanath (Mahima)",
    "titleHi": "हो दीनानाथ (महिमा छठी मईया)",
    "artist": "Sharda Sinha",
    "day": "usha-arghya",
    "category": "paramparik"
  },
  {
    "file": "Jagdamba Ghar Me Swati Mishra Mohit Musik Bhojpuri Navratri Song 2025 Devi Geet - Swati Mishra bhojpuri (192k).mp3",
    "title": "Jagdamba Ghar Me",
    "titleHi": "जगदम्बा घर में",
    "artist": "Swati Mishra",
    "day": "general",
    "category": "aarti"
  },
  {
    "file": "Jai Chhathi Maiya Sonu Nigam, Pawan Singh & Khushboo Jain Harshika Poonacha Chhath Geet 2021 - I Believe Music (192k).mp3",
    "title": "Jai Chhathi Maiya",
    "titleHi": "जय छठी मैया",
    "artist": "Sonu Nigam, Pawan Singh & Khushboo Jain",
    "day": "general",
    "category": "modern"
  },
  {
    "file": "Jode Jode Falwa (Pawan Singh & Palak Muchhal) - Bihar Beat (192k).mp3",
    "title": "Jode Jode Falwa (Duet)",
    "titleHi": "जोड़े जोड़े फलवा (पवन सिंह व पलक मुच्छल)",
    "artist": "Pawan Singh & Palak Muchhal",
    "day": "sandhya-arghya",
    "category": "modern"
  },
  {
    "file": "Jode Jode Falwa Suruj dev Swati Mishra Chath Geet - Swati Mishra (192k).mp3",
    "title": "Jode Jode Falwa Suruj Dev",
    "titleHi": "जोड़े जोड़े फलवा सुरुज देव",
    "artist": "Swati Mishra",
    "day": "sandhya-arghya",
    "category": "modern"
  },
  {
    "file": "Jode Jode Supwa Tora Chadaibo Bhojpuri Chhath Geet KALPANA [Full Video] I CHHATH GHATE CHALIHA PAPA - T-Series Bhakti Sagar (192k).mp3",
    "title": "Jode Jode Supwa Tora Chadaibo",
    "titleHi": "जोड़े जोड़े सुपवा तोरा चढ़ाइबो",
    "artist": "Kalpana Patowary",
    "day": "sandhya-arghya",
    "category": "paramparik"
  },
  {
    "file": "Kartik Maas Ijoriya Bhojpuri Chhath Geet By Sharda Sinha [Full Song] I Arag - T-Series Bhakti Sagar (192k).mp3",
    "title": "Kartik Maas Ijoriya",
    "titleHi": "कार्तिक मास इजोरिया",
    "artist": "Sharda Sinha",
    "day": "nahay-khay",
    "category": "paramparik"
  },
  {
    "file": "KEHAN SAMAIYA AELE I Bhojpuri Chhath Geet By Sharda Sinha [Full Song] I Arag - T-Series Bhakti Sagar (192k).mp3",
    "title": "Kehan Samaiya Aele",
    "titleHi": "केहन समईया अइले",
    "artist": "Sharda Sinha",
    "day": "general",
    "category": "paramparik"
  },
  {
    "file": "KELWA KE PAAT PAR Bhojpuri Chhath Pooja Geet DEVI I Full HD Video Song I BAHANGI CHHATH MAAI KE JAAY - T-Series Bhakti Sagar (192k).mp3",
    "title": "Kelwa Ke Paat Par (Devi)",
    "titleHi": "केलवा के पात पर (देवी)",
    "artist": "Devi",
    "day": "general",
    "category": "paramparik"
  },
  {
    "file": "KOPI KOPI BOLELI Bhojpuri Chhath Pooja Geet DEVI I Full HD Video Song I BAHANGI CHHATH MAAI KE JAAY - T-Series Bhakti Sagar (192k).mp3",
    "title": "Kopi Kopi Boleli",
    "titleHi": "कोपी कोपी बोलेली",
    "artist": "Devi",
    "day": "general",
    "category": "paramparik"
  },
  {
    "file": "Lyrical Video - SHIV SE GORI NA VYAHA Bhojpuri OLD MEHNDI GEET SINGER - SHARDA SINHA T-Series - T-Series Hamaar Bhojpuri (192k).mp3",
    "title": "Shiv Se Gori Na Vyaha",
    "titleHi": "शिव से गोरी ना ब्याह",
    "artist": "Sharda Sinha",
    "day": "general",
    "category": "paramparik"
  },
  {
    "file": "Maarbo Re Sugva Dhanukh Se Bhojpuri Chhath Songs I ANURADHA PAUDWAL I Bahangi Chhath Mayee Ke Jaay - T-Series Bhakti Sagar (192k).mp3",
    "title": "Maarbo Re Sugva Dhanukh Se",
    "titleHi": "मारबो रे सुगवा धनुख से",
    "artist": "Anuradha Paudwal",
    "day": "sandhya-arghya",
    "category": "paramparik"
  },
  {
    "file": "Marabo Re Sugava Dhanus Se [Full Video Song] Hey Chhath Maiya - T-Series Regional (192k).mp3",
    "title": "Marabo Re Sugava Dhanus Se (Regional)",
    "titleHi": "मारबो रे सुगवा धनुष से (रीजनल)",
    "artist": "Anuradha Paudwal",
    "day": "sandhya-arghya",
    "category": "paramparik"
  },
  {
    "file": "Nadiya Ke Teere Teere Bhojpuri Chhath Geet By Sharda Sinha [Full Song] I Arag - T-Series Bhakti Sagar (192k).mp3",
    "title": "Nadiya Ke Teere Teere",
    "titleHi": "नदिया के तीरे तीरे",
    "artist": "Sharda Sinha",
    "day": "sandhya-arghya",
    "category": "paramparik"
  },
  {
    "file": "Nimiya ke Dadh Maiya Swati Mishra Bhakti Mohit Musik Navratri Special Song - Swati Mishra Bhakti (192k).mp3",
    "title": "Nimiya Ke Dadh Maiya",
    "titleHi": "निमिया के डाढ़ मैया",
    "artist": "Swati Mishra",
    "day": "general",
    "category": "aarti"
  },
  {
    "file": "Pahile Pahil Chhathi Maiya #Sharda Sinha Chhath Song @WorldwideRecordsBhojpuri - Worldwide Records Bhojpuri (192k).mp3",
    "title": "Pahile Pahil Chhathi Maiya",
    "titleHi": "पहिले पहिल छठी मईया",
    "artist": "Sharda Sinha",
    "day": "nahay-khay",
    "category": "paramparik"
  },
  {
    "file": "Parvati Boli Shankar Se - O Bholenath Ji Hansraj Raghuwanshi Full Song Bhole Baba Song - NAV Records (192k).mp3",
    "title": "Parvati Boli Shankar Se",
    "titleHi": "पार्वती बोली शंकर से",
    "artist": "Hansraj Raghuwanshi",
    "day": "general",
    "category": "aarti"
  },
  {
    "file": "SHARDA SINHA 🙏शारदा सिन्हा🙏 Kelwa Ke Paat Par with Lyrics Kelva Ke Paat Par🙏🙏 Lyrical Video - T-Series Bhakti Sagar (192k).mp3",
    "title": "Kelwa Ke Paat Par (Sharda Sinha)",
    "titleHi": "केलवा के पात पर (शारदा सिन्हा)",
    "artist": "Sharda Sinha",
    "day": "general",
    "category": "paramparik"
  },
  {
    "file": "Ugi He Dinanath उगी हे दीनानाथ Ugi Hey Dinanath Kalpna Bhojpuri Chhath Geet 2025 - Wave Music Bhakti (192k).mp3",
    "title": "Ugi He Dinanath (Kalpana)",
    "titleHi": "उगी हे दीनानाथ (कल्पना)",
    "artist": "Kalpana Patowary",
    "day": "usha-arghya",
    "category": "paramparik"
  },
  {
    "file": "Uthau Suruj Bhaile Bihaan By Sharda Sinha Bhojpuri Chhath Songs [Full Song] Chhathi Maiya - T-Series Bhakti Sagar (192k).mp3",
    "title": "Uthau Suruj Bhaile Bihaan",
    "titleHi": "उठाउ सूरुज भईले बिहान",
    "artist": "Sharda Sinha",
    "day": "usha-arghya",
    "category": "paramparik"
  },
  {
    "file": "Video #Sonu Nigam & Pawan Singh चलS भउजी हाली हाली Chal Bhauji Hali Bhojpuri Chhath Song 2024 - GM Records Bhojpuri (192k).mp3",
    "title": "Chal Bhauji Hali Hali",
    "titleHi": "चलs भउजी हाली हाली",
    "artist": "Sonu Nigam & Pawan Singh",
    "day": "sandhya-arghya",
    "category": "modern"
  },
  {
    "file": "Video #छठ_गीत #Neelkamal Singh कोशिया भराये लागल #Priyanka Singh Bhojpuri Chhath Geet 2023 - Neelkamal Singh Shorts (192k).mp3",
    "title": "Koshiya Bharaye Lagal",
    "titleHi": "कोशिया भराये लागल",
    "artist": "Neelkamal Singh & Priyanka Singh",
    "day": "kosi",
    "category": "modern"
  },
  {
    "file": "Video - Ugi Hey Dinanath Swati Mishra New Chhath Geet Chhath Pooja Special Song 2024 - Trishul Music Spiritual (192k).mp3",
    "title": "Ugi Hey Dinanath (Swati Mishra)",
    "titleHi": "उगी हे दीनानाथ (स्वाति मिश्रा)",
    "artist": "Swati Mishra",
    "day": "usha-arghya",
    "category": "modern"
  },
  {
    "file": "Ye Chamak Ye Damak 2.0 Sab Kuch Sarkar Tumhi Se Hai Original Song Sudhir Vyas New Ram Bhajan - Pandit Sudhir Vyas (192k).mp3",
    "title": "Ye Chamak Ye Damak",
    "titleHi": "ये चमक ये दमक",
    "artist": "Pandit Sudhir Vyas",
    "day": "general",
    "category": "aarti"
  },
  {
    "file": "αñ¢αñá αñ¬αñ░αÑìαñ╡ αñòαñ╛ αñ╕αñ¼αñ╕αÑç αñ▓αÑïαñòαñ¬αÑìαñ░αñ┐αñ» αñùαÑÇαññ ΓÇö αñ«αñ╛αñ░αñ¼αÑï αñ░αÑç αñ╕αÑüαñùαñ╡αñ╛ αñºαñ¿αÑüαñ╖ αñ╕αÑç αñòαñ▓αÑìαñ¬αñ¿αñ╛ αñ¬αñƒαñ╡αñ╛αñ░αÑÇ αñòαÑÇ αñ╕αÑìαñ╡αñ░ αñ╕α.mp3",
    "title": "Marbo Re Sugwa Dhanush Se",
    "titleHi": "मारबो रे सुगवा धनुष से (कल्पना पटवारी)",
    "artist": "Kalpana Patowary",
    "day": "sandhya-arghya",
    "category": "paramparik"
  },
  {
    "file": "आठ ही काठ के कोठरिया हो दीनानाथ । Kath ke kothariya ho dinanaath । Kath ke kothariya - K.P. Pranjl (192k).mp3",
    "title": "Aath Hi Kaath Ke Kothariya",
    "titleHi": "आठ ही काठ के कोठरिया हो दीनानाथ",
    "artist": "K.P. Pranjal",
    "day": "kosi",
    "category": "paramparik"
  },
  {
    "file": "उगी सुरुज देव #Pawan Singh New Chhath Geet Video Ugi Suruj Dev Chhath Song 2022 DRJ Records - DRJ Records (192k).mp3",
    "title": "Ugi Suruj Dev",
    "titleHi": "उगी सुरुज देव",
    "artist": "Pawan Singh",
    "day": "usha-arghya",
    "category": "modern"
  },
  {
    "file": "करे माई कठिन बरतिया Lyrics -Swati Mishra Official Chath Song - Swati Mishra (192k).mp3",
    "title": "Kare Mai Kathin Baratiya",
    "titleHi": "करे माई कठिन बरतिया",
    "artist": "Swati Mishra",
    "day": "nahay-khay",
    "category": "modern"
  },
  {
    "file": "कांच ही बांस के बहँगिया - Aragh Dehab Suraj Dev Ke Arvind Akela Kalluji Chhath Pooja Song 2025 - Wave Music Bhakti (192k).mp3",
    "title": "Kaanch Hi Baans Ke Bahangiya (Aragh Dehab)",
    "titleHi": "काँच ही बाँस के बहँगिया (अरघ देहब)",
    "artist": "Arvind Akela Kallu",
    "day": "sandhya-arghya",
    "category": "modern"
  },
  {
    "file": "घरे घरे होता Chhathi Maai के Varatiya Aamrapali Dubey भोजपुरी Chhath गीत Song 2019 - SRK Music - Bhakti (192k).mp3",
    "title": "Ghare Ghare Hota Chhathi Mai Ke Baratiya",
    "titleHi": "घरे घरे होता छठी माई के बरतिया",
    "artist": "Aamrapali Dubey",
    "day": "kharna",
    "category": "modern"
  },
  {
    "file": "छठ पूजा I छठ के बरतिया I Chhath Ke Baratiya I Sharda Sinha Aditya Dev I Vishal Singh IAnand Mishra - Apni Dhun Devotional (192k).mp3",
    "title": "Chhath Ke Baratiya",
    "titleHi": "छठ के बरतिया",
    "artist": "Sharda Sinha & Aditya Dev",
    "day": "kharna",
    "category": "paramparik"
  },
  {
    "file": "छठ पूजा Special आदित मनाईला Aadit Manaila I ANURADHA PAUDWAL I Full HD Video Song - T-Series Bhakti Sagar (192k).mp3",
    "title": "Aadit Manaila",
    "titleHi": "आदित मनाईला",
    "artist": "Anuradha Paudwal",
    "day": "usha-arghya",
    "category": "paramparik"
  },
  {
    "file": "छठ पूजा Special उगs हे सूरज देव Uga Hai Suraj Dev,ANURADHA PAUDWAL,Hindi English Lyrics,Chhath Puja - (320 Kbps).mp3",
    "title": "Uga Hai Suraj Dev (320k HQ)",
    "titleHi": "उगs हे सूरज देव (एचडी)",
    "artist": "Anuradha Paudwal",
    "day": "usha-arghya",
    "category": "paramparik"
  },
  {
    "file": "छठ पूजा Special उगs हे सूरज देव Uga Hai Suraj Dev,ANURADHA PAUDWAL,Hindi English Lyrics,Chhath Puja - T-Series Bhakti Sagar (192k).mp3",
    "title": "Uga Hai Suraj Dev (Bhakti Sagar)",
    "titleHi": "उगs हे सूरज देव",
    "artist": "Anuradha Paudwal",
    "day": "usha-arghya",
    "category": "paramparik"
  },
  {
    "file": "छठ पूजा काँच ही बाँस के बहंगिया WITH LYRICS I Kaanch Hi Baans Ke Bahangiya I ANURADHA PAUDWAL - T-Series Bhakti Sagar (192k).mp3",
    "title": "Kaanch Hi Baans Ke Bahangiya (Anuradha Paudwal)",
    "titleHi": "काँच ही बाँस के बहंगिया (अनुराधा पौडवाल)",
    "artist": "Anuradha Paudwal",
    "day": "sandhya-arghya",
    "category": "paramparik"
  },
  {
    "file": "पवन सिंह का सबसे ज्यादा बजने वाला छठ गीत - जोड़े जोड़े फलवा T-Series #chhathpuja Jode Jode Falwa - (320 Kbps).mp3",
    "title": "Jode Jode Falwa (Pawan Singh 320k)",
    "titleHi": "जोड़े जोड़े फलवा (पवन सिंह)",
    "artist": "Pawan Singh",
    "day": "sandhya-arghya",
    "category": "modern"
  },
  {
    "file": "पवन सिंह का सबसे ज्यादा बजने वाला छठ गीत - जोड़े जोड़े फलवा T-Series #chhathpuja Jode Jode Falwa - T-Series Hamaar.mp3",
    "title": "Jode Jode Falwa (Pawan Singh)",
    "titleHi": "जोड़े जोड़े फलवा",
    "artist": "Pawan Singh",
    "day": "sandhya-arghya",
    "category": "modern"
  },
  {
    "file": "श्री हनुमान चालीसा 🌺🙏 Shree Hanuman Chalisa Original Video 🙏🌺 GULSHAN KUMAR HARIHARAN 8K - T-Series Bhakti Sagar (192k).mp3",
    "title": "Shree Hanuman Chalisa",
    "titleHi": "श्री हनुमान चालीसा",
    "artist": "Gulshan Kumar & Hariharan",
    "day": "general",
    "category": "aarti"
  },
  {
    "file": "संकटमोचन हनुमान अष्टक, Sankat Mochan Hanuman Ashtak,HARIHARAN,Hindi, English Lyrics, Hanuman Chalisa - T-Series Bhakti Sagar (192k).mp3",
    "title": "Sankat Mochan Hanuman Ashtak",
    "titleHi": "संकटमोचन हनुमान अष्टक",
    "artist": "Hariharan",
    "day": "general",
    "category": "aarti"
  }
]

# Assign IDs 1..len(songs_metadata)
for idx, s in enumerate(songs_metadata):
  s["id"] = idx + 1
  s["src"] = "music/" + urllib.parse.quote(s["file"])

js_code = f"""/**
 * Chhath Geet Gatha — Master Songs Database ({len(songs_metadata)} Local Audio Tracks)
 * Clean native local audio tracks from the music/ folder.
 */

const SONGS_DB = {json.dumps(songs_metadata, indent=2, ensure_ascii=False)};

// ═══════════════════════════════════════════════
// METADATA CONSTANTS
// ═══════════════════════════════════════════════
const DAY_NAMES = {{
  'nahay-khay': 'Nahay Khay (Day 1)',
  'kharna': 'Kharna (Day 2)',
  'sandhya-arghya': 'Sandhya Arghya (Day 3)',
  'usha-arghya': 'Usha Arghya (Day 4)',
  'kosi': 'Kosi Bharai',
  'general': 'All Days (Sarvajanik)'
}};

const DAY_NAMES_HI = {{
  'nahay-khay': 'नहाय खाय',
  'kharna': 'खरना',
  'sandhya-arghya': 'संध्या अर्घ्य',
  'usha-arghya': 'उषा अर्घ्य',
  'kosi': 'कोसी भराई',
  'general': 'सार्वजनिक'
}};

const DAY_COLORS = {{
  'nahay-khay': '#4A8505',
  'kharna': '#D47500',
  'sandhya-arghya': '#BF4E30',
  'usha-arghya': '#E69500',
  'kosi': '#A855F7',
  'general': '#E06D10'
}};

const DAY_ICONS = {{
  'nahay-khay': '🌿',
  'kharna': '🪔',
  'sandhya-arghya': '🌅',
  'usha-arghya': '☀️',
  'kosi': '✨',
  'general': '🎵'
}};

const CATEGORY_NAMES = {{
  'paramparik': 'Traditional (पारंपरिक)',
  'modern': 'Modern (आधुनिक)',
  'aarti': 'Aarti & Bhajan (आरती व भजन)',
  'kosi': 'Kosi Geet (कोसी गीत)'
}};

function getFeaturedSongs() {{
  return SONGS_DB.slice(0, 10);
}}

function getSongsByDay(day) {{
  if (day === 'all') return SONGS_DB;
  return SONGS_DB.filter(s => s.day === day);
}}

function getSongsByCategory(category) {{
  if (category === 'all') return SONGS_DB;
  return SONGS_DB.filter(s => s.category === category);
}}

function getSongsByArtist(artist) {{
  if (!artist || artist === 'all') return SONGS_DB;
  return SONGS_DB.filter(s => s.artist.toLowerCase().includes(artist.toLowerCase()));
}}

function getAllArtists() {{
  const artists = new Set();
  SONGS_DB.forEach(s => {{
    s.artist.split(/[,&]/).forEach(a => artists.add(a.trim()));
  }});
  return Array.from(artists).sort();
}}
"""

with open("js/songs-db.js", "w", encoding="utf-8") as f:
  f.write(js_code)

print(f"Successfully generated js/songs-db.js with {len(songs_metadata)} songs.")
