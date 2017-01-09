var Salmandar = function ( lvl ) {
  FireType.call( this, lvl );
};
Salmandar.prototype = Object.create( FireType.prototype );
Salmandar.prototype.constructor = Salmandar;
Salmandar.prototype.sprite = 'images/monsters/salmandar.gif';
Salmandar.prototype.name = 'Salmandar';
Salmandar.prototype.evolve = 7;
Salmandar.prototype.hpMult = 1;
Salmandar.prototype.attackMult = 2;
Salmandar.prototype.defenseMult = 0;
Salmandar.prototype.spAttackMult = 3;
Salmandar.prototype.spDefenseMult = 1;
Salmandar.prototype.speedMult = 3;
Salmandar.prototype.abilities = [abilities.scratch, abilities.stare, abilities.fireBreath];
