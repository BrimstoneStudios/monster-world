const defaultMovement = {
  boundaries: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  distancePerMove: {
    x: 0,
    y: 0,
  },
  controls: function (key) {
    if (key) {
      window.alert('You have not mounted your controls!')
    }
  },
};

export class Maps {
  constructor(levelName, tiles) {
    this.levelName = levelName;
    this.tiles = tiles;
    this.movement = defaultMovement;
    this.display = {};
  }

  set setRenderText(whatToRender) {
    this.renderText = whatToRender;
  }

  set setSprite(sprite) {
    this.sprite = sprite;
  }

  set setInitLocation(initLocation) {
    this.initLocation = initLocation;
  }

  set setMonsters(bunchOfMonsters) {
    this.monsters = bunchOfMonsters;
  }

  set setMovement(boundaries) {
    this.movement = boundaries;
  }

  set setNPCs(npcs) {
    this.npcs = npcs;
  }
}
