import {FireType} from './../type/fire';
import items from './../items/items';
import abilities from './../abilities/abilities';

export class LavaOgre {
  constructor(lvl) {
    FireType.call( this, lvl );
  }
}

LavaOgre.prototype = Object.create( FireType.prototype );
LavaOgre.prototype.constructor = LavaOgre;
LavaOgre.prototype.sprite = 'images/monsters/lavaogre.gif';
LavaOgre.prototype.name = 'LavaOgre';
LavaOgre.prototype.evolve = 7;
LavaOgre.prototype.hpMult = 3;
LavaOgre.prototype.attackMult = 2;
LavaOgre.prototype.defenseMult = 1;
LavaOgre.prototype.spAttackMult = 2;
LavaOgre.prototype.spDefenseMult = 2;
LavaOgre.prototype.speedMult = 3;
LavaOgre.prototype.abilities = [abilities.scratch, abilities.stare, abilities.fireBreath];
