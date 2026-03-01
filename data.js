// data.js — Bharat Utsav Festival Database 2026
// Dates follow the Hindu lunisolar (Panchanga) calendar; may vary ±1–2 days by region.

const FESTIVALS = [

  /* ════════════ JANUARY ════════════ */

  {
    id: "lohri",
    name: "Lohri",
    hindiName: "लोहड़ी",
    date: "2026-01-13",
    hinduDate: "Last day of Paush (solar)",
    type: "sikh",
    emoji: "🔥",
    regions: ["Punjab", "Haryana", "Himachal Pradesh", "Delhi"],
    shortDesc: "Bonfire festival marking the end of winter and the harvest of the rabi crop.",
    story: `Lohri lights up the winter night every January 13 — always the eve of Makar Sankranti — with crackling bonfires, bhangra beats, and showers of popcorn and sesame into the flames.

The festival's oldest layer celebrates the winter solstice. The sun's northward journey (Uttarayan) begins the next morning, so Lohri is the year's last long, cold night — burned away symbolically. For Punjab's farming communities it marks the harvest of sugarcane and the planting season for wheat, two reasons to rejoice.

A beloved folk story ties Lohri to Dulla Bhatti, a Robin-Hood-like hero from Mughal times who saved village girls from being sold into slavery and arranged their marriages with dignity. His songs — "Sunder mundriye ho!" — are still sung around every bonfire, a 400-year-old pop song passed mouth to mouth.`,
    celebration: `Bonfires are lit at dusk in courtyards and street crossings. Families and neighbours circle the fire, tossing rewri (sesame brittle), puffed rice, peanuts, and popcorn as offerings while chanting "aadar aye, dilather jaye" (may honour come, poverty leave). Bhangra and gidda dances follow. Sweets like gajak and sarson da saag with makki di roti make the feast. New brides and newborns receive special blessings — Lohri is especially auspicious for the first festival after a wedding or birth.`,
    regionalVariations: {
      "Punjab / Haryana": "Grand community bonfires; bhangra competitions; gifts of rewri and gajak exchanged between families.",
      "Delhi NCR": "High-rise societies host Lohri nights on terraces with DJs mixing folk and Bollywood.",
      "Himachal Pradesh": "Known as Maghi here; hill communities sing Pahadi folk songs around smaller fires.",
      "Sindhi community": "Celebrated as Lal Loi with similar bonfire traditions carried from pre-partition Punjab."
    },
    significance: `Lohri is at once an agrarian thanksgiving, a winter-solstice ritual, and a community social event. It reinforces bonds of neighbourhood (mohalla) and family, and keeps alive an oral folk-music tradition in the voice of Dulla Bhatti that predates recorded Punjabi literature. For the diaspora in Canada and the UK, it has become a powerful marker of cultural identity.`,
    resources: [
      { title: "Lohri — Punjab Government Cultural Portal", url: "https://punjabgov.in/culture/festivals/lohri/", src: "Punjab Govt" },
      { title: "Lohri on Wikipedia", url: "https://en.wikipedia.org/wiki/Lohri", src: "Wikipedia" },
      { title: "Story of Dulla Bhatti", url: "https://www.tribuneindia.com/news/features/the-legend-of-dulla-bhatti/", src: "Tribune India" }
    ]
  },

  {
    id: "makar-sankranti",
    name: "Makar Sankranti",
    hindiName: "मकर संक्रान्ति",
    date: "2026-01-14",
    hinduDate: "Solar — Sun enters Capricorn (Makar Rashi)",
    type: "hindu",
    emoji: "🪁",
    regions: ["All India"],
    shortDesc: "Solar festival marking the sun's northward journey (Uttarayan); celebrated with kites, sesame sweets, and harvest thanksgiving.",
    story: `Unlike most Hindu festivals which move with the lunar calendar, Makar Sankranti is solar — it falls on January 14 every year (occasionally the 15th). "Sankranti" means transition: the sun crosses into Capricorn (Makar), beginning its six-month northward journey (Uttarayan).

The Mahabharata's grand patriarch Bhishma, though mortally wounded at Kurukshetra, chose to wait for Uttarayan to die — because souls departing during the sun's northward arc reach liberation. This gives the day a cosmic weight beyond its agrarian roots.

Across the Gangetic plains, pilgrims immerse themselves in the Ganga at dawn, the cold river now blessed by the sun's turn. In Gujarat, the entire sky fills with kites from sunrise to dusk in an aerial ballet that is purely Sankranti's own. In Tamil Nadu the three-day Pongal celebration begins, and in Assam, Bihu bonfires burn. One festival, twelve names, a continent of joy.`,
    celebration: `North India: sesame (til) and jaggery (gur) laddoos exchanged — "til gul ghya, god god bola" (take sesame-jaggery, speak sweetly). Gujarat & Rajasthan: kite-flying from dawn; cities become a tapestry of colour above rooftops. Andhra / Telangana: Bhogi bonfire the night before, cattle decorated with garlands. Punjab: Lohri the night before flows into Sankranti morning. Khichdi (rice and lentil porridge) is the universal dish of the day, offered to the sun and then eaten.`,
    regionalVariations: {
      "Tamil Nadu": "Called Pongal — a three-day harvest festival; fresh rice boiled until it overflows symbolising abundance.",
      "Gujarat": "Uttarayan — the world's largest kite festival; special patang (kites) and manja (thread) markets.",
      "Assam": "Magh Bihu — bonfire feasts, traditional games, and community dining.",
      "West Bengal": "Poush Sankranti — jaggery sweets (pithe), Gangasagar Mela pilgrimage.",
      "Maharashtra": "Til-gul exchanged with the words 'god god bola'; married women visit each other with gifts.",
      "Karnataka": "Ellu-Bella — mix of sesame, jaggery, coconut, and groundnuts distributed to neighbours.",
      "Andhra / Telangana": "Bhogi + Pongal + Kanuma (cattle worship) over three days."
    },
    significance: `Makar Sankranti is the proof that India's festival calendar blends astronomy, agriculture, and mythology into daily lived culture. The date has been calculated with solar precision for at least two thousand years, making it one of the oldest observed astronomical events on the subcontinent. Its universality — from the Himalayas to the coast — reflects the shared substrate beneath India's linguistic and religious diversity.`,
    resources: [
      { title: "Makar Sankranti — Wikipedia", url: "https://en.wikipedia.org/wiki/Makar_Sankranti", src: "Wikipedia" },
      { title: "Uttarayan Kite Festival — Gujarat Tourism", url: "https://www.gujarattourism.com/events/uttarayan.html", src: "Gujarat Tourism" },
      { title: "Pongal — Tamil Nadu Tourism", url: "https://www.tamilnadutourism.tn.gov.in/festivals/pongal", src: "TN Tourism" }
    ]
  },

  {
    id: "republic-day",
    name: "Republic Day",
    hindiName: "गणतन्त्र दिवस",
    date: "2026-01-26",
    hinduDate: "January 26 (fixed)",
    type: "national",
    emoji: "🇮🇳",
    regions: ["All India"],
    shortDesc: "India's Constitution came into force on this day in 1950, completing the transition from a British dominion to a sovereign democratic republic.",
    story: `At 10:18 AM on January 26, 1950, Dr. Rajendra Prasad was sworn in as India's first President and the Constitution of India — the longest written constitution in the world, three years in the making — came into force. India ceased to be a dominion of the British Crown and became a fully sovereign, secular, democratic republic.

The date was chosen deliberately. January 26, 1930 was Purna Swaraj Day, when the Indian National Congress first unfurled the flag and demanded complete independence. By enacting the Constitution on this same date, the founders wove continuity between the freedom struggle and its legal culmination.

Dr. B.R. Ambedkar, the principal architect of the Constitution, spent 2 years, 11 months, and 18 days on a document of 395 articles and 8 schedules — granting every citizen fundamental rights regardless of caste, creed, or gender, at a time when such guarantees were radical.`,
    celebration: `The centerpiece is the Republic Day Parade on Kartavya Path (formerly Rajpath), New Delhi — a 90-minute procession of military might, cultural tableaux from every state, school bands, and a fly-past by the Indian Air Force. A foreign head of state is traditionally the chief guest. State capitals hold smaller parades. Schools conduct flag-hoisting ceremonies, and the President addresses the nation. The 26–29 January period features the Beating the Retreat ceremony, illuminating the north and south blocks with thousands of lights.`,
    regionalVariations: {
      "New Delhi": "Grand parade on Kartavya Path; bravery awards to children; President's At Home reception.",
      "States & UTs": "Governor/Lt Governor hoists the flag; state-level cultural parades.",
      "Indian diaspora": "Embassy events, flag-hoisting, and cultural programmes worldwide."
    },
    significance: `Republic Day is less a celebration of history and more a renewal of constitutional promise — the idea that India is a work in progress, a project of pluralism and democracy. The parade's state tableaux serve as a yearly reminder of India's dizzying diversity, all under one tricolour.`,
    resources: [
      { title: "Republic Day — Official Website", url: "https://www.india.gov.in/my-government/constitution-india", src: "Govt of India" },
      { title: "Constitution of India — Full Text", url: "https://legislative.gov.in/constitution-of-india/", src: "Legislative Dept" },
      { title: "Republic Day — Wikipedia", url: "https://en.wikipedia.org/wiki/Republic_Day_(India)", src: "Wikipedia" }
    ]
  },

  /* ════════════ FEBRUARY ════════════ */

  {
    id: "vasant-panchami",
    name: "Vasant Panchami",
    hindiName: "वसन्त पञ्चमी",
    date: "2026-02-03",
    hinduDate: "Magha Shukla Panchami (5th day of bright fortnight of Magha)",
    type: "hindu",
    emoji: "🌼",
    regions: ["All India", "Special prominence in Bengal, Punjab, Rajasthan"],
    shortDesc: "Festival of spring and the goddess Saraswati — patron of knowledge, music, and the arts.",
    story: `Vasant Panchami arrives like the first warm breath after winter. "Vasant" is Sanskrit for spring; "Panchami" is the fifth lunar day. Together they mark the point when nature begins to stir — mustard fields burst yellow across Punjab, mango trees put out new leaves, and the air carries a hint of the season to come.

The day is consecrated to Saraswati, the four-armed goddess seated on a white swan, holding a veena (lute) and books. She embodies the idea that true power flows from wisdom and creative excellence rather than force or wealth. Legend says she emerged from Brahma's creative impulse and gave the universe its voice — speech, music, and knowledge.

A lovely tradition: young children write their first letter on this day — a ritual called Vidyarambha — believing Saraswati will bless a life of learning begun under her auspice.`,
    celebration: `Mustard-yellow (the colour of spring) is worn by everyone. Saraswati idols are worshipped in homes, schools, and pandals; books, musical instruments, and tools are placed before her for blessing. No one studies on this day — textbooks rest, symbolically surrendered to the goddess. In Bengal, the idol is immersed the next day after elaborate puja with sweets like boondi and mishti doi. In Punjab, people fly kites in yellow skies.`,
    regionalVariations: {
      "West Bengal": "Biggest Saraswati Puja; college students organise pandals; the goddess wears a sari and is adorned with flowers.",
      "Punjab / Haryana": "Yellow clothing, kite-flying, mustard-field picnics.",
      "Rajasthan": "Saraswati temples thronged; musicians perform; Vidyarambha for children.",
      "UP / Bihar": "Saraswati Vandana in schools; cultural programmes.",
      "South India": "Known as Saraswati Puja; less prominent but observed in music and dance academies."
    },
    significance: `In a culture that venerates knowledge, Vasant Panchami is a day to pause and acknowledge that the mind is sacred. Its timing at the cusp of spring makes it a festival of beginnings — of the school year, of creative projects, of new understanding. It also marks that India's oldest love affair is not with power or gold, but with learning.`,
    resources: [
      { title: "Vasant Panchami — Wikipedia", url: "https://en.wikipedia.org/wiki/Vasant_Panchami", src: "Wikipedia" },
      { title: "Saraswati — Encyclopaedia Britannica", url: "https://www.britannica.com/topic/Saraswati", src: "Britannica" }
    ]
  },

  {
    id: "maha-shivratri",
    name: "Maha Shivratri",
    hindiName: "महाशिवरात्रि",
    date: "2026-02-26",
    hinduDate: "Phalguna Krishna Chaturdashi (14th night of dark fortnight of Phalguna)",
    type: "hindu",
    emoji: "🔱",
    regions: ["All India"],
    shortDesc: "The Great Night of Shiva — an all-night vigil of fasting, meditation, and chanting in honour of Lord Shiva.",
    story: `Maha Shivratri is unlike any other Hindu festival — it is a night of wakefulness, not celebration. While other festivals are joyous and bright, Shivratri asks you to sit in the darkness of the new-moon night and confront the deepest questions.

Multiple origin stories exist. The most beloved: on this night, Shiva performed the cosmic dance of Tandava — the dance that simultaneously destroys and creates the universe. Another tells of the churning of the cosmic ocean (Samudra Manthan), when the poison Halahala threatened to destroy all creation. Shiva drank it, holding it in his blue throat (hence "Neelakantha"), saving the universe at personal cost.

A third tradition says this is the night of Shiva and Parvati's marriage — the union of consciousness (Shiva) and energy (Shakti), without which neither can function. Yogis across India stay awake all night meditating, believing the night's energies are uniquely charged for spiritual progress.`,
    celebration: `Devotees fast through the day and keep a night-long vigil (jaagran). Shiva lingams are bathed with milk, honey, curd, ghee, and water — a ritual called Abhishek — every three hours through four "prahars" (watches of the night). Bilva (bael) leaves, dear to Shiva, are offered. Temples like Somnath, Kashi Vishwanath, and Meenakshi draw hundreds of thousands. "Om Namah Shivaya" chanting echoes through the night. By dawn, the fast is broken with prasad.`,
    regionalVariations: {
      "Varanasi (Kashi)": "Processions through the ghats; boats lit with diyas on the Ganga; Kashi Vishwanath temple open all night.",
      "Kashmir (Herath)": "Kashmiri Pandits celebrate Herath on Shivratri eve with a pre-fast feast; one of the most sacred nights of the Kashmiri calendar.",
      "Maharashtra": "All-night kirtan and bhajan at Shiva temples; Tryambakeshwar near Nashik is particularly thronged.",
      "South India": "Temples stay open all night; Shiva lingams made of turmeric paste; grand processions.",
      "Nepal (for context)": "Pashupatinath temple in Kathmandu hosts the world's largest Shivratri gathering."
    },
    significance: `Maha Shivratri encodes a sophisticated spiritual message: the most powerful work is done in darkness and silence. The night is a metaphor for the dark corners of the mind that meditation illuminates. Shiva — destroyer, meditator, dancer, hermit, householder — is the most paradoxical of deities, and Shivratri is the day devoted to holding all those paradoxes at once.`,
    resources: [
      { title: "Maha Shivratri — Wikipedia", url: "https://en.wikipedia.org/wiki/Maha_Shivaratri", src: "Wikipedia" },
      { title: "Shiva — Encyclopaedia Britannica", url: "https://www.britannica.com/topic/Shiva", src: "Britannica" },
      { title: "Kashi Vishwanath Temple", url: "https://shrikashivishwanath.org/", src: "Official Temple" }
    ]
  },

  /* ════════════ MARCH ════════════ */

  {
    id: "eid-ul-fitr",
    name: "Eid ul-Fitr",
    hindiName: "ईद उल-फ़ित्र",
    date: "2026-03-20",
    hinduDate: "1 Shawwal (Islamic lunar calendar — date subject to moon sighting)",
    type: "islamic",
    emoji: "🌙",
    regions: ["All India", "Special prominence in Hyderabad, Lucknow, Kashmir, Kolkata, Kerala"],
    shortDesc: "The festival of breaking the fast — celebrating the end of Ramadan, Islam's month of fasting, prayer, and reflection.",
    story: `Eid ul-Fitr is the reward for a month well lived. For 29 or 30 days, Muslim communities worldwide observe Ramadan — a month of fasting from dawn to dusk, intensified prayer, charity, and spiritual renewal. On the sighting of the new crescent moon (hilal), Ramadan ends and Eid begins.

The Prophet Muhammad is reported to have said that God gives a special night of forgiveness at the end of Ramadan, and Eid is the morning after — a day of gratitude and community. The word "Fitr" comes from the Arabic root meaning to break fast, but also the same root as "fitrat" (innate nature) — suggesting the festival is a return to one's essential, uncorrupted self.

Before the Eid prayer, every adult Muslim must pay Zakat ul-Fitr — a compulsory charity ensuring that even the poorest members of the community can celebrate. This is the festival's most important social message: no one is left behind.`,
    celebration: `The day begins with a special Eid prayer (Salat al-Eid) at mosques and open grounds after dawn. Wearing new clothes, families embrace with "Eid Mubarak!" (Blessed Eid). Seviyan (sweet vermicelli cooked in milk and sugar) is the quintessential Eid dish. Children receive Eidi (gifts or money from elders). Visits to relatives and friends last all day. Graveyards are visited to pray for the departed. In the evening, streets and markets fill with festive energy and food stalls.`,
    regionalVariations: {
      "Hyderabad": "Famous for haleem and biryani during Ramadan; Charminar area lit spectacularly for Eid.",
      "Lucknow": "Nawabi elegance — attar, sheermal, and shahi tukda; elaborate family gatherings.",
      "Kashmir": "Hazratbal Shrine is the spiritual heart of Eid in the Valley; grand congregational prayers.",
      "Kerala (Mappila)": "Known as Cheriya Perunnal; unique Mappila songs and traditional Malabar cuisine.",
      "Kolkata (Park Circus)": "Largest Eid congregation in eastern India; Nakhoda Mosque overflows onto the streets."
    },
    significance: `Eid ul-Fitr is Islam's most joyous festival — the counterpoint to Ramadan's austerity. It embodies the faith's insistence on communal celebration, obligatory charity, and gratitude. In India, where Muslims are the second-largest religious community (approximately 200 million), Eid is also a moment of inter-community celebration: Hindu, Sikh, and Christian neighbours exchange sweets and greetings, making it a festival of India's broader social fabric.`,
    resources: [
      { title: "Eid ul-Fitr — Wikipedia", url: "https://en.wikipedia.org/wiki/Eid_al-Fitr", src: "Wikipedia" },
      { title: "Ramadan and Eid — BBC Religion", url: "https://www.bbc.co.uk/religion/religions/islam/holydays/eid.shtml", src: "BBC" },
      { title: "IslamicFinder — Eid Date Calculator", url: "https://www.islamicfinder.org/islamic-events/", src: "IslamicFinder" }
    ]
  },

  {
    id: "holika-dahan",
    name: "Holika Dahan",
    hindiName: "होलिका दहन",
    date: "2026-03-21",
    hinduDate: "Phalguna Purnima (full moon night of Phalguna)",
    type: "hindu",
    emoji: "🔥",
    regions: ["All India"],
    shortDesc: "The bonfire of Holi eve — burning Holika to celebrate the triumph of devotion over arrogance.",
    story: `On the night before Holi burns the bonfire of Holika Dahan — a fire that is simultaneously mythological, seasonal, and purifying.

The story: Hiranyakashipu, a demon king, had won a boon of near-immortality and demanded that all in his kingdom worship him alone. His young son Prahlada refused — he was an ardent devotee of Vishnu. The furious king tried to kill Prahlada in twelve ways and failed each time, divinely protected. Finally, Hiranyakashipu asked his sister Holika — who possessed a magic cloak that made her fireproof — to sit in a bonfire with Prahlada on her lap.

But divine grace turned the trick: the cloak flew from Holika to Prahlada. Holika burned; Prahlada walked out unharmed. The fire we light on Purnima night re-enacts this — burning arrogance, ego, and all that is destructive, to prepare the ground for the riot of colour the next morning.`,
    celebration: `Community bonfires are built days in advance — sometimes 20–30 feet high. At dusk on Purnima, the fire is lit with a Vedic ceremony. People circumambulate the fire, offer coconut and raw grains, and throw dried cow dung cakes into it. The fire's ash is considered sacred. In North India, the bonfire is built around an effigy of Holika. Children traditionally tease passersby with water-filled balloons the days before.`,
    regionalVariations: {
      "Braj Mandal (Mathura/Vrindavan)": "Holika Dahan here is especially sacred — the region where Krishna, Vishnu's avatar, played Holi.",
      "Rajasthan": "Songs specific to Holika Dahan sung by women circling the fire.",
      "Maharashtra": "Shimga festival begins; coconut and dried dung offerings; local folk songs.",
      "Punjab": "The bonfire is called Holika; closely follows Lohri traditions."
    },
    significance: `Holika Dahan encodes an eternal moral: devotion and righteousness outlast tyranny. The bonfire is also seasonal — it burns the straw and dry waste of winter, literally and symbolically clearing the air for spring. Many communities use the ash to prepare herbal preparations, linking the mythological to the medicinal.`,
    resources: [
      { title: "Holika Dahan — Wikipedia", url: "https://en.wikipedia.org/wiki/Holika_Dahan", src: "Wikipedia" },
      { title: "Prahlada Story — Bhagavata Purana summary", url: "https://www.sacred-texts.com/hin/vp/index.htm", src: "Sacred Texts" }
    ]
  },

  {
    id: "holi",
    name: "Holi",
    hindiName: "होली",
    date: "2026-03-22",
    hinduDate: "Phalguna Krishna Pratipada (day after Phalguna full moon)",
    type: "hindu",
    emoji: "🎨",
    regions: ["All India"],
    shortDesc: "The Festival of Colours — India's most exuberant celebration of spring, love, and the victory of good over evil.",
    story: `The morning after Holika Dahan, India erupts in colour. Holi is the festival that dissolves all boundaries — of caste, class, age, and social distance — in a blizzard of powdered pigment and water.

Its deepest story is of Krishna and Radha. The dark-skinned Krishna, jealous of fair Radha's complexion, complained to his mother Yashoda. She laughingly told him to colour Radha's face with whatever colour he wished. He did, and the divine love-play of colour began. Every Holi, the plains of Braj (around Mathura and Vrindavan) re-enact this moment, the most romantic episode in all of Hindu mythology.

The festival also celebrates the harvest of rabi crops — the air thick with the fragrances of blooming flowers that produce natural colours. And it is the final exhalation of winter, a last day of abandon before the heat of summer settles in.`,
    celebration: `The revelry begins at dawn with gulal (dry colour powder) and later water balloons and pichkaris (water guns). Every face, every shirt becomes a canvas of red, green, yellow, and blue. Traditional Holi drinks include thandai (a spiced milk drink, sometimes laced with bhang — an edible cannabis preparation that has ritual sanction on this one day). Gujiya (sweet fried dumplings with khoya filling) is the festival sweet. By afternoon, everyone bathes and changes into clean clothes for family visits and feasting.`,
    regionalVariations: {
      "Braj Mandal (UP)": "Lathmar Holi at Barsana: women chase men with sticks (lathis) while men shield themselves — a re-enactment of Krishna's teasing of Radha's friends.",
      "Vrindavan": "Phoolon wali Holi: played with flower petals; Banke Bihari temple turns into a sea of marigolds.",
      "West Bengal": "Dol Yatra / Dol Purnima: idol of Krishna swung on a decorated swing; more devotional than raucous.",
      "Maharashtra": "Shimga: five-day festival; rangpanchami five days later is the final colour celebration.",
      "Manipur": "Yaosang: five-day festival with Thabal Chongba (moonlit folk dance) and community games.",
      "Rajasthan": "Royal Holi at Jaipur with elephant processions and folk performances.",
      "Punjab": "Hola Mohalla (next day at Anandpur Sahib): Sikh martial arts (gatka), poetry, and kirtan."
    },
    significance: `No festival captures the Indian spirit of joyful surrender to the present moment as completely as Holi. It is a sociological experiment in equality — for one morning, everyone is colourful and no one's clothes are pristine enough to signal status. The festival's global spread (Holi events now happen across Europe, North America, and Australia) suggests its message of colour-as-connection resonates far beyond its cultural origin.`,
    resources: [
      { title: "Holi — Wikipedia", url: "https://en.wikipedia.org/wiki/Holi", src: "Wikipedia" },
      { title: "Holi Festival Guide — India Tourism", url: "https://www.incredibleindia.org/content/incredibleindia/en/events/holi.html", src: "Incredible India" },
      { title: "Lathmar Holi — National Geographic", url: "https://www.nationalgeographic.com/travel/article/lathmar-holi", src: "NatGeo" }
    ]
  },

  {
    id: "gudi-padwa",
    name: "Gudi Padwa / Ugadi",
    hindiName: "गुडी पाडवा / उगादि",
    date: "2026-03-30",
    hinduDate: "Chaitra Shukla Pratipada (1st day of bright fortnight of Chaitra)",
    type: "hindu",
    emoji: "🌅",
    regions: ["Maharashtra", "Karnataka", "Andhra Pradesh", "Telangana", "Goa", "Konkan"],
    shortDesc: "The Hindu New Year for Maharashtra and the Deccan — celebrating the start of the new Panchanga year.",
    story: `When the Chaitra month begins — typically in late March or early April — the Hindu lunisolar calendar turns a new page. This is Chaitra Shukla Pratipada: the first day of the first bright fortnight of the first month. Ugadi (from Sanskrit "Yuga" + "Adi" = beginning of an age) and Gudi Padwa (Marathi for "flag of the new year") celebrate this cosmic beginning.

Brahma, the creator, is said to have begun creating the universe on this very tithi (lunar day). The Vikrama and Shalivahana calendars both begin here. The Shalivahana era, which counts years from the military victory of King Shalivahana in the first century CE, is the traditional calendar of the Deccan and is still used in Maharashtra's Panchanga.

In Maharashtra, the Gudi — a bamboo staff adorned with a copper pot, neem leaves, mango leaves, flowers, and a silk cloth — is erected outside every home at dawn. It represents the victory flag of Lord Rama, who returned to Ayodhya after defeating Ravana, or alternatively the flag of Shalivahana's victorious army.`,
    celebration: `Homes are cleaned and adorned with rangoli (kolam in the South). The Gudi is hoisted before sunrise. Families apply fragrant oil to their hair (abhyanga snan), wear new clothes, and begin the day with Ugadi Pachadi — a raw chutney of six tastes (neem flowers for bitterness, jaggery for sweetness, tamarind for sourness, green chilli for heat, salt, and raw mango) symbolising that life contains all flavours. The year's Panchanga is read aloud, predicting the year ahead. Shrikhand-puri and puran poli are festive dishes.`,
    regionalVariations: {
      "Maharashtra": "Gudi hoisted outside homes; shrikhand-puri feast; Gudi Padwa processions in Mumbai.",
      "Karnataka / AP / Telangana": "Ugadi; Ugadi Pachadi (six-taste chutney) is central; new accounts opened; Panchanga Sravanam (public reading of almanac).",
      "Goa (Konkani)": "Called Sanvsar Padvo; Konkani community celebrations.",
      "Sindhi community": "Cheti Chand (same day): Sindhi New Year honouring Saint Jhulelal, deity of the River Indus.",
      "Kashmir (Kashmiri Pandits)": "Navreh: Kashmiri New Year; thali of rice, walnuts, and Panchanga placed by the bedside the night before."
    },
    significance: `The New Year festival of the Deccan carries within it a complete philosophy of life — the Ugadi Pachadi that mixes bitter, sweet, sour, and spicy in one bowl is a reminder that a well-lived year will contain all emotions, and that one must greet them all with equanimity. The act of reading the Panchanga publicly makes astronomy a community affair.`,
    resources: [
      { title: "Gudi Padwa — Wikipedia", url: "https://en.wikipedia.org/wiki/Gudi_Padwa", src: "Wikipedia" },
      { title: "Ugadi — Wikipedia", url: "https://en.wikipedia.org/wiki/Ugadi", src: "Wikipedia" },
      { title: "Cheti Chand — Sindhi New Year", url: "https://en.wikipedia.org/wiki/Cheti_Chand", src: "Wikipedia" }
    ]
  },

  /* ════════════ APRIL ════════════ */

  {
    id: "ram-navami",
    name: "Ram Navami",
    hindiName: "राम नवमी",
    date: "2026-04-06",
    hinduDate: "Chaitra Shukla Navami (9th day of bright Chaitra)",
    type: "hindu",
    emoji: "🏹",
    regions: ["All India", "Special prominence in Ayodhya, Varanasi, Rameswaram"],
    shortDesc: "The birthday of Lord Rama — the ideal king, husband, son, and avatar of Vishnu.",
    story: `At midday on Chaitra Shukla Navami, at the moment of the sun's zenith, Rama is born in the city of Ayodhya to King Dasharatha and Queen Kaushalya. Or so the Valmiki Ramayana records, and Hindus across the world celebrate this birth every year with the joy reserved for a beloved returning home.

Rama is the seventh avatar of Vishnu, born specifically to destroy the demon king Ravana and restore dharma (righteous order) to the world. But his significance goes beyond the mission. Rama is Maryada Purushottam — the "ideal man" who upholds every social duty perfectly: the obedient son who accepts exile without complaint, the faithful husband who crosses an ocean to rescue his wife, the just king whose reign (Ram Rajya) became the gold standard for governance in Indian political imagination.

The Ramayana, told in hundreds of regional versions across South and Southeast Asia, is not one story but a vast conversation across cultures about what it means to live well and rule justly. Ram Navami is the day the conversation begins again.`,
    celebration: `Temple celebrations begin at dawn with Vedic chanting. At noon — the hour of Rama's birth — conch shells blow and bells ring as the deity's image is bathed with milk, honey, and water (abhishek) and dressed in fresh robes. Ram-charcha (recitation of the Ramcharitmanas of Tulsidas) and Ram-katha (devotional discourse) run all day. Prasad includes panjeeri (wheat flour, sugar, and ghee sweet) or panchamrit. Processions with Rama's chariot (rath yatra) are common.`,
    regionalVariations: {
      "Ayodhya (UP)": "The birthplace; hundreds of thousands gather at Ram Janmabhoomi; Saryu River bathing; elaborate rath yatra.",
      "South India": "Kalyanotsavam — the marriage of Rama and Sita re-enacted in temples; carnatic music performances.",
      "Karnataka": "Ram Navami music concerts (Ramotsava) — one of India's great classical music festivals.",
      "Maharashtra": "Shobha Yatra processions; reading of Tulsidas's Ramcharitmanas.",
      "Rajasthan / Gujarat": "Fasting; recitation of Ramayana for nine days (Navaratri of Ram)."
    },
    significance: `Ram Navami is not only devotional but deeply civilisational. The Ramayana travelled from India to Java, Bali, Thailand, Malaysia, and Cambodia, making Rama one of the few figures whose story is truly pan-Asian. In India, his ideal of ethical governance — Ram Rajya — has been invoked by leaders from Gandhi to the present day. The festival celebrates the idea that godliness is not remote but embodied, achievable, human.`,
    resources: [
      { title: "Ram Navami — Wikipedia", url: "https://en.wikipedia.org/wiki/Rama_Navami", src: "Wikipedia" },
      { title: "Valmiki Ramayana Online", url: "https://www.valmikiramayan.net/", src: "Valmiki Ramayana" },
      { title: "Ramayana across Asia — Smithsonian", url: "https://www.smithsonianmag.com/travel/ramayanas-in-asia/", src: "Smithsonian" }
    ]
  },

  {
    id: "baisakhi",
    name: "Baisakhi",
    hindiName: "ਬੈਸਾਖੀ / वैसाखी",
    date: "2026-04-13",
    hinduDate: "Solar — Sun enters Aries (Mesha Sankranti); also 1 Vaisakh in Sikh calendar",
    type: "sikh",
    emoji: "⚔️",
    regions: ["Punjab", "Haryana", "Uttarakhand", "Himachal Pradesh"],
    shortDesc: "Harvest festival of Punjab and the founding anniversary of the Khalsa — the Sikh community of the pure.",
    story: `Baisakhi wears two faces: it is at once the ancient harvest festival of wheat in Punjab and one of the most important dates in Sikh history.

The agricultural layer is pre-Sikh and pan-Indian. The solar transit into Aries (Mesha Sankranti) marks the first harvest of the rabi wheat crop. For Punjab's farmers — the granary of India — this was the year's crescendo: months of sowing, tending, and praying came to fruition.

The historical layer is electric. On Baisakhi 1699, Guru Gobind Singh — the tenth and last human Guru of the Sikhs — gathered 80,000 followers at Anandpur Sahib. He emerged with a drawn sword and asked for five volunteers willing to give their lives. Five men stepped forward — the Panj Pyare (Five Beloved Ones). Instead of being killed, they were initiated into the Khalsa, the community of the pure, with the Amrit ceremony. They received new names ending in "Singh" (lion, for men) and "Kaur" (princess, for women). On this day, Sikhism transformed from a devotional movement into a community with a shared identity and code of conduct (Rehat Maryada).`,
    celebration: `The Sikh day begins at the Gurdwara with Amrit Vela (pre-dawn) prayers and Ardas. The Panj Pyare lead processions (nagar kirtan) through town. Langar (community kitchen) serves thousands. Traditional bhangra and gidda performances celebrate the harvest in parks and open fields. Special fairs (melas) with folk sports and wrestling are held. Many Sikhs choose Baisakhi to receive Amrit (Sikh baptism).`,
    regionalVariations: {
      "Anandpur Sahib (Punjab)": "The holiest Baisakhi — pilgrims gather at the birthplace of the Khalsa; massive Amrit ceremonies.",
      "Amritsar (Golden Temple)": "Continuous kirtan at Harmandir Sahib; flag-hoisting (Nishan Sahib changed).",
      "Haryana / Himachal": "Agricultural fairs; traditional folk dances; wrestling bouts.",
      "Kerala": "Vishu (same day, different tradition): auspicious first sight (Vishukani) of gold, flowers, rice, and a coin; children given Vishukaineetam (gift of money).",
      "Tamil Nadu": "Puthandu (Tamil New Year, Apr 14): first sight of the 'Kani' tray with auspicious objects."
    },
    significance: `Baisakhi demonstrates how a natural cycle (harvest) and a historical moment (founding of the Khalsa) can fuse into something far greater than either alone. The Khalsa's founding principles — equality of all humans, service (seva), readiness to defend the weak — make Baisakhi as politically relevant today as it was in 1699. It is also the day of the Jallianwala Bagh massacre (1919), when British troops fired on a Baisakhi gathering, galvanising India's independence movement.`,
    resources: [
      { title: "Baisakhi — Wikipedia", url: "https://en.wikipedia.org/wiki/Vaisakhi", src: "Wikipedia" },
      { title: "Khalsa — Sikh History", url: "https://www.sgpc.net/history-of-khalsa/", src: "SGPC" },
      { title: "Jallianwala Bagh — National Memorial", url: "https://jallianwalabagh.org.in/", src: "Jallianwala Bagh" }
    ]
  },

  {
    id: "ambedkar-jayanti",
    name: "Ambedkar Jayanti",
    hindiName: "अम्बेडकर जयंती",
    date: "2026-04-14",
    hinduDate: "April 14 (fixed)",
    type: "national",
    emoji: "📚",
    regions: ["All India"],
    shortDesc: "Birthday of Dr. B.R. Ambedkar — architect of India's Constitution, champion of Dalit rights, and one of history's greatest jurists.",
    story: `April 14, 1891: Bhimrao Ramji Ambedkar is born in Mhow (now Dr. Ambedkar Nagar), Madhya Pradesh, into a Mahar family — considered "untouchable" under the caste hierarchy. The discrimination he faced from childhood — being made to sit separately in school, denied water from the common vessel, prohibited from entering temples — would have broken most spirits. Instead, it created one of the 20th century's most formidable minds.

Ambedkar earned degrees from Bombay, Columbia University (where he studied under John Dewey), and the London School of Economics, becoming one of the first Indians to earn a doctorate in economics from a foreign university. He practised law, launched newspapers, organised the Dalit community, and debated Mahatma Gandhi on the question of separate electorates for Dalits — a historic confrontation that resulted in the Poona Pact (1932).

As Law Minister in Nehru's cabinet, he chaired the Drafting Committee of India's Constitution — writing the world's most comprehensive charter of rights for a newly independent, deeply unequal nation. He resigned in 1951 over disagreement on Hindu Code reform. In 1956, he converted to Buddhism with half a million followers, rejecting a caste system he had fought his entire life.`,
    celebration: `Government offices and schools hoist the blue flag (Ambedkar's favourite colour, representing the sky without limit). Statues of Ambedkar garlanded across India. Rallies, speeches, and seminars on constitutional rights and social justice. Dalit and Buddhist communities hold prayer meetings, processions, and public readings of Ambedkar's writings. Blue balloons released in cities. His birthplace in Mhow and Chaitya Bhoomi in Mumbai draw hundreds of thousands.`,
    regionalVariations: {
      "Maharashtra": "Largest celebrations; Chaitya Bhoomi (his memorial in Mumbai) receives 2–3 million visitors; processions in Nagpur.",
      "Uttar Pradesh": "Rallies in Lucknow and Agra; speeches by political leaders; large Dalit community gatherings.",
      "Karnataka": "Ambedkar Jayanti is a public holiday; rallies and community events in Bengaluru.",
      "Punjab": "Ravidassia community celebrations; reading of Ambedkar and Ravidas texts."
    },
    significance: `Ambedkar Jayanti is a day to remember that democracy is not a destination but a practice. Ambedkar's life is proof that intellect and determination can challenge centuries of entrenched hierarchy. His Constitution gave legal force to equality that society had denied in practice — and every generation must decide anew whether to honour that promise. The day is as much a call to action as a celebration.`,
    resources: [
      { title: "B. R. Ambedkar — Wikipedia", url: "https://en.wikipedia.org/wiki/B._R._Ambedkar", src: "Wikipedia" },
      { title: "Ambedkar's writings — Dr. Ambedkar Foundation", url: "https://www.drambedkarfoundation.nic.in/", src: "Govt of India" },
      { title: "Annihilation of Caste — full text", url: "https://www.ambedkar.org/ambcd/Annihilation%20of%20Caste.htm", src: "Ambedkar.org" }
    ]
  },

  {
    id: "hanuman-jayanti",
    name: "Hanuman Jayanti",
    hindiName: "हनुमान जयंती",
    date: "2026-04-21",
    hinduDate: "Chaitra Purnima (full moon of Chaitra)",
    type: "hindu",
    emoji: "🐒",
    regions: ["All India"],
    shortDesc: "Birthday of Lord Hanuman — the monkey-god of strength, devotion, and selfless service.",
    story: `Hanuman was born on the full moon of Chaitra, son of Anjana and the wind god Vayu, which gave him extraordinary strength and the ability to fly. As a child, he mistook the rising sun for a fruit and leapt towards it — Indra struck him with a thunderbolt, and Vayu in grief withdrew all air from the universe until the gods restored Hanuman to life with boons of immortality, perfect knowledge, and invincibility.

His story in the Ramayana is one of absolute devotion. He flew across the ocean to Lanka to find Sita, burned the demon city single-handedly, and when Lakshmana was struck down in battle, flew across the Himalayas to retrieve the Sanjeevani herb — bringing back the entire mountain when he couldn't identify the specific plant. When Rama asked how he could repay such service, Hanuman tore open his chest to reveal Rama and Sita enshrined in his heart: "This is how I repay — they already live in me."

Hanuman is the only deity who is both divine and relatable — he faces doubt, has to think, makes mistakes, asks for help. His devotion is not passive reverence but active, problem-solving, obstacle-smashing love.`,
    celebration: `Temples of Hanuman — orange-smeared, usually small and neighbourhood-level — draw huge crowds at dawn. Devotees read the Hanuman Chalisa (40 verses written by Tulsidas) and the Sundar Kanda (the Ramayana's chapter on Hanuman's Lanka mission). Red sindoor and sesame oil are applied to Hanuman's idol. Prasad includes laddoos (sweet balls) and peda. Akharas (wrestling gyms) hold demonstrations, as Hanuman is the patron of physical strength.`,
    regionalVariations: {
      "North India": "Reading of Sundara Kanda; Hanuman Chalisa recited; wrestlers offer their skill to Hanuman.",
      "Maharashtra": "Maruti (Hanuman) temples in every village; major celebrations at Sankat Mochan Mandir type temples.",
      "Andhra / Telangana": "Hanuman Jayanti falls on Karthika Pournami (November) by some regional traditions.",
      "South India": "Some regions observe it on the day of the nakshatra Moola in Margazhi month (December)."
    },
    significance: `In modern India, Hanuman has become as popular as ever. His image appears everywhere — in trucks, autorickshaws, homes, phones. He represents the synthesis of intellect and strength, of humility and power. The Hanuman Chalisa is the most recited text in Hinduism after the Gayatri Mantra, a 500-year-old poem that encapsulates an entire theology in 40 couplets.`,
    resources: [
      { title: "Hanuman — Wikipedia", url: "https://en.wikipedia.org/wiki/Hanuman", src: "Wikipedia" },
      { title: "Hanuman Chalisa — transliteration and translation", url: "https://www.bharatadesam.com/spiritual/hanuman_chalisa.php", src: "Bharatadesam" },
      { title: "Sundara Kanda — Valmiki Ramayana", url: "https://www.valmikiramayan.net/utf8/sundarakandam/sarga1/sundara_1_frame.htm", src: "Valmiki Ramayana" }
    ]
  },

  {
    id: "akshaya-tritiya",
    name: "Akshaya Tritiya",
    hindiName: "अक्षय तृतीया",
    date: "2026-04-29",
    hinduDate: "Vaishakha Shukla Tritiya (3rd day of bright Vaishakha)",
    type: "hindu",
    emoji: "✨",
    regions: ["All India", "Special prominence in Gujarat, Rajasthan, Maharashtra"],
    shortDesc: "The 'imperishable third' — the most auspicious day of the Hindu calendar for new beginnings, weddings, and gold purchases.",
    story: `Akshaya in Sanskrit means "that which never diminishes." Akshaya Tritiya is considered so auspicious that any good deed done on this day yields imperishable merit. No other day in the Hindu calendar carries this blanket blessing without the need for an auspicious muhurta (time window) — the whole day is muhurta.

The Mahabharata records that on this tithi, Draupadi received the Akshaya Patra — a magical vessel from the sun god that produced unlimited food, ensuring the Pandavas never went hungry during their twelve years of forest exile. The Gita itself is believed to have been narrated on this day. Treta Yuga, the second cosmic age, is said to have begun here.

Parashuram, the sixth avatar of Vishnu who liberated the earth from arrogant warriors, was born on Akshaya Tritiya. So was the sacred Ganga, who descended from heaven to earth on this day according to some traditions. The Badrinath temple in the Himalayas opens its doors for the summer pilgrimage season on Akshaya Tritiya.`,
    celebration: `Gold and silver purchases peak on this day — gold bought is believed to multiply. Jewelry shops see year-high sales. Weddings are held without checking a separate muhurta. New businesses and accounts are opened. Charity (dana) — feeding the poor, giving grain and clothing — is considered especially meritorious. In Gujarat, the new Vikrama year's accounting (khata-puja) begins.`,
    regionalVariations: {
      "Gujarat": "Pandharpur Wari begins; khata (new account book) puja for traders.",
      "Odisha": "Akha Teeja — agricultural season starts; farmers begin ploughing their first field on this day.",
      "Rajasthan": "Weddings performed without checking auspicious time; gold bazaars overflow.",
      "Jain community": "Akshaya Tritiya is called Akha Teej — marks the end of a year-long fast (varshi-tap) broken by drinking sugarcane juice."
    },
    significance: `Akshaya Tritiya is a window into India's relationship with time — the belief that certain moments in the cosmic calendar carry a higher charge of potential. It also democratises auspiciousness: unlike most festivals, no expensive priest or elaborate ritual is needed. Any act of charity, any purchase, any beginning on this day carries its own grace.`,
    resources: [
      { title: "Akshaya Tritiya — Wikipedia", url: "https://en.wikipedia.org/wiki/Akshaya_Tritiya", src: "Wikipedia" },
      { title: "Akshaya Patra story — Mahabharata", url: "https://www.sacred-texts.com/hin/maha/index.htm", src: "Sacred Texts" }
    ]
  },

  /* ════════════ MAY ════════════ */

  {
    id: "buddha-purnima",
    name: "Buddha Purnima",
    hindiName: "बुद्ध पूर्णिमा",
    date: "2026-05-12",
    hinduDate: "Vaishakha Purnima (full moon of Vaishakha)",
    type: "buddhist",
    emoji: "🪷",
    regions: ["All India", "Special prominence in Bodh Gaya, Sarnath, Kushinagar, Ladakh, Sikkim, Maharashtra"],
    shortDesc: "Triple anniversary of the Buddha — his birth, enlightenment, and parinirvana (death), all on the same full-moon day.",
    story: `In the Buddhist tradition, the full moon of Vaishakha is the most sacred night of the year — for on this night, three of the four great events in Siddhartha Gautama's life coincided.

Born a prince in Lumbini (present-day Nepal) around 563 BCE, Siddhartha grew up shielded from suffering. At 29, he encountered an old man, a sick man, a corpse, and a wandering ascetic. These "four sights" shattered his protected world. He left his palace, wife, and infant son in the middle of the night to seek the end of suffering.

After six years of extreme asceticism — nearly starving himself to death — he realised that the middle path between indulgence and deprivation was the way. Sitting under a pipal tree (now the Bodhi tree in Bodh Gaya), he resolved not to rise until he attained enlightenment. On the full moon of Vaishakha, he became the Buddha — the Awakened One. Later, in Vaishakha, he attained Mahaparinirvana (final death/liberation) at Kushinagar.

His first teaching — the Dhammacakkappavattana Sutta (Setting the Wheel of Dharma in Motion) — at Sarnath near Varanasi, introduced the Four Noble Truths and the Eightfold Path that would reshape Asia.`,
    celebration: `Buddhists visit viharas (monasteries) for prayer, chanting, and meditation. The Triratna (Three Jewels — Buddha, Dhamma, Sangha) are venerated. White lotus flowers and incense are offered. Charitable acts — feeding monks, releasing caged birds, giving to the poor — are especially meritorious. In Bodh Gaya, an international assembly of monks from Thailand, Japan, Sri Lanka, Myanmar, Tibet, and India gathers around the Bodhi Tree. Prayer flags flutter in Ladakh and Sikkim.`,
    regionalVariations: {
      "Bodh Gaya (Bihar)": "The holiest Buddhist site on earth; thousands of monks and pilgrims from across Asia; meditation vigils under the Bodhi Tree.",
      "Sarnath (UP)": "Site of the first sermon; candle-lit processions; archaeological museum visits.",
      "Maharashtra (Nagpur / Mumbai)": "Navayana Buddhist community (Ambedkarite Buddhists) — the largest Buddhist population in India — holds massive gatherings.",
      "Sikkim / Ladakh": "Tibetan Buddhist traditions; lamas perform prayers; monasteries open to all.",
      "Sri Lanka, Thailand, Myanmar": "Called Wesak; a public holiday with lantern festivals, across Buddhist Southeast Asia."
    },
    significance: `Buddhism's impact on human civilisation is incalculable: its philosophy of non-violence, mindfulness, and compassion influenced Hindu reform movements, shaped the Maurya Empire under Ashoka, spread across Asia, and now informs secular mindfulness practices worldwide. Buddha Purnima is a day to encounter that teaching fresh — not as history, but as a living invitation to wake up.`,
    resources: [
      { title: "Buddha Purnima — Wikipedia", url: "https://en.wikipedia.org/wiki/Buddha%27s_Birthday", src: "Wikipedia" },
      { title: "Dhammapada — Pali Canon in English", url: "https://www.accesstoinsight.org/tipitaka/kn/dhp/", src: "Access to Insight" },
      { title: "Bodh Gaya — UNESCO World Heritage", url: "https://whc.unesco.org/en/list/1056/", src: "UNESCO" }
    ]
  },

  {
    id: "eid-ul-adha",
    name: "Eid ul-Adha",
    hindiName: "ईद उल-अज़हा / बकरीद",
    date: "2026-05-27",
    hinduDate: "10 Dhul Hijja (Islamic lunar — approximate, subject to moon sighting)",
    type: "islamic",
    emoji: "🌙",
    regions: ["All India"],
    shortDesc: "The Festival of Sacrifice — commemorating Ibrahim's willingness to sacrifice his son in obedience to God.",
    story: `Eid ul-Adha — the "Greater Eid" — falls at the culmination of the Hajj pilgrimage and commemorates one of the Abrahamic tradition's most profound stories.

God commanded Ibrahim (Abraham) to sacrifice his beloved son Ismail (Ishmael). Father and son, both willing, proceeded. At the decisive moment, God intervened: Ismail was replaced by a ram, and Ibrahim's devotion was declared complete. The story is a meditation on faith, surrender, and the nature of true sacrifice — not the ritual but the inner readiness that makes it meaningful.

At Mina near Mecca, Hajj pilgrims perform the ritual of Qurbani (animal sacrifice) and the stoning of pillars representing the devil who tried to dissuade Ibrahim. Muslims worldwide, even those who have not performed Hajj, perform Qurbani in solidarity — one-third of the meat kept, one-third given to relatives, one-third donated to the poor.`,
    celebration: `Special Eid prayers at mosques in the morning. Men typically perform Qurbani (sacrifice of a goat, sheep, cow, or camel). New clothes, family gatherings, and feasts follow. Biryani, mutton korma, and seviyan are common dishes. Children receive Eidi. The three days of Eid are spent visiting relatives and sharing meat.`,
    regionalVariations: {
      "Hyderabad": "Haleem — the iconic slow-cooked meat-and-wheat dish — reaches its peak season at Bakrid.",
      "Lucknow": "Galawati kebabs, nihari, and sheermal are central to the festive meal.",
      "Kerala": "Pathiri (rice bread) with mutton curry is the traditional feast.",
      "Kashmir": "Tabak maaz (fried lamb ribs) and rogan josh prepared on Eid.",
      "West Bengal": "Biryani with aloo (potato) — a Kolkata-specific tradition — is the Eid dish."
    },
    significance: `Eid ul-Adha links the universal to the local: the same Quranic story is enacted from Morocco to Malaysia on the same day. Its core message — that obedience to a higher good may demand personal sacrifice — resonates far beyond any single faith. The obligatory sharing of meat with the poor also makes it one of the world's largest annual acts of organised food distribution.`,
    resources: [
      { title: "Eid ul-Adha — Wikipedia", url: "https://en.wikipedia.org/wiki/Eid_al-Adha", src: "Wikipedia" },
      { title: "Story of Ibrahim — Quran (37:100-113)", url: "https://quran.com/37/100-113", src: "Quran.com" }
    ]
  },

  /* ════════════ JUNE ════════════ */

  {
    id: "rath-yatra",
    name: "Rath Yatra",
    hindiName: "रथ यात्रा",
    date: "2026-06-27",
    hinduDate: "Ashadha Shukla Dwitiya (2nd day of bright Ashadha)",
    type: "hindu",
    emoji: "🎡",
    regions: ["Odisha", "West Bengal", "Gujarat", "All India"],
    shortDesc: "The Chariot Festival of Lord Jagannath — one of the world's largest religious processions, held at Puri, Odisha.",
    story: `Every year in the monsoon month of Ashadha, Lord Jagannath — "Lord of the Universe," a form of Vishnu worshipped especially in Odisha — leaves his temple at Puri to visit his birthplace (or his aunt's home, in one tradition) just 3 km away. Three colossal wooden chariots, built fresh each year from specific trees selected by astrologers, carry Jagannath, his brother Balabhadra, and sister Subhadra through the streets.

The chariots are so enormous — Jagannath's "Nandighosa" stands 14 metres high on 16 wheels — that the English word "juggernaut" (an unstoppable force) derives from "Jagannath," coined by medieval European travellers who saw pilgrims throw themselves before the wheels in ecstatic devotion.

The theological heart of Rath Yatra is revolutionary: inside the Jagannath temple, entry is forbidden to non-Hindus and even to certain castes. But on the street during Rath Yatra, anyone can touch the ropes of the chariot and receive the same merit as if they'd touched the deity. For one day, all hierarchies dissolve on the grand avenue (Bada Danda).`,
    celebration: `The chariots are pulled by tens of thousands of devotees chanting "Jai Jagannath!" The festival lasts nine days — outward journey, a stay at Gundicha temple, and return journey (Bahuda Yatra). The idols, made of sacred neem wood, are carved fresh every 12 years (Nabakalebara). Mahaprasad — rice cooked in the temple — is offered to the deity and distributed to all without caste distinction, another radical act of equality.`,
    regionalVariations: {
      "Puri (Odisha)": "The original and largest — UNESCO-recognised cultural heritage; over a million pilgrims.",
      "Ahmedabad (Gujarat)": "Second largest in India; 18 chariots process through the old city at dawn.",
      "Kolkata (West Bengal)": "Major Rath Yatra at Mahesh (Serampore, since 1396 CE — the oldest outside Puri) and Iskcon Temple.",
      "Global (ISKCON)": "Hare Krishna communities worldwide hold Rath Yatras — London, New York, Sydney, Toronto."
    },
    significance: `Rath Yatra is a festival of access — the god comes to the people rather than the people entering the god's house. It encodes the Bhakti movement's central argument: that devotion requires no intermediary, no caste barrier, no priestly gatekeeper. Lord Jagannath's wooden, unfinished features (no hands, no feet) are a visual statement that the divine is beyond human definition.`,
    resources: [
      { title: "Rath Yatra — Wikipedia", url: "https://en.wikipedia.org/wiki/Rath_Yatra", src: "Wikipedia" },
      { title: "Puri Jagannath Temple — Official", url: "https://www.shreejagannath.org/", src: "Temple Trust" },
      { title: "Origin of 'Juggernaut' — Merriam-Webster", url: "https://www.merriam-webster.com/dictionary/juggernaut", src: "Merriam-Webster" }
    ]
  },

  /* ════════════ JULY ════════════ */

  {
    id: "guru-purnima",
    name: "Guru Purnima",
    hindiName: "गुरु पूर्णिमा",
    date: "2026-07-10",
    hinduDate: "Ashadha Purnima (full moon of Ashadha)",
    type: "hindu",
    emoji: "🙏",
    regions: ["All India"],
    shortDesc: "The full moon dedicated to the Guru — the teacher who dispels darkness — celebrated across Hindu, Buddhist, and Jain traditions.",
    story: `Guru Purnima falls on the full moon of Ashadha, the month when monsoon clouds gather and ancient sages traditionally stayed in one place for the four-month period of Chaturmas. Disciples would gather to serve and learn from their teacher during this time — the festival crystallised this relationship into an annual celebration.

In Hindu tradition, this full moon honours Veda Vyasa — the sage who compiled the four Vedas, wrote the 18 Puranas, authored the Mahabharata, and composed the Brahma Sutras. One man, one lifetime, and an entire civilisation's scripture. He is the Adi Guru (first teacher), and Guru Purnima is also called Vyasa Purnima.

In Buddhist tradition, this is the day the Buddha gave his first teaching at the Deer Park in Sarnath after attaining enlightenment — thus becoming the Guru of all beings. For Jains, it is the day Mahavira accepted Indrabhuti Gautama as his first disciple, beginning the teaching lineage.

The word "Guru" is Sanskrit: "Gu" (darkness) + "Ru" (remover). The teacher is one who removes the darkness of ignorance.`,
    celebration: `Disciples visit their teacher, offer flowers and fruits, and receive blessings. Spiritual ashrams hold special programmes — meditation retreats, discourses, and sacred reading. Universities hold felicitation ceremonies for teachers. In Sarnath, Buddhist monks and pilgrims gather for prayers at the site of the first discourse. Yogis consider this the day Adiyogi (Shiva) began transmitting yoga to the Saptarishis (seven sages).`,
    regionalVariations: {
      "Maharashtra": "Special respect paid to family elders and spiritual guides; guru-shishya musical lineages perform.",
      "Sarnath (UP)": "Buddhist pilgrims from across Asia; candlelit processions; Dhammacakkappavattana Sutta recited.",
      "Rajasthan": "Guru Dakshina (offering to the teacher) traditions in classical music and dance schools.",
      "Yoga communities worldwide": "International Yoga Day's spiritual counterpart — meditation marathons and yoga retreats."
    },
    significance: `In a culture that regards the teacher-student relationship as sacred, Guru Purnima is a reminder that knowledge is never self-generated. Every person who knows anything learned it from someone. The festival asks: who lit the lamp that lights yours? It is equally relevant in a world of online learning and AI tutors — the question of what a true teacher provides beyond information remains urgent.`,
    resources: [
      { title: "Guru Purnima — Wikipedia", url: "https://en.wikipedia.org/wiki/Guru_Purnima", src: "Wikipedia" },
      { title: "Veda Vyasa — Britannica", url: "https://www.britannica.com/biography/Vyasa", src: "Britannica" }
    ]
  },

  /* ════════════ AUGUST ════════════ */

  {
    id: "rakshabandhan",
    name: "Rakshabandhan",
    hindiName: "रक्षाबंधन",
    date: "2026-08-09",
    hinduDate: "Shravana Purnima (full moon of Shravana)",
    type: "hindu",
    emoji: "🪢",
    regions: ["All India", "Special prominence in North and West India"],
    shortDesc: "The festival of the sacred thread — sisters tie a rakhi on their brothers' wrists, who vow to protect them.",
    story: `On the full moon of Shravana, a simple gesture encodes a profound relationship: a sister ties a thread (rakhi) around her brother's wrist; he promises to protect her, and gives her a gift. The word "Raksha" means protection; "Bandhan" means bond.

The mythological origins are many. The Bhagavata Purana tells of Indra's wife Sachi tying a thread blessed by Vishnu on Indra's wrist before a great battle — he was protected and won. Another story: Draupadi tore a strip from her sari and tied it on Krishna's wrist when he was wounded; years later, Krishna protected her in the Kuru court when Duryodhana tried to disrobe her, the silk multiplying endlessly. A thread for a life.

Historically, Rani Karnavati of Chittor sent a rakhi to the Mughal Emperor Humayun, asking him to be her brother and protect her kingdom from invasion. Humayun, mid-battle elsewhere, immediately marched to help — the gesture of a rakhi transcending religious and political lines.`,
    celebration: `Sisters prepare a thali (plate) with the rakhi, roli (vermillion), rice grains, a diya, and sweets. The brother sits while the sister performs an aarti, applies tilak on his forehead, ties the rakhi, and gives sweets. The brother gives a gift (traditionally cash or gold, now anything). The bond is considered protective for the year. Girls also tie rakhis on friends, on the nation's soldiers, on trees (Rakhi Bandhan for nature conservation).`,
    regionalVariations: {
      "Rajasthan": "Women tie rakhis on the sun (Surya) and pray for blessings before tying on brothers.",
      "West Bengal": "Called Jhulan Purnima — Lord Krishna and Radha are swung on a decorated swing; rakhi plays a secondary role.",
      "Maharashtra": "Narali Purnima — coconuts offered to the sea god Varuna by fishermen; beginning of the safe-sailing season.",
      "Uttarakhand (Kumaon)": "Janopunyu — Brahmins change their sacred thread (janeu) on this day.",
      "Gujarat / Rajasthan": "Brother visits sister's home; elaborate multi-day celebration."
    },
    significance: `Rakshabandhan has evolved beyond biology. Rakhis are tied on soldiers at borders, on government officials by schoolchildren, on the Prime Minister by daughters of diplomats. In 2015, women tied rakhis on the Ganga river, declaring it their brother and demanding its protection. The festival's genius is the reciprocity encoded in a thread: protection offered in exchange for love.`,
    resources: [
      { title: "Rakshabandhan — Wikipedia", url: "https://en.wikipedia.org/wiki/Raksha_Bandhan", src: "Wikipedia" },
      { title: "Karnavati and Humayun story — History of Medieval India", url: "https://www.britannica.com/biography/Humayun", src: "Britannica" }
    ]
  },

  {
    id: "independence-day",
    name: "Independence Day",
    hindiName: "स्वतन्त्रता दिवस",
    date: "2026-08-15",
    hinduDate: "August 15 (fixed)",
    type: "national",
    emoji: "🇮🇳",
    regions: ["All India"],
    shortDesc: "India's freedom from British rule came at midnight on August 14–15, 1947 — Nehru's 'Tryst with Destiny' moment.",
    story: `At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom." Jawaharlal Nehru spoke these words to the Constituent Assembly on the night of August 14–15, 1947 — one of history's most celebrated political speeches.

Two hundred years of British rule ended not with a single act but with a long, extraordinary movement: the non-cooperation of Gandhi, the militant nationalism of Bose, the legal battles of Gokhale and Tilak, the organisation of women like Sarojini Naidu and Kasturba Gandhi, the mass civil disobedience of millions of ordinary Indians. The final transfer of power was decided under the Mountbatten Plan, and at midnight, India became free.

It was also a moment of catastrophe: Partition — the division of the subcontinent into India and Pakistan — displaced 15 million people and killed between 200,000 and 2 million in communal violence. Freedom and tragedy were born on the same night, a complexity that independence celebrations carry quietly within them.`,
    celebration: `The Prime Minister hoists the tricolour at the Red Fort in Delhi and addresses the nation. State governments hold flag-hoisting ceremonies. Schools march. Kite-flying (especially in Gujarat and Rajasthan) fills the sky with orange-white-green. Patriotic films and music play across media. Sweets and laddoos distributed at government offices. The national anthem is sung across every institution at 8 AM.`,
    regionalVariations: {
      "Red Fort, Delhi": "The centrepiece — Prime Minister's address broadcast live; military and cultural parades.",
      "Gujarat / Rajasthan": "Kite-flying traditions make the sky tricoloured.",
      "Goa": "Liberation Day (Dec 19) is equally important — Goa was liberated from Portugal only in 1961.",
      "Indian diaspora": "Embassy flag-hoisting events worldwide; cultural programmes."
    },
    significance: `Independence Day is a reckoning — a moment to measure how far the republic has come against the ideals Nehru articulated and Ambedkar encoded in the Constitution. The Red Fort address has been used by every Prime Minister to set national agenda, making it simultaneously a festival and a State of the Union. India's ongoing argument with itself about democracy, secularism, and justice is this festival's living content.`,
    resources: [
      { title: "Tryst with Destiny — Nehru's full speech", url: "https://www.constitutionofindia.net/blogs/nehru-s-tryst-with-destiny-speech/", src: "Constitution of India" },
      { title: "Independence Day — Wikipedia", url: "https://en.wikipedia.org/wiki/Indian_Independence_Day", src: "Wikipedia" },
      { title: "India's Freedom Struggle — NCERT", url: "https://ncert.nic.in/textbook.php?fhss2=8-10", src: "NCERT" }
    ]
  },

  {
    id: "janmashtami",
    name: "Janmashtami",
    hindiName: "जन्माष्टमी",
    date: "2026-08-24",
    hinduDate: "Shravana Krishna Ashtami (8th night of dark Shravana)",
    type: "hindu",
    emoji: "🦚",
    regions: ["All India"],
    shortDesc: "The midnight birth of Lord Krishna — celebrated with fasting, devotional songs, and the Dahi Handi sport.",
    story: `At midnight on Shravana Krishna Ashtami, in a prison cell in Mathura, Devaki gave birth to her eighth child — Krishna. The tyrant king Kamsa had imprisoned Devaki and her husband Vasudeva because a prophecy foretold that their eighth child would destroy him. Each of the first six children was killed by Kamsa; the seventh was miraculously transferred to another womb. When Krishna was born, his father carried him across the flooded Yamuna (the river parting as if in reverence) to safety in Gokul, where he was raised by the cowherd Yashoda and Nanda.

Krishna is among the most complex figures in world mythology: divine infant who kills demons while still a baby, naughty boy who steals butter (makhan chor), teenage lover whose flute-song draws all the gopis of Vrindavan, warrior who refuses to fight himself but counsels Arjuna through the eighteen chapters of the Bhagavad Gita, and finally statesman-king who architects the Mahabharata's outcome from behind the scenes.

He is not the ideal man like Rama — he is the whole of human experience, given divine sanction: playful and serious, loving and ruthless, accessible and utterly mysterious.`,
    celebration: `Fasting through the day (even water is avoided by the devout). Temples decorated with flowers, swings (jhoola), and images of infant Krishna. As midnight approaches, devotional singing (bhajan-kirtan) crescendos. At exactly midnight, conch shells blow and bells ring — the divine birth re-enacted. The fast is broken with prasad of panchamrit, makhan (butter), and mishri. Dahi Handi the next morning: teams of young men (Govindas) form human pyramids to break a pot of curd hung 20–40 feet high — re-enacting Krishna's butter-theft.`,
    regionalVariations: {
      "Mathura / Vrindavan (UP)": "The birthplace; celebrations lasting a week; Janmashtami Lila (dramatic enactment); tens of thousands of pilgrims.",
      "Mumbai": "Dahi Handi is a citywide sport event; prizes up to ₹1 crore; TV coverage; celebrity participation.",
      "Manipur": "Krishnajanma — classical Manipuri dance performances depicting Krishna's childhood.",
      "Gujarat": "Makhan Handi (butter-pot breaking) and Ras Garba in temples.",
      "Udupi (Karnataka)": "The Udupi Krishna Math holds month-long celebrations; unique tradition of worshipping Krishna through a window with nine holes."
    },
    significance: `The Bhagavad Gita — delivered by Krishna to Arjuna on the Kurukshetra battlefield — is one of humanity's most studied philosophical texts, translated into hundreds of languages. Its teachings on duty (dharma), action without attachment (nishkama karma), and the nature of the self have influenced Thoreau, Emerson, Einstein, and Oppenheimer. Janmashtami celebrates the birth of this wisdom's source.`,
    resources: [
      { title: "Krishna — Wikipedia", url: "https://en.wikipedia.org/wiki/Krishna", src: "Wikipedia" },
      { title: "Bhagavad Gita — full text (Gita Press)", url: "https://www.gitapress.org/", src: "Gita Press" },
      { title: "Dahi Handi festival — BBC", url: "https://www.bbc.com/news/world-asia-india", src: "BBC" }
    ]
  },

  /* ════════════ SEPTEMBER ════════════ */

  {
    id: "onam",
    name: "Onam",
    hindiName: "ओणम",
    date: "2026-09-02",
    hinduDate: "Thiruvonam nakshatra in Chingam (Malayalam calendar — 1st month)",
    type: "hindu",
    emoji: "🌺",
    regions: ["Kerala"],
    shortDesc: "Kerala's grandest harvest festival — celebrating the legendary return of King Mahabali, with pookalam flower carpets, sadhya feasts, and snake boat races.",
    story: `Once upon a time, Kerala was ruled by a king called Mahabali — so just, so generous, so loved by his people that even the gods grew jealous of his popularity. Indra, king of the gods, petitioned Vishnu to intervene. Vishnu disguised himself as a dwarf brahmin (Vamana) and approached Mahabali, who was famous for granting any wish to any petitioner.

Vamana asked for three steps of land. Mahabali laughed — what need for so little? He agreed. Vamana then grew to cosmic size, spanning the entire universe in two steps. With the third step hovering, Mahabali realised the divine trick — and humbly offered his own head. Vishnu pushed him gently into the netherworld.

The beauty of the story is its ending: Vishnu, moved by Mahabali's generosity and dignity, granted him a wish. Mahabali asked only that he be allowed to visit his beloved people once a year. Onam is that annual visit. On the day of Thiruvonam, every home in Kerala is the king's: clean, flower-adorned, prosperous — a welcome fit for the greatest of rulers.`,
    celebration: `Ten days of Onam (Atham to Thiruvonam). Pookalam: intricate floral rangoli made fresh each morning from garden flowers arranged in concentric circles — more elaborate each day. Onam Sadhya: the grandest vegetarian feast in India — 26 dishes served on a banana leaf: rice, sambar, avial, olan, thoran, pachadi, payasam, and more. Vallamkali: the famous snake boat races on Kerala's backwaters — 100+ oarsmen rowing in perfect rhythm to the Chundan Vallam (snake boat). Traditional games, Thiruvathira dance, Pulikali (tiger dance).`,
    regionalVariations: {
      "Alappuzha (Alleppey)": "Nehru Trophy Boat Race — the most famous snake boat race, watched by thousands.",
      "Thrissur": "Atham processions with caparisoned elephants and percussion ensembles.",
      "Kasaragod / Kannur": "Distinctive folk arts — Theyyam, Padayani performances during Onam.",
      "Kerala diaspora": "Onam celebrations in the Gulf, UK, USA with sadhya and cultural events far from home."
    },
    significance: `Onam is the secular soul of Kerala — celebrated equally by Hindus, Christians, and Muslims who call the state home. It is a festival not of a deity but of a just king, which is why it accommodates everyone. The snake boat races represent Kerala's communal rowing tradition where caste and class differences dissolve in the river. The Onam Sadhya on a banana leaf is perhaps the world's most democratic shared meal — the same food for every person, regardless of who they are.`,
    resources: [
      { title: "Onam — Wikipedia", url: "https://en.wikipedia.org/wiki/Onam", src: "Wikipedia" },
      { title: "Onam Sadhya guide — Kerala Tourism", url: "https://www.keralatourism.org/onam/", src: "Kerala Tourism" },
      { title: "Nehru Trophy Boat Race", url: "https://www.nehrotrophy.in/", src: "Official" }
    ]
  },

  {
    id: "ganesh-chaturthi",
    name: "Ganesh Chaturthi",
    hindiName: "गणेश चतुर्थी",
    date: "2026-09-14",
    hinduDate: "Bhadrapada Shukla Chaturthi (4th day of bright Bhadrapada)",
    type: "hindu",
    emoji: "🐘",
    regions: ["All India", "Special prominence in Maharashtra, Karnataka, Andhra Pradesh, Goa"],
    shortDesc: "Ten-day festival welcoming Lord Ganesha into homes and pandals — the beloved elephant-headed god of new beginnings.",
    story: `Ganesha has the head of an elephant and the body of a boy, the trunk of wisdom and the belly of abundance, a mouse as his vehicle and a laddoo in his hand. He is the first deity invoked in any Hindu ceremony — the remover of obstacles, the lord of beginnings, the patron of arts and wisdom.

How did he come to have an elephant's head? Parvati, lonely while Shiva roamed, created a boy from the turmeric paste of her body — a son made entirely of her own substance. When Shiva returned and found a stranger guarding Parvati's chambers, not knowing it was his own child, a confrontation followed and Shiva severed the boy's head. Parvati's anguish was so devastating that Shiva promised to restore the child — his soldiers found an elephant calf nearby, whose head was transplanted. Ganesha was reborn, loved by both parents, the living symbol of how destruction can become creation.

The ten-day festival in Maharashtra owes its public, community character to Bal Gangadhar Tilak, who in 1893 transformed it from a private household puja into a community festival as a tool to unite Indians across caste lines against British rule. The political became devotional; the devotional became political.`,
    celebration: `Ganesha idols — from 2 inches to 25 feet — are brought home and into neighbourhood pandals. For 10 days (or 1.5, 3, 5, or 7 days for home celebrations): morning and evening aarti, modak offerings (Ganesha's favourite sweet — steamed rice dumplings), bhajans, cultural performances, and community meals. On the final day (Anant Chaturdashi), idols are taken in massive processions to rivers, lakes, or the sea for immersion (visarjan) with the farewell cry "Ganapati Bappa Morya, Pudcha Varshi Lavkar Ya!" (Lord Ganesha, come quickly next year!).`,
    regionalVariations: {
      "Mumbai": "The largest — Lalbaugcha Raja draws 2 million visitors; processions of 150,000+ for visarjan at Girgaum Chowpatty.",
      "Pune": "Kasba Ganapati (the city's manacha/chief Ganapati) and four other honoured idols have century-old traditions.",
      "Hyderabad": "Khairatabad Ganesh — one of India's tallest idols (up to 70 feet); 11-day celebration.",
      "Goa": "Clay idols in family homes; traditional Konkani songs; visarjan in the sea.",
      "Karnataka": "Major celebrations in Bengaluru; government-sponsored cultural programmes."
    },
    significance: `Ganesh Chaturthi is a masterclass in how festivals can carry political meaning. Tilak's insight — that a beloved god could unite people where political argument could not — remains powerful. The festival also prompts modern questions about ecology: clay (shadu mati) idols dissolve without harming rivers; plaster-of-Paris idols do not. The "green Ganesha" movement reflects the festival's capacity for self-reform.`,
    resources: [
      { title: "Ganesh Chaturthi — Wikipedia", url: "https://en.wikipedia.org/wiki/Ganesh_Chaturthi", src: "Wikipedia" },
      { title: "Tilak and Ganeshotsav — political history", url: "https://www.livehistoryindia.com/story/people/bal-gangadhar-tilak-and-the-ganeshotsava-festival/", src: "Live History India" },
      { title: "Eco-friendly Ganesha initiative", url: "https://www.earth5r.org/green-ganesh/", src: "Earth5R" }
    ]
  },

  /* ════════════ OCTOBER ════════════ */

  {
    id: "gandhi-jayanti",
    name: "Gandhi Jayanti",
    hindiName: "गांधी जयंती",
    date: "2026-10-02",
    hinduDate: "October 2 (fixed)",
    type: "national",
    emoji: "🕊️",
    regions: ["All India"],
    shortDesc: "Birthday of Mahatma Gandhi — father of the nation and apostle of nonviolent resistance (Satyagraha).",
    story: `Mohandas Karamchand Gandhi was born on October 2, 1869, in Porbandar, Gujarat. He trained as a barrister in London, practiced in South Africa where he first developed the concept of Satyagraha (truth-force), returned to India in 1915, and over the next 32 years transformed a privileged elite independence movement into a mass uprising of ordinary people.

His tools were extraordinary in their simplicity: non-cooperation (refusing to buy British cloth; spinning khadi on a charkha), civil disobedience (the 1930 Dandi Salt March — walking 241 miles to make salt from seawater, defying British law), and fasting (using his own frail body as a bargaining instrument of conscience).

He was shot on January 30, 1948, in the garden of Birla House, Delhi, while walking to an evening prayer meeting. "Hey Ram" were, by some accounts, his last words. The United Nations declared October 2 as the International Day of Non-Violence in 2007, recognising that his methods have inspired liberation movements everywhere — from Martin Luther King to Nelson Mandela.`,
    celebration: `Prayer meetings at Raj Ghat (Gandhi's memorial in Delhi) and at his birthplace in Porbandar. The President, Vice President, and Prime Minister lay floral tributes. Government offices open for symbolic cleanliness drives (Swachh Bharat — Clean India). Schools hold essay competitions, fancy-dress, and plays about Gandhi. Prohibition of alcohol sales in many states (Gandhi was a strict teetotaler). "Vaishnava Jan To" — Gandhi's favourite bhajan — plays on All India Radio.`,
    regionalVariations: {
      "Rajghat, Delhi": "National prayer service attended by dignitaries; Samadhi covered with flowers.",
      "Porbandar (Gujarat)": "Birthplace celebrations; Kirti Mandir museum events.",
      "Sabarmati Ashram (Ahmedabad)": "Gandhi's home for 13 years; spinning demonstrations; exhibitions."
    },
    significance: `Gandhi Jayanti is a day to ask whether the tools he invented — non-violence, civil disobedience, the moral force of personal example — are still relevant. Every authoritarian government that has been peacefully overthrown since 1947 carries his shadow. His failures (on caste, on some aspects of gender) are also worth examining honestly. The festival works best not as hagiography but as a live argument with his ideas.`,
    resources: [
      { title: "Mahatma Gandhi — Wikipedia", url: "https://en.wikipedia.org/wiki/Mahatma_Gandhi", src: "Wikipedia" },
      { title: "Gandhi's writings — Collected Works", url: "https://www.gandhiashramsabarmati.org/en/mahatma-gandhi/writings.html", src: "Sabarmati Ashram" },
      { title: "UN International Day of Non-Violence", url: "https://www.un.org/en/observances/non-violence-day", src: "United Nations" }
    ]
  },

  {
    id: "navratri",
    name: "Navratri",
    hindiName: "नवरात्रि",
    date: "2026-10-09",
    hinduDate: "Ashwina Shukla Pratipada to Navami (9 nights of bright Ashwina)",
    type: "hindu",
    emoji: "🌙",
    regions: ["All India"],
    shortDesc: "Nine nights of the goddess — celebrating Durga's nine forms and the triumph of the divine feminine over evil.",
    story: `Navratri ("Nav" = nine, "Ratri" = nights) celebrates the goddess Durga in her nine manifestations (Navadurga). The mythology behind the autumn Navratri is the battle of Durga against the buffalo-demon Mahishasura, who had become so powerful through austerities that none of the male gods could defeat him. The gods combined their energies — every weapon, every power — into one force, which took the form of a woman: Durga (Sanskrit for "the impenetrable").

For nine days and nights she fought Mahishasura across the cosmos. On the tenth day — Vijayadashami (Dussehra) — she killed him. The story inverts the expected: it is the goddess who saves the gods, the feminine who protects the cosmic order.

Navratri comes four times a year; the Sharada (autumn) Navratri beginning in Ashwina is the most celebrated, particularly in Bengal (as Durga Puja), Gujarat (as Garba/Dandiya), and in the north (as preparation for Dussehra and Diwali).`,
    celebration: `Each of the nine days is associated with one of Durga's nine forms (Shailputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kaalratri, Mahagauri, Siddhidatri). Fasting (eating only fruits and dairy) is common. In Gujarat, Garba and Dandiya Raas — circular dances performed in colourful traditional dress — continue all night for nine nights, now attended by millions. In Bengal, elaborately crafted Durga Puja pandals (temporary pavilions) become open-air art galleries.`,
    regionalVariations: {
      "West Bengal": "Durga Puja — the grandest festival of Bengal; 4-day community celebration (Saptami to Vijaya Dashami); pandal-hopping; UNESCO Intangible Cultural Heritage.",
      "Gujarat": "Garba capital of the world — Vadodara, Ahmedabad, Surat; dancers in chaniya choli and kediya under decorated mandaps.",
      "Karnataka (Mysuru)": "Mysore Dasara — the golden chariot of Chamundeshwari, a 400-year-old royal tradition; massive torchlit procession.",
      "Himachal Pradesh": "Kullu Dussehra begins (a week after Vijayadashami); 200+ local deities brought in palanquins to celebrate.",
      "Tamil Nadu": "Golu (Bommai kolu) — nine-tiered displays of dolls and figurines in homes."
    },
    significance: `Navratri is an annual recognition that power has a feminine face. In a culture where goddesses are simultaneously supreme and domestic, war-like and maternal, Navratri provides nine nights to contemplate the many dimensions of Shakti (energy). The Garba dance — a circle with no beginning or end, centred on a lamp — is a meditation in motion on the eternal cycle of time.`,
    resources: [
      { title: "Navratri — Wikipedia", url: "https://en.wikipedia.org/wiki/Navaratri", src: "Wikipedia" },
      { title: "Durga Puja — UNESCO Intangible Heritage", url: "https://ich.unesco.org/en/RL/durga-puja-in-kolkata-01647", src: "UNESCO" },
      { title: "Mysore Dasara — Official", url: "https://mysoredussehra.com/", src: "Govt of Karnataka" }
    ]
  },

  {
    id: "dussehra",
    name: "Dussehra / Vijayadashami",
    hindiName: "दशहरा / विजयदशमी",
    date: "2026-10-19",
    hinduDate: "Ashwina Shukla Dashami (10th day of bright Ashwina)",
    type: "hindu",
    emoji: "🏹",
    regions: ["All India"],
    shortDesc: "Victory of good over evil — Rama's defeat of Ravana and Durga's defeat of Mahishasura, celebrated with burning of Ravana's effigy.",
    story: `Vijayadashami means "the tenth day of victory." It celebrates two simultaneous mythological victories: Rama's defeat of the ten-headed demon king Ravana, ending a fourteen-year exile and rescuing Sita; and Durga's final destruction of Mahishasura on this same tenth day after nine nights of battle.

The burning of Ravana's effigy is a primal drama: towering figures of Ravana, his brother Kumbhakarna, and his son Meghanada — stuffed with fireworks — are ignited at dusk, lighting up the sky in a thunderous finale. Ram Lila — dramatic re-enactments of the Ramayana performed for the preceding thirty days — culminates in the burning.

Vijayadashami is also the traditional day to begin new enterprises. Weapons and tools are worshipped (Ayudha Puja in the South). Learned people begin new studies. Armies traditionally began campaigns on this day.`,
    celebration: `Ravan dahan (effigy burning) in open grounds, sometimes with effigies 100 feet tall. Ram Lila performances conclude. Shami leaves (considered golden by legend) exchanged as tokens of good will. Processions of the Chamundeshwari goddess in Mysuru. In Maharashtra, Shami tree worshipped and a plant called "Apta" whose leaves resemble gold coins are distributed as symbolic wealth.`,
    regionalVariations: {
      "Delhi (Ramlila Maidan)": "Effigy of Ravana at Delhi's famous Ramlila, attended by the Prime Minister.",
      "Varanasi / Ayodhya": "Month-long Ram Lila ends; one of the oldest dramatic traditions in India.",
      "Mysuru (Karnataka)": "Dasara — the grandest secular festival of South India; golden howdah elephant procession, lit palace.",
      "Kullu (Himachal)": "Kullu Dussehra — week-long festival beginning after Vijayadashami, unique regional tradition.",
      "Bastar (Chhattisgarh)": "Bastar Dussehra — tribal traditions going back 600 years; 75-day celebration of goddess Danteshwari."
    },
    significance: `The burning of Ravana is a ritual of civic psychology — the community identifies its demons (corruption, injustice, arrogance) and symbolically destroys them. That this ritual is performed year after year — and the demons always return — is an admission of the ongoing nature of the moral struggle. Dussehra is not the end of evil but an annual renewal of the intention to fight it.`,
    resources: [
      { title: "Dussehra — Wikipedia", url: "https://en.wikipedia.org/wiki/Dussehra", src: "Wikipedia" },
      { title: "Ram Lila, Delhi — Intangible Heritage", url: "https://ich.unesco.org/en/RL/ramlila-the-traditional-performance-of-the-ramayana-00001", src: "UNESCO" }
    ]
  },

  {
    id: "karva-chauth",
    name: "Karva Chauth",
    hindiName: "करवा चौथ",
    date: "2026-10-25",
    hinduDate: "Kartik Krishna Chaturthi (4th day of dark Kartik)",
    type: "hindu",
    emoji: "🌕",
    regions: ["Punjab", "Haryana", "Rajasthan", "UP", "MP", "Delhi"],
    shortDesc: "A day-long fast by married women for the long life and prosperity of their husbands, broken upon sighting the moon.",
    story: `On Karva Chauth, married women fast from sunrise to moonrise — not even water — praying for the health and longevity of their husbands. The fast is broken only after the moon rises, the husband's face is seen through a sieve first, then the moon, and then his eyes directly, after which he gives her water and she eats.

The festival carries a folk story: a young bride named Veeravati kept the fast but fainted from hunger. Her brothers, unable to bear her distress, created a false "moonrise" with a lamp behind a sieve. She broke her fast; immediately, news came that her husband had died. She realised the trick, returned to fasting, and her husband was revived. The story encodes a message about the spiritual contract of the fast — it cannot be cheated.

Modern India has had a vigorous conversation about this festival: some celebrate it as a beautiful expression of marital love that men also increasingly reciprocate; others critique it as reinforcing gendered piety. Many couples now fast together.`,
    celebration: `The day before Karva Chauth, the Sargi (pre-dawn meal) is sent by the mother-in-law: fruits, sweets, mathri, and fenugreek. Women dress in bridal red or pink, wear full jewellery, and gather in groups for the Karva Chauth puja. A circular thali with a diya, karva (small clay pot), sweets, and mehendi is used. After moonrise, the fast is broken with the husband's hand offering water and sweets.`,
    regionalVariations: {
      "Punjab / Haryana": "Most elaborate — full bridal dress, mehendi, group gatherings; folk songs for Karva Chauth.",
      "Rajasthan": "Gangaur (separate festival in Chaitra) is more important; Karva Chauth observed but simpler.",
      "UP / Delhi": "Widely observed; modern versions include husbands fasting in solidarity."
    },
    significance: `Karva Chauth captures the tension in Indian tradition between devotion and dependence, love and obligation. Its increasing practice among urban, educated women — sometimes as a conscious choice, sometimes reinterpreted — and its spread to couples regardless of gender makes it a living example of how festivals evolve with society rather than remaining static.`,
    resources: [
      { title: "Karva Chauth — Wikipedia", url: "https://en.wikipedia.org/wiki/Karva_Chauth", src: "Wikipedia" }
    ]
  },

  {
    id: "dhanteras",
    name: "Dhanteras",
    hindiName: "धनतेरस",
    date: "2026-10-29",
    hinduDate: "Kartik Krishna Trayodashi (13th day of dark Kartik)",
    type: "hindu",
    emoji: "🪙",
    regions: ["All India"],
    shortDesc: "Festival of wealth and prosperity — Dhanvantari emerges from the cosmic ocean with Ayurveda; gold and silver purchased as auspicious.",
    story: `"Dhan" is wealth; "Teras" is the thirteenth lunar day. On this day, Dhanvantari — the physician of the gods and avatar of Vishnu — emerged from the churning of the cosmic ocean (Samudra Manthan) carrying a golden pot of Amrit (nectar of immortality) and the knowledge of Ayurveda. He is the patron deity of medicine and health.

The festival is also the evening when Yama, the god of death, is worshipped with a diya placed facing south (the direction of death) — a small light to ward off untimely death. Families pray for health and longevity as much as for wealth.

The tradition of purchasing gold, silver, or new utensils on this day is ancient — new metal vessels are thought to invite Lakshmi (goddess of wealth) into the home. Markets see some of their biggest sales of the year as families invest in the material symbols of prosperity.`,
    celebration: `Homes are cleaned, diyas lit at dusk. New brooms are purchased (to sweep away poverty). Gold, silver coins, or new utensils bought and shown to Lakshmi in an evening puja. A diya is lit facing south for protection from Yama. Sweets and kheel-batasha (puffed rice and sugar discs) offered.`,
    regionalVariations: {
      "Maharashtra": "Dhanvantari Jayanti puja in homes; Ayurvedic practitioners felicitated.",
      "Gujarat": "New account books opened; businessmen perform Chopda Puja (worship of account ledgers).",
      "North India": "Gold bazaars stay open until midnight; massive queues at jewellery shops."
    },
    significance: `Dhanteras is the opening act of the Diwali five-day festival (Dhanteras → Kali Chaudas → Diwali → Govardhan Puja → Bhai Dooj). By placing wealth in the context of divine blessing and associating it with Dhanvantari (health), the tradition suggests that prosperity without wellbeing is incomplete — a message as relevant as ever.`,
    resources: [
      { title: "Dhanteras — Wikipedia", url: "https://en.wikipedia.org/wiki/Dhanteras", src: "Wikipedia" },
      { title: "Dhanvantari — Ayurveda deity", url: "https://www.britannica.com/topic/Dhanvantari", src: "Britannica" }
    ]
  },

  /* ════════════ NOVEMBER ════════════ */

  {
    id: "diwali",
    name: "Diwali",
    hindiName: "दीपावली",
    date: "2026-11-01",
    hinduDate: "Kartik Amavasya (new moon of Kartik)",
    type: "hindu",
    emoji: "🪔",
    regions: ["All India"],
    shortDesc: "The Festival of Lights — the darkest night of the year illuminated by millions of diyas, fireworks, and the return of Lord Rama.",
    story: `On the new moon night of Kartik — the year's darkest night — every home, every street, every window blazes with light. Diwali (from Sanskrit "Deepavali" = row of lamps) is perhaps the most celebrated festival in the world's most festive nation.

The North Indian story: Rama, Sita, and Lakshmana returned to Ayodhya on this night after 14 years of exile and the defeat of Ravana. Ayodhya's people, overjoyed, lit clay lamps (diyas) in every window and doorway to illuminate their path home. The entire city became a constellation.

But Diwali carries multiple mythologies simultaneously. In the South, it celebrates Krishna's defeat of the demon Narakasura — the "Narak Chaturdashi" the evening before. In the West (Maharashtra, Gujarat), it is the new year and the day Lakshmi, goddess of wealth, is welcomed into homes. For Sikhs, it is Bandi Chhor Diwas — the day Guru Hargobind was released from Gwalior Fort prison along with 52 other prisoners. For Jains, it is the day Mahavira attained moksha (liberation). One night, many light-bearers.`,
    celebration: `Five-day festival: Dhanteras → Kali Chaudas → Diwali → Govardhan Puja → Bhai Dooj. On Diwali evening: homes cleaned and adorned with rangoli; clay diyas filled with mustard oil lit in every room; Lakshmi puja (worship of Lakshmi and Ganesh); exchange of gifts and sweets between families and neighbours; fireworks lighting the sky. Traditional sweets: kaju katli, gulab jamun, balushahi, soan papdi, besan laddoo.`,
    regionalVariations: {
      "North India": "Rama's return; diyas, fireworks, Lakshmi puja, gift-giving.",
      "Maharashtra / Gujarat": "New Year begins; Lakshmi puja most elaborate; Padwa (day after Diwali) for husbands to give gifts to wives.",
      "West Bengal / Odisha": "Kali Puja on Diwali night — the fearsome Kali worshipped instead of Lakshmi; black goat sacrifice in some traditions.",
      "South India": "Narak Chaturdashi (Diwali eve) is the main day; oil bath before sunrise, crackers at dawn.",
      "Punjab": "Bandi Chhor Diwas — Golden Temple lit spectacularly; the Gurdwara at night is an unforgettable sight.",
      "Jain community": "Diya vigil for Mahavira's liberation; no fireworks; temples illuminated with rows of lamps."
    },
    significance: `Light in darkness is the oldest human metaphor for knowledge, hope, and the refusal to despair. Diwali holds all its meanings at once — historical, mythological, commercial, ecological (the crackers-versus-clean-air debate) — and somehow remains joyous through the complexity. The festival's global spread (celebrated on every continent) has made it a universal symbol of the idea that light is always possible, no matter how dark the night.`,
    resources: [
      { title: "Diwali — Wikipedia", url: "https://en.wikipedia.org/wiki/Diwali", src: "Wikipedia" },
      { title: "Diwali across religions — BBC", url: "https://www.bbc.co.uk/religion/religions/hinduism/holydays/diwali.shtml", src: "BBC Religion" },
      { title: "Bandi Chhor Divas — Sikh history", url: "https://www.sgpc.net/bandi-chhor-diwas/", src: "SGPC" }
    ]
  },

  {
    id: "bhai-dooj",
    name: "Bhai Dooj",
    hindiName: "भाई दूज",
    date: "2026-11-03",
    hinduDate: "Kartik Shukla Dwitiya (2nd day of bright Kartik)",
    type: "hindu",
    emoji: "🤝",
    regions: ["All India"],
    shortDesc: "The sister-brother festival that closes the Diwali sequence — sisters apply tilak on brothers' foreheads and pray for their wellbeing.",
    story: `Two days after Diwali, the sibling bond celebrated in Rakshabandhan (Shravana) is renewed. Yama, the god of death, visited his sister Yami (the River Yamuna) on this day. Delighted, she applied tilak on his forehead and fed him. Yama, in return, declared that any brother who receives tilak from his sister on this day will be protected from untimely death.

The festival is called Bhai Dooj in Hindi, Bhai Phota in Bengal (where "phota" means the ceremonial mark), Bhau Beej in Maharashtra, and Yamadwiteya (honouring the Yama-Yami story) in some traditions.`,
    celebration: `Sisters prepare a puja thali with roli, rice, diya, flowers, and sweets. The brother sits, the sister applies tilak, performs aarti, and feeds him sweets. The brother gives gifts. Unlike Rakshabandhan (which flows from sister to brother), Bhai Dooj is often the brother who travels to the sister's home — a reversal of the usual direction of hospitality.`,
    regionalVariations: {
      "West Bengal": "Bhai Phota — elaborate ceremony; the sister creates a complex design on the brother's forehead using sandalwood paste.",
      "Maharashtra": "Bhau Beej — brothers invited to sisters' homes for a meal; sweets of Diwali served.",
      "Goa": "Bhav Bij — special coconut sweets prepared by sisters."
    },
    significance: `The Diwali quintet ends on the note of siblinghood — the most egalitarian human relationship, chosen by neither party and yet often the most enduring. That a festival sequence beginning with wealth (Dhanteras) ends with love (Bhai Dooj) says something about India's actual hierarchy of values.`,
    resources: [
      { title: "Bhai Dooj — Wikipedia", url: "https://en.wikipedia.org/wiki/Bhai_Dooj", src: "Wikipedia" }
    ]
  },

  {
    id: "chhath-puja",
    name: "Chhath Puja",
    hindiName: "छठ पूजा",
    date: "2026-11-06",
    hinduDate: "Kartik Shukla Shashthi (6th day of bright Kartik)",
    type: "hindu",
    emoji: "🌅",
    regions: ["Bihar", "Jharkhand", "UP", "Delhi NCR"],
    shortDesc: "The only Vedic festival that worships the setting sun — a four-day fast and river vigil by millions, the most disciplined of all Indian festivals.",
    story: `Chhath Puja is singular among Indian festivals: it is the only one that worships the setting sun — and uniquely, does so while standing in a river at dusk and dawn. The sun (Surya) and Chhathi Maiya (the sixth-day goddess, a form of Shakti), are worshipped over four days in a fast of extraordinary rigour.

The origin stories include Karna (the great warrior of the Mahabharata, son of the sun god Surya), who offered arghya (sacred water) to the sun while standing waist-deep in a river. Draupadi is also said to have observed this fast during the Pandavas' forest exile, receiving divine assistance.

What makes Chhath unique is its priestlessness: no pandit, no elaborate ritual infrastructure. A river, a setting sun, and a devotee. It is one of Hinduism's oldest solar festivals, predating many later traditions, and is practiced most intensely among the people of Bihar and eastern UP — where the Ganga, Saryu, and Gandak rivers serve as natural altars.`,
    celebration: `Four days: Day 1 (Nahay Khay) — ritual bath and one meal of gram dal and rice. Day 2 (Kharna) — full fast; evening puja with kheer and roti. Day 3 (Sandhya Arghya) — the main event: millions stand waist-deep in rivers at sunset, offering bamboo baskets of sugarcane, fruits, and thekua (wheat-jaggery cookies) to the setting sun. Day 4 (Usha Arghya) — the same at sunrise; fast broken after sunrise arghya. The ghats of Patna, Varanasi, and Delhi's Yamuna banks turn into humanity's largest standing prayer.`,
    regionalVariations: {
      "Bihar / Jharkhand": "The heartland; every river ghat transforms; temporary ghats built; the social order is briefly suspended as people of all castes stand together in water.",
      "Delhi": "Yamuna ghats see millions — the single largest congregation in Delhi after Republic Day.",
      "Mumbai": "Chhath at Juhu Beach and Versova — the Bihar diaspora's most visible cultural assertion in Maharashtra.",
      "Mauritius / Suriname / Fiji": "Chhath observed by the Indian diaspora in the former indentured labour diaspora communities."
    },
    significance: `Chhath is remarkable for its complete lack of caste differentiation — anyone can stand in the river and offer arghya, no permission required. It is also the most ecologically intimate festival: the river is both sacred space and reflection of our relationship with nature. As the Yamuna and Ganga grow more polluted, the devotees who stand in them to worship are also the people most aware of what has been lost.`,
    resources: [
      { title: "Chhath Puja — Wikipedia", url: "https://en.wikipedia.org/wiki/Chhath", src: "Wikipedia" },
      { title: "Chhath — UNESCO consideration", url: "https://ich.unesco.org/en/search?q=chhath", src: "UNESCO" }
    ]
  },

  {
    id: "guru-nanak-jayanti",
    name: "Guru Nanak Jayanti",
    hindiName: "ਗੁਰੂ ਨਾਨਕ ਜਯੰਤੀ",
    date: "2026-11-14",
    hinduDate: "Kartik Purnima (full moon of Kartik)",
    type: "sikh",
    emoji: "☀️",
    regions: ["All India", "Special prominence in Punjab, Haryana, Delhi, Uttarakhand"],
    shortDesc: "Birthday of Guru Nanak Dev Ji — founder of Sikhism and one of history's greatest mystic poets.",
    story: `Guru Nanak was born on Kartik Purnima in 1469 in Nankana Sahib (present-day Pakistan). From childhood, he was drawn to spiritual questions rather than worldly success, angering his father but entrancing neighbours with his wisdom. At 30, he disappeared into a river for three days and emerged transformed — declaring "There is no Hindu, there is no Muslim." His mission: to make the One God's love accessible to all.

Over the next 25 years he undertook four great Udasis (journeys) — north to the Himalayas and Tibet, south to Sri Lanka, east to Assam and Bengal, and west to Mecca and Baghdad — covering over 28,000 km largely on foot. Everywhere he challenged caste, religious exclusivity, and the rituals that separated humans from God and from each other.

His compositions — 974 hymns in the Guru Granth Sahib — are in 19 languages, including Hindi, Punjabi, Persian, Sanskrit, and several regional dialects, making them the most linguistically diverse sacred scripture of a single author in the world. The message is singular: the divine is One, and love is the only language in which it speaks.`,
    celebration: `Two days before Guru Nanak Jayanti: Akhand Path — a 48-hour unbroken recitation of the entire Guru Granth Sahib (1430 pages) by relay teams of readers. The morning of the Gurpurab: Prabhat Pheris (pre-dawn processions with kirtan through streets, beginning at 4 AM). The procession (nagar kirtan) led by Panj Pyare. Langar (free community kitchen) serves all day without distinction. Golden Temple in Amritsar illuminated spectacularly all night.`,
    regionalVariations: {
      "Amritsar (Golden Temple)": "The holiest celebration; the entire Harmandir Sahib complex illuminated; lakhs of pilgrims take a dip in the Amrit Sarovar.",
      "Nankana Sahib (Pakistan)": "Guru Nanak's birthplace; Sikh pilgrims from India and worldwide granted visas.",
      "Delhi": "Gurdwara Sis Ganj, Bangla Sahib, and Rakab Ganj light up; massive langar.",
      "Patna (Bihar)": "Also the birthplace of Guru Gobind Singh; Takht Sri Patna Sahib celebrations."
    },
    significance: `Guru Nanak's ideas — that God is accessible to all without priestly mediation, that honest labour (kirat karo), sharing (vand chhako), and remembrance of God (naam japo) are the complete spiritual path — are as countercultural today as they were in 1499. The langar tradition he established, which feeds millions daily in Gurdwaras worldwide without asking for religion, caste, or wealth, may be humanity's longest-running experiment in universal hospitality.`,
    resources: [
      { title: "Guru Nanak — Wikipedia", url: "https://en.wikipedia.org/wiki/Guru_Nanak", src: "Wikipedia" },
      { title: "Japji Sahib — Guru Nanak's morning prayer", url: "https://www.sikhnet.com/japji", src: "SikhNet" },
      { title: "Golden Temple — Official", url: "https://www.goldentempleamritsar.org/", src: "SGPC" }
    ]
  },

  /* ════════════ DECEMBER ════════════ */

  {
    id: "christmas",
    name: "Christmas",
    hindiName: "क्रिसमस",
    date: "2026-12-25",
    hinduDate: "December 25 (fixed)",
    type: "christian",
    emoji: "⭐",
    regions: ["All India", "Special prominence in Goa, Kerala, Meghalaya, Nagaland, Tamil Nadu, Mumbai"],
    shortDesc: "The birth of Jesus Christ — celebrated across India with Midnight Mass, carols, decorated trees, and a uniquely Indian festive warmth.",
    story: `December 25 is the day Christians worldwide celebrate the birth of Jesus of Nazareth — the central figure of Christianity, believed to be the Son of God and the Messiah promised in the Hebrew scriptures. The nativity story: Mary and Joseph, travelling to Bethlehem for a Roman census, find no room at any inn. The child is born in a stable among animals, visited first by shepherds told by angels, then by the Magi (wise men from the East) who follow a star.

Christianity arrived in India remarkably early. The Thomas Christians of Kerala trace their origin to the apostle Thomas, who is said to have landed at Cranganore (Kodungallur) in 52 CE — before Christianity had even reached most of Europe. Francis Xavier brought Jesuit Christianity to Goa in the 16th century. The British brought Protestant missions in the 18th and 19th centuries. India's Christian community of approximately 30 million is one of the oldest in the world.

Christmas in India has absorbed Indian colour: Santa Claus arrives not through snow but through tropical warmth; decorations include marigold garlands alongside tinsel; midnight mass is attended by people of all faiths in the spirit of neighbourhood.`,
    celebration: `Midnight Mass on Christmas Eve in churches across India — one of the year's most atmospheric moments of communal worship. Decorated Christmas trees, paper stars (particularly beautiful in Goa and Kerala), and lights adorn homes and markets. Gifts exchanged. Plum cake (a British-Indian tradition; Goa's bebinca and Kerala's achappam are traditional baked sweets). Carols sung in churches and shopping centres.`,
    regionalVariations: {
      "Goa": "Most festive in India — Portuguese Christian heritage; Midnight Mass at the Basilica of Bom Jesus; Goan pork sorpotel and bebinca; star lanterns (farol) in every window.",
      "Kerala": "Thomas Christian heritage; Midnight Mass at ancient Syrian Christian churches; Kerala puttu and chicken curry for Christmas breakfast.",
      "Meghalaya / Nagaland": "Predominantly Christian states; communities celebrate like a national festival; carol competitions across villages.",
      "Mumbai": "Mount Mary Church in Bandra; large East Indian Catholic community; Christmas bazaars.",
      "Tamil Nadu": "Church processions; Christians in village communities construct nativity scenes from terracotta.",
      "Delhi": "Sacred Heart Cathedral; interfaith carol concerts; markets at Connaught Place and INA."
    },
    significance: `Christmas in India is an example of India's civilisational superpower: the ability to celebrate the other's joy as your own. Hindus, Muslims, and Sikhs attend Midnight Mass, exchange gifts, and share plum cake — not because they have converted their theology but because hospitality is its own theology here. The festival has also become deeply commercial, but beneath the tinsel remains the story of a child born in poverty, in an animal shelter, who changed the world.`,
    resources: [
      { title: "Christianity in India — Wikipedia", url: "https://en.wikipedia.org/wiki/Christianity_in_India", src: "Wikipedia" },
      { title: "Thomas Christians — Kerala Heritage", url: "https://en.wikipedia.org/wiki/Saint_Thomas_Christians", src: "Wikipedia" },
      { title: "Christmas in Goa — Goa Tourism", url: "https://www.goa-tourism.com/christmas-in-goa.html", src: "Goa Tourism" }
    ]
  }

]; // ← END OF FESTIVALS ARRAY

