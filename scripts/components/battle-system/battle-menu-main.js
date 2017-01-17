import abilitiesMenu from './abilities-menu';
import inventoryMenu from './inventory-menu';
import changeBattleState from './change-battle-state';
import runFromBattle from './run-away';
import monsterInventory from './monster-inventory';


export default {
  renderText: function () {
    ctx.font = '30px Arial';
    ctx.fillText('Fight', currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.topRow);
    ctx.fillText('Bag', currentMap.battleSystem.coordinates.middleColumn, currentMap.battleSystem.coordinates.topRow);
    ctx.fillText('Monsters', currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.middleRow);
    ctx.fillText('Run', currentMap.battleSystem.coordinates.middleColumn, currentMap.battleSystem.coordinates.middleRow);
  },
  controls: function (key) {
    if (key === 'space') {
      if (player.location.x === currentMap.boundaries.left && player.location.y === currentMap.boundaries.top) {
        changeBattleState(abilitiesMenu);
      } else if (player.location.x === currentMap.boundaries.left && player.location.y === currentMap.boundaries.bottom) {
        // Monsters inventory in battleMenuMain
        changeBattleState(monsterInventory);
      } else if (player.location.x === currentMap.boundaries.right && player.location.y === currentMap.boundaries.bottom) {
        // Run in battleMenuMain
        changeBattleState(runFromBattle);
      } else {
        // Inventory in battleMenuMain
        changeBattleState(inventoryMenu);
      }
    }
  },
  movement: {
    x: 180,
    y: 40,
  },
  boundaries: function () {
    return {
      left: 30,
      top: 350,
      right: 210,
      bottom: 390,
    }
  },
}
