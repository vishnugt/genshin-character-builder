// ── Element / weapon display metadata ─────────────────────────────────────────
const ELEMENT_META = {
  Pyro:    { color: "#ef4444", icon: "🔥", img: "icons/element_pyro.png"    },
  Hydro:   { color: "#38bdf8", icon: "💧", img: "icons/element_hydro.png"   },
  Cryo:    { color: "#a5f3fc", icon: "❄️", img: "icons/element_cryo.png"    },
  Electro: { color: "#c084fc", icon: "⚡", img: "icons/element_electro.png" },
  Dendro:  { color: "#4ade80", icon: "🌿", img: "icons/element_dendro.png"  },
  Geo:     { color: "#fbbf24", icon: "⛰️", img: "icons/element_geo.png"     },
  Anemo:   { color: "#34d399", icon: "🌀", img: "icons/element_anemo.png"   },
};

const WEAPON_META = {
  Sword:    { icon: "🗡️", img: "icons/weapon_sword.png"    },
  Claymore: { icon: "⚔️",  img: "icons/weapon_claymore.png" },
  Polearm:  { icon: "🔱",  img: "icons/weapon_polearm.png"  },
  Catalyst: { icon: "🔮",  img: "icons/weapon_catalyst.png" },
  Bow:      { icon: "🏹",  img: "icons/weapon_bow.png"      },
};

// ── EXP constants ─────────────────────────────────────────────────────────────
const EXP_VALUES = { advice: 1000, aexp: 5000, wit: 20000 };
const EXP_BY_CAP = {
  1: 0, 20: 58400, 40: 488050, 50: 1146700,
  60: 2336500, 70: 4058150, 80: 6489550, 90: 9770100,
};

// ── Active character state ────────────────────────────────────────────────────
let CHAR = null;
let filterElement = null;
let filterWeapon  = null;
const inv = {};

// ── Character select screen ───────────────────────────────────────────────────
function buildFilters() {
  buildCustomSelect(
    document.getElementById("element-filter"),
    "All Elements", ELEMENT_META, filterElement,
    v => { filterElement = v; buildFilters(); buildCharSelect(); }
  );
  buildCustomSelect(
    document.getElementById("weapon-filter"),
    "All Weapons", WEAPON_META, filterWeapon,
    v => { filterWeapon = v; buildFilters(); buildCharSelect(); }
  );
}

function buildCustomSelect(container, placeholder, meta, currentValue, onChange) {
  container.innerHTML = "";
  container.className = "custom-select";

  const sel = currentValue ? meta[currentValue] : null;

  // ── Trigger button ──────────────────────────────────────────────────────
  const btn = document.createElement("button");
  btn.className = "cs-btn" + (currentValue ? " cs-has-value" : "");
  if (sel?.color) btn.style.setProperty("--fc", sel.color);
  const btnIcon = sel?.img
    ? `<img src="${sel.img}" class="cs-btn-icon" onerror="this.style.display='none'">`
    : (sel?.icon ? `<span>${sel.icon}</span>` : "");
  btn.innerHTML = `${btnIcon}<span class="cs-btn-label">${currentValue || placeholder}</span><svg class="cs-arrow" viewBox="0 0 10 6"><path d="M0 0l5 6 5-6z" fill="currentColor"/></svg>`;
  btn.addEventListener("click", e => {
    e.stopPropagation();
    const wasOpen = container.classList.contains("cs-open");
    document.querySelectorAll(".custom-select.cs-open").forEach(el => el.classList.remove("cs-open"));
    if (!wasOpen) container.classList.add("cs-open");
  });

  // ── Options list ────────────────────────────────────────────────────────
  const dropdown = document.createElement("div");
  dropdown.className = "cs-dropdown";

  const allOpt = document.createElement("div");
  allOpt.className = "cs-option" + (!currentValue ? " cs-selected" : "");
  allOpt.textContent = placeholder;
  allOpt.addEventListener("click", e => { e.stopPropagation(); container.classList.remove("cs-open"); onChange(null); });
  dropdown.appendChild(allOpt);

  for (const [key, m] of Object.entries(meta)) {
    const opt = document.createElement("div");
    opt.className = "cs-option" + (currentValue === key ? " cs-selected" : "");
    if (m.color) opt.style.setProperty("--fc", m.color);
    const icon = m.img
      ? `<img src="${m.img}" class="cs-opt-icon" onerror="this.style.display='none'">`
      : `<span>${m.icon}</span>`;
    opt.innerHTML = `${icon}<span>${key}</span>`;
    opt.addEventListener("click", e => { e.stopPropagation(); container.classList.remove("cs-open"); onChange(key); });
    dropdown.appendChild(opt);
  }

  container.appendChild(btn);
  container.appendChild(dropdown);
}

