import {Monster} from './../monsters/monster';

export class NormalType {
  constructor(lvl) {
    Monster.call( this, lvl );
  }
}

NormalType.prototype = Object.create( Monster.prototype );
NormalType.prototype.constructor = NormalType;
NormalType.prototype.type = 'normal';
NormalType.prototype.weaknesss ='';

// PlayerMon monster - subclass of NormalType
// var PlayerMon = function ( lvl, char ) {
//   NormalType.call( this, lvl );
//   if ( char === 'monk' ) {
//     this.sprite = 'images/characters/monk.gif';
//   } else {
//     this.sprite = 'images/characters/deathCaster.gif';
//   }
// }
