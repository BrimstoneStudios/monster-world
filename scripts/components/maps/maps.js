const defaultMovement = {
  boundaries: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
  controls: function () {
    return false;
  },
  distance: {
    x: 0,
    y: 0,
  },
};

export default class {
  constructor(levelName, tiles) {
    this.levelName = levelName;
    this.tiles = tiles;
    this.movement = defaultMovement;
    this.display = {
    };
  }

  set setBoundaries(boundariesToSet) {
    this.dynamicBoundaries = boundariesToSet;
  }

  set setRenderText(textToRender) {
    this.renderText = textToRender;
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

  set setControls(userControls) {
    this.movement.controls = userControls;
  }

  set setNPCs(npcs) {
    this.npcs = npcs;
  }

  set setBattleSystem(battleSystem) {
    this.battleSystem = battleSystem;
  }
}
