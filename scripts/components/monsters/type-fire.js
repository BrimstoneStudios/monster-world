var FireType = function ( lvl ) {
  Monster.call( this, lvl );
};

FireType.prototype = Object.create( Monster.prototype );
FireType.prototype.constructor = FireType;
FireType.prototype.type = 'fire';