function buildCharSelect() {
  const container = document.getElementById("char-cards");
  container.innerHTML = "";
  let shown = 0;

  const elementOrder = Object.keys(ELEMENT_META);
  const sorted = Object.entries(CHARACTERS)
    .map(([id, c]) => ({ id, ...c }))
    .sort((a, b) => {
      const idxA = elementOrder.indexOf(a.element);
      const idxB = elementOrder.indexOf(b.element);
      const valA = idxA === -1 ? 999 : idxA;
      const valB = idxB === -1 ? 999 : idxB;
      if (valA !== valB) return valA - valB;
      return a.name.localeCompare(b.name);
    });

  for (const c of sorted) {
    const id = c.id;
    if (filterElement && c.element !== filterElement) continue;
    if (filterWeapon  && c.weapon  !== filterWeapon)  continue;
    shown++;
    const card = document.createElement("div");
    card.className = "char-card" + (c.comingSoon ? " char-card-soon" : "");
    card.style.setProperty("--accent", c.color);
    card.innerHTML = `
      <div class="cc-portrait">
        <img src="${c.img}" onerror="this.style.display='none';this.nextSibling.style.display='flex'" alt="${c.name}">
        <div class="cc-emoji-fallback" style="display:none">${c.emoji}</div>
      </div>
      <div class="cc-name">${c.name}</div>
      <div class="cc-meta">${c.element} · ${c.weapon}</div>
      <div class="cc-nation">${c.nation}</div>
      ${c.comingSoon ? `<div class="cc-soon">Coming Soon</div>` : ""}
    `;
    if (!c.comingSoon) card.addEventListener("click", () => selectCharacter(id));
    container.appendChild(card);
  }
  if (!shown) {
    container.innerHTML = `<div class="char-no-results">No characters match the selected filters.</div>`;
  }
}

function showCharSelect() {
  document.getElementById("char-select").classList.remove("hidden");
}

function hideCharSelect() {
  document.getElementById("char-select").classList.add("hidden");
}

function selectCharacter(id) {
  CHAR = CHARACTERS[id];
  localStorage.setItem("citlali-planner-char", id);
  hideCharSelect();
  applyCharacter();

  // Track character selection event in GoatCounter
  if (window.goatcounter && typeof window.goatcounter.count === 'function') {
    window.goatcounter.count({
      path: 'select/' + id,
      title: 'Select Character: ' + CHAR.name,
      event: true
    });
  }
}

function applyCharacter() {
  // Header portrait
  const portrait = document.getElementById("header-portrait");
  portrait.innerHTML = "";
  const img = document.createElement("img");
  img.src = CHAR.img;
  img.alt = CHAR.name;
  img.onerror = () => { portrait.innerHTML = `<span>${CHAR.emoji}</span>`; };
  portrait.appendChild(img);

  document.getElementById("header-name").textContent = `${CHAR.name} Upgrade Planner`;
  document.getElementById("header-sub").textContent = `${CHAR.element} · ${CHAR.weapon} · ${CHAR.nation}`;
  document.documentElement.style.setProperty("--char-accent", CHAR.color);

  document.getElementById("share-btn").style.display = "";

  // Rebuild inventory
  buildInventory();

  // Re-load saved values
  loadValues();
}

