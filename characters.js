// ── Character database ────────────────────────────────────────────────────────
// Materials: MATERIALS catalog in materials.js
// Templates: stdCraftUp / stdCraftOrder / stdAscension / stdTalents in templates.js

const CHARACTERS = {

  citlali: {
    name:    "Citlali",
    element: "Cryo",
    weapon:  "Catalyst",
    nation:  "Natlan",
    emoji:   "❄️",
    color:   "#14b8a6",
    img:     "portraits/citlali.png",

    materials: {
      mora:         MATERIALS.mora,
      advice:       MATERIALS.advice,
      aexp:         MATERIALS.aexp,
      wit:          MATERIALS.wit,
      sliver:       MATERIALS.shivada_sliver,
      fragment:     MATERIALS.shivada_fragment,
      chunk:        MATERIALS.shivada_chunk,
      gemstone:     MATERIALS.shivada_gemstone,
      talisman:     MATERIALS.talisman_enigmatic,
      berry:        MATERIALS.quenepa_berry,
      jFang:        MATERIALS.juvenile_fang,
      sFang:        MATERIALS.seasoned_fang,
      tFang:        MATERIALS.tyrants_fang,
      teachings:    MATERIALS.kindling_teachings,
      guide:        MATERIALS.kindling_guide,
      philosophies: MATERIALS.kindling_philosophies,
      daj:          MATERIALS.denial_and_judgment,
      crown:        MATERIALS.crown,
    },

    matGroups: {
      general: { label: "General" },
      gems:    { label: "Shivada Jade" },
      asc:     { label: "Ascension Materials" },
      books:   { label: "Talent Books — Kindling" },
      talent:  { label: "Talent Materials" },
    },

    craftUp:    stdCraftUp("jFang", "sFang", "tFang"),
    craftOrder: stdCraftOrder("jFang", "sFang", "tFang"),
    ascension:  stdAscension("talisman", "berry", "jFang", "sFang", "tFang"),
    talents:    stdTalents("jFang", "sFang", "tFang", "daj"),
  },

  sandrone: {
    name:    "Sandrone",
    element: "Cryo",
    weapon:  "Catalyst",
    nation:  "Snezhnaya",
    emoji:   "🤖",
    color:   "#a78bfa",
    img:     "portraits/sandrone.png",

    materials: {
      mora:         MATERIALS.mora,
      advice:       MATERIALS.advice,
      aexp:         MATERIALS.aexp,
      wit:          MATERIALS.wit,
      sliver:       MATERIALS.shivada_sliver,
      fragment:     MATERIALS.shivada_fragment,
      chunk:        MATERIALS.shivada_chunk,
      gemstone:     MATERIALS.shivada_gemstone,
      plume:        MATERIALS.plume_fallen_watcher,
      subunit:      MATERIALS.subdetection_unit,
      jShaft:       MATERIALS.broken_drive_shaft,
      sShaft:       MATERIALS.reinforced_drive_shaft,
      tShaft:       MATERIALS.precision_drive_shaft,
      teachings:    MATERIALS.vagrancy_teachings,
      guide:        MATERIALS.vagrancy_guide,
      philosophies: MATERIALS.vagrancy_philosophies,
      restraint:    MATERIALS.madmans_restraint,
      crown:        MATERIALS.crown,
    },

    matGroups: {
      general: { label: "General" },
      gems:    { label: "Shivada Jade" },
      asc:     { label: "Ascension Materials" },
      books:   { label: "Talent Books — Vagrancy" },
      talent:  { label: "Talent Materials" },
    },

    craftUp:    stdCraftUp("jShaft", "sShaft", "tShaft"),
    craftOrder: stdCraftOrder("jShaft", "sShaft", "tShaft"),
    ascension:  stdAscension("plume", "subunit", "jShaft", "sShaft", "tShaft"),
    talents:    stdTalents("jShaft", "sShaft", "tShaft", "restraint"),
  },

  columbina: {
    name:    "Columbina",
    element: "Hydro",
    weapon:  "Catalyst",
    nation:  "Snezhnaya",
    emoji:   "🌸",
    color:   "#38bdf8",
    img:     "portraits/columbina.png",

    materials: {
      mora:         MATERIALS.mora,
      advice:       MATERIALS.advice,
      aexp:         MATERIALS.aexp,
      wit:          MATERIALS.wit,
      sliver:       MATERIALS.varunada_sliver,
      fragment:     MATERIALS.varunada_fragment,
      chunk:        MATERIALS.varunada_chunk,
      gemstone:     MATERIALS.varunada_gemstone,
      antler:       MATERIALS.radiant_antler,
      icelea:       MATERIALS.winter_icelea,
      jSlime:       MATERIALS.slime_condensate,
      sSlime:       MATERIALS.slime_secretions,
      tSlime:       MATERIALS.slime_concentrate,
      teachings:    MATERIALS.moonlight_teachings,
      guide:        MATERIALS.moonlight_guide,
      philosophies: MATERIALS.moonlight_philosophies,
      mvd:          MATERIALS.mask_virtuous_doctor,
      crown:        MATERIALS.crown,
    },

    matGroups: {
      general: { label: "General" },
      gems:    { label: "Varunada Lazurite" },
      asc:     { label: "Ascension Materials" },
      books:   { label: "Talent Books — Moonlight" },
      talent:  { label: "Talent Materials" },
    },

    craftUp:    stdCraftUp("jSlime", "sSlime", "tSlime"),
    craftOrder: stdCraftOrder("jSlime", "sSlime", "tSlime"),
    ascension:  stdAscension("antler", "icelea", "jSlime", "sSlime", "tSlime"),
    talents:    stdTalents("jSlime", "sSlime", "tSlime", "mvd"),
  },

};
