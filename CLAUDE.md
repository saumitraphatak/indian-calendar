# CLAUDE.md — Bharat Utsav: India's Festival Calendar 2026

## Project Overview

**Name:** Bharat Utsav — India's Festival Calendar 2026
**Purpose:** Single-page application (SPA) that tells the *why* behind Indian festivals, not just the when. Covers Hindu, Sikh, Islamic, Buddhist/Jain, National, Christian, and Sports celebrations across the full year 2026.
**Author:** Saumitra Phatak
**Live URL:** https://saumitraphatak.github.io/indian-calendar/
**GitHub:** https://github.com/saumitraphatak/indian-calendar
**Branch:** `main`

---

## Critical Constraints

- **NO npm, no Node, no build tools.** This machine does not have them installed.
- Pure static HTML + CSS + Vanilla JavaScript only.
- All dependencies (fonts) loaded via CDN (Google Fonts).
- No Chart.js, no maps, no JS framework.
- `git` is available at `/usr/bin/git`.
- `python3` is available at `/Users/curious/anaconda3/bin/python3` (for a local dev server if needed: `python3 -m http.server`).

---

## File Structure

```
indian-calendar/
├── index.html        # Main HTML shell — the entire SPA lives here
├── style.css         # All styles (warm saffron/ochre palette, no external CSS)
├── app.js            # Full SPA logic — state machine, all render functions, event listeners
├── data.js           # FESTIVALS array (~1572 lines) + CALENDAR_EXPLAINED object
├── robots.txt        # Allows all crawlers
└── sitemap.xml       # Single-URL sitemap pointing to live URL
```

No `pages/` directory. No sub-pages. Everything renders inside `index.html`.

---

## Script Load Order (Critical)

```html
<script src="data.js"></script>   <!-- Must load first: defines FESTIVALS and CALENDAR_EXPLAINED -->
<script src="app.js"></script>    <!-- Reads those globals at runtime -->
```

`app.js` depends on `FESTIVALS` being in the global scope before it runs. Never reverse this order.

---

## SPA Architecture

Three views rendered inside `<main id="app-main">`. Only one is visible at a time via `.view.active`.

| View ID | Nav Button | `data-view` | Content |
|---|---|---|---|
| `#view-calendar` | 📅 Calendar | `calendar` | Month grid + festival sidebar panel |
| `#view-yearview` | 🗓 Year View | `yearview` | All 12 months at a glance (mini calendars) |
| `#view-explained` | 📖 Calendar Explained | `explained` | Hindu lunisolar (Panchanga) system explainer |

### State Object (`app.js`)

```javascript
let state = {
  view: 'calendar',          // 'calendar' | 'yearview' | 'explained'
  month: currentMonth,       // 1–12 (defaults to current month if year is 2026, else 1)
  searchQuery: '',
  modalFestivalId: null,
  modalTab: 'story'
};
```

### View Switching

`switchView(viewName)` — updates `state.view`, toggles `.active` on `.view` divs and `.nav-btn` buttons. Calls `renderYearView()` or `renderCalendarExplained()` lazily (cached with `data-rendered="true"`).

---

## Calendar View Layout

```
.calendar-layout
├── .calendar-section          # Left: month grid
│   ├── .calendar-month-header (prev/next/today buttons + month title)
│   └── #cal-grid              # Rendered by renderCalendar()
└── .festival-panel (aside)    # Right: festival list for current month
    └── #festival-list         # Rendered by renderFestivalPanel()
```

**Month navigation:** Tab bar (`.month-tabs`) with buttons `data-month="1"` through `data-month="12"`, plus `#prev-month` / `#next-month` / `#today-btn` buttons.

**Calendar cells:** Each `<div class="cal-cell">` has `data-date="YYYY-MM-DD"`. Festival cells also carry `data-festivals="id1,id2"` and are keyboard-focusable (`tabindex="0"`). Colored dots (`.dot.{type}`) appear inside `.cal-dots`.

---

## Festival Modal

Triggered by clicking a calendar cell or a `.festival-card` in the panel. Managed by `openModal(festivalId)`.

