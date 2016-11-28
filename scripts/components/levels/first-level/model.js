levels.firstLevel = {
  borderedLevels: {
    left: {
      levelName: 'waterLevel',
      initLocation: {
        x: 660
      }
    },
    top: {
      levelName: 'fireLevel',
      initLocation: {
        y: 460
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
  levelName : 'firstLevel',
  movement: {
    x: 50,
    y: 50
  },
  tiles : [
    [Di, Di, Di, Gr, Gr, Gr, Di, Di, Di, Di, Di, Di, Di, Gr],
    [Di, Di, Di, Gr, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di]
  ],
  monsters: {
    minLevel: 1,
    maxLevel: 2,
    monster: [Bat, GiantRat, Munchkin]
  }
};
