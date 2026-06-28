# Genshin Impact Character Upgrade Planner

A fully offline, static HTML/CSS/JS planner for tracking character ascension and talent upgrade materials. No framework, no build step — open `index.html` directly in a browser or serve with any static file server.

---

## Project Structure

```
index.html      — Layout, character select overlay, shared URL banner
style.css       — Dark teal/slate theme, 2-column 100vh locked layout
script.js       — All logic: crafting, cost calculation, share URL, rendering
characters.js   — Character database (loaded before script.js)
```

---

## Adding a New Character

All character data lives in `characters.js` as entries in the `CHARACTERS` object. Copy an existing entry (e.g. `citlali`) and fill in the fields.

### Required fields

| Field | Description |
|-------|-------------|
| `name` | Display name |
| `element` | Pyro / Hydro / Cryo / Electro / Dendro / Geo / Anemo |
| `weapon` | Sword / Claymore / Polearm / Catalyst / Bow |
| `nation` | Mondstadt / Liyue / Inazuma / Sumeru / Fontaine / Natlan / Snezhnaya / etc. |
| `emoji` | Fallback emoji if portrait image fails |
| `color` | Hex accent color used throughout the UI for this character |
| `img` | Portrait image URL (see Image Sources below) |
| `materials` | Object of all materials keyed by short ID (see below) |
| `matGroups` | Ordered group definitions: `{ groupId: { label: "Display Name" } }` |
| `craftUp` | Crafting recipes: `{ higherTierKey: { from: "lowerTierKey", ratio: 3 } }` |
| `craftOrder` | Array of `"from→to"` strings in correct craft order (lower tier first) |
| `ascension` | Array of 6 phase objects — each has `cap` + material keys + quantities |
| `talents` | Array of 9 level-up objects (levels 2–10) — material keys + quantities |

### Material entry format

```js
keyName: {
  label: "Display Name",
  icon:  "emoji fallback",
  color: "#hexcolor",
  group: "groupId",        // must match a key in matGroups
  img:   "https://..."     // icon image URL
}
```

### Standard material groups (adjust per character)

```
general  — Mora, EXP books (always include these three: advice/aexp/wit)
gems     — Ascension gems (sliver/fragment/chunk/gemstone)
asc      — Boss drop + local specialty + common mob drops (3 tiers)
books    — Talent books (teachings/guide/philosophies)
talent   — Weekly boss drop + Crown of Insight
```

### Ascension phase quantities (standard 5★)

| Phase | Cap | Sliver | Fragment | Chunk | Gemstone | Boss | Local | T1 mob | T2 mob | T3 mob | Mora |
|-------|-----|--------|----------|-------|----------|------|-------|--------|--------|--------|------|
| 1 | 40 | 1 | — | — | — | — | 3 | 3 | — | — | 20,000 |
| 2 | 50 | — | 3 | — | — | 2 | 10 | 15 | — | — | 40,000 |
| 3 | 60 | — | 6 | — | — | 4 | 20 | — | 12 | — | 60,000 |
| 4 | 70 | — | — | 3 | — | 8 | 30 | — | 18 | — | 80,000 |
| 5 | 80 | — | — | 6 | — | 12 | 45 | — | — | 12 | 100,000 |
| 6 | 90 | — | — | — | 6 | 20 | 60 | — | — | 24 | 120,000 |

Totals: 1/9/9/6 gems · 46 boss · 168 local · 18/30/36 mob tiers · 420,000 mora

### Talent level-up costs (standard, same for all characters)

| Level | Teachings | Guide | Philosophies | T1 mob | T2 mob | T3 mob | Weekly | Crown | Mora |
|-------|-----------|-------|--------------|--------|--------|--------|--------|-------|------|
| 2 | 3 | — | — | 6 | — | — | — | — | 12,500 |
| 3 | — | 2 | — | — | 3 | — | — | — | 17,500 |
| 4 | — | 4 | — | — | 4 | — | — | — | 25,000 |
| 5 | — | 6 | — | — | 6 | — | — | — | 30,000 |
| 6 | — | 9 | — | — | 9 | — | — | — | 37,500 |
| 7 | — | — | 4 | — | — | 4 | 1 | — | 120,000 |
| 8 | — | — | 6 | — | — | 6 | 1 | — | 260,000 |
| 9 | — | — | 12 | — | — | 9 | 2 | — | 450,000 |
| 10 | — | — | 16 | — | — | 12 | 2 | 1 | 700,000 |

Per talent totals: 9/21/38 books · 6/22/31 mob tiers · 6 weekly · 1 crown · 1,652,500 mora
All 3 talents: 27/63/114 books · 18 weekly · 3 crowns · 4,957,500 mora

Use these totals to verify scraped data is correct before adding a character.

---

## Image Sources

### Character portraits