**Modal tabs** (5):
| `data-tab` | Content |
|---|---|
| `story` | Origin story paragraphs |
| `celebration` | How it is celebrated |
| `regional` | Regional variations (key/value from `f.regionalVariations`) |
| `significance` | Cultural/historical significance |
| `resources` | External links (title, url, src) |

Modal header gets class `type-{festival.type}` for color-coded gradient.
Closing: `#modal-close` button, clicking `#modal-overlay`, or pressing Escape. Sets `document.body.style.overflow` back to `''`.

---

## Data Structure — `data.js`

### `FESTIVALS` Array

Each festival object:

```javascript
{
  id: 'holi-2026',              // kebab-case unique ID
  name: 'Holi',                 // English name
  hindiName: 'होली',            // Devanagari script name
  date: '2026-03-04',           // ISO 8601, must be YEAR 2026
  hinduDate: 'Phalguna Purnima',// Human-readable Hindu calendar date
  type: 'hindu',                // 'hindu'|'sikh'|'islamic'|'buddhist'|'national'|'christian'|'sports'
  emoji: '🎨',
  regions: ['North India', 'Maharashtra', ...],  // Array of strings
  shortDesc: '...',             // One-line description for festival cards
  story: `...`,                 // Multi-paragraph origin story (template literal)
  celebration: `...`,           // How it is celebrated (template literal)
  regionalVariations: {         // Key: region name, Value: variation description
    'North India': '...',
    'Maharashtra': '...'
  },
  significance: `...`,          // Cultural/historical significance
  resources: [                  // External links
    { title: '...', url: 'https://...', src: 'Source Name' }
  ]
}
```

### `CALENDAR_EXPLAINED` Object

Defined in `data.js` (near end of file). Structure:

```javascript
const CALENDAR_EXPLAINED = {
  intro: '...paragraph...',
  sections: [
    { title: 'Tithi — The Lunar Day', content: '...HTML string...' },
    { title: 'Paksha — The Fortnight', content: '...' },
    // ... more sections
  ]
}
```

`content` fields contain raw HTML strings (bold tags, divs, etc.) — rendered via `innerHTML` in `renderCalendarExplained()`.

---

## Adding a New Festival

1. Open `data.js`.
2. Find the correct month block (look for `/* ════════ MONTH_NAME ════════ */` comment).
3. Add a new object to the `FESTIVALS` array following the schema above.
4. `date` must be in `2026-MM-DD` format.
5. `type` must be exactly one of: `hindu`, `sikh`, `islamic`, `buddhist`, `national`, `christian`, `sports`.
6. `id` must be unique across all festivals (use kebab-case).
7. Save — the SPA will automatically pick it up at runtime.

**No build step required.**

---

## CSS Design System (`style.css`)

### CSS Custom Properties (`:root`)

```css
/* Palette */
--saffron:       #D4652A;   /* Main brand color */
--saffron-light: #F08040;
--deep-red:      #8B1A1A;
--turmeric:      #C9A227;
--turmeric-light:#F5D060;
--peacock:       #1A5276;
--cream:         #FFF8F0;   /* Page background */
--cream-dark:    #F5EDE0;
--card:          #FFFFFF;
--text:          #1A0A00;
--text-mid:      #5C3D1A;
--text-soft:     #8B6545;
--border:        rgba(180,110,40,0.18);
--shadow:        0 4px 24px rgba(140,70,20,0.10);
--shadow-hover:  0 8px 36px rgba(140,70,20,0.18);

/* Festival type accent colors */
--col-hindu:    #E8580C;
--col-sikh:     #D4A017;
--col-islamic:  #1A7A5E;
--col-buddhist: #7B9E3C;
--col-jain:     #4CAF50;
--col-national: #2C4FA3;
--col-christian:#8B2FC7;
--col-sports:   #0096c7;

/* Misc */
--radius:    12px;
--radius-sm: 6px;
--transition: 0.2s ease;
```

### Typography

- **Body:** `'Inter'`, `system-ui`, `sans-serif` — loaded from Google Fonts
- **Headings / brand:** `'Playfair Display'`, `Georgia`, `serif`
- **Devanagari script:** `'Noto Sans Devanagari'`, `sans-serif`
- Base font size: `16px`; line-height: `1.65`