// ── Build inventory for current character ─────────────────────────────────────
function buildInventory() {
  const container = document.getElementById("mat-sections");
  container.innerHTML = "";
  inv_reset();

  const groups = {};
  for (const [key, mat] of Object.entries(CHAR.materials)) {
    if (!groups[mat.group]) groups[mat.group] = [];
    groups[mat.group].push([key, mat]);
  }

  for (const [groupId, groupInfo] of Object.entries(CHAR.matGroups)) {
    if (!groups[groupId]) continue;

    const label = document.createElement("div");
    label.className = "section-label";
    label.textContent = groupInfo.label;
    container.appendChild(label);

    const grid = document.createElement("div");
    grid.className = "mat-grid";

    for (const [key, mat] of groups[groupId]) {
      const card = document.createElement("div");
      card.className = "mat-card";

      const iconEl = document.createElement("div");
      iconEl.className = "mat-icon";
      iconEl.style.cssText = `background:${mat.color}22;border-color:${mat.color}55`;

      if (mat.img) {
        const img = document.createElement("img");
        img.src = mat.img;
        img.className = "mat-img";
        img.alt = mat.label;
        img.onerror = () => { iconEl.innerHTML = `<span>${mat.icon}</span>`; };
        iconEl.appendChild(img);
      } else {
        iconEl.innerHTML = `<span>${mat.icon}</span>`;
      }

      const labelEl = document.createElement("div");
      labelEl.className = "mat-label";
      labelEl.textContent = mat.label;

      const inputEl = document.createElement("input");
      inputEl.className = "mat-input";
      inputEl.dataset.key = key;
      inputEl.type = "number";
      inputEl.min = "0";
      inputEl.value = inv[key] || 0;
      inputEl.setAttribute("autocomplete", "off");
      inputEl.addEventListener("input", save);

      card.appendChild(iconEl);
      card.appendChild(labelEl);
      card.appendChild(inputEl);
      grid.appendChild(card);
    }
    container.appendChild(grid);
  }
}

function inv_reset() {
  for (const key of Object.keys(inv)) delete inv[key];
  for (const key of Object.keys(CHAR.materials)) inv[key] = 0;
}

// ── Persistence ───────────────────────────────────────────────────────────────
function save() {
  const data = loadRaw();
  document.querySelectorAll("[data-key]").forEach(e => {
    data[e.dataset.key] = e.value;
    inv[e.dataset.key] = parseInt(e.value) || 0;
  });
  ["level","ascension","na","skill","burst",
   "target-asc","target-level","target-na","target-skill","target-burst"]
    .forEach(id => { data[id] = document.getElementById(id).value; });
  localStorage.setItem(`planner-${CHAR.name}`, JSON.stringify(data));
  update();
}

function loadRaw() {
  return JSON.parse(localStorage.getItem(`planner-${CHAR.name}`) || "{}");
}

function loadValues() {
  const d = loadRaw();
  document.querySelectorAll("[data-key]").forEach(e => {
    const v = d[e.dataset.key] || 0;
    e.value = v;
    inv[e.dataset.key] = parseInt(v) || 0;
  });
  const defaults = {
    "level": "1",
    "ascension": "0",
    "na": "1",
    "skill": "1",
    "burst": "1",
    "target-level": "90",
    "target-asc": "6",
    "target-na": "10",
    "target-skill": "10",
    "target-burst": "10"
  };
  ["level","ascension","na","skill","burst",
   "target-asc","target-level","target-na","target-skill","target-burst"]
    .forEach(id => {
      const el = document.getElementById(id);
      if (el) el.value = d[id] !== undefined ? d[id] : defaults[id];
    });
  document.querySelectorAll(".char-inputs input, .char-inputs select")
    .forEach(el => el.addEventListener("input", save));
  update();
}

// ── Crafting ──────────────────────────────────────────────────────────────────
function craftUp(pool, key, needed, log) {
  const have = pool[key] || 0;
  if (have >= needed) return;
  const recipe = CHAR.craftUp[key];
  if (!recipe) return;
  const deficit = needed - have;
  craftUp(pool, recipe.from, deficit * recipe.ratio, log);
  const lowerHave = pool[recipe.from] || 0;
  const making = Math.min(Math.floor(lowerHave / recipe.ratio), deficit);
  if (making > 0) {
    if (log) log.push({ from: recipe.from, to: key, fromAmt: making * recipe.ratio, toAmt: making });
    pool[recipe.from] = lowerHave - making * recipe.ratio;
    pool[key] = have + making;
  }
}

