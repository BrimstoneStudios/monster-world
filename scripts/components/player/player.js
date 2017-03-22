export default class {
  constructor() {
    this.location = {
      x: 0,
      y: 0,
    }
    this.monsterInventory = []
    this.savedAttributes = {
      location: {
        x: 0,
        y: 0,
      },
    }
    this.inventory = []
  }

  update() {
    if (typeof monsterWorld.getCurrentMap().sprite !== 'undefined') {
      this.sprite = monsterWorld.getCurrentMap().sprite;
    } else {
      this.sprite = this.savedAttributes.sprite;
    }
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.location.x, this.location.y);
  }

  initLocation() {
    if (typeof monsterWorld.getCurrentMap().initLocation !== 'undefined') {
      this.location.x = monsterWorld.getCurrentMap().initLocation.x;
      this.location.y = monsterWorld.getCurrentMap().initLocation.y;
    }
  }

  handleInput(key) {
    this.render();
    monsterWorld.getCurrentMap().movement.controls(key, monsterWorld.player)
    this.locationSetter(key);
  }

  locationSetter(key) {
    const boundaries = monsterWorld.getCurrentMap().movement.boundaries;
    const distance = monsterWorld.getCurrentMap().movement.distance;

    if (key === 'left') {
      this.location.x -= distance.x;
      if (this.location.x <= boundaries.left) {
        this.location.x = boundaries.left;
        monsterWorld.maps.borders();
      }
    } else if (key === 'up') {
      this.location.y -= distance.y;
      if (this.location.y <= boundaries.top) {
        this.location.y = boundaries.top;
        monsterWorld.maps.borders();
      }
    } else if (key === 'right') {
      this.location.x += distance.x;
      if (this.location.x >= boundaries.right) {
        this.location.x = boundaries.right;
        monsterWorld.maps.borders();
      }
    } else if (key === 'down') {
      this.location.y += distance.y;
      if (this.location.y >= boundaries.bottom) {
        this.location.y = boundaries.bottom;
        monsterWorld.maps.borders();
      }
    }
  }
}
