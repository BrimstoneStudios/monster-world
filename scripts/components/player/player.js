import allMaps from './../maps/all-maps';

export class Player {
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
    if (typeof currentMap.sprite !== 'undefined') {
      this.sprite = currentMap.sprite;
    } else {
      this.sprite = this.savedAttributes.sprite;
    }
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.location.x, this.location.y);
  }

  initLocation() {
    if (typeof currentMap.initLocation !== 'undefined') {
      this.location.x = currentMap.initLocation.x;
      this.location.y = currentMap.initLocation.y;
    }
  }

  handleInput(key) {
    this.render();
    currentMap.controls(key, player)
    this.locationSetter(key);
  }

  locationSetter(key) {
    const boundaries = currentMap.boundaries;
    const movement = currentMap.movement;

    if (key === 'left') {
      this.location.x -= movement.x;
      if (this.location.x <= boundaries.left) {
        this.location.x = boundaries.left;
        allMaps.borders();
      }
    } else if (key === 'up') {
      this.location.y -= movement.y;
      if (this.location.y <= boundaries.top) {
        this.location.y = boundaries.top;
        allMaps.borders();
      }
    } else if (key === 'right') {
      this.location.x += movement.x;
      if (this.location.x >= boundaries.right) {
        this.location.x = boundaries.right;
        allMaps.borders();
      }
    } else if (key === 'down') {
      this.location.y += movement.y;
      if (this.location.y >= boundaries.bottom) {
        this.location.y = boundaries.bottom;
        allMaps.borders();
      }
    }
  }
}