function aggregateCrafts(log) {
  const map = {};
  for (const { from, to, fromAmt, toAmt } of log) {
    const k = `${from}→${to}`;
    if (!map[k]) map[k] = { from, to, fromAmt: 0, toAmt: 0 };
    map[k].fromAmt += fromAmt;
    map[k].toAmt   += toAmt;
  }
  return Object.values(map).sort((a, b) => {
    const ai = CHAR.craftOrder.indexOf(`${a.from}→${a.to}`);
    const bi = CHAR.craftOrder.indexOf(`${b.from}→${b.to}`);
    return (ai === -1 ? 99 : ai) - (bi === -1 ? 99 : bi);
  });
}

// ── Cost calculators ──────────────────────────────────────────────────────────
function spend(pool, cost, log) {
  const p = { ...pool };
  for (const [k, v] of Object.entries(cost)) {
    if (!v) continue;
    craftUp(p, k, v, log);
    if ((p[k] || 0) < v) return null;
    p[k] -= v;
  }
  return p;
}

function totalAscCost(from, to) {
  const cost = {};
  for (let i = from; i < to; i++) {
    const { cap, ...phase } = CHAR.ascension[i];
    for (const [k, v] of Object.entries(phase)) cost[k] = (cost[k] || 0) + v;
  }
  return cost;
}

function totalTalentCost(from, to) {
  const cost = {};
  for (let i = from - 1; i < to - 1; i++) {
    for (const [k, v] of Object.entries(CHAR.talents[i])) cost[k] = (cost[k] || 0) + v;
  }
  return cost;
}

function mergeCosts(...costs) {
  const out = {};
  for (const c of costs)
    for (const [k, v] of Object.entries(c)) out[k] = (out[k] || 0) + v;
  return out;
}

// ── Main update ───────────────────────────────────────────────────────────────
function update() {
  if (!CHAR) return;

  const g = id => parseInt(document.getElementById(id)?.value) || 0;
  const curAsc = g("ascension"), curLv = g("level"),
        curNa  = g("na"),        curSk = g("skill"), curBu = g("burst");
  const tgtAsc = g("target-asc"), tgtLv = g("target-level"),
        tgtNa  = g("target-na"),  tgtSk = g("target-skill"), tgtBu = g("target-burst");

  const ascFrom = Math.min(curAsc, tgtAsc), ascTo = Math.max(curAsc, tgtAsc);
  const naFrom  = Math.min(curNa,  tgtNa),  naTo  = Math.max(curNa,  tgtNa);
  const skFrom  = Math.min(curSk,  tgtSk),  skTo  = Math.max(curSk,  tgtSk);
  const buFrom  = Math.min(curBu,  tgtBu),  buTo  = Math.max(curBu,  tgtBu);
  const lvFrom  = Math.min(curLv,  tgtLv),  lvTo  = Math.max(curLv,  tgtLv);

  const totalCost = mergeCosts(
    totalAscCost(ascFrom, ascTo),
    totalTalentCost(naFrom, naTo),
    totalTalentCost(skFrom, skTo),
    totalTalentCost(buFrom, buTo),
  );

  // EXP
  const tgtCap   = ascTo === 0 ? 20 : CHAR.ascension[ascTo - 1].cap;
  const expHave  = (inv.advice||0)*1000 + (inv.aexp||0)*5000 + (inv.wit||0)*20000;
  const expNeeded = Math.max(0, (EXP_BY_CAP[tgtCap]||0) - (EXP_BY_CAP[curLv]||0));
  const expShort = Math.max(0, expNeeded - expHave);
  const witTotal  = Math.ceil((EXP_BY_CAP[tgtCap]||0) / 20000);
  const witNeeded = Math.ceil(expNeeded / 20000);
  const witShort  = Math.ceil(expShort  / 20000);

  // Missing mats + crafts
  const craftLog = [];
  const pool = { ...inv };
  const missing = {};
  for (const [k, needed] of Object.entries(totalCost)) {
    if (!needed) continue;
    craftUp(pool, k, needed, craftLog);
    if ((pool[k] || 0) < needed) { missing[k] = needed - (pool[k] || 0); pool[k] = 0; }
    else pool[k] -= needed;
  }
  const crafts  = aggregateCrafts(craftLog);
  const allGood = !Object.keys(missing).length && !expShort;

  // Render
  const el = document.getElementById("summary");
  if (ascTo <= ascFrom && naTo <= naFrom && skTo <= skFrom && buTo <= buFrom) {
    el.innerHTML = `<p class="hint-done">✓ Already at or beyond your goal!</p>`;
    return;
  }

  // Remaining after spending
  const moraNeeded = totalCost.mora || 0;
  const moraHave   = inv.mora || 0;
  const moraLeft   = moraHave - moraNeeded;
  const expLeft    = expHave - expNeeded;
  const witLeft    = Math.floor(Math.max(0, expLeft) / 20000);

  el.innerHTML = `
    ${renderGoalRow(ascFrom, ascTo, naFrom, naTo, skFrom, skTo, buFrom, buTo)}
    ${renderMats(totalCost, missing)}
    ${renderExp(expNeeded, expHave, expShort, lvFrom, lvTo, tgtCap, witNeeded, witShort)}
    ${renderCrafts(crafts)}
    ${renderRemaining(moraNeeded, moraHave, moraLeft, expNeeded, expHave, expLeft, witLeft)}
    ${allGood ? `<div class="all-good-banner">✓ You have everything needed!</div>` : ""}
  `;
}

