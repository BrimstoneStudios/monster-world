import {FireType} from './../type/fire';
import items from './../items/items';

export class Ignis {
  constructor(lvl) {
    FireType.call( this, lvl );
  }
}

Ignis.prototype = Object.create( FireType.prototype );
Ignis.prototype.constructor = Ignis;
Ignis.prototype.sprite = 'images/monsters/ignis.gif';
Ignis.prototype.name = 'Ignis';
Ignis.prototype.evolve = 7;
Ignis.prototype.hpMult = 3;
Ignis.prototype.attackMult = 1;
Ignis.prototype.defenseMult = 1;
Ignis.prototype.spAttackMult = 2;
Ignis.prototype.spDefenseMult = 1;
Ignis.prototype.speedMult = 2;
// Ignis.prototype.abilities = [abilities.fireBreath];
