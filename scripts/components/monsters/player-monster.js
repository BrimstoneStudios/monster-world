import {NormalType} from './../type/normal';
import abilities from './../abilities/abilities';

var PlayerMonster = function ( lvl ) {
  NormalType.call( this, lvl );
};

PlayerMonster.prototype = Object.create( NormalType.prototype );
PlayerMonster.prototype.constructor = PlayerMonster;
PlayerMonster.prototype.name = 'PlayerMonster';
PlayerMonster.prototype.player = 1;
PlayerMonster.prototype.hpMult = 0;
PlayerMonster.prototype.attackMult = 3;
PlayerMonster.prototype.defenseMult = 0;
PlayerMonster.prototype.spAttackMult = 2;
PlayerMonster.prototype.spDefenseMult = 1;
PlayerMonster.prototype.speedMult = 3;
// PlayerMonster.prototype.abilities = [abilities.scratch, abilities.stare];

export default PlayerMonster;
