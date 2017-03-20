import abilitiesMenu from './abilities-menu';
import inventoryMenu from './inventory-menu';
import changeBattleState from './change-battle-state';
import runFromBattle from './run-away';
import monsterInventory from './monster-inventory';

export default {
  boundaries: function () {
    return {
      bottom: 390,
      left: 30,
      right: 210,
      top: 350,
    }
  },
  controls: function (key) {
    if (key === 'space') {
      if (
        player.location.x === monsterWorld.getCurrentMap().movement.boundaries.left &&
        player.location.y === monsterWorld.getCurrentMap().movement.boundaries.top
      ) {
        changeBattleState(abilitiesMenu);
      } else if (
        player.location.x === monsterWorld.getCurrentMap().movement.boundaries.left &&
        player.location.y === monsterWorld.getCurrentMap().movement.boundaries.bottom
      ) {
        // Monsters inventory in battleMenuMain
        changeBattleState(monsterInventory);
      } else if (
        player.location.x === monsterWorld.getCurrentMap().movement.boundaries.right &&
        player.location.y === monsterWorld.getCurrentMap().movement.boundaries.bottom
      ) {
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
  renderText: function () {
    ctx.font = '30px Arial';
    ctx.fillText(
      'Fight',
      monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn,
      monsterWorld.getCurrentMap().battleSystem.coordinates.topRow
      );
    ctx.fillText(
      'Bag',
      monsterWorld.getCurrentMap().battleSystem.coordinates.middleColumn,
      monsterWorld.getCurrentMap().battleSystem.coordinates.topRow
      );
    ctx.fillText(
      'Monsters',
      monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn,
      monsterWorld.getCurrentMap().battleSystem.coordinates.middleRow
      );
    ctx.fillText(
      'Run',
      monsterWorld.getCurrentMap().battleSystem.coordinates.middleColumn,
      monsterWorld.getCurrentMap().battleSystem.coordinates.middleRow
      );
  },
}
