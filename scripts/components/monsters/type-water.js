import {Monster} from './monster';

export class WaterType {
  constructor(lvl) {
    Monster.call( this, lvl );
  }
}

WaterType.prototype = Object.create( Monster.prototype );
WaterType.prototype.constructor = WaterType;
WaterType.prototype.type = 'water';
