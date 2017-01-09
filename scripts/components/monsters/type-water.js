var WaterType = function ( lvl ) {
  Monster.call( this, lvl );
};
WaterType.prototype = Object.create( Monster.prototype );
WaterType.prototype.constructor = WaterType;
WaterType.prototype.type = 'water';
