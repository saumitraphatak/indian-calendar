// app.js — Bharat Utsav SPA Logic

/* ══════════════════════════════════════════
   CONSTANTS & STATE
══════════════════════════════════════════ */
const YEAR = 2026;
const MONTH_NAMES = [
  'January','February','March','April','May','June',
  'July','August','September','October','November','December'
];
const MONTH_NAMES_SHORT = [
  'Jan','Feb','Mar','Apr','May','Jun',
  'Jul','Aug','Sep','Oct','Nov','Dec'
];
const DAY_NAMES = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

let state = {
  view: 'calendar',
  month: new Date().getFullYear() === YEAR ? new Date().getMonth() + 1 : 1,
  searchQuery: '',
  modalFestivalId: null,
  modalTab: 'story'
};

/* ══════════════════════════════════════════
   HELPER FUNCTIONS
══════════════════════════════════════════ */

function dateStr(month, day) {
  return `${YEAR}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
}

function getFestivalsForDate(ds) {
  return FESTIVALS.filter(f => f.date === ds);
}

function getFestivalsForMonth(month) {
  const prefix = `${YEAR}-${String(month).padStart(2,'0')}-`;
  return FESTIVALS.filter(f => f.date.startsWith(prefix));
}

function getDaysInMonth(month) {
  return new Date(YEAR, month, 0).getDate();
}

function getFirstDayOfWeek(month) {
  return new Date(YEAR, month - 1, 1).getDay(); // 0=Sun
}

function festivalById(id) {
  return FESTIVALS.find(f => f.id === id);
}

function typeLabel(type) {
  const map = {
    hindu: 'Hindu', sikh: 'Sikh', islamic: 'Islamic',
    buddhist: 'Buddhist/Jain', national: 'National', christian: 'Christian'
  };
  return map[type] || type;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

/* ══════════════════════════════════════════
   VIEW SWITCHING
══════════════════════════════════════════ */

function switchView(viewName) {
  state.view = viewName;
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  document.getElementById(`view-${viewName}`).classList.add('active');
  document.querySelectorAll('.nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.view === viewName);
  });
  if (viewName === 'yearview') renderYearView();
  if (viewName === 'explained') renderCalendarExplained();
}

/* ══════════════════════════════════════════
   MONTH NAVIGATION
══════════════════════════════════════════ */

function switchMonth(month) {
  if (month < 1) month = 1;
  if (month > 12) month = 12;
  state.month = month;

  // Update month tab active state
  document.querySelectorAll('.month-tab').forEach(t => {
    t.classList.toggle('active', Number(t.dataset.month) === month);
    t.setAttribute('aria-selected', t.dataset.month == month);
  });

  renderCalendar();
  renderFestivalPanel();

  // Scroll active tab into view
  const activeTab = document.querySelector('.month-tab.active');
  if (activeTab) activeTab.scrollIntoView({behavior:'smooth', block:'nearest', inline:'center'});
}

/* ══════════════════════════════════════════
   CALENDAR GRID
══════════════════════════════════════════ */

function renderCalendar() {
  const month = state.month;
  const grid = document.getElementById('cal-grid');
  const header = document.getElementById('cal-header');
  const panelLabel = document.getElementById('panel-month-label');

  header.textContent = `${MONTH_NAMES[month - 1]} ${YEAR}`;
  panelLabel.textContent = `Festivals in ${MONTH_NAMES[month - 1]}`;

  const daysInMonth = getDaysInMonth(month);
  const firstDay = getFirstDayOfWeek(month);
  const today = new Date();
  const isCurrentMonth = today.getFullYear() === YEAR && today.getMonth() + 1 === month;

  let html = '';

  // Day-name headers
  DAY_NAMES.forEach(d => {
    html += `<div class="cal-day-name">${d}</div>`;
  });

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    html += `<div class="cal-cell empty"></div>`;
  }

  // Day cells
  for (let day = 1; day <= daysInMonth; day++) {
    const ds = dateStr(month, day);
    const festivals = getFestivalsForDate(ds);
    const isToday = isCurrentMonth && day === today.getDate();
    const hasFest = festivals.length > 0;

    // Build dots (max 3 visible)
    let dots = '';
    const shown = festivals.slice(0, 3);
    shown.forEach(f => {
      dots += `<span class="dot ${f.type}" title="${escHtml(f.name)}"></span>`;
    });
    if (festivals.length > 3) dots += `<span class="dot-more">+${festivals.length - 3}</span>`;

    const classes = [
      'cal-cell',
      isToday ? 'today' : '',
      hasFest ? 'has-festival' : '',
      festivals.length > 0 ? `type-${festivals[0].type}` : ''
    ].filter(Boolean).join(' ');

    const dataAttr = hasFest
      ? `data-festivals="${escHtml(festivals.map(f => f.id).join(','))}" tabindex="0" role="button" aria-label="${day} ${MONTH_NAMES[month-1]}${hasFest ? ': ' + festivals.map(f=>f.name).join(', ') : ''}"`
      : `aria-label="${day} ${MONTH_NAMES[month-1]}"`;

    html += `<div class="${classes}" data-date="${ds}" ${dataAttr}>
      <span class="cal-day-num">${day}</span>
      <div class="cal-dots">${dots}</div>
    </div>`;
  }

  grid.innerHTML = html;
}

/* ══════════════════════════════════════════
   FESTIVAL PANEL (sidebar)
══════════════════════════════════════════ */

function renderFestivalPanel(searchResults) {
  const list = document.getElementById('festival-list');
  const countEl = document.getElementById('panel-count');

  const festivals = searchResults !== undefined
    ? searchResults
    : getFestivalsForMonth(state.month);

  countEl.textContent = festivals.length
    ? `${festivals.length} festival${festivals.length > 1 ? 's' : ''}`
    : '';

  if (!festivals.length) {
    list.innerHTML = `<div class="panel-empty">No festivals found.</div>`;
    return;
  }

  list.innerHTML = festivals.map(f => {
    const [, mm, dd] = f.date.split('-');
    const displayDate = `${MONTH_NAMES_SHORT[Number(mm)-1]} ${Number(dd)}`;
    return `
      <div class="festival-card" data-id="${f.id}" tabindex="0" role="button" aria-label="Open details for ${escHtml(f.name)}">
        <div class="fc-left">
          <span class="fc-emoji">${f.emoji}</span>
        </div>
        <div class="fc-body">
          <div class="fc-top">
            <span class="fc-name">${escHtml(f.name)}</span>
            <span class="fc-date">${displayDate}</span>
          </div>
          <div class="fc-hindi" lang="hi">${escHtml(f.hindiName)}</div>
          <div class="fc-desc">${escHtml(f.shortDesc)}</div>
          <div class="fc-tags">
            <span class="fc-type-badge ${f.type}">${typeLabel(f.type)}</span>
            ${f.regions.slice(0,2).map(r => `<span class="fc-region-tag">${escHtml(r)}</span>`).join('')}
          </div>
        </div>
      </div>`;
  }).join('');
}

/* ══════════════════════════════════════════
   YEAR VIEW
══════════════════════════════════════════ */

function renderYearView() {
  const grid = document.getElementById('year-grid');
  if (grid.dataset.rendered === 'true') return; // already built

  let html = '';
  for (let m = 1; m <= 12; m++) {
    const daysInMonth = getDaysInMonth(m);
    const firstDay = getFirstDayOfWeek(m);
    const festivals = getFestivalsForMonth(m);

    // Build festival date lookup for this month
    const festMap = {};
    festivals.forEach(f => {
      const day = parseInt(f.date.split('-')[2]);
      if (!festMap[day]) festMap[day] = [];
      festMap[day].push(f);
    });

    // Mini calendar cells
    let miniCells = DAY_NAMES.map(d => `<div class="mini-day-name">${d[0]}</div>`).join('');

    for (let i = 0; i < firstDay; i++) {
      miniCells += `<div class="mini-cell empty"></div>`;
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const fests = festMap[day] || [];
      const hasFest = fests.length > 0;
      const typeClass = hasFest ? `festival-${fests[0].type}` : '';
      const title = hasFest ? fests.map(f => f.name).join(', ') : '';
      miniCells += `<div class="mini-cell ${typeClass}" ${title ? `title="${escHtml(title)}"` : ''}>${day}</div>`;
    }

    const festList = festivals.map(f =>
      `<div class="year-fest-item" data-id="${f.id}">
        <span class="year-fest-emoji">${f.emoji}</span>
        <span class="year-fest-name">${escHtml(f.name)}</span>
      </div>`
    ).join('') || `<div class="year-fest-none">No major festivals</div>`;

    html += `
      <div class="year-month-card" data-month="${m}" role="button" tabindex="0" aria-label="Open ${MONTH_NAMES[m-1]}">
        <div class="year-month-header">
          <span class="year-month-name">${MONTH_NAMES[m-1]}</span>
          <span class="year-month-count">${festivals.length || ''}</span>
        </div>
        <div class="mini-cal-grid">${miniCells}</div>
        <div class="year-fest-list">${festList}</div>
      </div>`;
  }

  grid.innerHTML = html;
  grid.dataset.rendered = 'true';
}

/* ══════════════════════════════════════════
   CALENDAR EXPLAINED VIEW
══════════════════════════════════════════ */

function renderCalendarExplained() {
  const container = document.getElementById('explained-content');
  if (container.dataset.rendered === 'true') return;

  let html = `
    <div class="explained-intro">
      <p>${CALENDAR_EXPLAINED.intro}</p>
    </div>`;

  CALENDAR_EXPLAINED.sections.forEach((sec, i) => {
    html += `
      <details class="explained-section" ${i === 0 ? 'open' : ''}>
        <summary class="explained-summary">${escHtml(sec.title)}</summary>
        <div class="explained-body">${sec.content}</div>
      </details>`;
  });

  container.innerHTML = html;
  container.dataset.rendered = 'true';
}

/* ══════════════════════════════════════════
   SEARCH
══════════════════════════════════════════ */

function handleSearch(query) {
  state.searchQuery = query.trim().toLowerCase();
  const clearBtn = document.getElementById('search-clear');
  clearBtn.classList.toggle('hidden', !state.searchQuery);

  if (!state.searchQuery) {
    // Restore month view
    switchView('calendar');
    renderFestivalPanel();
    return;
  }

  const results = FESTIVALS.filter(f =>
    f.name.toLowerCase().includes(state.searchQuery) ||
    f.hindiName.toLowerCase().includes(state.searchQuery) ||
    f.shortDesc.toLowerCase().includes(state.searchQuery) ||
    f.regions.some(r => r.toLowerCase().includes(state.searchQuery)) ||
    f.type.toLowerCase().includes(state.searchQuery)
  );

  // Switch to calendar view and show results in panel
  switchView('calendar');
  const panelLabel = document.getElementById('panel-month-label');
  panelLabel.textContent = `Search results`;
  renderFestivalPanel(results);
}

/* END OF PART 1 — modal, date-picker, events & init continue in Part 2 */
