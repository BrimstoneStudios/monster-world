import WaterType from './type-water';

var Hydra = function ( lvl ) {
  WaterType.call( this, lvl );
};
Hydra.prototype = Object.create( WaterType.prototype );
Hydra.prototype.constructor = Hydra;
Hydra.prototype.sprite = 'images/monsters/hydra1.jpg';
Hydra.prototype.name = 'Hydra';
Hydra.prototype.evolve = 6;
Hydra.prototype.hpMult = 4;
Hydra.prototype.attackMult = 1;
Hydra.prototype.defenseMult = 3;
Hydra.prototype.spAttackMult = 1;
Hydra.prototype.spDefenseMult = 2;
Hydra.prototype.speedMult = 1;
// Hydra.prototype.abilities = [abilities.bite, abilities.growl, abilities.waterBlast];

export default Hydra;
