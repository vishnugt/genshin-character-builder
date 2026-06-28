// ── Character database ────────────────────────────────────────────────────────
// Add new characters here. Materials use paimon.moe image URLs.

const CHARACTERS = {

  citlali: {
    name:    "Citlali",
    element: "Cryo",
    weapon:  "Catalyst",
    nation:  "Natlan",
    emoji:   "❄️",
    color:   "#14b8a6",
    img:     "https://paimon.moe/images/characters/citlali.png",

    materials: {
      mora:         { label: "Mora",                           icon: "💰", color: "#f0a52a", group: "general", img: "https://paimon.moe/images/mora.png" },
      advice:       { label: "Wanderer's Advice",              icon: "📄", color: "#9b59b6", group: "general", img: "https://paimon.moe/images/items/wanderes_advice.png" },
      aexp:         { label: "Adventurer's Experience",        icon: "📋", color: "#8e44ad", group: "general", img: "https://paimon.moe/images/items/adventurers_experience.png" },
      wit:          { label: "Hero's Wit",                     icon: "📖", color: "#6c3483", group: "general", img: "https://paimon.moe/images/items/heros_wit.png" },
      sliver:       { label: "Shivada Jade Sliver",            icon: "💎", color: "#79c7ff", group: "gems",    img: "https://paimon.moe/images/items/shivada_jade_sliver.png" },
      fragment:     { label: "Shivada Jade Fragment",          icon: "💎", color: "#5ab4f5", group: "gems",    img: "https://paimon.moe/images/items/shivada_jade_fragment.png" },
      chunk:        { label: "Shivada Jade Chunk",             icon: "💎", color: "#3a9fe0", group: "gems",    img: "https://paimon.moe/images/items/shivada_jade_chunk.png" },
      gemstone:     { label: "Shivada Jade Gemstone",          icon: "💎", color: "#1a86cc", group: "gems",    img: "https://paimon.moe/images/items/shivada_jade_gemstone.png" },
      talisman:     { label: "Talisman of the Enigmatic Land", icon: "🌟", color: "#e8a020", group: "asc",     img: "https://paimon.moe/images/items/talisman_of_the_enigmatic_land.png" },
      berry:        { label: "Quenepa Berry",                  icon: "🫐", color: "#7b3fa0", group: "asc",     img: "https://paimon.moe/images/items/quenepa_berry.png" },
      jFang:        { label: "Juvenile Fang",                  icon: "🦷", color: "#4caf50", group: "asc",     img: "https://paimon.moe/images/items/juvenile_fang.png" },
      sFang:        { label: "Seasoned Fang",                  icon: "🦷", color: "#ff9800", group: "asc",     img: "https://paimon.moe/images/items/seasoned_fang.png" },
      tFang:        { label: "Tyrant's Fang",                  icon: "🦷", color: "#f44336", group: "asc",     img: "https://paimon.moe/images/items/tyrants_fang.png" },
      teachings:    { label: "Teachings of Kindling",          icon: "📘", color: "#2196f3", group: "books",   img: "https://paimon.moe/images/items/teachings_of_kindling.png" },
      guide:        { label: "Guide to Kindling",              icon: "📗", color: "#4caf50", group: "books",   img: "https://paimon.moe/images/items/guide_to_kindling.png" },
      philosophies: { label: "Philosophies of Kindling",       icon: "📕", color: "#f44336", group: "books",   img: "https://paimon.moe/images/items/philosophies_of_kindling.png" },
      daj:          { label: "Denial and Judgment",            icon: "❄️", color: "#00bcd4", group: "talent",  img: "https://paimon.moe/images/items/denial_and_judgment.png" },
      crown:        { label: "Crown of Insight",               icon: "👑", color: "#ffd700", group: "talent",  img: "https://paimon.moe/images/items/crown_of_insight.png" },
    },

    matGroups: {
      general: { label: "General" },
      gems:    { label: "Shivada Jade" },
      asc:     { label: "Ascension Materials" },
      books:   { label: "Talent Books — Kindling" },
      talent:  { label: "Talent Materials" },
    },

    craftUp: {
      sFang:        { from: "jFang",     ratio: 3 },
      tFang:        { from: "sFang",     ratio: 3 },
      guide:        { from: "teachings", ratio: 3 },
      philosophies: { from: "guide",     ratio: 3 },
      fragment:     { from: "sliver",    ratio: 3 },
      chunk:        { from: "fragment",  ratio: 3 },
      gemstone:     { from: "chunk",     ratio: 3 },
    },

    craftOrder: [
      "jFang→sFang", "sFang→tFang",
      "teachings→guide", "guide→philosophies",
      "sliver→fragment", "fragment→chunk", "chunk→gemstone",
    ],

    ascension: [
      { cap: 40,  mora: 20000,  sliver: 1, fragment: 0, chunk: 0, gemstone: 0, talisman: 0,  berry: 3,  jFang: 3,  sFang: 0,  tFang: 0 },
      { cap: 50,  mora: 40000,  sliver: 0, fragment: 3, chunk: 0, gemstone: 0, talisman: 2,  berry: 10, jFang: 15, sFang: 0,  tFang: 0 },
      { cap: 60,  mora: 60000,  sliver: 0, fragment: 6, chunk: 0, gemstone: 0, talisman: 4,  berry: 20, jFang: 0,  sFang: 12, tFang: 0 },
      { cap: 70,  mora: 80000,  sliver: 0, fragment: 0, chunk: 3, gemstone: 0, talisman: 8,  berry: 30, jFang: 0,  sFang: 18, tFang: 0 },
      { cap: 80,  mora: 100000, sliver: 0, fragment: 0, chunk: 6, gemstone: 0, talisman: 12, berry: 45, jFang: 0,  sFang: 0,  tFang: 12 },
      { cap: 90,  mora: 120000, sliver: 0, fragment: 0, chunk: 0, gemstone: 6, talisman: 20, berry: 60, jFang: 0,  sFang: 0,  tFang: 24 },
    ],

    talents: [
      { mora: 12500,  teachings: 3, guide: 0,  philosophies: 0,  jFang: 6, sFang: 0,  tFang: 0,  daj: 0, crown: 0 },
      { mora: 17500,  teachings: 0, guide: 2,  philosophies: 0,  jFang: 0, sFang: 3,  tFang: 0,  daj: 0, crown: 0 },
      { mora: 25000,  teachings: 0, guide: 4,  philosophies: 0,  jFang: 0, sFang: 4,  tFang: 0,  daj: 0, crown: 0 },
      { mora: 30000,  teachings: 0, guide: 6,  philosophies: 0,  jFang: 0, sFang: 6,  tFang: 0,  daj: 0, crown: 0 },
      { mora: 37500,  teachings: 0, guide: 9,  philosophies: 0,  jFang: 0, sFang: 9,  tFang: 0,  daj: 0, crown: 0 },
      { mora: 120000, teachings: 0, guide: 0,  philosophies: 4,  jFang: 0, sFang: 0,  tFang: 4,  daj: 1, crown: 0 },
      { mora: 260000, teachings: 0, guide: 0,  philosophies: 6,  jFang: 0, sFang: 0,  tFang: 6,  daj: 1, crown: 0 },
      { mora: 450000, teachings: 0, guide: 0,  philosophies: 12, jFang: 0, sFang: 0,  tFang: 9,  daj: 2, crown: 0 },
      { mora: 700000, teachings: 0, guide: 0,  philosophies: 16, jFang: 0, sFang: 0,  tFang: 12, daj: 2, crown: 1 },
    ],
  },

  sandrone: {
    name:    "Sandrone",
    element: "Cryo",
    weapon:  "Catalyst",
    nation:  "Snezhnaya",
    emoji:   "🤖",
    color:   "#a78bfa",
    img:     "https://img.game8.co/4541989/9909561e32d529a588f78955dbbe9009.png/show",

    materials: {
      mora:         { label: "Mora",                        icon: "💰", color: "#f0a52a", group: "general", img: "https://paimon.moe/images/mora.png" },
      advice:       { label: "Wanderer's Advice",           icon: "📄", color: "#9b59b6", group: "general", img: "https://paimon.moe/images/items/wanderes_advice.png" },
      aexp:         { label: "Adventurer's Experience",     icon: "📋", color: "#8e44ad", group: "general", img: "https://paimon.moe/images/items/adventurers_experience.png" },
      wit:          { label: "Hero's Wit",                  icon: "📖", color: "#6c3483", group: "general", img: "https://paimon.moe/images/items/heros_wit.png" },
      sliver:       { label: "Shivada Jade Sliver",         icon: "💎", color: "#79c7ff", group: "gems",    img: "https://paimon.moe/images/items/shivada_jade_sliver.png" },
      fragment:     { label: "Shivada Jade Fragment",       icon: "💎", color: "#5ab4f5", group: "gems",    img: "https://paimon.moe/images/items/shivada_jade_fragment.png" },
      chunk:        { label: "Shivada Jade Chunk",          icon: "💎", color: "#3a9fe0", group: "gems",    img: "https://paimon.moe/images/items/shivada_jade_chunk.png" },
      gemstone:     { label: "Shivada Jade Gemstone",       icon: "💎", color: "#1a86cc", group: "gems",    img: "https://paimon.moe/images/items/shivada_jade_gemstone.png" },
      plume:        { label: "Plume of the Fallen Watcher", icon: "🪶", color: "#c4b5fd", group: "asc",     img: "https://paimon.moe/images/items/plume_of_the_fallen_watcher.png" },
      subunit:      { label: "Subdetection Unit",           icon: "📡", color: "#818cf8", group: "asc",     img: "https://paimon.moe/images/items/subdetection_unit.png" },
      jShaft:       { label: "Broken Drive Shaft",          icon: "⚙️", color: "#6b7280", group: "asc",     img: "https://paimon.moe/images/items/broken_drive_shaft.png" },
      sShaft:       { label: "Reinforced Drive Shaft",      icon: "⚙️", color: "#f59e0b", group: "asc",     img: "https://paimon.moe/images/items/reinforced_drive_shaft.png" },
      tShaft:       { label: "Precision Drive Shaft",       icon: "⚙️", color: "#ef4444", group: "asc",     img: "https://paimon.moe/images/items/precision_drive_shaft.png" },
      teachings:    { label: "Teachings of Vagrancy",       icon: "📘", color: "#7c3aed", group: "books",   img: "https://paimon.moe/images/items/teachings_of_vagrancy.png" },
      guide:        { label: "Guide to Vagrancy",           icon: "📗", color: "#6d28d9", group: "books",   img: "https://gi.yatta.moe/assets/UI/UI_ItemIcon_104363.png" },
      philosophies: { label: "Philosophies of Vagrancy",    icon: "📕", color: "#5b21b6", group: "books",   img: "https://gi.yatta.moe/assets/UI/UI_ItemIcon_104364.png" },
      restraint:    { label: "Madman's Restraint",          icon: "🔗", color: "#f87171", group: "talent",  img: "https://gi.yatta.moe/assets/UI/UI_ItemIcon_113082.png" },
      crown:        { label: "Crown of Insight",            icon: "👑", color: "#ffd700", group: "talent",  img: "https://paimon.moe/images/items/crown_of_insight.png" },
    },

    matGroups: {
      general: { label: "General" },
      gems:    { label: "Shivada Jade" },
      asc:     { label: "Ascension Materials" },
      books:   { label: "Talent Books — Vagrancy" },
      talent:  { label: "Talent Materials" },
    },

    craftUp: {
      sShaft:       { from: "jShaft",     ratio: 3 },
      tShaft:       { from: "sShaft",     ratio: 3 },
      guide:        { from: "teachings",  ratio: 3 },
      philosophies: { from: "guide",      ratio: 3 },
      fragment:     { from: "sliver",     ratio: 3 },
      chunk:        { from: "fragment",   ratio: 3 },
      gemstone:     { from: "chunk",      ratio: 3 },
    },

    craftOrder: [
      "jShaft→sShaft", "sShaft→tShaft",
      "teachings→guide", "guide→philosophies",
      "sliver→fragment", "fragment→chunk", "chunk→gemstone",
    ],

    ascension: [
      { cap: 40,  mora: 20000,  sliver: 1, fragment: 0, chunk: 0, gemstone: 0, plume: 0,  subunit: 3,  jShaft: 3,  sShaft: 0,  tShaft: 0 },
      { cap: 50,  mora: 40000,  sliver: 0, fragment: 3, chunk: 0, gemstone: 0, plume: 2,  subunit: 10, jShaft: 15, sShaft: 0,  tShaft: 0 },
      { cap: 60,  mora: 60000,  sliver: 0, fragment: 6, chunk: 0, gemstone: 0, plume: 4,  subunit: 20, jShaft: 0,  sShaft: 12, tShaft: 0 },
      { cap: 70,  mora: 80000,  sliver: 0, fragment: 0, chunk: 3, gemstone: 0, plume: 8,  subunit: 30, jShaft: 0,  sShaft: 18, tShaft: 0 },
      { cap: 80,  mora: 100000, sliver: 0, fragment: 0, chunk: 6, gemstone: 0, plume: 12, subunit: 45, jShaft: 0,  sShaft: 0,  tShaft: 12 },
      { cap: 90,  mora: 120000, sliver: 0, fragment: 0, chunk: 0, gemstone: 6, plume: 20, subunit: 60, jShaft: 0,  sShaft: 0,  tShaft: 24 },
    ],

    talents: [
      { mora: 12500,  teachings: 3, guide: 0,  philosophies: 0,  jShaft: 6, sShaft: 0,  tShaft: 0,  restraint: 0, crown: 0 },
      { mora: 17500,  teachings: 0, guide: 2,  philosophies: 0,  jShaft: 0, sShaft: 3,  tShaft: 0,  restraint: 0, crown: 0 },
      { mora: 25000,  teachings: 0, guide: 4,  philosophies: 0,  jShaft: 0, sShaft: 4,  tShaft: 0,  restraint: 0, crown: 0 },
      { mora: 30000,  teachings: 0, guide: 6,  philosophies: 0,  jShaft: 0, sShaft: 6,  tShaft: 0,  restraint: 0, crown: 0 },
      { mora: 37500,  teachings: 0, guide: 9,  philosophies: 0,  jShaft: 0, sShaft: 9,  tShaft: 0,  restraint: 0, crown: 0 },
      { mora: 120000, teachings: 0, guide: 0,  philosophies: 4,  jShaft: 0, sShaft: 0,  tShaft: 4,  restraint: 1, crown: 0 },
      { mora: 260000, teachings: 0, guide: 0,  philosophies: 6,  jShaft: 0, sShaft: 0,  tShaft: 6,  restraint: 1, crown: 0 },
      { mora: 450000, teachings: 0, guide: 0,  philosophies: 12, jShaft: 0, sShaft: 0,  tShaft: 9,  restraint: 2, crown: 0 },
      { mora: 700000, teachings: 0, guide: 0,  philosophies: 16, jShaft: 0, sShaft: 0,  tShaft: 12, restraint: 2, crown: 1 },
    ],
  },

  columbina: {
    name:    "Columbina",
    element: "Hydro",
    weapon:  "Catalyst",
    nation:  "Snezhnaya",
    emoji:   "🌸",
    color:   "#38bdf8",
    img:     "https://paimon.moe/images/characters/columbina.png",

    materials: {
      mora:         { label: "Mora",                          icon: "💰", color: "#f0a52a", group: "general", img: "https://paimon.moe/images/mora.png" },
      advice:       { label: "Wanderer's Advice",             icon: "📄", color: "#9b59b6", group: "general", img: "https://paimon.moe/images/items/wanderes_advice.png" },
      aexp:         { label: "Adventurer's Experience",       icon: "📋", color: "#8e44ad", group: "general", img: "https://paimon.moe/images/items/adventurers_experience.png" },
      wit:          { label: "Hero's Wit",                    icon: "📖", color: "#6c3483", group: "general", img: "https://paimon.moe/images/items/heros_wit.png" },
      sliver:       { label: "Varunada Lazurite Sliver",      icon: "💎", color: "#38bdf8", group: "gems",    img: "https://paimon.moe/images/items/varunada_lazurite_sliver.png" },
      fragment:     { label: "Varunada Lazurite Fragment",    icon: "💎", color: "#0ea5e9", group: "gems",    img: "https://paimon.moe/images/items/varunada_lazurite_fragment.png" },
      chunk:        { label: "Varunada Lazurite Chunk",       icon: "💎", color: "#0284c7", group: "gems",    img: "https://paimon.moe/images/items/varunada_lazurite_chunk.png" },
      gemstone:     { label: "Varunada Lazurite Gemstone",    icon: "💎", color: "#0369a1", group: "gems",    img: "https://paimon.moe/images/items/varunada_lazurite_gemstone.png" },
      antler:       { label: "Radiant Antler",                icon: "🦌", color: "#fbbf24", group: "asc",     img: "https://paimon.moe/images/items/radiant_antler.png" },
      icelea:       { label: "Winter Icelea",                 icon: "❄️", color: "#bae6fd", group: "asc",     img: "https://paimon.moe/images/items/winter_icelea.png" },
      jSlime:       { label: "Slime Condensate",              icon: "🟢", color: "#4ade80", group: "asc",     img: "https://paimon.moe/images/items/slime_condensate.png" },
      sSlime:       { label: "Slime Secretions",              icon: "🟡", color: "#facc15", group: "asc",     img: "https://paimon.moe/images/items/slime_secretions.png" },
      tSlime:       { label: "Slime Concentrate",             icon: "🔴", color: "#f87171", group: "asc",     img: "https://paimon.moe/images/items/slime_concentrate.png" },
      teachings:    { label: "Teachings of Moonlight",        icon: "📘", color: "#818cf8", group: "books",   img: "https://paimon.moe/images/items/teachings_of_moonlight.png" },
      guide:        { label: "Guide to Moonlight",            icon: "📗", color: "#6366f1", group: "books",   img: "https://paimon.moe/images/items/guide_to_moonlight.png" },
      philosophies: { label: "Philosophies of Moonlight",     icon: "📕", color: "#4f46e5", group: "books",   img: "https://paimon.moe/images/items/philosophies_of_moonlight.png" },
      mvd:          { label: "Mask of the Virtuous Doctor",   icon: "🎭", color: "#a78bfa", group: "talent",  img: "https://paimon.moe/images/items/mask_of_the_virtuous_doctor.png" },
      crown:        { label: "Crown of Insight",              icon: "👑", color: "#ffd700", group: "talent",  img: "https://paimon.moe/images/items/crown_of_insight.png" },
    },

    matGroups: {
      general: { label: "General" },
      gems:    { label: "Varunada Lazurite" },
      asc:     { label: "Ascension Materials" },
      books:   { label: "Talent Books — Moonlight" },
      talent:  { label: "Talent Materials" },
    },

    craftUp: {
      sSlime:       { from: "jSlime",     ratio: 3 },
      tSlime:       { from: "sSlime",     ratio: 3 },
      guide:        { from: "teachings",  ratio: 3 },
      philosophies: { from: "guide",      ratio: 3 },
      fragment:     { from: "sliver",     ratio: 3 },
      chunk:        { from: "fragment",   ratio: 3 },
      gemstone:     { from: "chunk",      ratio: 3 },
    },

    craftOrder: [
      "jSlime→sSlime", "sSlime→tSlime",
      "teachings→guide", "guide→philosophies",
      "sliver→fragment", "fragment→chunk", "chunk→gemstone",
    ],

    ascension: [
      { cap: 40,  mora: 20000,  sliver: 1, fragment: 0, chunk: 0, gemstone: 0, antler: 0,  icelea: 3,  jSlime: 3,  sSlime: 0,  tSlime: 0 },
      { cap: 50,  mora: 40000,  sliver: 0, fragment: 3, chunk: 0, gemstone: 0, antler: 2,  icelea: 10, jSlime: 15, sSlime: 0,  tSlime: 0 },
      { cap: 60,  mora: 60000,  sliver: 0, fragment: 6, chunk: 0, gemstone: 0, antler: 4,  icelea: 20, jSlime: 0,  sSlime: 12, tSlime: 0 },
      { cap: 70,  mora: 80000,  sliver: 0, fragment: 0, chunk: 3, gemstone: 0, antler: 8,  icelea: 30, jSlime: 0,  sSlime: 18, tSlime: 0 },
      { cap: 80,  mora: 100000, sliver: 0, fragment: 0, chunk: 6, gemstone: 0, antler: 12, icelea: 45, jSlime: 0,  sSlime: 0,  tSlime: 12 },
      { cap: 90,  mora: 120000, sliver: 0, fragment: 0, chunk: 0, gemstone: 6, antler: 20, icelea: 60, jSlime: 0,  sSlime: 0,  tSlime: 24 },
    ],

    talents: [
      { mora: 12500,  teachings: 3, guide: 0,  philosophies: 0,  jSlime: 6, sSlime: 0,  tSlime: 0,  mvd: 0, crown: 0 },
      { mora: 17500,  teachings: 0, guide: 2,  philosophies: 0,  jSlime: 0, sSlime: 3,  tSlime: 0,  mvd: 0, crown: 0 },
      { mora: 25000,  teachings: 0, guide: 4,  philosophies: 0,  jSlime: 0, sSlime: 4,  tSlime: 0,  mvd: 0, crown: 0 },
      { mora: 30000,  teachings: 0, guide: 6,  philosophies: 0,  jSlime: 0, sSlime: 6,  tSlime: 0,  mvd: 0, crown: 0 },
      { mora: 37500,  teachings: 0, guide: 9,  philosophies: 0,  jSlime: 0, sSlime: 9,  tSlime: 0,  mvd: 0, crown: 0 },
      { mora: 120000, teachings: 0, guide: 0,  philosophies: 4,  jSlime: 0, sSlime: 0,  tSlime: 4,  mvd: 1, crown: 0 },
      { mora: 260000, teachings: 0, guide: 0,  philosophies: 6,  jSlime: 0, sSlime: 0,  tSlime: 6,  mvd: 1, crown: 0 },
      { mora: 450000, teachings: 0, guide: 0,  philosophies: 12, jSlime: 0, sSlime: 0,  tSlime: 9,  mvd: 2, crown: 0 },
      { mora: 700000, teachings: 0, guide: 0,  philosophies: 16, jSlime: 0, sSlime: 0,  tSlime: 12, mvd: 2, crown: 1 },
    ],
  },

};
