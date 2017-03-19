import allMaps from './../all-maps.js';

export default function (key, player) {
  switch (key) {
    case 'shift':
      monsterWorld.getCurrentMap().displayStats = false;
      monsterWorld.setCurrentMap(monsterWorld.maps.mainMenu);
      player.initLocation();
      break;

    case 'space': {
      const distance = monsterWorld.getCurrentMap().movement.distance;
      const initYLoc = monsterWorld.getCurrentMap().initLocation.y;

      monsterWorld.getCurrentMap().displayStats = !monsterWorld.getCurrentMap().displayStats;
      monsterWorld.getCurrentMap().displayMonsterIndex = (player.location.y - initYLoc) / distance.y;
      break;
    }
  }
}
