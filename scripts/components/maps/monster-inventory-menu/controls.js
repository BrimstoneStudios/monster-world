import allMaps from './../all-maps.js';

export default function (key, player) {
  switch (key) {
    case 'shift':
      currentMap.displayStats = false;
      currentMap = allMaps.mainMenu;
      player.initLocation();
      break;

    case 'space': {
      const distance = currentMap.movement.distance;
      const initYLoc = currentMap.initLocation.y;

      currentMap.displayStats = !currentMap.displayStats;
      currentMap.displayMonsterIndex = (player.location.y - initYLoc) / distance.y;
      break;
    }
  }
}
