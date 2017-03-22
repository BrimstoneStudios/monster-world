
export default {
  determineItemUsed: function () {
    const player = monsterWorld.player;

    for (let i = 0; i <= player.inventory.length; i++) {
      if (player.location.y === monsterWorld.getCurrentMap().movement.boundaries.top + i * monsterWorld.getCurrentMap().movement.distance.y) {
        const itemUsed = player.inventory[i];
      }
    }
  }
  useItem: function () {
    this.determineItemUsed()
        itemUsed.func();
        if (itemUsed.singleUse) {
          monsterWorld.player.inventory.splice(i, 1);
        }

        if (monsterWorld.getCurrentMap() === monsterWorld.maps.battle) {
          monsterWorld.getCurrentMap().battleSystem.itemUsed = itemUsed;
        }
        break;
      }
    }
  },
}
