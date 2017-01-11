import startScreen from './start-screen/start-screen';
import characterSelect from './character-select/character-select';
import monsterSelect from './monster-select/monster-select';
import monsterInventoryMenu from './monster-inventory-menu/monster-inventory-menu';
import inventoryMenu from './inventory-menu/inventory-menu';
import mainMenu from './main-menu/main-menu';
import firstLevel from './world/first-level';
import fireLevel from './world/fire-level';

var borders = function () {
  if (currentLevel === firstLevel) {
    if (player.location.y === currentLevel.boundaries.top) {
      currentLevel = fireLevel;
      player.location.y = currentLevel.boundaries.bottom - currentLevel.movement.y;
    }
  } else if (currentLevel === fireLevel) {
    if (player.location.y === currentLevel.boundaries.bottom) {
      currentLevel = firstLevel;
      player.location.y = currentLevel.boundaries.top + currentLevel.movement.y;
    }
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
  borders: borders,
}
