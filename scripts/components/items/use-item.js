import allMaps from './../maps/all-maps';

var useItems = function () {
  for (let i = 0; i < player.inventory.length; i++) {
    if (player.location.y === currentMap.movement.boundaries.top + i * currentMap.movement.distance.y) {
      var itemUsed = player.inventory[i];

      itemUsed.func();

      if (itemUsed.singleUse) {
        player.inventory.splice(i, 1);
      }
      if (currentMap === allMaps.battle) {
        return battleState.itemUsed;
      }
    }
  }
}

export { useItems as default };
