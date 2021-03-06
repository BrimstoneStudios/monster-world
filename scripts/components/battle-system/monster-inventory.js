import changeBattleState from './change-battle-state';
import battleMenuMain from './battle-menu-main';
import enemyTurn from './enemy-turn';
import swapMonsters from './swap-monsters';
import abilities from './../abilities/abilities';
import checkFightWinCondition from './check-win-condition';

export default {
  boundaries: function () {
    return {
      bottom: 350 +
        (monsterWorld.player.monsterInventory.length - 1) *
        monsterWorld.getCurrentMap().movement.distance.y,
      left: 30,
      right: 210,
      top: 350,
    }
  },
  controls: function (key) {
    if (key === 'space') {
      swapMonsters();
      abilities.useAbility(monsterWorld.getCurrentMap().battleSystem.enemy);
      checkFightWinCondition(monsterWorld.getCurrentMap().battleSystem.playerBattleMonster);
      changeBattleState(enemyTurn);
    } else if (key === 'shift') {
      changeBattleState(battleMenuMain);
    }
  },
  movement: {
    x: 0,
    y: 40,
  },
  renderText: function () {
    const player = monsterWorld.player;

    monsterWorld.engine.ctx.font = '30px Arial';
    for (let i = 0, j = 0; i < player.monsterInventory.length; i++, j += 40) {
      monsterWorld.engine.ctx.fillText(
        player.monsterInventory[i].name,
        monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn,
        monsterWorld.getCurrentMap().battleSystem.coordinates.topRow + j
      );
    }
  },
}
