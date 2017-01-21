import battle from './battle/battle';
import characterSelect from './character-select/character-select';
import fireMap from './world/fire-map';
import firstMap from './world/first-map';
import gameOver from './game-over/game-over';
import inventoryMenu from './inventory-menu/inventory-menu';
import mainMenu from './main-menu/main-menu';
import monsterInventoryMenu from './monster-inventory-menu/monster-inventory-menu';
import monsterSelect from './monster-select/monster-select';
import startScreen from './start-screen/start-screen';
import waterMap from './world/water-map';

function borders() {
  const boundaries = currentMap.movement.boundaries;
  const distancePerMove = currentMap.movement.distancePerMove;

  function setLeftBorder(mapToGoTo) {
    if (player.location.x === boundaries.left) {
      currentMap = mapToGoTo;
      player.location.x = boundaries.right - distancePerMove.x;
    }
  }

  function setTopBorder(mapToGoTo) {
    if (player.location.y === boundaries.top) {
      currentMap = mapToGoTo;
      player.location.y = boundaries.bottom - distancePerMove.y;
    }
  }

  function setRightBorder(mapToGoTo) {
    if (player.location.x === boundaries.right) {
      currentMap = mapToGoTo;
      player.location.x = boundaries.left + distancePerMove.x;
    }
  }

  function setBottomBorder(mapToGoTo) {
    if (player.location.y === boundaries.bottom) {
      currentMap = mapToGoTo;
      player.location.y = boundaries.top + distancePerMove.y;
    }
  }

  if (currentMap === firstMap) {
    setLeftBorder(waterMap);
    setTopBorder(fireMap);
  } else if (currentMap === fireMap) {
    setBottomBorder(firstMap);
  } else if (currentMap === waterMap) {
    setRightBorder(firstMap);
  }
}

export default {
  battle: battle,
  borders: borders,
  characterSelect: characterSelect,
  fireMap: fireMap,
  firstMap: firstMap,
  gameOver: gameOver,
  inventoryMenu: inventoryMenu,
  mainMenu: mainMenu,
  monsterInventoryMenu: monsterInventoryMenu,
  monsterSelect: monsterSelect,
  startScreen: startScreen,
  waterMap: waterMap,
}
