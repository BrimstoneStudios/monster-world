levels.waterLevel = {
  borderedLevels: {
    right: {
      levelName: 'firstLevel',
      initLocation: {
        x: 10
      }
    }
  },
  boundaries: {
    left: -40,
    top: -40,
    right: 710,
    bottom: 510
  },
  initLocation: {
    x: 10,
    y: 10
  },
  levelName : 'waterLevel',
  movement: {
    x: 50,
    y: 50
  },
  tiles : [
    [Wa, Wa, Wa, Wa, Wa, Wa, Wa, Wa, Wa, Sa, Sa, Sa, Sa, Sa],
    [Wa, Wa, Wa, Wa, Wa, Wa, Wa, Wa, Sa, Sa, Sa, Sa, Sa, Sa],
    [Wa, Wa, Wa, Wa, Wa, Wa, Wa, Sa, Sa, Sa, Sa, Sa, Sa, Sa],
    [Wa, Wa, Wa, Wa, Wa, Wa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa],
    [Wa, Wa, Wa, Wa, Wa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa],
    [Wa, Wa, Wa, Wa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa],
    [Wa, Wa, Wa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa],
    [Wa, Wa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa],
    [Wa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa],
    [Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa],
  ],
  monsters: {
    minLevel: 1,
    maxLevel: 2,
    monster: [Bat, GiantRat, Munchkin]
  }
};
