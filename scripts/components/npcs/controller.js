// Class of NPC to heal your monsters, give it location and which
// which level to be displayed on
var HealerNPC = function ( x, y, level ) {
  NPC.call( this, x, y );
  this.level = level;
};