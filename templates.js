// ── Standard 5★ character templates ────────────────���──────────────────────────
// All standard 5★ characters share the same quantities — only key names differ.
// Pass the character's local material keys and get back the full data structure.

function stdCraftUp(mobT1, mobT2, mobT3) {
  return {
    [mobT2]:      { from: mobT1,       ratio: 3 },
    [mobT3]:      { from: mobT2,       ratio: 3 },
    guide:        { from: "teachings", ratio: 3 },
    philosophies: { from: "guide",     ratio: 3 },
    fragment:     { from: "sliver",    ratio: 3 },
    chunk:        { from: "fragment",  ratio: 3 },
    gemstone:     { from: "chunk",     ratio: 3 },
  };
}

function stdCraftOrder(mobT1, mobT2, mobT3) {
  return [
    `${mobT1}→${mobT2}`, `${mobT2}→${mobT3}`,
    "teachings→guide", "guide→philosophies",
    "sliver→fragment", "fragment→chunk", "chunk→gemstone",
  ];
}

function stdAscension(boss, local, mobT1, mobT2, mobT3) {
  return [
    { cap: 40,  mora: 20000,  sliver: 1, fragment: 0, chunk: 0, gemstone: 0, [boss]: 0,  [local]: 3,  [mobT1]: 3,  [mobT2]: 0,  [mobT3]: 0  },
    { cap: 50,  mora: 40000,  sliver: 0, fragment: 3, chunk: 0, gemstone: 0, [boss]: 2,  [local]: 10, [mobT1]: 15, [mobT2]: 0,  [mobT3]: 0  },
    { cap: 60,  mora: 60000,  sliver: 0, fragment: 6, chunk: 0, gemstone: 0, [boss]: 4,  [local]: 20, [mobT1]: 0,  [mobT2]: 12, [mobT3]: 0  },
    { cap: 70,  mora: 80000,  sliver: 0, fragment: 0, chunk: 3, gemstone: 0, [boss]: 8,  [local]: 30, [mobT1]: 0,  [mobT2]: 18, [mobT3]: 0  },
    { cap: 80,  mora: 100000, sliver: 0, fragment: 0, chunk: 6, gemstone: 0, [boss]: 12, [local]: 45, [mobT1]: 0,  [mobT2]: 0,  [mobT3]: 12 },
    { cap: 90,  mora: 120000, sliver: 0, fragment: 0, chunk: 0, gemstone: 6, [boss]: 20, [local]: 60, [mobT1]: 0,  [mobT2]: 0,  [mobT3]: 24 },
  ];
}

// 4★ characters share the same material quantities as 5★ but lower mora per phase
function std4Ascension(boss, local, mobT1, mobT2, mobT3) {
  return [
    { cap: 40,  mora: 10000, sliver: 1, fragment: 0, chunk: 0, gemstone: 0, [boss]: 0,  [local]: 3,  [mobT1]: 3,  [mobT2]: 0,  [mobT3]: 0  },
    { cap: 50,  mora: 20000, sliver: 0, fragment: 3, chunk: 0, gemstone: 0, [boss]: 2,  [local]: 10, [mobT1]: 15, [mobT2]: 0,  [mobT3]: 0  },
    { cap: 60,  mora: 30000, sliver: 0, fragment: 6, chunk: 0, gemstone: 0, [boss]: 4,  [local]: 20, [mobT1]: 0,  [mobT2]: 12, [mobT3]: 0  },
    { cap: 70,  mora: 45000, sliver: 0, fragment: 0, chunk: 3, gemstone: 0, [boss]: 8,  [local]: 30, [mobT1]: 0,  [mobT2]: 18, [mobT3]: 0  },
    { cap: 80,  mora: 60000, sliver: 0, fragment: 0, chunk: 6, gemstone: 0, [boss]: 12, [local]: 45, [mobT1]: 0,  [mobT2]: 0,  [mobT3]: 12 },
    { cap: 90,  mora: 80000, sliver: 0, fragment: 0, chunk: 0, gemstone: 6, [boss]: 20, [local]: 60, [mobT1]: 0,  [mobT2]: 0,  [mobT3]: 24 },
  ];
}

function stdTalents(mobT1, mobT2, mobT3, weekly) {
  return [
    { mora: 12500,  teachings: 3, guide: 0,  philosophies: 0,  [mobT1]: 6,  [mobT2]: 0,  [mobT3]: 0,  [weekly]: 0, crown: 0 },
    { mora: 17500,  teachings: 0, guide: 2,  philosophies: 0,  [mobT1]: 0,  [mobT2]: 3,  [mobT3]: 0,  [weekly]: 0, crown: 0 },
    { mora: 25000,  teachings: 0, guide: 4,  philosophies: 0,  [mobT1]: 0,  [mobT2]: 4,  [mobT3]: 0,  [weekly]: 0, crown: 0 },
    { mora: 30000,  teachings: 0, guide: 6,  philosophies: 0,  [mobT1]: 0,  [mobT2]: 6,  [mobT3]: 0,  [weekly]: 0, crown: 0 },
    { mora: 37500,  teachings: 0, guide: 9,  philosophies: 0,  [mobT1]: 0,  [mobT2]: 9,  [mobT3]: 0,  [weekly]: 0, crown: 0 },
    { mora: 120000, teachings: 0, guide: 0,  philosophies: 4,  [mobT1]: 0,  [mobT2]: 0,  [mobT3]: 4,  [weekly]: 1, crown: 0 },
    { mora: 260000, teachings: 0, guide: 0,  philosophies: 6,  [mobT1]: 0,  [mobT2]: 0,  [mobT3]: 6,  [weekly]: 1, crown: 0 },
    { mora: 450000, teachings: 0, guide: 0,  philosophies: 12, [mobT1]: 0,  [mobT2]: 0,  [mobT3]: 9,  [weekly]: 2, crown: 0 },
    { mora: 700000, teachings: 0, guide: 0,  philosophies: 16, [mobT1]: 0,  [mobT2]: 0,  [mobT3]: 12, [weekly]: 2, crown: 1 },
  ];
}
