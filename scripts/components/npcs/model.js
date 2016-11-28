// ------ NPCs -------
// Other characters in the game, can be friendly or hostile
var NPC = function ( x, y ) {
  // Variables applied to each of our instances go here
  this.sprite = wZ;
  this.x= x;
  this.y = y;
};

// Update the NPC's position, required method for game
// Parameter: dt, a time delta between ticks
NPC.prototype.update = function () {
};

// Draw the NPC on the screen
NPC.prototype.render = function () {
  ctx.drawImage( Resources.get( this.sprite ), this.x, this.y );
};

