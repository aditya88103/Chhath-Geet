/**
 * Chhath Geet — Comprehensive Bilingual (English & Hindi) i18n System
 * Provides pure English when EN is active and pure Hindi when HI is active.
 */

const I18N_DICT = {
  en: {
    // Brand & Nav
    "nav.brand": "Chhath Geet",
    "nav.brand_sub": "Sacred Chhath Puja Sanctuary",
    "nav.home": "Home",
    "nav.songs": "Songs",
    "nav.rituals": "Rituals",
    "nav.recipe": "Recipe",
    "nav.about": "About",
    "nav.theme_title": "Choose Theme:",
    "nav.theme_usha": "🌅 Dawn",
    "nav.theme_sandhya": "🌇 Dusk",
    "nav.theme_kosi": "🪔 Night",

    // Home Hero
    "home.eyebrow": "Chhath Puja 2026 • 14–17 November",
    "home.title": "Chhath Geet",
    "home.title_sub": "The Complete Chhath Puja Sanctuary",
    "home.desc": "The complete digital sanctuary for Chhath Puja — 62+ sacred audio songs, 4-day ritual guide, live arghya panchang, and traditional thekua recipe. 🙏",
    "home.btn_play_all": "Play All Songs",
    "home.btn_guide": "4-Day Guide",
    "home.btn_panchang": "Panchang & Calendar",
    "home.stat_songs": "Sacred Songs",
    "home.stat_rituals": "Day Rituals",
    "home.stat_cities": "Major Cities",
    "home.stat_fast": "Hour Fast",

    // Home 4-Day Vidhi Cards
    "home.vidhi_badge": "The Sacred Four Days",
    "home.vidhi_title": "Chhath Puja Rituals",
    "home.vidhi_sub": "4-Day Sacred Guide & Daily Traditions",
    "day.day1_name": "Nahay Khay",
    "day.day1_desc": "Sacred holy bath & satvik pumpkin rice meal",
    "day.day2_name": "Kharna",
    "day.day2_desc": "Jaggery kheer prasad & 36-hour nirjala fast begins",
    "day.day3_name": "Sandhya Arghya",
    "day.day3_desc": "Evening offering to the setting sun at riverbank",
    "day.day4_name": "Usha Arghya",
    "day.day4_desc": "Dawn offering to the rising sun & fast breaking",

    // Home Featured Songs
    "home.songs_badge": "Must Listen",
    "home.songs_title": "Iconic Chhath Geet",
    "home.songs_sub": "The timeless sacred classics you must hear",
    "home.view_all_songs": "View All 62 →",

    // Home Panchang & Countdown
    "panchang.badge": "Panchang & Timings",
    "panchang.title": "Chhath Arghya Panchang & Calendar",
    "panchang.sub": "Accurate Sunset & Sunrise timings across major cities",
    "panchang.select_city": "Select City:",
    "panchang.next_arghya": "Next Arghya",
    "panchang.next_arghya_title": "🌄 Usha Arghya — Kartik 2026",
    "panchang.days": "Days",
    "panchang.hours": "Hours",
    "panchang.minutes": "Minutes",
    "panchang.seconds": "Seconds",
    "panchang.timings_title": "Sandhya & Usha Arghya Timings — 2026",
    "panchang.th_city": "City",
    "panchang.th_sandhya": "Sandhya Arghya (Sunset)",
    "panchang.th_usha": "Usha Arghya (Sunrise)",
    "panchang.accuracy_note": "* All times are approximate IST equivalents. Please verify with local almanac (panchang) for your exact location.",
    "panchang.multi_year_title": "Chhath Puja Dates (2024–2027)",
    "panchang.tithi_title": "About Chhath Tithi",
    "panchang.tithi_desc": "Chhath Puja is observed on the Shashti (6th) Tithi of Shukla Paksha in the month of Kartik (October–November). The festival spans 4 days starting from Panchami. Times may vary by 5–15 minutes depending on local geography. Always consult a local panchang for exact muhurat.",

    // Multi-year calendar card strings
    "cal.kartik_chhath": "Kartik Chhath",
    "cal.this_year": "This Year",
    "day.monday": "Monday",
    "day.tuesday": "Tuesday",
    "day.wednesday": "Wednesday",
    "day.thursday": "Thursday",
    "day.friday": "Friday",
    "day.saturday": "Saturday",
    "day.sunday": "Sunday",

    // Songs Page
    "songs.badge": "Complete Audio Collection",
    "songs.title": "62 Sacred Chhath Geet",
    "songs.sub": "Filter by your favorite Singers and Ritual Days • Click any song to play instantly",
    "songs.search_placeholder": "Search songs by title or singer (e.g. Sharda Sinha, Ho Deenanath)...",
    "songs.all_singers_opt": "👑 All Singers",
    "songs.filter_singers_label": "Filter by Singer:",
    "songs.filter_days_label": "Filter by Chhath Day:",
    "songs.filter_category_label": "Category:",
    "songs.tap_to_play": "✨ Tap any song to play",
    "songs.btn_play_all": "Play All",
    "filter.all_singers": "All Singers",
    "filter.all_days": "All Days (62)",
    "filter.all_categories": "All Categories",
    "filter.paramparik": "🎶 Traditional",
    "filter.aarti": "🙏 Aarti & Bhajan",
    "filter.modern": "🎤 Modern",
    "filter.day1": "🌊 Day 1: Nahay Khay",
    "filter.day2": "🌙 Day 2: Kharna",
    "filter.day3": "🌅 Day 3: Sandhya Arghya",
    "filter.day4": "🌄 Day 4: Usha Arghya",
    "filter.kosi": "🎋 Kosi Bharai",
    "filter.general": "☀️ Sarvajanik",

    // Rituals Page
    "rituals.badge": "The Sacred Guide",
    "rituals.title": "4-Day Chhath Puja Vidhi",
    "rituals.sub": "Step-by-step rituals, mantras, and samagri checklist",
    "rituals.tab1": "🌊 Day 1: Nahay Khay",
    "rituals.tab2": "🌙 Day 2: Kharna",
    "rituals.tab3": "🌅 Day 3: Sandhya Arghya",
    "rituals.tab4": "🌄 Day 4: Usha Arghya",
    "rituals.traditions_title": "Traditions & Vidhi",
    "rituals.mantras_title": "Sacred Mantras",
    "rituals.samagri_title": "Samagri Checklist",
    "rituals.reset_btn": "↺ Reset Checklist",

    // Recipe Page
    "recipe.badge": "Sacred Prasad",
    "recipe.title": "Thekua Recipe",
    "recipe.sub": "The sacred wheat, jaggery and pure desi cow ghee prasad",
    "recipe.rules_title": "🙏 Sacred Rules of Chhath Prasad",
    "recipe.rule1": "All ingredients must be pure and satvik (no onion, garlic, or eggs)",
    "recipe.rule2": "Use only pure desi cow ghee, sugarcane jaggery, and whole wheat flour",
    "recipe.rule3": "Prepare in a clean, sanctified space with pure devotion and thoughts",
    "recipe.batch_title": "Batch Size",
    "recipe.batch_small": "Small (10 pieces)",
    "recipe.batch_medium": "Medium (20 pieces)",
    "recipe.batch_large": "Large (40 pieces)",
    "recipe.batch_family": "Family (60 pieces)",
    "recipe.ingredients_title": "Ingredients (in Grams & Milliliters)",
    "recipe.ing_flour_title": "Whole Wheat Flour",
    "recipe.ing_flour_sub": "Coarsely ground pure whole wheat flour",
    "recipe.ing_jaggery_title": "Sugarcane Jaggery (Gur)",
    "recipe.ing_jaggery_sub": "Pure unrefined sugarcane jaggery, finely chopped",
    "recipe.ing_ghee_title": "Pure Desi Cow Ghee",
    "recipe.ing_ghee_sub": "Pure cow ghee for shortening & dough preparation",
    "recipe.ing_coconut_title": "Dry Grated Coconut",
    "recipe.ing_coconut_sub": "Finely shredded dry coconut flakes",
    "recipe.ing_fennel_title": "Fennel Seeds (Saunf)",
    "recipe.ing_fennel_sub": "Aromatic thick green fennel seeds",
    "recipe.ing_cardamom_title": "Cardamom Powder",
    "recipe.ing_cardamom_sub": "Freshly crushed green cardamom",
    "recipe.ing_water_title": "Pure Water",
    "recipe.ing_water_sub": "Clean water to dissolve jaggery into syrup",

    "recipe.steps_title": "👨‍🍳 Step-by-Step Instructions",
    "recipe.step1_title": "🍯 Prepare Jaggery Syrup",
    "recipe.step1_desc": "Melt jaggery (150 g) in a pan with 50 ml water on low flame until dissolved into a light syrup. Strain to remove impurities.",
    "recipe.step2_title": "🌾 Prepare the Dough",
    "recipe.step2_desc": "In a large bowl, mix wheat flour (250 g), fennel seeds (10 g), cardamom powder (3 g), and grated coconut (30 g). Rub in 60 ml desi ghee evenly. Gradually add warm jaggery syrup and knead into a firm, stiff dough. Rest for 25–30 minutes.",
    "recipe.step3_title": "🍪 Shape the Thekua",
    "recipe.step3_desc": "Divide dough into equal lemon-sized portions (approx. 40 g each). Flatten into 1/2-inch thick oval or round discs. Press onto a traditional wooden thekua mold or fork to imprint designs.",
    "recipe.step4_title": "🔥 Deep Fry in Desi Ghee",
    "recipe.step4_desc": "Heat desi ghee in a deep kadhai on medium-low flame. Gently slide thekua discs in small batches. Fry patiently on low flame until both sides turn golden-brown (12–15 minutes).",
    "recipe.step5_title": "✨ Cool & Store",
    "recipe.step5_desc": "Drain on parchment paper and let cool completely on a wire rack. As they cool, they turn delightfully crisp and crunchy. Store in an airtight container for up to 3 weeks.",
    "recipe.tips_title": "✨ Pro Tips for Perfect Thekua",

    // About Page
    "about.badge": "The Sacred Story",
    "about.title": "About Chhath Puja",
    "about.sub": "The history, Rigvedic origins, and solar science of Mahaparva",
    "about.history_title": "📜 History & Origins",
    "about.history_sub": "Solar worship since the ancient Vedic era",
    "about.science_title": "🔬 The Solar Science of Chhath",
    "about.science_sub": "Scientific harmony between solar rays and holy water",
    "about.singers_title": "Legendary Chhath Geet Singers",
    "about.app_title": "About Chhath Geet",
    "about.app_desc": "Chhath Geet is a digital sanctuary dedicated to the world's most ancient solar festival. Built with deep reverence for tradition, this app brings together 62 sacred audio songs, authentic 4-day ritual guidelines, live arghya panchang, and prasad recipes for devotees worldwide."
  },

  hi: {
    // Brand & Nav
    "nav.brand": "छठ गीत",
    "nav.brand_sub": "छठ महापर्व का पावन धाम",
    "nav.home": "मुख्य पृष्ठ",
    "nav.songs": "गीत संग्रह",
    "nav.rituals": "पूजा विधि",
    "nav.recipe": "ठेकुआ विधि",
    "nav.about": "छठ परिचय",
    "nav.theme_title": "थीम चुनें:",
    "nav.theme_usha": "🌅 उषा",
    "nav.theme_sandhya": "🌇 संध्या",
    "nav.theme_kosi": "🪔 कोसी",

    // Home Hero
    "home.eyebrow": "छठ महापर्व 2026 • 14–17 नवम्बर",
    "home.title": "छठ गीत",
    "home.title_sub": "छठ महापर्व का सम्पूर्ण डिजिटल धाम",
    "home.desc": "छठ महापर्व का सम्पूर्ण डिजिटल धाम — 62+ पावन छठ गीत, चार दिवसीय पूजा विधि, लाइव अर्घ्य पंचांग और ठेकुआ प्रसाद विधि। 🙏",
    "home.btn_play_all": "सभी गीत बजाएं",
    "home.btn_guide": "चार दिवसीय विधि",
    "home.btn_panchang": "पंचांग व कैलेंडर",
    "home.stat_songs": "पावन गीत",
    "home.stat_rituals": "दिवसीय विधि",
    "home.stat_cities": "प्रमुख शहर",
    "home.stat_fast": "घंटे का निर्जला व्रत",

    // Home 4-Day Vidhi Cards
    "home.vidhi_badge": "चार दिवसीय महापर्व",
    "home.vidhi_title": "छठ पूजा विधि",
    "home.vidhi_sub": "चार दिवसीय पावन पूजा विधि एवं नियम",
    "day.day1_name": "नहाय खाय",
    "day.day1_desc": "पवित्र गंगा स्नान एवं सात्विक कद्दू-भात का पहला भोजन",
    "day.day2_name": "खरना",
    "day.day2_desc": "रसियाव-रोटी भोग एवं 36 घंटे का निर्जला व्रत आरंभ",
    "day.day3_name": "संध्या अर्घ्य",
    "day.day3_desc": "अस्ताचलगामी भगवान भास्कर को पहला सायंकालीन अर्घ्य",
    "day.day4_name": "उषा अर्घ्य",
    "day.day4_desc": "उदीयमान भगवान सूर्य को प्रातःकालीन अर्घ्य एवं पारण",

    // Home Featured Songs
    "home.songs_badge": "अति लोकप्रिय",
    "home.songs_title": "सदाबहार छठ गीत",
    "home.songs_sub": "छठ महापर्व के कालजयी एवं पावन भजन",
    "home.view_all_songs": "सभी 62 गीत देखें →",

    // Home Panchang & Countdown
    "panchang.badge": "पंचांग एवं समय",
    "panchang.title": "छठ अर्घ्य पंचांग एवं कैलेंडर",
    "panchang.sub": "विभिन्न प्रमुख शहरों के सूर्यास्त एवं सूर्योदय का सटीक समय",
    "panchang.select_city": "शहर चुनें:",
    "panchang.next_arghya": "आगामी अर्घ्य",
    "panchang.next_arghya_title": "🌄 उषा अर्घ्य — कार्तिक 2026",
    "panchang.days": "दिन",
    "panchang.hours": "घंटे",
    "panchang.minutes": "मिनट",
    "panchang.seconds": "सेकंड",
    "panchang.timings_title": "संध्या एवं उषा अर्घ्य समय — 2026",
    "panchang.th_city": "शहर",
    "panchang.th_sandhya": "संध्या अर्घ्य (सूर्यास्त)",
    "panchang.th_usha": "उषा अर्घ्य (सूर्योदय)",
    "panchang.accuracy_note": "* सभी समय स्थानीय भारतीय मानक समय (IST) अनुसार अनुमानित हैं। अपने सटीक मुहूर्त हेतु स्थानीय पंचांग देखें।",
    "panchang.multi_year_title": "छठ पूजा तिथियां (2024–2027)",
    "panchang.tithi_title": "छठ तिथि एवं महत्व",
    "panchang.tithi_desc": "छठ पूजा कार्तिक मास के शुक्ल पक्ष की षष्ठी तिथि को मनाई जाती है। यह महापर्व पंचमी से आरंभ होकर 4 दिनों तक चलता है। भौगोलिक स्थिति अनुसार समय में 5–15 मिनट का अंतर हो सकता है।",

    // Multi-year calendar card strings
    "cal.kartik_chhath": "कार्तिक छठ",
    "cal.this_year": "इस वर्ष",
    "day.monday": "सोमवार",
    "day.tuesday": "मंगलवार",
    "day.wednesday": "बुधवार",
    "day.thursday": "गुरुवार",
    "day.friday": "शुक्रवार",
    "day.saturday": "शनिवार",
    "day.sunday": "रविवार",

    // Songs Page
    "songs.badge": "सम्पूर्ण ऑडियो संग्रह",
    "songs.title": "62 पावन छठ गीत",
    "songs.sub": "अपने पसंदीदा गायक एवं पूजा दिवस अनुसार फ़िल्टर करें • किसी भी गीत पर टैप करके तुरंत सुनें",
    "songs.search_placeholder": "गीत या गायक खोजें (जैसे: शारदा सिन्हा, हो दीनानाथ, पवन सिंह)...",
    "songs.all_singers_opt": "👑 सभी गायक / गायिकाएं",
    "songs.filter_singers_label": "गायक अनुसार:",
    "songs.filter_days_label": "पूजा दिवस अनुसार:",
    "songs.filter_category_label": "श्रेणी:",
    "songs.tap_to_play": "✨ सुनने के लिए किसी भी गीत पर टैप करें",
    "songs.btn_play_all": "सभी बजाएं",
    "filter.all_singers": "सभी कलाकार",
    "filter.all_days": "सभी दिवस (62)",
    "filter.all_categories": "सभी श्रेणियां",
    "filter.paramparik": "🎶 पारंपरिक गीत",
    "filter.aarti": "🙏 आरती व भजन",
    "filter.modern": "🎤 आधुनिक गीत",
    "filter.day1": "🌊 दिवस 1: नहाय खाय",
    "filter.day2": "🌙 दिवस 2: खरना",
    "filter.day3": "🌅 दिवस 3: संध्या अर्घ्य",
    "filter.day4": "🌄 दिवस 4: उषा अर्घ्य",
    "filter.kosi": "🎋 कोसी भराई",
    "filter.general": "☀️ सार्वजनिक गीत",

    // Rituals Page
    "rituals.badge": "पावन विधि मार्गदर्शिका",
    "rituals.title": "चार दिवसीय छठ पूजा विधि",
    "rituals.sub": "क्रमबद्ध पूजा विधि, पवित्र सूर्य मंत्र एवं सामग्री चेकलिस्ट",
    "rituals.tab1": "🌊 दिवस 1: नहाय खाय",
    "rituals.tab2": "🌙 दिवस 2: खरना",
    "rituals.tab3": "🌅 दिवस 3: संध्या अर्घ्य",
    "rituals.tab4": "🌄 दिवस 4: उषा अर्घ्य",
    "rituals.traditions_title": "परंपरा एवं विधि",
    "rituals.mantras_title": "पवित्र मंत्र",
    "rituals.samagri_title": "पूजन सामग्री चेकलिस्ट",
    "rituals.reset_btn": "↺ चेकलिस्ट रीसेट करें",

    // Recipe Page
    "recipe.badge": "महाप्रसाद",
    "recipe.title": "ठेकुआ बनाने की विधि",
    "recipe.sub": "छठ पूजा का पावन गेहूं, गुड़ और देसी घी का दिव्य महाप्रसाद",
    "recipe.rules_title": "🙏 छठ प्रसाद के पावन नियम",
    "recipe.rule1": "सभी सामग्री पूर्णतः शुद्ध और सात्विक होनी चाहिए (प्याज, लहसुन वर्जित)",
    "recipe.rule2": "केवल शुद्ध देसी गाय का घी, ईख का गुड़ और गेहूं का आटा उपयोग करें",
    "recipe.rule3": "पवित्र और स्वच्छ स्थान पर शुद्ध मन और भक्ति भाव से तैयार करें",
    "recipe.batch_title": "प्रसाद की मात्रा (पीस अनुसार)",
    "recipe.batch_small": "छोटा बैच (10 पीस)",
    "recipe.batch_medium": "मध्यम बैच (20 पीस)",
    "recipe.batch_large": "बड़ा बैच (40 पीस)",
    "recipe.batch_family": "पारिवारिक बैच (60 पीस)",
    "recipe.ingredients_title": "सामग्री सूची (ग्राम एवं मिलीलीटर में)",
    "recipe.ing_flour_title": "गेहूं का आटा",
    "recipe.ing_flour_sub": "शुद्ध मोटा पिसा गेहूं का आटा",
    "recipe.ing_jaggery_title": "गन्ने का गुड़",
    "recipe.ing_jaggery_sub": "शुद्ध ईख का गुड़ (बारीक कटा)",
    "recipe.ing_ghee_title": "शुद्ध देसी गाय का घी",
    "recipe.ing_ghee_sub": "मोयन एवं गूंधने हेतु शुद्ध देसी घी",
    "recipe.ing_coconut_title": "सूखा कद्दूकस नारियल",
    "recipe.ing_coconut_sub": "सूखे नारियल के बारीक लच्छे",
    "recipe.ing_fennel_title": "मोटी हरी सौंफ",
    "recipe.ing_fennel_sub": "खुशबूदार मोटी हरी सौंफ",
    "recipe.ing_cardamom_title": "छोटी इलायची पाउडर",
    "recipe.ing_cardamom_sub": "ताज़ा कुटी हरी इलायची",
    "recipe.ing_water_title": "स्वच्छ जल",
    "recipe.ing_water_sub": "गुड़ की चाशनी हेतु शुद्ध जल",

    "recipe.steps_title": "👨‍🍳 क्रमबद्ध निर्माण विधि",
    "recipe.step1_title": "🍯 गुड़ की चाशनी बनाएं",
    "recipe.step1_desc": "एक पैन में 150 ग्राम गुड़ और 50 मिलीलीटर पानी डालकर धीमी आंच पर पिघलाएं (एक तार की हल्की चाशनी)। छानकर अशुद्धियां अलग करें।",
    "recipe.step2_title": "🌾 आटा और मोयन तैयार करें",
    "recipe.step2_desc": "एक परात में 250 ग्राम गेहूं का आटा, 10 ग्राम सौंफ, 3 ग्राम इलायची पाउडर और 30 ग्राम सूखा नारियल मिलाएं। इसमें 60 मिलीलीटर देसी घी डालकर अच्छी तरह मोयन लगाएं। गुनगुनी गुड़ की चाशनी डालकर सख्त आटा गूंधें। 25–30 मिनट ढककर रखें।",
    "recipe.step3_title": "🍪 ठेकुआ को आकार दें",
    "recipe.step3_desc": "गूंधे हुए आटे की नींबू के आकार की लोइयां (लगभग 40 ग्राम) बनाएं। पारंपरिक लकड़ी के सांचे पर हल्का घी लगाकर या कांटे के चम्मच से सुंदर डिजाइन बनाएं।",
    "recipe.step4_title": "🔥 शुद्ध देसी घी में तलें",
    "recipe.step4_desc": "कड़ाही में पर्याप्त देसी घी मध्यम-धीमी आंच पर गर्म करें। ठेकुआ को धीमी आंच पर धैर्यपूर्वक दोनों तरफ से सुनहरा भूरा होने तक तलें (12–15 मिनट)।",
    "recipe.step5_title": "✨ ठंडा करें एवं सुरक्षित रखें",
    "recipe.step5_desc": "तले हुए ठेकुआ को जाली पर निकालें और पूरी तरह ठंडा होने दें। ठंडा होने पर यह खस्ता और कुरकुरा हो जाएगा। एयरटाइट डिब्बे में 3 सप्ताह तक सुरक्षित रखें।",
    "recipe.tips_title": "✨ उत्तम ठेकुआ हेतु विशेष सुझाव",

    // About Page
    "about.badge": "पावन गाथा",
    "about.title": "छठ महापर्व परिचय",
    "about.sub": "छठ पूजा का इतिहास, ऋग्वैदिक मूल और सूर्य विज्ञान",
    "about.history_title": "📜 इतिहास एवं पौराणिक मूल",
    "about.history_sub": "प्राचीन वैदिक काल से चली आ रही सूर्य आराधना",
    "about.science_title": "🔬 छठ पूजा का सूर्य विज्ञान",
    "about.science_sub": "सूर्य किरणों एवं पवित्र जल का वैज्ञानिक समन्वय",
    "about.singers_title": "महान छठ गीत गायक एवं गायिकाएं",
    "about.app_title": "छठ गीत के बारे में",
    "about.app_desc": "छठ गीत दुनिया के सबसे प्राचीन सूर्य महापर्व को समर्पित एक डिजिटल धाम है। परंपरा के प्रति अगाध श्रद्धा के साथ निर्मित यह मंच 62 पवित्र ऑडियो गीत, प्रामाणिक 4-दिवसीय पूजा विधि, लाइव अर्घ्य पंचांग और महाप्रसाद विधि विश्वभर के श्रद्धालुओं तक पहुंचाता है।"
  }
};

let currentLang = localStorage.getItem('cg_lang') || 'en';

function getTranslation(key) {
  const dict = I18N_DICT[currentLang] || I18N_DICT.en;
  return dict[key] || (I18N_DICT.en[key] || key);
}

function setLanguage(lang) {
  if (!['en', 'hi'].includes(lang)) lang = 'en';
  currentLang = lang;
  localStorage.setItem('cg_lang', lang);
  document.documentElement.setAttribute('data-lang', lang);

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const translation = getTranslation(key);
    if (translation) {
      el.textContent = translation;
    }
  });

  // Update data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    const translation = getTranslation(key);
    if (translation) {
      el.setAttribute('placeholder', translation);
    }
  });

  // Update data-i18n-html
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    const translation = getTranslation(key);
    if (translation) {
      el.innerHTML = translation;
    }
  });

  // Update language toggle buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === currentLang);
  });

  // Dispatch event for dynamic re-rendering
  window.dispatchEvent(new CustomEvent('chhathLangChange', { detail: { lang: currentLang } }));
}

function initI18n() {
  // Bind all language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      setLanguage(btn.dataset.lang);
    });
  });

  // Apply saved language
  setLanguage(currentLang);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initI18n);
} else {
  initI18n();
}
