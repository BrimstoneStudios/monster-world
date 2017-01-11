import startScreen from './start-screen/start-screen';
import characterSelect from './character-select/character-select';
import monsterSelect from './monster-select/monster-select';
import monsterInventoryMenu from './monster-inventory-menu/monster-inventory-menu';
import inventoryMenu from './inventory-menu/inventory-menu';
import mainMenu from './main-menu/main-menu';
import firstMap from './world/first-map';
import fireMap from './world/fire-map';
import waterMap from './world/water-map';

var borders = function () {
  var setLeftBorder = function (mapToGoTo) {
    if (player.location.x === currentMap.boundaries.left) {
      currentMap = mapToGoTo;
      player.location.x = currentMap.boundaries.right - currentMap.movement.x;
    }
  };

  var setTopBorder = function (mapToGoTo) {
    if (player.location.y === currentMap.boundaries.top) {
      currentMap = mapToGoTo;
      player.location.y = currentMap.boundaries.bottom - currentMap.movement.y;
    }
  };

  var setRightBorder = function (mapToGoTo) {
    if (player.location.x === currentMap.boundaries.right) {
      currentMap = mapToGoTo;
      player.location.x = currentMap.boundaries.left + currentMap.movement.x;
    }
  };

  var setBottomBorder = function (mapToGoTo) {
    if (player.location.y === currentMap.boundaries.bottom) {
      currentMap = mapToGoTo;
      player.location.y = currentMap.boundaries.top + currentMap.movement.y;
    }
  };

  if (currentMap === firstMap) {
    setLeftBorder(waterMap);
    setTopBorder(fireMap);
  } else if (currentMap === fireMap) {
    setBottomBorder(firstMap);
  } else if (currentMap === waterMap) {
    setRightBorder(firstMap);
  }
};

export default {
  startScreen: startScreen,
  characterSelect: characterSelect,
  monsterSelect: monsterSelect,
  mainMenu: mainMenu,
  monsterInventoryMenu: monsterInventoryMenu,
  inventoryMenu: inventoryMenu,
  firstMap: firstMap,
  fireMap: fireMap,
  waterMap: waterMap,
  borders: borders,
}
