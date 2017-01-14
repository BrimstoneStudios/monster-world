var GhostType = function ( lvl ) {
  Monster.call( this, lvl );
};

GhostType.prototype = Object.create( Monster.prototype );
GhostType.prototype.constructor = GhostType;
GhostType.prototype.type = 'ghost';
