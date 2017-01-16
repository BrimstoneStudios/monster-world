import {NormalType} from './../type/normal';
import items from './../items/items';
import abilities from './../abilities/abilities';
import types from './../type/types';

export class GiantRat {
  constructor(lvl) {
    NormalType.call( this, lvl );
    this.sprite = 'images/monsters/giantRat.gif';
  }
}

GiantRat.prototype = Object.create( NormalType.prototype );
GiantRat.prototype.constructor = GiantRat;
GiantRat.prototype.name = 'Giant Rat';
GiantRat.prototype.player = 1;
GiantRat.prototype.hpMult = 3;
GiantRat.prototype.attackMult = 1;
GiantRat.prototype.defenseMult = 2;
GiantRat.prototype.spAttackMult = 1;
GiantRat.prototype.spDefenseMult = 1;
GiantRat.prototype.speedMult = 3;
GiantRat.prototype.abilities = [abilities.scratch, abilities.growl];
GiantRat.prototype.items = [
  {
   item: items.net,
   dropProbablity: 1
  }, {
   item: items.potion,
   dropProbablity: 1
  }
];