// ── Render helpers ────────────────────────────────────────────────────────────
function matIcon(m) {
  return m?.img
    ? `<img src="${m.img}" style="width:14px;height:14px;object-fit:contain;vertical-align:middle;border-radius:50%" onerror="this.style.display='none'">`
    : (m?.icon || "");
}

function renderGoalRow(aF, aT, nF, nT, sF, sT, bF, bT) {
  const chips = [
    aF !== aT ? `Ascension ${aF}→${aT}` : null,
    nF !== nT ? `Normal ${nF}→${nT}`    : null,
    sF !== sT ? `Skill ${sF}→${sT}`     : null,
    bF !== bT ? `Burst ${bF}→${bT}`     : null,
  ].filter(Boolean).map(t => `<span class="goal-chip">${t}</span>`).join("");
  return `<div class="result-section"><div class="result-title">Upgrading</div><div class="goal-chips">${chips}</div></div>`;
}

function renderMats(totalCost, missing) {
  const rows = Object.entries(totalCost)
    .filter(([, v]) => v > 0)
    .map(([k, needed]) => {
      const mat  = CHAR.materials[k];
      const have = inv[k] || 0;
      const ok   = !missing[k];
      const img  = matIcon(mat);
      return `<div class="mat-row ${ok ? "mat-row-ok" : "mat-row-miss"}">
        <span class="mat-row-icon">${img}</span>
        <span class="mat-row-name">${mat?.label || k}</span>
        <span class="mat-row-have">${have.toLocaleString()} / ${needed.toLocaleString()}</span>
        <span class="mat-row-status">${ok ? "✓" : `−${missing[k].toLocaleString()}`}</span>
      </div>`;
    });
  return `<div class="result-section"><div class="result-title">Materials Required</div><div class="mat-rows">${rows.join("")}</div></div>`;
}

