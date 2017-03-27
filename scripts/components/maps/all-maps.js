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
import checkNPCActionable from './check-npc-actionable';
import resolveBattleEvent from './battle/resolve-battle-event';

function borders() {
  const boundaries = monsterWorld.getCurrentMap().movement.boundaries;
  const distance = monsterWorld.getCurrentMap().movement.distance;
  const player = monsterWorld.player;

  function setLeftBorder(mapToGoTo) {
    if (player.location.x === boundaries.left) {
      monsterWorld.setCurrentMap(mapToGoTo);
      player.location.x = boundaries.right - distance.x;
    }
  }

  function setTopBorder(mapToGoTo) {
    if (player.location.y === boundaries.top) {
      monsterWorld.setCurrentMap(mapToGoTo);
      player.location.y = boundaries.bottom - distance.y;
    }
  }

  function setRightBorder(mapToGoTo) {
    if (player.location.x === boundaries.right) {
      monsterWorld.setCurrentMap(mapToGoTo);
      player.location.x = boundaries.left + distance.x;
    }
  }

  function setBottomBorder(mapToGoTo) {
    if (player.location.y === boundaries.bottom) {
      monsterWorld.setCurrentMap(mapToGoTo);
      player.location.y = boundaries.top + distance.y;
    }
  }

  if (monsterWorld.getCurrentMap() === firstMap) {
    setLeftBorder(waterMap);
    setTopBorder(fireMap);
  } else if (monsterWorld.getCurrentMap() === fireMap) {
    setBottomBorder(firstMap);
  } else if (monsterWorld.getCurrentMap() === waterMap) {
    setRightBorder(firstMap);
  }
}

export default {
  battle: battle,
  borders: borders,
  characterSelect: characterSelect,
  checkNPCActionable: checkNPCActionable,
  fireMap: fireMap,
  firstMap: firstMap,
  gameOver: gameOver,
  inventoryMenu: inventoryMenu,
  mainMenu: mainMenu,
  monsterInventoryMenu: monsterInventoryMenu,
  monsterSelect: monsterSelect,
  resolveBattleEvent: resolveBattleEvent,
  startScreen: startScreen,
  waterMap: waterMap,
}