**1. paimon.moe** — best for released characters:
```
https://paimon.moe/images/characters/{name}.png
```
Use lowercase, underscores for spaces: `kamisato_ayaka.png`, `raiden_shogun.png`

**2. game8.co** — good for upcoming/unreleased characters:
- Visit `https://game8.co/games/Genshin-Impact/archives/{page-id}`
- Right-click the character portrait → Copy image address
- CDN format: `https://img.game8.co/{id}/{hash}.png/show`

**3. Project Amber (gi.yatta.moe)**:
```
https://gi.yatta.moe/assets/UI/UI_AvatarIcon_{InternalName}.png
```
Internal names don't always match display names (e.g. Wanderer's internal name is Scaramouche).

### Item icons

**1. paimon.moe** — primary for released items:
```
https://paimon.moe/images/items/{snake_case_name}.png
```
Convert item name to snake_case: "Hero's Wit" → `heros_wit.png` (drop apostrophes)

Known paimon.moe quirks:
- "Wanderer's Advice" → `wanderes_advice.png` (missing 'r' — their typo, not a mistake here)

**2. Project Amber** — for items not yet on paimon.moe (e.g. unreleased characters):
- Find the item ID from its Project Amber URL: `https://gi.yatta.moe/en/archive/material/{id}/{item-name}`
- Then use: `https://gi.yatta.moe/assets/UI/UI_ItemIcon_{id}.png`

Known item IDs:
| Item | ID |
|------|----|
| Teachings of Vagrancy | 104362 |
| Guide to Vagrancy | 104363 |
| Philosophies of Vagrancy | 104364 |
| Madman's Restraint | 113082 |

**3. Mora**: `https://paimon.moe/images/mora.png`

---

## Finding Material Data

### Best source — game8.co

Search: `genshin impact {character name} build site:game8.co`

The ascension/talent material tables are clearly listed. Caveat: game8 lazy-loads all images as 1×1 GIF placeholders, so don't bother scraping images from there — only use it for material names and quantities.

### Secondary source — paimon.moe

`https://paimon.moe/characters/{character-name}` — good for released characters.

### Verification checklist

After filling in a character's data, verify against the standard tables:
- Ascension mora total = 420,000 ✓
- Boss drop total = 46 ✓
- Local specialty total = 168 ✓
- Talent mora per talent = 1,652,500 ✓
- Talent books per talent = 9/21/38 ✓

### Sites that don't work for server-side scraping

| Site | Issue |
|------|-------|
| genshin-impact.fandom.com | HTTP 403 |
| gensh.honeyhunterworld.com | HTTP 403 |
| gi.yatta.moe (HTML pages) | HTTP 403 — but asset CDN URLs (`/assets/UI/`) work fine in browser `<img>` tags |
| game8.co | Images are lazy-loaded as 1×1 placeholder GIFs |
| ambr.top | Redirects to gi.yatta.moe |
| api.genshin.dev / genshin.jmp.blue | Sometimes returns 502; missing newer characters |

---

## Crafting Chains

All tier conversions use ratio 3:1. Always define `craftOrder` with lower-tier conversions first — the results panel renders them in this order:

```js
craftOrder: [
  "T1→T2",            // mob drops (lowest first)
  "T2→T3",
  "teachings→guide",  // talent books
  "guide→philosophies",
  "sliver→fragment",  // gems
  "fragment→chunk",
  "chunk→gemstone",
]
```

---

## Character Stubs (Coming Soon)

Set `comingSoon: true` to show a "Coming Soon" card on the select screen without enabling the full planner. Only these fields are needed:

```js
characterKey: {
  name: "Name", element: "Cryo", weapon: "Catalyst", nation: "Snezhnaya",
  emoji: "🌸", color: "#hexcolor",
  img: "https://...",
  comingSoon: true,
}
```

---

## Share URL

Clicking "Share" in the header base64-encodes the full state (character, all inventory quantities, current levels, goal levels) into the URL hash. Anyone opening that URL sees a read-only view — localStorage is never written. The "Edit this plan" button in the shared-view banner explicitly asks before overwriting the viewer's own saved data.

---

## Persistence

| Key | Value |
|-----|-------|
| `citlali-planner-char` | Selected character ID (e.g. `"citlali"`) |
| `planner-{CharacterName}` | JSON object with inventory quantities + level/goal fields |

---

## Layout & Theme

- Locked to 100vh — no page scroll; columns scroll internally via `overflow-y: auto` + `min-height: 0`
- Sized for 2K monitor at 175% browser zoom (`max-width: 1460px`)
- Background `#0f1117` · Cards `#171c26` · Borders `#222c3c`
- Teal accent `#14b8a6` · Amber warning `#f59e0b` · Green OK `#22c55e`
- Per-character accent color set via `--char-accent` CSS variable on `:root`