### Header

Gradient background: `linear-gradient(140deg, #5C0A0A 0%, #8B1A1A 30%, #C4622D 70%, #D4862A 100%)`
CSS mandala/sunburst via `repeating-conic-gradient` on `.header-mandala` pseudo-element.
Diya emoji animations via `@keyframes diyas`.

---

## UI Components

### Legend Dots
`.legend-dot.{type}` — colored circles matching `--col-{type}` vars. Defined in header legend bar.

### Festival Type Filter Bar
`.filter-bar` > `.filter-btn[data-type]` — filters calendar sidebar panel. "All" shows everything.

### Trivia Ticker
`#trivia-ticker` — rotating cultural facts. The `CULTURAL_TRIVIA` array is defined in `app.js`. Rotates on a timer.

### Upcoming Festivals Widget
`#upcoming-bar` — shows next 3 festivals from today's date. Rendered by `renderUpcomingBar()`.

### Date Picker Popup
`#date-picker` — appears when clicking a calendar cell with multiple festivals on the same day. Lists all festivals for that date; clicking one opens the modal.

### Year View Mini Calendars
`.year-month-card[data-month]` — clicking navigates to that month in Calendar view via `switchView('calendar')` + `switchMonth(m)`.

---

## Event Delegation Pattern

`app.js` uses event delegation on `#app-main` and `#festival-modal` rather than per-element listeners. Key delegated events:

- `#cal-grid` click/keydown → opens modal or date picker
- `#festival-list` click/keydown → opens modal
- `.modal-tabs` click → switches modal tab
- `.month-tabs` click → `switchMonth()`
- `.filter-btn` click → filters festival panel by type
- `#festival-search` input → `handleSearch()`

---

## Search

`handleSearch(query)` searches across:
- `f.name` (English)
- `f.hindiName` (Devanagari)
- `f.shortDesc`
- `f.regions` (array)
- `f.type`

Clears automatically when query is empty (restores month view).

---

## Accessibility

- ARIA roles: `role="grid"` on cal grid, `role="button"` on festival cards, `role="dialog"` on modal
- `aria-label` on all interactive elements
- `aria-live="polite"` on trivia ticker
- `aria-modal="true"` + focus trap on modal (focus sent to close button)
- Keyboard: Enter/Space opens modals; Escape closes modal

---

## SEO / Meta

- Canonical URL in `<head>`
- Open Graph tags (og:type, og:title, og:description, og:url, og:site_name, og:locale)
- Twitter Card tags
- JSON-LD structured data: `WebApplication` schema with author `Saumitra Phatak`

---

## Development Workflow

```bash
# Start local dev server (no live-reload, but works fine)
cd /Users/curious/Projects/indian-calendar
python3 -m http.server 8080
# Open http://localhost:8080

# Commit changes
git add index.html style.css app.js data.js
git commit -m "your message"
git push origin main
# GitHub Pages serves automatically from main branch
```

---

## Common Gotchas

1. **Script order is critical.** `data.js` must load before `app.js`. `FESTIVALS` and `CALENDAR_EXPLAINED` must be in global scope.
2. **Date format is strict.** All festival dates must be `2026-MM-DD`. The app hardcodes `const YEAR = 2026`.
3. **`type` values are an enum.** Only `hindu`, `sikh`, `islamic`, `buddhist`, `national`, `christian`, `sports` are valid. CSS classes, legend, and filter buttons all depend on exact spelling.
4. **`content` in `CALENDAR_EXPLAINED.sections` is raw HTML.** It is injected via `innerHTML`. Use proper HTML tags, not Markdown.
5. **Year View is lazy-rendered.** It caches itself with `grid.dataset.rendered = 'true'`. If you need to force a re-render (e.g., after adding festivals), clear that attribute or reload.
6. **No module system.** All functions and variables are global. Avoid name collisions.
7. **Festival dates may differ ±1–2 days by region.** Note this in any user-facing copy. Islamic dates are approximate (moon sighting).
8. **Primary date reference:** Kalnirnay 2026 and traditional Panchanga.
