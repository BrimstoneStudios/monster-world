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
}

// Update the NPC's position, required method for game
// NPC.prototype.update = function () {
// };

export { NPC as default };
