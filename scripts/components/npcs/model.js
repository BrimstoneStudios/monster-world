// ------ NPCs -------
// Other characters in the game, can be friendly or hostile
var NPC = function ( x, y ) {
  this.name = this.name,
  this.sprite = this.sprite,
  this.location = {
    x: this.location.x,
    y: this.location.y,
    level: this.location.level,
  },
  this.func = this.func
};

// Update the NPC's position, required method for game
// Parameter: dt, a time delta between ticks
NPC.prototype.update = function () {
};

// Draw the NPC on the screen
NPC.prototype.render = function () {
  ctx.drawImage( Resources.get( this.sprite ), this.location.x, this.location.y );
};

// NPC that heals all of your monsters
var HealerNPC = function () {
  NPC.call( this );
};
HealerNPC.prototype = Object.create( NPC.prototype );
HealerNPC.prototype.constructor = HealerNPC;
HealerNPC.prototype.name = 'Flo';
HealerNPC.prototype.sprite = wZ;
HealerNPC.prototype.location = {
  x: 60,
  y: 60,
  level: [levels.firstLevel]
};
HealerNPC.prototype.func = function () {
  for ( let i = 0; i < player.monsterInventory.length; i++ ) {
    player.monsterInventory[i].currentHp = player.monsterInventory[i].hp;
  }
};

var healer = new HealerNPC();
