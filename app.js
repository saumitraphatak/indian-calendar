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

/* ══════════════════════════════════════════
   MODAL
══════════════════════════════════════════ */

function openModal(festivalId) {
  const f = festivalById(festivalId);
  if (!f) return;
  state.modalFestivalId = festivalId;
  state.modalTab = 'story';

  // Header
  document.getElementById('modal-emoji').textContent = f.emoji;
  document.getElementById('modal-festival-name').textContent = f.name;
  document.getElementById('modal-hindi-name').textContent = f.hindiName;

  const [, mm, dd] = f.date.split('-');
  const dayNum = Number(dd);
  const suffix = dayNum === 1 ? 'st' : dayNum === 2 ? 'nd' : dayNum === 3 ? 'rd' : 'th';
  document.getElementById('modal-meta').textContent =
    `${MONTH_NAMES[Number(mm)-1]} ${dayNum}${suffix}, ${YEAR}  ·  ${f.hinduDate}  ·  ${typeLabel(f.type)}`;

  // Region tags
  const tagsEl = document.getElementById('modal-region-tags');
  tagsEl.innerHTML = f.regions.map(r =>
    `<span class="region-tag">${escHtml(r)}</span>`
  ).join('');

  // Header gradient by type
  const modal = document.getElementById('festival-modal');
  const header = document.getElementById('modal-header');
  header.className = 'modal-header type-' + f.type;

  // Tabs reset
  document.querySelectorAll('.modal-tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === 'story');
  });

  renderModalTab('story', f);

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  document.getElementById('modal-close').focus();
}

function renderModalTab(tab, f) {
  f = f || festivalById(state.modalFestivalId);
  if (!f) return;
  state.modalTab = tab;

  const body = document.getElementById('modal-body');

  if (tab === 'story') {
    const paras = f.story.trim().split(/\n\n+/).map(p =>
      `<p>${p.trim().replace(/\n/g, '<br>')}</p>`
    ).join('');
    body.innerHTML = `<div class="modal-story">${paras}</div>`;
  }

  else if (tab === 'celebration') {
    body.innerHTML = `<div class="modal-celebration">
      <div class="modal-section-icon">🎉</div>
      <p>${escHtml(f.celebration).replace(/\n/g,'<br>')}</p>
    </div>`;
  }

  else if (tab === 'regional') {
    const entries = Object.entries(f.regionalVariations || {});
    if (!entries.length) {
      body.innerHTML = `<p class="modal-empty">Regional variation details coming soon.</p>`;
      return;
    }
    body.innerHTML = `<div class="modal-regional">
      ${entries.map(([region, desc]) => `
        <div class="regional-entry">
          <div class="regional-name">🗺️ ${escHtml(region)}</div>
          <div class="regional-desc">${escHtml(desc)}</div>
        </div>`).join('')}
    </div>`;
  }

  else if (tab === 'significance') {
    const paras = f.significance.trim().split(/\n\n+/).map(p =>
      `<p>${p.trim().replace(/\n/g,'<br>')}</p>`
    ).join('');
    body.innerHTML = `<div class="modal-significance">
      <div class="modal-section-icon">🌟</div>
      ${paras}
    </div>`;
  }

  else if (tab === 'resources') {
    if (!f.resources || !f.resources.length) {
      body.innerHTML = `<p class="modal-empty">Resources coming soon.</p>`;
      return;
    }
    body.innerHTML = `<div class="modal-resources">
      <p class="resources-intro">Explore these curated resources to learn more about ${escHtml(f.name)}:</p>
      ${f.resources.map(r => `
        <a class="resource-link" href="${escHtml(r.url)}" target="_blank" rel="noopener noreferrer">
          <span class="resource-icon">📖</span>
          <div class="resource-text">
            <span class="resource-title">${escHtml(r.title)}</span>
            <span class="resource-src">${escHtml(r.src)}</span>
          </div>
          <span class="resource-arrow">↗</span>
        </a>`).join('')}
    </div>`;
  }
}

function closeModal() {
  document.getElementById('festival-modal').classList.add('hidden');
  document.body.style.overflow = '';
  state.modalFestivalId = null;
}

/* ══════════════════════════════════════════
   DATE PICKER (multi-festival days)
══════════════════════════════════════════ */

function openDatePicker(festivals, anchorEl) {
  const dp = document.getElementById('date-picker');
  const header = document.getElementById('dp-header');
  const listEl = document.getElementById('dp-list');

  const [, mm, dd] = festivals[0].date.split('-');
  header.textContent = `${MONTH_NAMES[Number(mm)-1]} ${Number(dd)} — Choose a festival`;

  listEl.innerHTML = festivals.map(f => `
    <button class="dp-item" data-id="${f.id}">
      <span class="dp-emoji">${f.emoji}</span>
      <span class="dp-name">${escHtml(f.name)}</span>
      <span class="dp-type ${f.type}">${typeLabel(f.type)}</span>
    </button>`).join('');

  // Position near anchor
  const rect = anchorEl.getBoundingClientRect();
  dp.style.top = `${rect.bottom + window.scrollY + 8}px`;
  dp.style.left = `${Math.min(rect.left + window.scrollX, window.innerWidth - 260)}px`;
  dp.classList.remove('hidden');
}

