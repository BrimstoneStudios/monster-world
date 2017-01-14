var ElectricType = function ( lvl ) {
  Monster.call( this, lvl );
};

ElectricType.prototype = Object.create( Monster.prototype );
ElectricType.prototype.constructor = ElectricType;
ElectricType.prototype.type = 'electric';
