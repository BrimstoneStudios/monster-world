import {NormalType} from './../type/normal';
import items from './../items/items';
import abilities from './../abilities/abilities';

export class Bat {
  constructor(lvl) {
    NormalType.call( this, lvl );
    this.sprite = 'images/monsters/bat.gif';
  }
}

Bat.prototype = Object.create( NormalType.prototype );
Bat.prototype.constructor = Bat;
Bat.prototype.name = 'Bat';
Bat.prototype.player = 1;
Bat.prototype.hpMult = 2;
Bat.prototype.attackMult = 2;
Bat.prototype.defenseMult = 1;
Bat.prototype.spAttackMult = 1;
Bat.prototype.spDefenseMult = 1;
Bat.prototype.speedMult = 3;
Bat.prototype.abilities = [abilities.bite, abilities.stare];
Bat.prototype.items = [
  {
   item: items.net,
   dropProbablity: 1
  }, {
   item: items.potion,
   dropProbablity: 1
  }
];
