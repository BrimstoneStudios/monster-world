var RockType = function ( lvl ) {
  Monster.call( this, lvl );
};

RockType.prototype = Object.create( Monster.prototype );
RockType.prototype.constructor = RockType;
RockType.prototype.type = 'rock';
