var Wormy1 = function ( lvl ) {
  GrassType.call( this, lvl );
};

Wormy1.prototype = Object.create( GrassType.prototype );
Wormy1.prototype.constructor = Wormy1;
Wormy1.prototype.sprite = 'images/monsters/wormy1.gif';
Wormy1.prototype.name = 'Wormy1';
Wormy1.prototype.evolve = 6;
Wormy1.prototype.hpMult = 4;
Wormy1.prototype.attackMult = 1;
Wormy1.prototype.defenseMult = 2;
Wormy1.prototype.spAttackMult = 2;
Wormy1.prototype.spDefenseMult = 2;
Wormy1.prototype.speedMult = 2;
Wormy1.prototype.abilities = [abilities.bite, abilities.growl, abilities.razorLeaf];
