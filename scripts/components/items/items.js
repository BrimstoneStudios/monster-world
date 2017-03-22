let itemUsed;

export default {
  determineItemUsed: function () {
    const player = monsterWorld.player;

    for (let i = 0; i <= player.inventory.length; i++) {
      if (
        player.location.y ===
        monsterWorld.getCurrentMap().movement.boundaries.top +
        i *
        monsterWorld.getCurrentMap().movement.distance.y
      ) {
        itemUsed = player.inventory[i];

        if (itemUsed.singleUse) {
          player.inventory.splice(i, 1);
        }
      }
    }
  },
  useItem: function () {
    this.determineItemUsed()
    itemUsed.func();

    if (monsterWorld.getCurrentMap() === monsterWorld.maps.battle) {
      monsterWorld.getCurrentMap().battleSystem.itemUsed = itemUsed;
    }
  },
}