function renderExp(expNeeded, expHave, expShort, lvFrom, lvTo, tgtCap, witNeeded, witShort) {
  const ok = !expShort;
  return `<div class="result-section">
    <div class="result-title">EXP Books — Lv ${lvFrom}→${lvTo} (cap ${tgtCap})</div>
    <div class="exp-grid">
      <div class="exp-row"><span>${matIcon(CHAR.materials.advice)} Wanderer's Advice (×1,000)</span><span>${(inv.advice||0).toLocaleString()}</span></div>
      <div class="exp-row"><span>${matIcon(CHAR.materials.aexp)} Adventurer's Experience (×5,000)</span><span>${(inv.aexp||0).toLocaleString()}</span></div>
      <div class="exp-row"><span>${matIcon(CHAR.materials.wit)} Hero's Wit (×20,000)</span><span>${(inv.wit||0).toLocaleString()}</span></div>
      <div class="exp-row exp-total"><span>Total EXP</span><span>${expHave.toLocaleString()} / ${expNeeded.toLocaleString()}</span></div>
      <div class="exp-row exp-total"><span>Hero's Wits needed</span><span class="${ok ? "ok" : "warn"}">${ok ? `✓ (${witNeeded})` : `Need ${witNeeded}, short ${witShort}`}</span></div>
    </div>
  </div>`;
}

function renderRemaining(moraNeeded, moraHave, moraLeft, expNeeded, expHave, expLeft, witLeft) {
  const moraOk = moraLeft >= 0;
  const expOk  = expLeft  >= 0;
  return `<div class="result-section">
    <div class="result-title">Remaining After Upgrades</div>
    <div class="remain-grid">
      <div class="remain-row">
        <span class="remain-label">${matIcon(CHAR.materials["mora"])} Mora</span>
        <span class="remain-spent">${moraNeeded.toLocaleString()} spent</span>
        <span class="remain-left ${moraOk ? "ok" : "warn"}">${moraOk ? moraLeft.toLocaleString() + " left" : (moraLeft*-1).toLocaleString() + " short"}</span>
      </div>
      <div class="remain-row">
        <span class="remain-label">${matIcon(CHAR.materials["wit"])} EXP</span>
        <span class="remain-spent">${expNeeded.toLocaleString()} spent</span>
        <span class="remain-left ${expOk ? "ok" : "warn"}">${expOk ? "~" + witLeft + " wits left" : Math.ceil((expNeeded - expHave)/20000) + " wits short"}</span>
      </div>
    </div>
  </div>`;
}

function renderCrafts(crafts) {
  if (!crafts.length) return `<div class="result-section"><div class="result-title">Crafting</div><p class="hint-done">✓ No crafting needed.</p></div>`;
  return `<div class="result-section">
    <div class="result-title">Crafting Conversions</div>
    <div class="craft-list">${crafts.map(c => {
      const fm = CHAR.materials[c.from], tm = CHAR.materials[c.to];
      return `<div class="craft-row">
        <span class="craft-from">${matIcon(fm)} ${c.fromAmt}× ${fm?.label}</span>
        <span class="craft-arrow">→</span>
        <span class="craft-to">${matIcon(tm)} ${c.toAmt}× ${tm?.label}</span>
      </div>`;
    }).join("")}</div>
  </div>`;
}

// ── Share / URL state ─────────────────────────────────────────────────────────
function encodeState() {
  const state = { char: Object.keys(CHARACTERS).find(k => CHARACTERS[k] === CHAR) };
  document.querySelectorAll("[data-key]").forEach(e => { state[e.dataset.key] = e.value; });
  ["level","ascension","na","skill","burst",
   "target-asc","target-level","target-na","target-skill","target-burst"]
    .forEach(id => { state[id] = document.getElementById(id)?.value; });
  return btoa(unescape(encodeURIComponent(JSON.stringify(state))));
}

