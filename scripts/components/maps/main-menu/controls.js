import allMaps from './../all-maps';

export default function (key, player) {
  switch (key) {
    case 'shift':
      monsterWorld.setCurrentMap(player.savedAttributes.lastLevel);
      player.location.x = player.savedAttributes.location.x;
      player.location.y = player.savedAttributes.location.y;
      break;

    case 'space':
      if (player.location.y === 247) {
        monsterWorld.setCurrentMap(monsterWorld.maps.monsterInventoryMenu);
      } else {
        monsterWorld.setCurrentMap(monsterWorld.maps.inventoryMenu);
      }
      monsterWorld.getCurrentMap().dynamicBoundaries();
      player.initLocation();
      break;
  }
}
