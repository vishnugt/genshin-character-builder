// ── Material catalog ───────────────────────────────────────────────────────────
// All material metadata lives here. Characters reference entries by key.

const MATERIALS = {

  // ── General ────────────────────────────────────────────────────────────────
  mora:   { label: "Mora",                    icon: "💰", color: "#f0a52a", group: "general", img: "images/items/mora.png" },
  advice: { label: "Wanderer's Advice",        icon: "📄", color: "#9b59b6", group: "general", img: "images/items/wanderes_advice.png" },
  aexp:   { label: "Adventurer's Experience",  icon: "📋", color: "#8e44ad", group: "general", img: "images/items/adventurers_experience.png" },
  wit:    { label: "Hero's Wit",               icon: "📖", color: "#6c3483", group: "general", img: "images/items/heros_wit.png" },

  // ── Ascension gems ─────────────────────────────────────────────────────────
  // Brilliant Diamond — no element (Traveler)
  brilliant_diamond_sliver:    { label: "Brilliant Diamond Sliver",    icon: "💎", color: "#d0e8ff", group: "gems", img: "images/items/brilliant_diamond_sliver.png" },
  brilliant_diamond_fragment:  { label: "Brilliant Diamond Fragment",  icon: "💎", color: "#b0cce0", group: "gems", img: "images/items/brilliant_diamond_fragment.png" },
  brilliant_diamond_chunk:     { label: "Brilliant Diamond Chunk",     icon: "💎", color: "#90b0cc", group: "gems", img: "images/items/brilliant_diamond_chunk.png" },
  brilliant_diamond_gemstone:  { label: "Brilliant Diamond Gemstone",  icon: "💎", color: "#6094b4", group: "gems", img: "images/items/brilliant_diamond_gemstone.png" },

  // Agnidus Agate — Pyro
  agnidus_sliver:      { label: "Agnidus Agate Sliver",    icon: "💎", color: "#fca5a5", group: "gems", img: "images/items/agnidus_agate_sliver.png" },
  agnidus_fragment:    { label: "Agnidus Agate Fragment",  icon: "💎", color: "#f87171", group: "gems", img: "images/items/agnidus_agate_fragment.png" },
  agnidus_chunk:       { label: "Agnidus Agate Chunk",     icon: "💎", color: "#ef4444", group: "gems", img: "images/items/agnidus_agate_chunk.png" },
  agnidus_gemstone:    { label: "Agnidus Agate Gemstone",  icon: "💎", color: "#dc2626", group: "gems", img: "images/items/agnidus_agate_gemstone.png" },

  // Vajrada Amethyst — Electro
  vajrada_sliver:      { label: "Vajrada Amethyst Sliver",    icon: "💎", color: "#e9d5ff", group: "gems", img: "images/items/vajrada_amethyst_sliver.png" },
  vajrada_fragment:    { label: "Vajrada Amethyst Fragment",  icon: "💎", color: "#c084fc", group: "gems", img: "images/items/vajrada_amethyst_fragment.png" },
  vajrada_chunk:       { label: "Vajrada Amethyst Chunk",     icon: "💎", color: "#a855f7", group: "gems", img: "images/items/vajrada_amethyst_chunk.png" },
  vajrada_gemstone:    { label: "Vajrada Amethyst Gemstone",  icon: "💎", color: "#7c3aed", group: "gems", img: "images/items/vajrada_amethyst_gemstone.png" },

  // Nagadus Emerald — Dendro
  nagadus_sliver:      { label: "Nagadus Emerald Sliver",    icon: "💎", color: "#bbf7d0", group: "gems", img: "images/items/nagadus_emerald_sliver.png" },
  nagadus_fragment:    { label: "Nagadus Emerald Fragment",  icon: "💎", color: "#4ade80", group: "gems", img: "images/items/nagadus_emerald_fragment.png" },
  nagadus_chunk:       { label: "Nagadus Emerald Chunk",     icon: "💎", color: "#22c55e", group: "gems", img: "images/items/nagadus_emerald_chunk.png" },
  nagadus_gemstone:    { label: "Nagadus Emerald Gemstone",  icon: "💎", color: "#16a34a", group: "gems", img: "images/items/nagadus_emerald_gemstone.png" },

  // Prithiva Topaz — Geo
  prithiva_sliver:     { label: "Prithiva Topaz Sliver",    icon: "💎", color: "#fde68a", group: "gems", img: "images/items/prithiva_topaz_sliver.png" },
  prithiva_fragment:   { label: "Prithiva Topaz Fragment",  icon: "💎", color: "#fbbf24", group: "gems", img: "images/items/prithiva_topaz_fragment.png" },
  prithiva_chunk:      { label: "Prithiva Topaz Chunk",     icon: "💎", color: "#f59e0b", group: "gems", img: "images/items/prithiva_topaz_chunk.png" },
  prithiva_gemstone:   { label: "Prithiva Topaz Gemstone",  icon: "💎", color: "#b45309", group: "gems", img: "images/items/prithiva_topaz_gemstone.png" },

  // Vayuda Turquoise — Anemo
  vayuda_sliver:       { label: "Vayuda Turquoise Sliver",    icon: "💎", color: "#a7f3d0", group: "gems", img: "images/items/vayuda_turquoise_sliver.png" },
  vayuda_fragment:     { label: "Vayuda Turquoise Fragment",  icon: "💎", color: "#34d399", group: "gems", img: "images/items/vayuda_turquoise_fragment.png" },
  vayuda_chunk:        { label: "Vayuda Turquoise Chunk",     icon: "💎", color: "#10b981", group: "gems", img: "images/items/vayuda_turquoise_chunk.png" },
  vayuda_gemstone:     { label: "Vayuda Turquoise Gemstone",  icon: "💎", color: "#059669", group: "gems", img: "images/items/vayuda_turquoise_gemstone.png" },

  // Shivada Jade — Cryo (ORIGINAL ENTRIES — UNCHANGED)
  shivada_sliver:       { label: "Shivada Jade Sliver",         icon: "💎", color: "#79c7ff", group: "gems", img: "images/items/shivada_jade_sliver.png" },
  shivada_fragment:     { label: "Shivada Jade Fragment",       icon: "💎", color: "#5ab4f5", group: "gems", img: "images/items/shivada_jade_fragment.png" },
  shivada_chunk:        { label: "Shivada Jade Chunk",          icon: "💎", color: "#3a9fe0", group: "gems", img: "images/items/shivada_jade_chunk.png" },
  shivada_gemstone:     { label: "Shivada Jade Gemstone",       icon: "💎", color: "#1a86cc", group: "gems", img: "images/items/shivada_jade_gemstone.png" },

  // Varunada Lazurite — Hydro (ORIGINAL ENTRIES — UNCHANGED)
  varunada_sliver:      { label: "Varunada Lazurite Sliver",    icon: "💎", color: "#38bdf8", group: "gems", img: "images/items/varunada_lazurite_sliver.png" },
  varunada_fragment:    { label: "Varunada Lazurite Fragment",  icon: "💎", color: "#0ea5e9", group: "gems", img: "images/items/varunada_lazurite_fragment.png" },
  varunada_chunk:       { label: "Varunada Lazurite Chunk",     icon: "💎", color: "#0284c7", group: "gems", img: "images/items/varunada_lazurite_chunk.png" },
  varunada_gemstone:    { label: "Varunada Lazurite Gemstone",  icon: "💎", color: "#0369a1", group: "gems", img: "images/items/varunada_lazurite_gemstone.png" },

  // ── Ascension boss drops ───────────────────────────────────────────────────
  // — Mondstadt —
  hurricane_seed:          { label: "Hurricane Seed",           icon: "🌪️", color: "#6ee7b7", group: "asc", img: "images/items/hurricane_seed.png" },
  crystalline_bloom:       { label: "Crystalline Bloom",        icon: "❄️", color: "#bae6fd", group: "asc", img: "images/items/crystalline_bloom.png" },
  hoarfrost_core:          { label: "Hoarfrost Core",           icon: "🧊", color: "#7dd3fc", group: "asc", img: "images/items/hoarfrost_core.png" },
  lightning_prism:         { label: "Lightning Prism",          icon: "⚡", color: "#c084fc", group: "asc", img: "images/items/lightning_prism.png" },

  // — Liyue —
  basalt_pillar:           { label: "Basalt Pillar",            icon: "🗿", color: "#d4a96b", group: "asc", img: "images/items/basalt_pillar.png" },
  cleansing_heart:         { label: "Cleansing Heart",          icon: "💧", color: "#60a5fa", group: "asc", img: "images/items/cleansing_heart.png" },
  juvenile_jade:           { label: "Juvenile Jade",            icon: "🪨", color: "#6ee7b7", group: "asc", img: "images/items/juvenile_jade.png" },
  everflame_seed:          { label: "Everflame Seed",           icon: "🔥", color: "#fb923c", group: "asc", img: "images/items/everflame_seed.png" },
  runic_fang:              { label: "Runic Fang",               icon: "🐍", color: "#94a3b8", group: "asc", img: "images/items/runic_fang.png" },
  cloudseam_scale:         { label: "Cloudseam Scale",          icon: "🐉", color: "#67e8f9", group: "asc", img: "images/items/cloudseam_scale.png" },

  // — Inazuma —
  dragonheirs_false_fin:   { label: "Dragonheir's False Fin",   icon: "🦈", color: "#818cf8", group: "asc", img: "images/items/dragonheirs_false_fin.png" },
  riftborn_regalia:        { label: "Riftborn Regalia",         icon: "👑", color: "#fbbf24", group: "asc", img: "images/items/riftborn_regalia.png" },
  dew_of_repudiation:      { label: "Dew of Repudiation",       icon: "💦", color: "#38bdf8", group: "asc", img: "images/items/dew_of_repudiation.png" },
  marionette_core:         { label: "Marionette Core",          icon: "🎭", color: "#10b981", group: "asc", img: "images/items/marionette_core.png" },
  perpetual_heart:         { label: "Perpetual Heart",          icon: "⚙️", color: "#64748b", group: "asc", img: "images/items/perpetual_heart.png" },
  smoldering_pearl:        { label: "Smoldering Pearl",         icon: "🔥", color: "#f97316", group: "asc", img: "images/items/smoldering_pearl.png" },
  storm_beads:             { label: "Storm Beads",              icon: "⚡", color: "#a855f7", group: "asc", img: "images/items/storm_beads.png" },

  // — Sumeru —
  majestic_hooked_beak:    { label: "Majestic Hooked Beak",     icon: "🍄", color: "#4ade80", group: "asc", img: "images/items/majestic_hooked_beak.png" },
  thunderclap_fruitcore:   { label: "Thunderclap Fruitcore",    icon: "⚡", color: "#7c3aed", group: "asc", img: "images/items/thunderclap_fruitcore.png" },
  perpetual_caliber:       { label: "Perpetual Caliber",        icon: "🔩", color: "#475569", group: "asc", img: "images/items/perpetual_caliber.png" },
  light_guiding_tetrahedron: { label: "Light Guiding Tetrahedron", icon: "🔷", color: "#f97316", group: "asc", img: "images/items/light_guiding_tetrahedron.png" },
  quelled_creeper:         { label: "Quelled Creeper",          icon: "🌿", color: "#16a34a", group: "asc", img: "images/items/quelled_creeper.png" },
  pseudo_stamens:          { label: "Pseudo-Stamens",           icon: "🌸", color: "#34d399", group: "asc", img: "images/items/pseudo_stamens.png" },
  evergloom_ring:          { label: "Evergloom Ring",           icon: "💍", color: "#8b5cf6", group: "asc", img: "images/items/evergloom_ring.png" },

  // — Fontaine —
  clockwork_component_coppelia:  { label: "Artificed Spare Clockwork Component — Coppelia",  icon: "🕰️", color: "#67e8f9", group: "asc", img: "images/items/artificed_spare_clockwork_component_coppelia.png" },
  clockwork_component_coppelius: { label: "Artificed Spare Clockwork Component — Coppelius", icon: "🕰️", color: "#22d3ee", group: "asc", img: "images/items/artificed_spare_clockwork_component_coppelius.png" },
  emperors_resolution:     { label: "Emperor's Resolution",     icon: "👑", color: "#f97316", group: "asc", img: "images/items/emperors_resolution.png" },
  tourbillon_device:       { label: "\"Tourbillon Device\"",    icon: "🌀", color: "#6366f1", group: "asc", img: "images/items/tourbillon_device.png" },
  fontemer_unihorn:        { label: "Fontemer Unihorn",         icon: "🦄", color: "#818cf8", group: "asc", img: "images/items/fontemer_unihorn.png" },
  water_that_failed_to_transcend: { label: "Water That Failed To Transcend", icon: "💧", color: "#38bdf8", group: "asc", img: "images/items/water_that_failed_to_transcend.png" },
  fragment_of_golden_melody:      { label: "Fragment of a Golden Melody",    icon: "🎵", color: "#fbbf24", group: "asc", img: "images/items/fragment_of_a_golden_melody.png" },

  // — Natlan —
  mark_of_binding_blessing:       { label: "Mark of the Binding Blessing",    icon: "🦕", color: "#ef4444", group: "asc", img: "images/items/mark_of_the_binding_blessing.png" },
  overripe_flamegranate:          { label: "Overripe Flamegranate",            icon: "🍎", color: "#22c55e", group: "asc", img: "images/items/overripe_flamegranate.png" },
  gold_inscribed_core:            { label: "Gold-Inscribed Secret Source Core", icon: "🔮", color: "#f59e0b", group: "asc", img: "images/items/gold_inscribed_secret_source_core.png" },
  ensnaring_gaze:                 { label: "Ensnaring Gaze",                   icon: "👁️", color: "#dc2626", group: "asc", img: "images/items/ensnaring_gaze.png" },
  sparkless_statue_core:          { label: "Sparkless Statue Core",            icon: "🔥", color: "#f97316", group: "asc", img: "images/items/sparkless_statue_core.png" },
  secret_source_airflow_accumulator: { label: "Secret Source Airflow Accumulator", icon: "💨", color: "#67e8f9", group: "asc", img: "images/items/secret_source_airflow_accumulator.png" },

  // — Nod-Krai —
  lightbearing_scale_feather:     { label: "Lightbearing Scale-Feather",       icon: "🪶", color: "#fde68a", group: "asc", img: "images/items/lightbearing_scale_feather.png" },
  precision_kuuvahki_stamping_die: { label: "Precision Kuuvahki Stamping Die", icon: "⚙️", color: "#a855f7", group: "asc", img: "images/items/precision_kuuvahki_stamping_die.png" },
  cyclic_military_kuuvahki_core:  { label: "Cyclic Military Kuuvahki Core",    icon: "🔩", color: "#ef4444", group: "asc", img: "images/items/cyclic_military_kuuvahki_core.png" },
  remnant_of_dreadwing:           { label: "Remnant of the Dreadwing",         icon: "🦇", color: "#6b21a8", group: "asc", img: "images/items/remnant_of_the_dreadwing.png" },
  prismatic_severed_tail:         { label: "Prismatic Severed Tail",           icon: "🦎", color: "#fbbf24", group: "asc", img: "images/items/prismatic_severed_tail.png" },

  // — Already present (UNCHANGED) —
  talisman_enigmatic:   { label: "Talisman of the Enigmatic Land", icon: "🌟", color: "#e8a020", group: "asc", img: "images/items/talisman_of_the_enigmatic_land.png" },
  plume_fallen_watcher: { label: "Plume of the Fallen Watcher",    icon: "🪶", color: "#c4b5fd", group: "asc", img: "images/items/plume_of_the_fallen_watcher.png" },
  radiant_antler:       { label: "Radiant Antler",                 icon: "🦌", color: "#fbbf24", group: "asc", img: "images/items/radiant_antler.png" },

  // ── Local specialties ──────────────────────────────────────────────────────
  // — Mondstadt —
  calla_lily:          { label: "Calla Lily",          icon: "🌸", color: "#ffffff", group: "asc", img: "images/items/calla_lily.png" },
  cecilia:             { label: "Cecilia",             icon: "🌼", color: "#e0f2fe", group: "asc", img: "images/items/cecilia.png" },
  dandelion_seed:      { label: "Dandelion Seed",      icon: "🌾", color: "#fde68a", group: "asc", img: "images/items/dandelion_seed.png" },
  philanemo_mushroom:  { label: "Philanemo Mushroom",  icon: "🍄", color: "#ddd6fe", group: "asc", img: "images/items/philanemo_mushroom.png" },
  small_lamp_grass:    { label: "Small Lamp Grass",    icon: "🌱", color: "#a3e635", group: "asc", img: "images/items/small_lamp_grass.png" },
  valberry:            { label: "Valberry",            icon: "🫐", color: "#7e22ce", group: "asc", img: "images/items/valberry.png" },
  windwheel_aster:     { label: "Windwheel Aster",     icon: "🌸", color: "#fbbf24", group: "asc", img: "images/items/windwheel_aster.png" },
  wolfhook:            { label: "Wolfhook",            icon: "🫐", color: "#9333ea", group: "asc", img: "images/items/wolfhook.png" },

  // — Liyue —
  cor_lapis:           { label: "Cor Lapis",           icon: "🪨", color: "#f97316", group: "asc", img: "images/items/cor_lapis.png" },
  glaze_lily:          { label: "Glaze Lily",          icon: "🌺", color: "#818cf8", group: "asc", img: "images/items/glaze_lily.png" },
  jueyun_chili:        { label: "Jueyun Chili",        icon: "🌶️", color: "#ef4444", group: "asc", img: "images/items/jueyun_chili.png" },
  noctilucous_jade:    { label: "Noctilucous Jade",    icon: "💎", color: "#818cf8", group: "asc", img: "images/items/noctilucous_jade.png" },
  qingxin:             { label: "Qingxin",             icon: "🌸", color: "#e0f2fe", group: "asc", img: "images/items/qingxin.png" },
  silk_flower:         { label: "Silk Flower",         icon: "🌹", color: "#fda4af", group: "asc", img: "images/items/silk_flower.png" },
  starconch:           { label: "Starconch",           icon: "🐚", color: "#fed7aa", group: "asc", img: "images/items/starconch.png" },
  violetgrass:         { label: "Violetgrass",         icon: "🌿", color: "#7c3aed", group: "asc", img: "images/items/violetgrass.png" },

  // — Inazuma —
  amakumo_fruit:       { label: "Amakumo Fruit",       icon: "🌸", color: "#c084fc", group: "asc", img: "images/items/amakumo_fruit.png" },
  crystal_marrow:      { label: "Crystal Marrow",      icon: "💠", color: "#a855f7", group: "asc", img: "images/items/crystal_marrow.png" },
  dendrobium:          { label: "Dendrobium",          icon: "🌺", color: "#dc2626", group: "asc", img: "images/items/dendrobium.png" },
  fluorescent_fungus:  { label: "Fluorescent Fungus",  icon: "🍄", color: "#d946ef", group: "asc", img: "images/items/fluorescent_fungus.png" },
  naku_weed:           { label: "Naku Weed",           icon: "🌿", color: "#7c3aed", group: "asc", img: "images/items/naku_weed.png" },
  onikabuto:           { label: "Onikabuto",           icon: "🪲", color: "#6b21a8", group: "asc", img: "images/items/onikabuto.png" },
  sakura_bloom:        { label: "Sakura Bloom",        icon: "🌸", color: "#f9a8d4", group: "asc", img: "images/items/sakura_bloom.png" },
  sango_pearl:         { label: "Sango Pearl",         icon: "🐚", color: "#fda4af", group: "asc", img: "images/items/sango_pearl.png" },
  sea_ganoderma:       { label: "Sea Ganoderma",       icon: "🍄", color: "#67e8f9", group: "asc", img: "images/items/sea_ganoderma.png" },

  // — Sumeru —
  henna_berry:         { label: "Henna Berry",         icon: "🫐", color: "#f97316", group: "asc", img: "images/items/henna_berry.png" },
  kalpalata_lotus:     { label: "Kalpalata Lotus",     icon: "🌸", color: "#fef08a", group: "asc", img: "images/items/kalpalata_lotus.png" },
  mourning_flower:     { label: "Mourning Flower",     icon: "🌸", color: "#86efac", group: "asc", img: "images/items/mourning_flower.png" },
  nilotpala_lotus:     { label: "Nilotpala Lotus",     icon: "🪷", color: "#a5f3fc", group: "asc", img: "images/items/nilotpala_lotus.png" },
  padisarah:           { label: "Padisarah",           icon: "🌼", color: "#fde68a", group: "asc", img: "images/items/padisarah.png" },
  rukkhashava_mushrooms: { label: "Rukkhashava Mushrooms", icon: "🍄", color: "#fb923c", group: "asc", img: "images/items/rukkhashava_mushrooms.png" },
  sand_grease_pupa:    { label: "Sand Grease Pupa",    icon: "🐛", color: "#d4a96b", group: "asc", img: "images/items/sand_grease_pupa.png" },
  scarab:              { label: "Scarab",              icon: "🪲", color: "#16a34a", group: "asc", img: "images/items/scarab.png" },
  trishiraite:         { label: "Trishiraite",         icon: "💎", color: "#f87171", group: "asc", img: "images/items/trishiraite.png" },

  // — Fontaine —
  beryl_conch:         { label: "Beryl Conch",         icon: "🐚", color: "#34d399", group: "asc", img: "images/items/beryl_conch.png" },
  lakelight_lily:      { label: "Lakelight Lily",      icon: "🌸", color: "#818cf8", group: "asc", img: "images/items/lakelight_lily.png" },
  lumidouce_bell:      { label: "Lumidouce Bell",      icon: "🔔", color: "#fde68a", group: "asc", img: "images/items/lumidouce_bell.png" },
  lumitoile:           { label: "Lumitoile",           icon: "⭐", color: "#a5f3fc", group: "asc", img: "images/items/lumitoile.png" },
  rainbow_rose:        { label: "Rainbow Rose",        icon: "🌹", color: "#f9a8d4", group: "asc", img: "images/items/rainbow_rose.png" },
  romaritime_flower:   { label: "Romaritime Flower",   icon: "🌊", color: "#22d3ee", group: "asc", img: "images/items/romaritime_flower.png" },
  spring_of_the_first_dewdrop: { label: "Spring of the First Dewdrop", icon: "💧", color: "#bae6fd", group: "asc", img: "images/items/spring_of_the_first_dewdrop.png" },

  // — Natlan —
  brilliant_chrysanthemum: { label: "Brilliant Chrysanthemum",  icon: "🌻", color: "#fbbf24", group: "asc", img: "images/items/brilliant_chrysanthemum.png" },
  dracolite:           { label: "Dracolite",           icon: "🐉", color: "#f97316", group: "asc", img: "images/items/dracolite.png" },
  glowing_hornshroom:  { label: "Glowing Hornshroom",  icon: "🍄", color: "#fde68a", group: "asc", img: "images/items/glowing_hornshroom.png" },
  saurian_claw_succulent: { label: "Saurian Claw Succulent", icon: "🌵", color: "#4ade80", group: "asc", img: "images/items/saurian_claw_succulent.png" },
  skysplit_gembloom:   { label: "Skysplit Gembloom",   icon: "💎", color: "#e879f9", group: "asc", img: "images/items/skysplit_gembloom.png" },
  sprayfeather_gill:   { label: "Sprayfeather Gill",   icon: "🐟", color: "#38bdf8", group: "asc", img: "images/items/sprayfeather_gill.png" },
  withering_purpurbloom: { label: "Withering Purpurbloom", icon: "🌸", color: "#9333ea", group: "asc", img: "images/items/withering_purpurbloom.png" },

  // — Nod-Krai —
  etherwing_moth:      { label: "Etherwing Moth",      icon: "🦋", color: "#c084fc", group: "asc", img: "images/items/etherwing_moth.png" },
  frostlamp_flower:    { label: "Frostlamp Flower",    icon: "🌸", color: "#bae6fd", group: "asc", img: "images/items/frostlamp_flower.png" },
  moonfall_silver:     { label: "Moonfall Silver",     icon: "🌙", color: "#e0e7ff", group: "asc", img: "images/items/moonfall_silver.png" },
  pine_amber:          { label: "Pine Amber",          icon: "🍂", color: "#d4a96b", group: "asc", img: "images/items/pine_amber.png" },
  portable_bearing:    { label: "Portable Bearing",    icon: "🔩", color: "#94a3b8", group: "asc", img: "images/items/portable_bearing.png" },

  // — Already present (UNCHANGED) —
  quenepa_berry:        { label: "Quenepa Berry",      icon: "🫐", color: "#7b3fa0", group: "asc", img: "images/items/quenepa_berry.png" },
  subdetection_unit:    { label: "Subdetection Unit",  icon: "📡", color: "#818cf8", group: "asc", img: "images/items/subdetection_unit.png" },
  winter_icelea:        { label: "Winter Icelea",      icon: "❄️", color: "#bae6fd", group: "asc", img: "images/items/winter_icelea.png" },

  // ── Common mob drops ───────────────────────────────────────────────────────
  // — Hilichurls (Masks) —
  damaged_mask:        { label: "Damaged Mask",        icon: "🎭", color: "#a8a29e", group: "asc", img: "images/items/damaged_mask.png" },
  stained_mask:        { label: "Stained Mask",        icon: "🎭", color: "#78716c", group: "asc", img: "images/items/stained_mask.png" },
  ominous_mask:        { label: "Ominous Mask",        icon: "🎭", color: "#44403c", group: "asc", img: "images/items/ominous_mask.png" },

  // — Hilichurl Archers (Arrowheads) —
  weathered_arrowhead: { label: "Weathered Arrowhead", icon: "🏹", color: "#d4a96b", group: "asc", img: "images/items/weathered_arrowhead.png" },
  sharp_arrowhead:     { label: "Sharp Arrowhead",     icon: "🏹", color: "#b45309", group: "asc", img: "images/items/sharp_arrowhead.png" },
  firm_arrowhead:      { label: "Firm Arrowhead",      icon: "🏹", color: "#78350f", group: "asc", img: "images/items/firm_arrowhead.png" },

  // — Samachurls (Scrolls) —
  divining_scroll:     { label: "Divining Scroll",     icon: "📜", color: "#93c5fd", group: "asc", img: "images/items/divining_scroll.png" },
  sealed_scroll:       { label: "Sealed Scroll",       icon: "📜", color: "#3b82f6", group: "asc", img: "images/items/sealed_scroll.png" },
  forbidden_curse_scroll: { label: "Forbidden Curse Scroll", icon: "📜", color: "#1d4ed8", group: "asc", img: "images/items/forbidden_curse_scroll.png" },

  // — Treasure Hoarders (Insignias) —
  treasure_hoarder_insignia: { label: "Treasure Hoarder Insignia", icon: "🏴", color: "#fde68a", group: "asc", img: "images/items/treasure_hoarder_insignia.png" },
  silver_raven_insignia:     { label: "Silver Raven Insignia",     icon: "🏴", color: "#d1d5db", group: "asc", img: "images/items/silver_raven_insignia.png" },
  golden_raven_insignia:     { label: "Golden Raven Insignia",     icon: "🏴", color: "#f59e0b", group: "asc", img: "images/items/golden_raven_insignia.png" },

  // — Fatui Skirmishers / Agents / Cicin Mages (Insignias) —
  recruits_insignia:   { label: "Recruit's Insignia",   icon: "🔖", color: "#fca5a5", group: "asc", img: "images/items/recruits_insignia.png" },
  sergeants_insignia:  { label: "Sergeant's Insignia",  icon: "🔖", color: "#ef4444", group: "asc", img: "images/items/sergeants_insignia.png" },
  lieutenants_insignia: { label: "Lieutenant's Insignia", icon: "🔖", color: "#b91c1c", group: "asc", img: "images/items/lieutenants_insignia.png" },

  // — Whopperflowers (Nectar) —
  whopperflower_nectar: { label: "Whopperflower Nectar", icon: "🌸", color: "#fbcfe8", group: "asc", img: "images/items/whopperflower_nectar.png" },
  shimmering_nectar:   { label: "Shimmering Nectar",    icon: "🌸", color: "#f9a8d4", group: "asc", img: "images/items/shimmering_nectar.png" },
  energy_nectar:       { label: "Energy Nectar",        icon: "🌸", color: "#e879f9", group: "asc", img: "images/items/energy_nectar.png" },

  // — Specters —
  spectral_husk:       { label: "Spectral Husk",        icon: "👻", color: "#e0e7ff", group: "asc", img: "images/items/spectral_husk.png" },
  spectral_heart:      { label: "Spectral Heart",       icon: "👻", color: "#a5b4fc", group: "asc", img: "images/items/spectral_heart.png" },
  spectral_nucleus:    { label: "Spectral Nucleus",     icon: "👻", color: "#6366f1", group: "asc", img: "images/items/spectral_nucleus.png" },

  // — Nobushi / Kairagi (Handguards) —
  old_handguard:       { label: "Old Handguard",        icon: "⚔️", color: "#d4a96b", group: "asc", img: "images/items/old_handguard.png" },
  kageuchi_handguard:  { label: "Kageuchi Handguard",   icon: "⚔️", color: "#9ca3af", group: "asc", img: "images/items/kageuchi_handguard.png" },
  famed_handguard:     { label: "Famed Handguard",      icon: "⚔️", color: "#475569", group: "asc", img: "images/items/famed_handguard.png" },

  // — Eremites (Brocade) —
  faded_red_satin:     { label: "Faded Red Satin",      icon: "🎀", color: "#fca5a5", group: "asc", img: "images/items/faded_red_satin.png" },
  trimmed_red_silk:    { label: "Trimmed Red Silk",     icon: "🎀", color: "#f87171", group: "asc", img: "images/items/trimmed_red_silk.png" },
  rich_red_brocade:    { label: "Rich Red Brocade",     icon: "🎀", color: "#b91c1c", group: "asc", img: "images/items/rich_red_brocade.png" },

  // — Fungi (Spores) —
  fungal_spores:       { label: "Fungal Spores",        icon: "🍄", color: "#bbf7d0", group: "asc", img: "images/items/fungal_spores.png" },
  luminescent_pollen:  { label: "Luminescent Pollen",   icon: "🍄", color: "#4ade80", group: "asc", img: "images/items/luminescent_pollen.png" },
  crystalline_cyst_dust: { label: "Crystalline Cyst Dust", icon: "🍄", color: "#16a34a", group: "asc", img: "images/items/crystalline_cyst_dust.png" },

  // — Fungi (Nucleus) —
  inactivated_fungal_nucleus: { label: "Inactivated Fungal Nucleus", icon: "🔵", color: "#d9f99d", group: "asc", img: "images/items/inactivated_fungal_nucleus.png" },
  dormant_fungal_nucleus:     { label: "Dormant Fungal Nucleus",     icon: "🟡", color: "#86efac", group: "asc", img: "images/items/dormant_fungal_nucleus.png" },
  robust_fungal_nucleus:      { label: "Robust Fungal Nucleus",      icon: "🔴", color: "#22c55e", group: "asc", img: "images/items/robust_fungal_nucleus.png" },

  // — Sauroform Tribal Warriors (Whistles, Natlan) —
  sentrys_wooden_whistle:       { label: "Sentry's Wooden Whistle",               icon: "📯", color: "#d4a96b", group: "asc", img: "images/items/sentrys_wooden_whistle.png" },
  warriors_metal_whistle:       { label: "Warrior's Metal Whistle",               icon: "📯", color: "#9ca3af", group: "asc", img: "images/items/warriors_metal_whistle.png" },
  saurian_crowned_golden_whistle: { label: "Saurian-Crowned Warrior's Golden Whistle", icon: "📯", color: "#f59e0b", group: "asc", img: "images/items/saurian_crowned_warriors_golden_whistle.png" },

  // — Fatui Oprichniki (Warrants, Nod-Krai) —
  tattered_warrant:    { label: "Tattered Warrant",     icon: "📋", color: "#fca5a5", group: "asc", img: "images/items/tattered_warrant.png" },
  immaculate_warrant:  { label: "Immaculate Warrant",   icon: "📋", color: "#f87171", group: "asc", img: "images/items/immaculate_warrant.png" },
  frost_etched_warrant: { label: "Frost-Etched Warrant", icon: "📋", color: "#93c5fd", group: "asc", img: "images/items/frost_etched_warrant.png" },

  // — Radiant Beasts (Nod-Krai) —
  lightless_bone:      { label: "Lightless Bone",       icon: "🦴", color: "#d4d4d4", group: "asc", img: "images/items/lightless_bone.png" },
  glowing_remains:     { label: "Glowing Remains",      icon: "✨", color: "#a5b4fc", group: "asc", img: "images/items/glowing_remains.png" },
  radiant_exoskeleton: { label: "Radiant Exoskeleton",  icon: "🔆", color: "#6366f1", group: "asc", img: "images/items/radiant_exoskeleton.png" },

  // — Already present (UNCHANGED) —
  juvenile_fang:        { label: "Juvenile Fang",           icon: "🦷", color: "#4caf50", group: "asc", img: "images/items/juvenile_fang.png" },
  seasoned_fang:        { label: "Seasoned Fang",           icon: "🦷", color: "#ff9800", group: "asc", img: "images/items/seasoned_fang.png" },
  tyrants_fang:         { label: "Tyrant's Fang",           icon: "🦷", color: "#f44336", group: "asc", img: "images/items/tyrants_fang.png" },

  broken_drive_shaft:   { label: "Broken Drive Shaft",      icon: "⚙️", color: "#6b7280", group: "asc", img: "images/items/broken_drive_shaft.png" },
  reinforced_drive_shaft: { label: "Reinforced Drive Shaft", icon: "⚙️", color: "#f59e0b", group: "asc", img: "images/items/reinforced_drive_shaft.png" },
  precision_drive_shaft:  { label: "Precision Drive Shaft",  icon: "⚙️", color: "#ef4444", group: "asc", img: "images/items/precision_drive_shaft.png" },

  slime_condensate:     { label: "Slime Condensate",        icon: "🟢", color: "#4ade80", group: "asc", img: "images/items/slime_condensate.png" },
  slime_secretions:     { label: "Slime Secretions",        icon: "🟡", color: "#facc15", group: "asc", img: "images/items/slime_secretions.png" },
  slime_concentrate:    { label: "Slime Concentrate",       icon: "🔴", color: "#f87171", group: "asc", img: "images/items/slime_concentrate.png" },

  // ── Talent books ───────────────────────────────────────────────────────────
  // — Mondstadt: Freedom —
  freedom_teachings:    { label: "Teachings of Freedom",    icon: "📘", color: "#2196f3", group: "books", img: "images/items/teachings_of_freedom.png" },
  freedom_guide:        { label: "Guide to Freedom",        icon: "📗", color: "#4caf50", group: "books", img: "images/items/guide_to_freedom.png" },
  freedom_philosophies: { label: "Philosophies of Freedom", icon: "📕", color: "#f44336", group: "books", img: "images/items/philosophies_of_freedom.png" },

  // — Mondstadt: Resistance —
  resistance_teachings:    { label: "Teachings of Resistance",    icon: "📘", color: "#1e88e5", group: "books", img: "images/items/teachings_of_resistance.png" },
  resistance_guide:        { label: "Guide to Resistance",        icon: "📗", color: "#43a047", group: "books", img: "images/items/guide_to_resistance.png" },
  resistance_philosophies: { label: "Philosophies of Resistance", icon: "📕", color: "#e53935", group: "books", img: "images/items/philosophies_of_resistance.png" },

  // — Mondstadt: Ballad —
  ballad_teachings:    { label: "Teachings of Ballad",    icon: "📘", color: "#1976d2", group: "books", img: "images/items/teachings_of_ballad.png" },
  ballad_guide:        { label: "Guide to Ballad",        icon: "📗", color: "#388e3c", group: "books", img: "images/items/guide_to_ballad.png" },
  ballad_philosophies: { label: "Philosophies of Ballad", icon: "📕", color: "#d32f2f", group: "books", img: "images/items/philosophies_of_ballad.png" },

  // — Liyue: Prosperity —
  prosperity_teachings:    { label: "Teachings of Prosperity",    icon: "📘", color: "#1565c0", group: "books", img: "images/items/teachings_of_prosperity.png" },
  prosperity_guide:        { label: "Guide to Prosperity",        icon: "📗", color: "#2e7d32", group: "books", img: "images/items/guide_to_prosperity.png" },
  prosperity_philosophies: { label: "Philosophies of Prosperity", icon: "📕", color: "#c62828", group: "books", img: "images/items/philosophies_of_prosperity.png" },

  // — Liyue: Diligence —
  diligence_teachings:    { label: "Teachings of Diligence",    icon: "📘", color: "#0d47a1", group: "books", img: "images/items/teachings_of_diligence.png" },
  diligence_guide:        { label: "Guide to Diligence",        icon: "📗", color: "#1b5e20", group: "books", img: "images/items/guide_to_diligence.png" },
  diligence_philosophies: { label: "Philosophies of Diligence", icon: "📕", color: "#b71c1c", group: "books", img: "images/items/philosophies_of_diligence.png" },

  // — Liyue: Gold —
  gold_teachings:    { label: "Teachings of Gold",    icon: "📘", color: "#1a73e8", group: "books", img: "images/items/teachings_of_gold.png" },
  gold_guide:        { label: "Guide to Gold",        icon: "📗", color: "#34a853", group: "books", img: "images/items/guide_to_gold.png" },
  gold_philosophies: { label: "Philosophies of Gold", icon: "📕", color: "#ea4335", group: "books", img: "images/items/philosophies_of_gold.png" },

  // — Inazuma: Transience —
  transience_teachings:    { label: "Teachings of Transience",    icon: "📘", color: "#7986cb", group: "books", img: "images/items/teachings_of_transience.png" },
  transience_guide:        { label: "Guide to Transience",        icon: "📗", color: "#66bb6a", group: "books", img: "images/items/guide_to_transience.png" },
  transience_philosophies: { label: "Philosophies of Transience", icon: "📕", color: "#ef5350", group: "books", img: "images/items/philosophies_of_transience.png" },

  // — Inazuma: Elegance —
  elegance_teachings:    { label: "Teachings of Elegance",    icon: "📘", color: "#5c6bc0", group: "books", img: "images/items/teachings_of_elegance.png" },
  elegance_guide:        { label: "Guide to Elegance",        icon: "📗", color: "#4caf50", group: "books", img: "images/items/guide_to_elegance.png" },
  elegance_philosophies: { label: "Philosophies of Elegance", icon: "📕", color: "#f44336", group: "books", img: "images/items/philosophies_of_elegance.png" },

  // — Inazuma: Light —
  light_teachings:    { label: "Teachings of Light",    icon: "📘", color: "#3f51b5", group: "books", img: "images/items/teachings_of_light.png" },
  light_guide:        { label: "Guide to Light",        icon: "📗", color: "#4caf50", group: "books", img: "images/items/guide_to_light.png" },
  light_philosophies: { label: "Philosophies of Light", icon: "📕", color: "#f44336", group: "books", img: "images/items/philosophies_of_light.png" },

  // — Sumeru: Admonition —
  admonition_teachings:    { label: "Teachings of Admonition",    icon: "📘", color: "#26c6da", group: "books", img: "images/items/teachings_of_admonition.png" },
  admonition_guide:        { label: "Guide to Admonition",        icon: "📗", color: "#26a69a", group: "books", img: "images/items/guide_to_admonition.png" },
  admonition_philosophies: { label: "Philosophies of Admonition", icon: "📕", color: "#ef5350", group: "books", img: "images/items/philosophies_of_admonition.png" },

  // — Sumeru: Ingenuity —
  ingenuity_teachings:    { label: "Teachings of Ingenuity",    icon: "📘", color: "#00bcd4", group: "books", img: "images/items/teachings_of_ingenuity.png" },
  ingenuity_guide:        { label: "Guide to Ingenuity",        icon: "📗", color: "#009688", group: "books", img: "images/items/guide_to_ingenuity.png" },
  ingenuity_philosophies: { label: "Philosophies of Ingenuity", icon: "📕", color: "#e53935", group: "books", img: "images/items/philosophies_of_ingenuity.png" },

  // — Sumeru: Praxis —
  praxis_teachings:    { label: "Teachings of Praxis",    icon: "📘", color: "#0097a7", group: "books", img: "images/items/teachings_of_praxis.png" },
  praxis_guide:        { label: "Guide to Praxis",        icon: "📗", color: "#00897b", group: "books", img: "images/items/guide_to_praxis.png" },
  praxis_philosophies: { label: "Philosophies of Praxis", icon: "📕", color: "#d32f2f", group: "books", img: "images/items/philosophies_of_praxis.png" },

  // — Fontaine: Equity —
  equity_teachings:    { label: "Teachings of Equity",    icon: "📘", color: "#42a5f5", group: "books", img: "images/items/teachings_of_equity.png" },
  equity_guide:        { label: "Guide to Equity",        icon: "📗", color: "#66bb6a", group: "books", img: "images/items/guide_to_equity.png" },
  equity_philosophies: { label: "Philosophies of Equity", icon: "📕", color: "#ef5350", group: "books", img: "images/items/philosophies_of_equity.png" },

  // — Fontaine: Justice —
  justice_teachings:    { label: "Teachings of Justice",    icon: "📘", color: "#29b6f6", group: "books", img: "images/items/teachings_of_justice.png" },
  justice_guide:        { label: "Guide to Justice",        icon: "📗", color: "#4db6ac", group: "books", img: "images/items/guide_to_justice.png" },
  justice_philosophies: { label: "Philosophies of Justice", icon: "📕", color: "#f44336", group: "books", img: "images/items/philosophies_of_justice.png" },

  // — Fontaine: Order —
  order_teachings:    { label: "Teachings of Order",    icon: "📘", color: "#039be5", group: "books", img: "images/items/teachings_of_order.png" },
  order_guide:        { label: "Guide to Order",        icon: "📗", color: "#26a69a", group: "books", img: "images/items/guide_to_order.png" },
  order_philosophies: { label: "Philosophies of Order", icon: "📕", color: "#e53935", group: "books", img: "images/items/philosophies_of_order.png" },

  // — Natlan: Contention —
  contention_teachings:    { label: "Teachings of Contention",    icon: "📘", color: "#ef9a9a", group: "books", img: "images/items/teachings_of_contention.png" },
  contention_guide:        { label: "Guide to Contention",        icon: "📗", color: "#ef5350", group: "books", img: "images/items/guide_to_contention.png" },
  contention_philosophies: { label: "Philosophies of Contention", icon: "📕", color: "#b71c1c", group: "books", img: "images/items/philosophies_of_contention.png" },

  // — Natlan: Kindling (ORIGINAL ENTRIES — UNCHANGED) —
  kindling_teachings:    { label: "Teachings of Kindling",      icon: "📘", color: "#2196f3", group: "books", img: "images/items/teachings_of_kindling.png" },
  kindling_guide:        { label: "Guide to Kindling",          icon: "📗", color: "#4caf50", group: "books", img: "images/items/guide_to_kindling.png" },
  kindling_philosophies: { label: "Philosophies of Kindling",   icon: "📕", color: "#f44336", group: "books", img: "images/items/philosophies_of_kindling.png" },

  // — Natlan: Conflict —
  conflict_teachings:    { label: "Teachings of Conflict",    icon: "📘", color: "#ff8a65", group: "books", img: "images/items/teachings_of_conflict.png" },
  conflict_guide:        { label: "Guide to Conflict",        icon: "📗", color: "#f4511e", group: "books", img: "images/items/guide_to_conflict.png" },
  conflict_philosophies: { label: "Philosophies of Conflict", icon: "📕", color: "#bf360c", group: "books", img: "images/items/philosophies_of_conflict.png" },

  // — Nod-Krai: Moonlight (ORIGINAL ENTRIES — UNCHANGED) —
  moonlight_teachings:    { label: "Teachings of Moonlight",    icon: "📘", color: "#818cf8", group: "books", img: "images/items/teachings_of_moonlight.png" },
  moonlight_guide:        { label: "Guide to Moonlight",        icon: "📗", color: "#6366f1", group: "books", img: "images/items/guide_to_moonlight.png" },
  moonlight_philosophies: { label: "Philosophies of Moonlight", icon: "📕", color: "#4f46e5", group: "books", img: "images/items/philosophies_of_moonlight.png" },

  // — Nod-Krai: Elysium —
  elysium_teachings:    { label: "Teachings of Elysium",    icon: "📘", color: "#b0bec5", group: "books", img: "images/items/teachings_of_elysium.png" },
  elysium_guide:        { label: "Guide to Elysium",        icon: "📗", color: "#78909c", group: "books", img: "images/items/guide_to_elysium.png" },
  elysium_philosophies: { label: "Philosophies of Elysium", icon: "📕", color: "#455a64", group: "books", img: "images/items/philosophies_of_elysium.png" },

  // — Nod-Krai: Vagrancy (ORIGINAL ENTRIES — UNCHANGED) —
  vagrancy_teachings:    { label: "Teachings of Vagrancy",     icon: "📘", color: "#7c3aed", group: "books", img: "images/items/teachings_of_vagrancy.png" },
  vagrancy_guide:        { label: "Guide to Vagrancy",         icon: "📗", color: "#6d28d9", group: "books", img: "images/items/UI_ItemIcon_104363.png" },
  vagrancy_philosophies: { label: "Philosophies of Vagrancy",  icon: "📕", color: "#5b21b6", group: "books", img: "images/items/UI_ItemIcon_104364.png" },

  // ── Weekly boss drops ──────────────────────────────────────────────────────
  // — Stormterror Dvalin (Anemo) —
  dvalins_plume:       { label: "Dvalin's Plume",              icon: "🐉", color: "#34d399", group: "talent", img: "images/items/dvalins_plume.png" },
  dvalins_claw:        { label: "Dvalin's Claw",               icon: "🐉", color: "#10b981", group: "talent", img: "images/items/dvalins_claw.png" },
  dvalins_sigh:        { label: "Dvalin's Sigh",               icon: "🐉", color: "#059669", group: "talent", img: "images/items/dvalins_sigh.png" },

  // — Lupus Boreas (Cryo) —
  tail_of_boreas:      { label: "Tail of Boreas",              icon: "🐺", color: "#7dd3fc", group: "talent", img: "images/items/tail_of_boreas.png" },
  ring_of_boreas:      { label: "Ring of Boreas",              icon: "🐺", color: "#38bdf8", group: "talent", img: "images/items/ring_of_boreas.png" },
  spirit_locket_of_boreas: { label: "Spirit Locket of Boreas", icon: "🐺", color: "#0284c7", group: "talent", img: "images/items/spirit_locket_of_boreas.png" },

  // — Childe / Tartaglia (Hydro) —
  tusk_of_monoceros_caeli: { label: "Tusk of Monoceros Caeli", icon: "🦄", color: "#38bdf8", group: "talent", img: "images/items/tusk_of_monoceros_caeli.png" },
  shard_of_foul_legacy:    { label: "Shard of a Foul Legacy",  icon: "🌊", color: "#0ea5e9", group: "talent", img: "images/items/shard_of_a_foul_legacy.png" },
  shadow_of_the_warrior:   { label: "Shadow of the Warrior",  icon: "⚔️", color: "#0369a1", group: "talent", img: "images/items/shadow_of_the_warrior.png" },

  // — Azhdaha (Geo/multi-element) —
  dragon_lords_crown:  { label: "Dragon Lord's Crown",         icon: "👑", color: "#f59e0b", group: "talent", img: "images/items/dragon_lords_crown.png" },
  gilded_scale:        { label: "Gilded Scale",                icon: "🐉", color: "#d97706", group: "talent", img: "images/items/gilded_scale.png" },
  bloodjade_branch:    { label: "Bloodjade Branch",            icon: "🌿", color: "#b45309", group: "talent", img: "images/items/bloodjade_branch.png" },

  // — La Signora (Pyro/Cryo) —
  ashen_heart:         { label: "Ashen Heart",                 icon: "🔥", color: "#f97316", group: "talent", img: "images/items/ashen_heart.png" },
  hellfire_butterfly:  { label: "Hellfire Butterfly",          icon: "🦋", color: "#ef4444", group: "talent", img: "images/items/hellfire_butterfly.png" },
  molten_moment:       { label: "Molten Moment",               icon: "🌋", color: "#dc2626", group: "talent", img: "images/items/molten_moment.png" },

  // — Raiden Shogun (Electro) —
  mudra_of_malefic_general: { label: "Mudra of the Malefic General", icon: "⚡", color: "#d8b4fe", group: "talent", img: "images/items/mudra_of_the_malefic_general.png" },
  tears_of_calamitous_god:  { label: "Tears of the Calamitous God",  icon: "⚡", color: "#a855f7", group: "talent", img: "images/items/tears_of_the_calamitous_god.png" },
  meaning_of_aeons:         { label: "The Meaning of Aeons",          icon: "⚡", color: "#7c3aed", group: "talent", img: "images/items/the_meaning_of_aeons.png" },

  // — Scaramouche / Shouki no Kami (Anemo) —
  mirror_of_mushin:    { label: "Mirror of Mushin",            icon: "🌀", color: "#6ee7b7", group: "talent", img: "images/items/mirror_of_mushin.png" },
  dakas_bell:          { label: "Daka's Bell",                 icon: "🔔", color: "#34d399", group: "talent", img: "images/items/dakas_bell.png" },
  puppet_strings:      { label: "Puppet Strings",              icon: "🎭", color: "#10b981", group: "talent", img: "images/items/puppet_strings.png" },

  // — Guardian of Apep's Oasis (Dendro) —
  everamber:           { label: "Everamber",                   icon: "🌿", color: "#bbf7d0", group: "talent", img: "images/items/everamber.png" },
  primordial_greenbloom: { label: "Primordial Greenbloom",     icon: "🌸", color: "#4ade80", group: "talent", img: "images/items/primordial_greenbloom.png" },
  worldspan_fern:      { label: "Worldspan Fern",              icon: "🌿", color: "#16a34a", group: "talent", img: "images/items/worldspan_fern.png" },

  // — All-Devouring Narwhal (Hydro) —
  lightless_mass:             { label: "Lightless Mass",              icon: "🌊", color: "#bae6fd", group: "talent", img: "images/items/lightless_mass.png" },
  lightless_eye_of_maelstrom: { label: "Lightless Eye of the Maelstrom", icon: "🌊", color: "#38bdf8", group: "talent", img: "images/items/lightless_eye_of_the_maelstrom.png" },
  lightless_silk_string:      { label: "Lightless Silk String",        icon: "🌊", color: "#0284c7", group: "talent", img: "images/items/lightless_silk_string.png" },

  // — The Knave / Arlecchino (Pyro) —
  silken_feather:      { label: "Silken Feather",              icon: "🪶", color: "#fca5a5", group: "talent", img: "images/items/silken_feather.png" },
  fading_candle:       { label: "Fading Candle",               icon: "🕯️", color: "#fb923c", group: "talent", img: "images/items/fading_candle.png" },
  // denial_and_judgment UNCHANGED below —

  // — Lord of Eroded Primal Fire (Natlan, Pyro) —
  eroded_horn:         { label: "Eroded Horn",                 icon: "🔥", color: "#fca5a5", group: "talent", img: "images/items/eroded_horn.png" },
  eroded_sunfire:      { label: "Eroded Sunfire",              icon: "🔥", color: "#f97316", group: "talent", img: "images/items/eroded_sunfire.png" },
  eroded_scale_feather: { label: "Eroded Scale-Feather",       icon: "🪶", color: "#ea580c", group: "talent", img: "images/items/eroded_scale_feather.png" },

  // — Heretic of the False Moon / Dottore (Nod-Krai) —
  elixir_of_the_heretic: { label: "Elixir of the Heretic",    icon: "⚗️", color: "#a78bfa", group: "talent", img: "images/items/elixir_of_the_heretic.png" },

  // — Already present (UNCHANGED) —
  denial_and_judgment:      { label: "Denial and Judgment",          icon: "❄️", color: "#00bcd4", group: "talent", img: "images/items/denial_and_judgment.png" },
  madmans_restraint:        { label: "Madman's Restraint",           icon: "🔗", color: "#f87171", group: "talent", img: "images/items/UI_ItemIcon_113082.png" },
  mask_virtuous_doctor:     { label: "Mask of the Virtuous Doctor",  icon: "🎭", color: "#a78bfa", group: "talent", img: "images/items/mask_of_the_virtuous_doctor.png" },

  // ── Crown ──────────────────────────────────────────────────────────────────
  crown: { label: "Crown of Insight", icon: "👑", color: "#ffd700", group: "talent", img: "images/items/crown_of_insight.png" },

};
