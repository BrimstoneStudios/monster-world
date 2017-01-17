// ------ NPCs -------
// Other characters in the game, can be friendly or hostile
class NPC {
  constructor(name, sprite, x, y) {
    this.name = name;
    this.sprite = sprite;
    this.location = {
      x: x,
      y: y,
    };
  }

  render() {
    ctx.drawImage(Resources.get(this.sprite), this.location.x, this.location.y);
  }

  initAction() {
    console.log('define an action for the npc to take!')
  }
}

// Update the NPC's position, required method for game
// Parameter: dt, a time delta between ticks
NPC.prototype.update = function () {
};

export { NPC as default };
