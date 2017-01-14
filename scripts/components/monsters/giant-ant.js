import GrassType from './../type/grass';

var GiantAnt = function ( lvl ) {
  GrassType.call( this, lvl );
};

GiantAnt.prototype = Object.create( GrassType.prototype );
GiantAnt.prototype.constructor = GiantAnt;
GiantAnt.prototype.sprite = 'images/monsters/giant-ant.jpg';
GiantAnt.prototype.name = 'Giant Ant';
GiantAnt.prototype.evolve = 6;
GiantAnt.prototype.hpMult = 4;
GiantAnt.prototype.attackMult = 1;
GiantAnt.prototype.defenseMult = 2;
GiantAnt.prototype.spAttackMult = 2;
GiantAnt.prototype.spDefenseMult = 2;
GiantAnt.prototype.speedMult = 2;
// GiantAnt.prototype.abilities = [abilities.bite, abilities.growl, abilities.razorLeaf];

export default GiantAnt;
