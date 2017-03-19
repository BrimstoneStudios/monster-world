export default function (key, player) {
  switch (key) {
    case 'shift':
      monsterWorld.setCurrentMap(monsterWorld.maps.mainMenu);
      player.initLocation();
      break;

    case 'space':
      monsterWorld.items.useItem();
      monsterWorld.getCurrentMap().dynamicBoundaries();
      player.initLocation();
      break;
  }
}
