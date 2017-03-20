import changeBattleState from './change-battle-state';
import battleMenuMain from './battle-menu-main';
import itemUsed from './item-used';

export default {
  boundaries: function () {
    return {
      bottom: 350 +
        (player.inventory.length - 1) *
        monsterWorld.getCurrentMap().movement.distance.y,
      left: 30,
      right: 210,
      top: 350,
    }
  },
  controls: function (key) {
    if (key === 'space') {
      monsterWorld.getCurrentMap().battleSystem.caughtMonster = false;
      monsterWorld.items.useItem();
      changeBattleState(itemUsed);
    } else if (key === 'shift') {
      changeBattleState(battleMenuMain);
    }
  },
  movement: {
    x: 0,
    y: 40,
  },
  renderText: function () {
    ctx.font = '30px Arial';
    if (player.inventory.length > 0) {
      for (let i = 0, j = 0; i < player.inventory.length; i++, j += 40) {
        ctx.fillText(
          player.inventory[i].name,
          monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn,
          monsterWorld.getCurrentMap().battleSystem.coordinates.topRow + j
        );
      }
    } else {
      ctx.fillText(
        'You have no items to use!',
        monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn,
        monsterWorld.getCurrentMap().battleSystem.coordinates.topRow
      );
    }
  },
}
