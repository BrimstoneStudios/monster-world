import {FireType} from './../type/fire';
import items from './../items/items';

export class Phoenix {
  constructor(lvl) {
    FireType.call( this, lvl );
  }
}

Phoenix.prototype = Object.create( FireType.prototype );
Phoenix.prototype.constructor = Phoenix;
Phoenix.prototype.sprite = 'images/monsters/phoenix.gif';
Phoenix.prototype.name = 'Phoenix';
Phoenix.prototype.evolve = 7;
Phoenix.prototype.hpMult = 3;
Phoenix.prototype.attackMult = 2;
Phoenix.prototype.defenseMult = 1;
Phoenix.prototype.spAttackMult = 2;
Phoenix.prototype.spDefenseMult = 2;
Phoenix.prototype.speedMult = 3;
// Phoenix.prototype.abilities = [abilities.stare, abilities.fireBlast];
