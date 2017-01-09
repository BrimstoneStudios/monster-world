Monster.prototype.expGain = function () {
  this.currentExp += battle.enemy.expReward;
  if ( this.currentExp >= this.expToLevel ) {
    this.levelUp();
  }
}
