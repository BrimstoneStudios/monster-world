import allMaps from './../all-maps';

export default function (key, player) {
  switch (key) {
    case 'shift':
      currentMap = player.savedAttributes.lastLevel;
      player.location.x = player.savedAttributes.location.x;
      player.location.y = player.savedAttributes.location.y;
      break;

    case 'space':
      if (player.location.y === 247) {
        currentMap = allMaps.monsterInventoryMenu;
      } else {
        currentMap = allMaps.inventoryMenu;
      }
      currentMap.setBoundaries();
      player.initLocation();
      break;
  }
}