/* ════════════════════════════════════════════════
   CALENDAR EXPLAINED — educational content
   ════════════════════════════════════════════════ */

const CALENDAR_EXPLAINED = {
  intro: `India runs on not one but many calendars simultaneously. The Gregorian calendar governs offices, schools, and international life. But underneath it, the Hindu lunisolar calendar — the Panchanga — governs when you fast, when you feast, when you plant, when you marry, and when you perform the rites of the departed. The Islamic Hijri calendar, the Sikh Nanakshahi calendar, and regional solar calendars (Tamil, Malayalam, Bengali) add more layers still. Understanding any Indian festival requires understanding this calendar beneath the calendar.`,

  sections: [
    {
      title: "The Hindu Lunisolar (Panchanga) Calendar",
      content: `The Panchanga (literally "five limbs") is the Hindu almanac, calculated from five elements: Tithi (lunar day), Vara (weekday), Nakshatra (lunar mansion), Yoga (a combined solar-lunar calculation), and Karana (half a lunar day). Astrologers and priests use all five to identify auspicious (Shubha) and inauspicious (Ashubha) moments.

<strong>Tithis:</strong> The Panchanga divides the lunar month into 30 tithis — 15 in the bright fortnight (Shukla Paksha, from new moon to full moon) and 15 in the dark fortnight (Krishna Paksha, from full moon to new moon). Festival dates are expressed as, for example, "Chaitra Shukla Navami" — the 9th tithi of the bright fortnight of the month Chaitra. This is why Indian festivals appear on different Gregorian dates each year.

<strong>Months:</strong> The 12 Hindu months are Chaitra, Vaishakha, Jyeshtha, Ashadha, Shravana, Bhadrapada, Ashwina, Kartika, Margashirsha, Pausha, Magha, and Phalguna. Each begins with the new moon (in the Amanta system, followed in South India and Maharashtra) or the full moon (in the Purnimanta system, followed in North India).

<strong>The Adhika Masa (Leap Month):</strong> A solar year (365.25 days) is longer than 12 lunar months (354 days). The difference of ~11 days accumulates to a full month every 32.5 months. The Panchanga inserts an extra "leap month" (Adhika Masa or Purushottama Masa) to realign. This is why Diwali or Navratri can fall 3–4 weeks earlier or later on the Gregorian calendar in different years. No festivals are celebrated in the Adhika Masa — it is a month of extra spiritual practice.`
    },
    {
      title: "Solar vs Lunar: A Side-by-Side Comparison",
      content: `<div class="compare-grid">
  <div class="compare-col solar">
    <h4>☀️ Solar Calendar (Gregorian)</h4>
    <ul>
      <li>Based on Earth's orbit around the Sun (~365.25 days)</li>
      <li>Months have fixed lengths (28–31 days)</li>
      <li>Dates repeat on the same Gregorian day each year</li>
      <li>Leap year adds 1 day every 4 years</li>
      <li>Used for: civil administration, international business, school years</li>
      <li>Seasons are fixed: June is always summer in the Northern Hemisphere</li>
    </ul>
    <div class="compare-example">Republic Day is always January 26.<br>Independence Day is always August 15.</div>
  </div>
  <div class="compare-col lunar">
    <h4>🌙 Lunar Calendar (Hindu Panchanga)</h4>
    <ul>
      <li>Based on the Moon's phases (~29.5 days per month)</li>
      <li>12 lunar months = ~354 days (11 days shorter than solar year)</li>
      <li>Dates shift earlier by ~11 days each Gregorian year</li>
      <li>Adhika Masa (leap month) every ~32 months realigns with seasons</li>
      <li>Used for: religious festivals, weddings, auspicious timing (muhurta)</li>
      <li>Moon phase directly visible — the "calendar" is in the sky</li>
    </ul>
    <div class="compare-example">Diwali shifts ~11 days earlier each year,<br>then jumps forward by a month when Adhika Masa occurs.</div>
  </div>
</div>`
    },
    {
      title: "The Paksha System: Light and Dark Fortnights",
      content: `<div class="paksha-visual">
  <div class="paksha shukla">
    <div class="paksha-label">Shukla Paksha (शुक्ल पक्ष)</div>
    <div class="paksha-desc">Bright Fortnight — new moon to full moon</div>
    <div class="paksha-days">
      <span class="pd">1</span><span class="pd">2</span><span class="pd">3</span><span class="pd">4</span><span class="pd">5</span><span class="pd">6</span><span class="pd">7</span><span class="pd">8</span><span class="pd">9</span><span class="pd">10</span><span class="pd">11</span><span class="pd">12</span><span class="pd">13</span><span class="pd">14</span><span class="pd purnima">15 Purnima 🌕</span>
    </div>
    <div class="paksha-festivals">✨ Auspicious for beginnings, weddings, new ventures</div>
  </div>
  <div class="paksha krishna">
    <div class="paksha-label">Krishna Paksha (कृष्ण पक्ष)</div>
    <div class="paksha-desc">Dark Fortnight — full moon to new moon</div>
    <div class="paksha-days">
      <span class="pd">1</span><span class="pd">2</span><span class="pd">3</span><span class="pd">4</span><span class="pd">5</span><span class="pd">6</span><span class="pd">7</span><span class="pd">8</span><span class="pd">9</span><span class="pd">10</span><span class="pd">11</span><span class="pd">12</span><span class="pd">13</span><span class="pd">14</span><span class="pd amavasya">15 Amavasya 🌑</span>
    </div>
    <div class="paksha-festivals">🔱 Powerful for spiritual practice; ancestors remembered</div>
  </div>
</div>
<p>Key tithis: <strong>Purnima</strong> (full moon) — Guru Purnima, Holi, Buddha Purnima. <strong>Amavasya</strong> (new moon) — Diwali, ancestor rites (Pitru Paksha). <strong>Ekadashi</strong> (11th) — fasting day, most sacred to Vaishnavas. <strong>Chaturdashi</strong> (14th) — Maha Shivratri, Kali Puja.</p>`
    },
    {
      title: "The 12 Hindu Months and Their Character",
      content: `<div class="months-table-wrap">
<table class="months-table">
  <thead><tr><th>#</th><th>Month</th><th>Gregorian approx.</th><th>Season</th><th>Key Festival</th></tr></thead>
  <tbody>
    <tr><td>1</td><td>Chaitra (चैत्र)</td><td>Mar–Apr</td><td>Vasanta (Spring)</td><td>Ugadi / Ram Navami</td></tr>
    <tr><td>2</td><td>Vaishakha (वैशाख)</td><td>Apr–May</td><td>Vasanta → Grishma</td><td>Akshaya Tritiya / Buddha Purnima</td></tr>
    <tr><td>3</td><td>Jyeshtha (ज्येष्ठ)</td><td>May–Jun</td><td>Grishma (Summer)</td><td>Nirjala Ekadashi</td></tr>
    <tr><td>4</td><td>Ashadha (आषाढ़)</td><td>Jun–Jul</td><td>Varsha (Monsoon)</td><td>Rath Yatra / Guru Purnima</td></tr>
    <tr><td>5</td><td>Shravana (श्रावण)</td><td>Jul–Aug</td><td>Varsha</td><td>Rakshabandhan / Janmashtami</td></tr>
    <tr><td>6</td><td>Bhadrapada (भाद्रपद)</td><td>Aug–Sep</td><td>Varsha → Sharada</td><td>Ganesh Chaturthi / Onam</td></tr>
    <tr><td>7</td><td>Ashwina (आश्विन)</td><td>Sep–Oct</td><td>Sharada (Autumn)</td><td>Navratri / Dussehra</td></tr>
    <tr><td>8</td><td>Kartika (कार्तिक)</td><td>Oct–Nov</td><td>Sharada → Hemanta</td><td>Diwali / Chhath Puja</td></tr>
    <tr><td>9</td><td>Margashirsha (मार्गशीर्ष)</td><td>Nov–Dec</td><td>Hemanta (Winter)</td><td>Gita Jayanti</td></tr>
    <tr><td>10</td><td>Pausha (पौष)</td><td>Dec–Jan</td><td>Hemanta → Shishira</td><td>Lohri eve / Makar Sankranti</td></tr>
    <tr><td>11</td><td>Magha (माघ)</td><td>Jan–Feb</td><td>Shishira (Cold)</td><td>Vasant Panchami / Magh Mela</td></tr>
    <tr><td>12</td><td>Phalguna (फाल्गुन)</td><td>Feb–Mar</td><td>Shishira → Vasanta</td><td>Maha Shivratri / Holi</td></tr>
  </tbody>
</table>
</div>`
    },
    {
      title: "Regional Calendars of India",
      content: `India has not one lunisolar calendar but many, each with its own epoch (starting year) and regional conventions:

<strong>Vikrama Samvat:</strong> The most widely used Hindu calendar across North India, Gujarat, Rajasthan, and Maharashtra. Currently in year 2082 (2026 CE). Named after Emperor Vikramaditya of Ujjain (legendary patron); begins in Chaitra (March/April).

<strong>Shaka Samvat:</strong> The Indian National Calendar, adopted by the Government of India in 1957 for civil purposes alongside the Gregorian. Currently year 1948. Begins on March 22 (the vernal equinox). The same epoch as the Shalivahana Shaka calendar of the Deccan.

<strong>Kali Yuga Era:</strong> The cosmic calendar counting from the beginning of the current age, approximately 3102 BCE. Currently Kali Yuga year 5127. Used in some traditional Panchangas for precise astronomical calculations.

<strong>Tamil Calendar (Thiruvalluvar / Tamil Panchangam):</strong> Solar calendar following the sun's position through 12 rashis. Currently Tamil year 2056 (Vikari). New Year: Puthandu (April 14). Used primarily in Tamil Nadu.

<strong>Malayalam Calendar (Kollavarsham):</strong> Solar calendar used in Kerala. Currently year 1201. New Year: Vishu (April 14). Onam's date is calculated from the position of the star Thiruvonam.

<strong>Bengali Calendar (Bangla San):</strong> Solar calendar used in Bengal. New Year: Pohela Boishakh (April 14–15). Currently year 1433.

<strong>Nanakshahi Calendar:</strong> Solar calendar adopted by the Sikh community in 2003, standardising Gurpurab dates. Currently year 558. Begins on March 14 (birthday of Guru Nanak according to new calculation).

<strong>Hijri Calendar:</strong> Islamic lunar calendar of 354 days, with no intercalary month. Festivals advance ~11 days earlier each Gregorian year, cycling through all seasons over 33 years.`
    },
    {
      title: "How to Read a Festival Date",
      content: `When you see a festival date like <strong>"Chaitra Shukla Navami"</strong>, here's how to decode it:

<div class="date-decode">
  <div class="decode-step">
    <span class="decode-num">1</span>
    <div><strong>Month:</strong> "Chaitra" — the first month of the Hindu year, falling in March/April.</div>
  </div>
  <div class="decode-step">
    <span class="decode-num">2</span>
    <div><strong>Paksha:</strong> "Shukla" — the bright fortnight (new moon → full moon). If it said "Krishna," it would be the dark fortnight.</div>
  </div>
  <div class="decode-step">
    <span class="decode-num">3</span>
    <div><strong>Tithi:</strong> "Navami" — the ninth lunar day. <em>Pratipada (1st), Dwitiya (2nd) … Navami (9th) … Chaturdashi (14th), Purnima/Amavasya (15th).</em></div>
  </div>
  <div class="decode-step">
    <span class="decode-num">4</span>
    <div><strong>Result:</strong> The 9th day of the bright fortnight of Chaitra → Ram Navami (Lord Rama's birthday).</div>
  </div>
</div>

<p>The Panchanga also specifies the exact time (ghati and pala — each ghati = 24 minutes) at which each tithi begins and ends, since a tithi doesn't always align neatly with the solar day. This is why "Ekadashi fasting" sometimes spans two Gregorian days.</p>`
    }
  ]
};

