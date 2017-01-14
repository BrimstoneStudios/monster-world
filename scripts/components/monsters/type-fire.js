import {Monster} from './monster';

export class FireType {
  constructor(lvl) {
    Monster.call( this, lvl );
  }
}

FireType.prototype = Object.create( Monster.prototype );
FireType.prototype.constructor = FireType;
FireType.prototype.type = 'fire';
