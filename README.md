# Bharat Utsav — भारत उत्सव

*India's Festival Calendar 2026*

An interactive guide to every major Indian festival of 2026 — with the full story behind each celebration, regional variations, the logic of the Hindu lunisolar calendar, and cultural context that goes far beyond a date on a wall calendar.

**Live site:** https://saumitraphatak.github.io/indian-calendar/

---

## Why This Exists

Most festival calendars tell you *when*. This one tells you *why*.

India has one of the richest festival traditions in the world — dozens of celebrations across Hindu, Sikh, Islamic, Buddhist, Jain, and Christian traditions, each with a unique origin story, a regional variation, a food, a ritual, and a reason to gather. This project collects all of that in one interactive place.

---

## Features

- **Full festival database** — every major Indian festival of 2026 with exact dates
- **Deep-dive stories** — origin myths, historical context, folk legends (Lohri's Dulla Bhatti, Diwali's Ram return, Holi's Holika pyre)
- **Regional variations** — how the same festival is celebrated differently in Punjab, Tamil Nadu, Bengal, Maharashtra, Kerala, and beyond
- **Calendar Explained** — how the Hindu lunisolar (Panchanga) system works, why dates shift each year, what Tithi and Paksha mean
- **Year View** — all 12 months at a glance
- **Search** — filter by name, region, or tradition
- **Upcoming widget** — shows the next 3 festivals from today's date
- **Cultural trivia ticker** — rotating facts about Indian festivals
- **Color-coded legend** — Hindu / Sikh / Islamic / Buddhist-Jain / National / Christian / Sports

---

## Festival Coverage

| Tradition | Examples |
|---|---|
| **Hindu** | Makar Sankranti, Holi, Navratri, Dussehra, Diwali, Maha Shivratri |
| **Sikh** | Lohri, Baisakhi, Gurpurab |
| **Islamic** | Eid al-Fitr, Eid al-Adha, Muharram |
| **Buddhist / Jain** | Buddha Purnima, Mahavir Jayanti |
| **National** | Republic Day, Independence Day, Gandhi Jayanti |
| **Christian** | Christmas, Good Friday |
| **Sports / Cultural** | IPL, India cricket milestones |

---

## Tech Stack

- **HTML5 / CSS3 / Vanilla JS** — no frameworks, no build step
- **Google Fonts** — Playfair Display, Noto Sans Devanagari, Inter
- `index.html` — single-page app with three views (Calendar, Year View, Calendar Explained)
- `style.css` — full design system with mandala-inspired decorative elements
- `app.js` — view switching, search, upcoming-festival widget, trivia ticker
- `data.js` — complete festival database: dates, stories, regional variations, resources

---

## Project Structure

```
indian-calendar/
├── index.html      # Single-page app shell (three views)
├── style.css       # Design system (warm saffron + deep tones)
├── app.js          # View router, search, upcoming widget, trivia
└── data.js         # Complete festival database (FESTIVALS array)
```

---

## The Data Model

Each festival in `data.js` is a structured object:

```js
{
  id: "lohri",
  name: "Lohri",
  hindiName: "लोहड़ी",
  date: "2026-01-13",
  hinduDate: "Last day of Paush (solar)",
  type: "sikh",             // hindu | sikh | islamic | buddhist | national | christian | sports
  emoji: "🔥",
  regions: ["Punjab", "Haryana", "Delhi"],
  shortDesc: "One-line description",
  story: "Multi-paragraph origin and folklore...",
  celebration: "How it is observed today...",
  regionalVariations: { "Punjab": "...", "Himachal Pradesh": "..." },
  significance: "Why it matters culturally...",
  resources: [{ title, url, src }]
}
```

---

## Running Locally

```bash
git clone https://github.com/saumitraphatak/indian-calendar.git
cd indian-calendar
open index.html
```

No server required. No install step.

---

## Deployment

Deployed via **GitHub Pages** from the `main` branch root.

---

## Author

**Saumitra Phatak** — physicist and Mumbaikar who grew up with every festival on this list.
- Website: [curious96.com](https://www.curious96.com)
- GitHub: [@saumitraphatak](https://github.com/saumitraphatak)

---

## License

MIT — free to use, modify, and distribute.
