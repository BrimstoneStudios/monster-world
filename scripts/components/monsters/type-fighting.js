var FightingType = function ( lvl ) {
  Monster.call( this, lvl );
};

FightingType.prototype = Object.create( Monster.prototype );
FightingType.prototype.constructor = FightingType;
FightingType.prototype.type = 'fighting';
