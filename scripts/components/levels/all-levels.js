import startScreen from './start-screen/start-screen';
import characterSelect from './character-select/character-select';
import monsterSelect from './monster-select/monster-select';
import monsterInventoryMenu from './monster-inventory-menu/monster-inventory-menu';
import inventoryMenu from './inventory-menu/inventory-menu';
import mainMenu from './main-menu/main-menu';
import firstLevel from './world/first-level';
import fireLevel from './world/fire-level';
import waterLevel from './world/water-level';

var borders = function () {
  var setLeftBorder = function (levelToGoTo) {
    if (player.location.x === currentLevel.boundaries.left) {
      currentLevel = levelToGoTo;
      player.location.x = currentLevel.boundaries.right - currentLevel.movement.x;
    }
  };

  var setTopBorder = function (levelToGoTo) {
    if (player.location.y === currentLevel.boundaries.top) {
      currentLevel = levelToGoTo;
      player.location.y = currentLevel.boundaries.bottom - currentLevel.movement.y;
    }
  };

  var setRightBorder = function (levelToGoTo) {
    if (player.location.x === currentLevel.boundaries.right) {
      currentLevel = levelToGoTo;
      player.location.x = currentLevel.boundaries.left + currentLevel.movement.x;
    }
  };

  var setBottomBorder = function (levelToGoTo) {
    if (player.location.y === currentLevel.boundaries.bottom) {
      currentLevel = levelToGoTo;
      player.location.y = currentLevel.boundaries.top + currentLevel.movement.y;
    }
  };

  if (currentLevel === firstLevel) {
    setLeftBorder(waterLevel);
    setTopBorder(fireLevel);
  } else if (currentLevel === fireLevel) {
    setBottomBorder(firstLevel);
  } else if (currentLevel === waterLevel) {
    setRightBorder(firstLevel);
  }
};

export default {
  startScreen: startScreen,
  characterSelect: characterSelect,
  monsterSelect: monsterSelect,
  mainMenu: mainMenu,
  monsterInventoryMenu: monsterInventoryMenu,
  inventoryMenu: inventoryMenu,
  firstLevel: firstLevel,
  fireLevel: fireLevel,
  waterLevel: waterLevel,
  borders: borders,
}
