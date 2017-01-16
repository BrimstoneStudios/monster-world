import {Monster} from './../monsters/monster';

var GrassType = function ( lvl ) {
  Monster.call( this, lvl );
};
GrassType.prototype = Object.create( Monster.prototype );
GrassType.prototype.constructor = GrassType;
GrassType.prototype.type = 'grass';

export default GrassType;