Player.prototype.initBorderTransitionLocation = function ( coordinates ) {
  if ( typeof coordinates.x !== 'undefined' ) {
    this.location.x = coordinates.x;
  }
  if ( typeof coordinates.y !== 'undefined' ) {
    this.location.y = coordinates.y;
  }
};
