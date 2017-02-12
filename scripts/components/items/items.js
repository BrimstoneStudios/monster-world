import allMaps from './../maps/all-maps';

export default {
  useItem: function () {
    for (let i = 0; i <= player.inventory.length; i++) {
      if (player.location.y === currentMap.movement.boundaries.top + i * currentMap.movement.distance.y) {
        const itemUsed = player.inventory[i];

        itemUsed.func();
        if (itemUsed.singleUse) {
          player.inventory.splice(i, 1);
        }

        if (currentMap === allMaps.battle) {
          currentMap.battleSystem.itemUsed = itemUsed;
        }
        break;
      }
    }
  },
}
