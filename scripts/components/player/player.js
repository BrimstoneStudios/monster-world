import controls from './controls';
import initLocation from './init-location';
import locationSetter from './set-location';

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
    },
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
}

Player.prototype.handleInput = controls;
Player.prototype.initLocation = initLocation;
Player.prototype.locationSetter = locationSetter;
