export default function (key, player) {
  switch (key) {
    case 'shift':
      player.savedAttributes.lastLevel = monsterWorld.getCurrentMap();
      player.savedAttributes.location.x = player.location.x;
      player.savedAttributes.location.y = player.location.y;
      monsterWorld.setCurrentMap(monsterWorld.maps.mainMenu);
      player.initLocation();
      break;

    case 'space':
      monsterWorld.maps.checkNPCActionable();
      break;

    case 'left':
    case 'up':
    case 'right':
    case 'down':
      monsterWorld.maps.resolveBattleEvent();
      break;
  }
}