function closeDatePicker() {
  document.getElementById('date-picker').classList.add('hidden');
}

/* ══════════════════════════════════════════
   EVENT DELEGATION & LISTENERS
══════════════════════════════════════════ */

function attachEvents() {
  /* ── Nav buttons ── */
  document.querySelectorAll('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => switchView(btn.dataset.view));
  });

  /* ── Month tabs ── */
  document.querySelectorAll('.month-tab').forEach(tab => {
    tab.addEventListener('click', () => switchMonth(Number(tab.dataset.month)));
  });

  /* ── Prev/Next month arrows ── */
  document.getElementById('prev-month').addEventListener('click', () => {
    switchMonth(state.month - 1);
  });
  document.getElementById('next-month').addEventListener('click', () => {
    switchMonth(state.month + 1);
  });

  /* ── Calendar grid: click on a day cell ── */
  document.getElementById('cal-grid').addEventListener('click', e => {
    const cell = e.target.closest('.cal-cell[data-festivals]');
    if (!cell) return;
    const ids = cell.dataset.festivals.split(',');
    if (ids.length === 1) {
      openModal(ids[0]);
    } else {
      const festivals = ids.map(id => festivalById(id)).filter(Boolean);
      openDatePicker(festivals, cell);
    }
  });

  document.getElementById('cal-grid').addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const cell = e.target.closest('.cal-cell[data-festivals]');
      if (cell) cell.click();
    }
  });

  /* ── Festival panel: click a card ── */
  document.getElementById('festival-list').addEventListener('click', e => {
    const card = e.target.closest('.festival-card[data-id]');
    if (card) openModal(card.dataset.id);
  });

  document.getElementById('festival-list').addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.festival-card[data-id]');
      if (card) { e.preventDefault(); openModal(card.dataset.id); }
    }
  });

  /* ── Year view: click month card → calendar ── */
  document.getElementById('year-grid').addEventListener('click', e => {
    const card = e.target.closest('.year-month-card');
    const festItem = e.target.closest('.year-fest-item[data-id]');
    if (festItem) {
      e.stopPropagation();
      openModal(festItem.dataset.id);
      return;
    }
    if (card) {
      const m = Number(card.dataset.month);
      switchMonth(m);
      switchView('calendar');
    }
  });

  document.getElementById('year-grid').addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      const card = e.target.closest('.year-month-card');
      if (card) { e.preventDefault(); card.click(); }
    }
  });

  /* ── Modal close ── */
  document.getElementById('modal-close').addEventListener('click', closeModal);
  document.getElementById('modal-overlay').addEventListener('click', closeModal);

  /* ── Modal tabs ── */
  document.querySelector('.modal-tabs').addEventListener('click', e => {
    const tab = e.target.closest('.modal-tab');
    if (!tab) return;
    document.querySelectorAll('.modal-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    renderModalTab(tab.dataset.tab);
  });

  /* ── Date picker items ── */
  document.getElementById('dp-list').addEventListener('click', e => {
    const item = e.target.closest('.dp-item[data-id]');
    if (!item) return;
    closeDatePicker();
    openModal(item.dataset.id);
  });

  document.getElementById('dp-close').addEventListener('click', closeDatePicker);

  /* ── Search ── */
  const searchInput = document.getElementById('festival-search');
  searchInput.addEventListener('input', () => handleSearch(searchInput.value));

  document.getElementById('search-clear').addEventListener('click', () => {
    searchInput.value = '';
    handleSearch('');
    searchInput.focus();
  });

  /* ── Keyboard: Escape closes modal / date picker ── */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      if (!document.getElementById('festival-modal').classList.contains('hidden')) closeModal();
      if (!document.getElementById('date-picker').classList.contains('hidden')) closeDatePicker();
    }
  });

  /* ── Click outside date picker ── */
  document.addEventListener('click', e => {
    const dp = document.getElementById('date-picker');
    if (!dp.classList.contains('hidden') &&
        !dp.contains(e.target) &&
        !e.target.closest('.cal-cell')) {
      closeDatePicker();
    }
  });
}

/* ══════════════════════════════════════════
   INIT
══════════════════════════════════════════ */

function init() {
  // Set initial month tab states
  document.querySelectorAll('.month-tab').forEach(t => {
    t.setAttribute('aria-selected', t.dataset.month == state.month);
    if (Number(t.dataset.month) === state.month) t.classList.add('active');
  });

  attachEvents();
  renderCalendar();
  renderFestivalPanel();
}

document.addEventListener('DOMContentLoaded', init);
