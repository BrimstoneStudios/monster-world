const defaultMovement = {
  boundaries: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  movement: {
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
  }


  set setSprite(image) {
    this.sprite = image;
  }

  set location(initLocation) {
    this.initLocation = initLocation;
  }

  set setMonsters(bunchOfMonsters) {
    this.monsters = bunchOfMonsters;
  }

  set setMovement(boundaries) {
    this.movement = boundaries;
  }

  borders() {

  }
}