function decodeState(hash) {
  try {
    return JSON.parse(decodeURIComponent(escape(atob(hash.replace(/^#/, "")))));
  } catch { return null; }
}

function applyStateFromHash(state) {
  const charId = state.char;
  if (!charId || !CHARACTERS[charId] || CHARACTERS[charId].comingSoon) return false;
  CHAR = CHARACTERS[charId];
  // NOTE: intentionally NOT writing to localStorage — this is a read-only shared view
  hideCharSelect();
  const portrait = document.getElementById("header-portrait");
  portrait.innerHTML = "";
  const img = document.createElement("img");
  img.src = CHAR.img;
  img.alt = CHAR.name;
  img.onerror = () => { portrait.innerHTML = `<span>${CHAR.emoji}</span>`; };
  portrait.appendChild(img);
  document.getElementById("header-name").textContent = `${CHAR.name} Upgrade Planner`;
  document.getElementById("header-sub").textContent = `${CHAR.element} · ${CHAR.weapon} · ${CHAR.nation}`;
  document.documentElement.style.setProperty("--char-accent", CHAR.color);
  document.getElementById("share-btn").style.display = "";
  buildInventory();
  document.querySelectorAll("[data-key]").forEach(e => {
    const v = state[e.dataset.key] || 0;
    e.value = v;
    inv[e.dataset.key] = parseInt(v) || 0;
  });
  ["level","ascension","na","skill","burst",
   "target-asc","target-level","target-na","target-skill","target-burst"]
    .forEach(id => {
      const el = document.getElementById(id);
      if (el && state[id] !== undefined) el.value = state[id];
    });
  // Read-only: inputs are disabled, no save listeners attached
  document.querySelectorAll(".char-inputs input, .char-inputs select, .mat-input")
    .forEach(el => { el.disabled = true; el.style.opacity = "0.6"; });
  update();
  return true;
}

document.getElementById("share-btn").addEventListener("click", () => {
  const hash = encodeState();
  const url = `${location.origin}${location.pathname}#${hash}`;
  navigator.clipboard.writeText(url).then(() => {
    const btn = document.getElementById("share-btn");
    btn.textContent = "✓ Copied!";
    btn.classList.add("copied");
    setTimeout(() => { btn.textContent = "📤 Share"; btn.classList.remove("copied"); }, 2000);
  });

  // Track share event in GoatCounter
  const activeId = localStorage.getItem("citlali-planner-char") || "unknown";
  if (window.goatcounter && typeof window.goatcounter.count === 'function') {
    window.goatcounter.count({
      path: 'share/' + activeId,
      title: 'Generate Share Link: ' + CHAR.name,
      event: true
    });
  }
});

// ── Init ──────────────────────────────────────────────────────────────────────
document.addEventListener("click", () => {
  document.querySelectorAll(".custom-select.cs-open").forEach(el => el.classList.remove("cs-open"));
});
buildFilters();
buildCharSelect();
document.getElementById("change-char-btn").addEventListener("click", showCharSelect);

const hashState = location.hash ? decodeState(location.hash) : null;
if (hashState && applyStateFromHash(hashState)) {
  // Clear hash from address bar so refresh doesn't re-trigger this
  history.replaceState(null, "", location.pathname);
  // Show non-intrusive banner pointing to the plain planner
  const banner = document.getElementById("shared-banner");
  const link   = document.getElementById("shared-banner-link");
  link.href = location.origin + location.pathname;
  banner.classList.remove("hidden");
  document.getElementById("shared-banner-close").addEventListener("click", () => {
    banner.classList.add("hidden");
  });

  document.getElementById("shared-banner-edit").addEventListener("click", () => {
    const charName = CHAR.name;
    const hasLocal = !!localStorage.getItem(`planner-${charName}`);
    const msg = hasLocal
      ? `This will overwrite your saved ${charName} data with the shared plan. Continue?`
      : `Load this shared plan as your ${charName} data?`;
    if (!confirm(msg)) return;
    // Save shared state into localStorage then reload without hash
    const data = {};
    document.querySelectorAll("[data-key]").forEach(e => { data[e.dataset.key] = e.value; });
    ["level","ascension","na","skill","burst",
     "target-asc","target-level","target-na","target-skill","target-burst"]
      .forEach(id => { data[id] = document.getElementById(id)?.value; });
    localStorage.setItem(`planner-${charName}`, JSON.stringify(data));
    localStorage.setItem("citlali-planner-char", hashState.char);
    location.href = location.origin + location.pathname;
  });
} else {
  const savedChar = localStorage.getItem("citlali-planner-char");
  if (savedChar && CHARACTERS[savedChar] && !CHARACTERS[savedChar].comingSoon) {
    selectCharacter(savedChar);
  } else {
    showCharSelect();
  }
}
