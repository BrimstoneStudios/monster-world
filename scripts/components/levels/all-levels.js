import startScreen from './start-screen/start-screen';
import characterSelect from './character-select/character-select';
import monsterSelect from './monster-select/monster-select';
import monsterInventoryMenu from './monster-inventory-menu/monster-inventory-menu';
import inventoryMenu from './inventory-menu/inventory-menu';
import mainMenu from './main-menu/main-menu';
import firstLevel from './world/first-level';
import fireLevel from './world/fire-level';


var borders function () {
  firstLevel.borders = {
    top: fireLevel,
    // left: waterLevel,
  }
};

var checkBorders function () {
  if ( player.location.x === currentLevel.boundaries.right ) {
    currentLevel = currentLevel.boundaries.right;
  } else if ( player.location.x === currentLevel.boundaries.left ) {
    currentLevel = currentLevel.boundaries.left;
  } else if ( player.location.y === currentLevel.boundaries.top ) {
    currentLevel = currentLevel.boundaries.top;
  } else if ( player.location.y === currentLevel.boundaries.bottom ) {
    currentLevel = currentLevel.boundaries.bottom;
  }
}

export default {
  startScreen: startScreen,
  characterSelect: characterSelect,
  monsterSelect: monsterSelect,
  mainMenu: mainMenu,
  monsterInventoryMenu: monsterInventoryMenu,
  inventoryMenu: inventoryMenu,
  firstLevel: firstLevel,
  fireLevel: fireLevel,
}
