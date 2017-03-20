export default function (key, player) {
  const map = monsterWorld.getCurrentMap();

  switch (key) {
    case 'shift':
      map.displayStats = false;
      monsterWorld.setCurrentMap(monsterWorld.maps.mainMenu);
      player.initLocation();
      break;

    case 'space': {
      const distance = map.movement.distance;
      const initYLoc = map.initLocation.y;

      map.displayStats = !map.displayStats;
      map.displayMonsterIndex = (player.location.y - initYLoc) / distance.y;
      break;
    }
  }
}
