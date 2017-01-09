var Munchkin = function ( lvl, char ) {
  NormalType.call( this, lvl );
  this.sprite = 'images/monsters/munchkin.gif';
};
Munchkin.prototype = Object.create( NormalType.prototype );
Munchkin.prototype.constructor = Munchkin;
Munchkin.prototype.name = 'Munchkin';
Munchkin.prototype.player = 1;
Munchkin.prototype.hpMult = 3;
Munchkin.prototype.attackMult = 2;
Munchkin.prototype.defenseMult = 1;
Munchkin.prototype.spAttackMult = 1;
Munchkin.prototype.spDefenseMult = 1;
Munchkin.prototype.speedMult = 3;
Munchkin.prototype.abilities = [abilities.bite, abilities.stare];
Munchkin.prototype.items = [
  {
   item: items.net,
   dropProbablity: 1
  }, {
   item: items.potion,
   dropProbablity: 1
  }
];