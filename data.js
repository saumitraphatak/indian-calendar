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

]; // END OF FESTIVALS ARRAY — Part 1 (Jan–May). Part 2 continues below.
