import {FireType} from './../type/fire';
import abilities from './../abilities/abilities';

var Salamander = function ( lvl ) {
  FireType.call( this, lvl );
};
Salamander.prototype = Object.create( FireType.prototype );
Salamander.prototype.constructor = Salamander;
Salamander.prototype.sprite = 'images/monsters/salamander.jpg';
Salamander.prototype.name = 'Salamander';
Salamander.prototype.evolve = 7;
Salamander.prototype.hpMult = 0;
Salamander.prototype.attackMult = 502;
Salamander.prototype.defenseMult = 0;
Salamander.prototype.spAttackMult = 3;
Salamander.prototype.spDefenseMult = 1;
Salamander.prototype.speedMult = 3;
Salamander.prototype.abilities = [abilities.bite, abilities.stare, abilities.fireBreath];

export default Salamander;
