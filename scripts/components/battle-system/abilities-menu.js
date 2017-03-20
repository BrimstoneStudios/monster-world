import abilities from './../abilities/abilities';
import changeBattleState from './change-battle-state';
import playerTurn from './player-turn';
import battleMenuMain from './battle-menu-main';
import checkFightWinCondition from './check-win-condition';

export default {
  boundaries: function () {
    return {
      bottom: 350 +
      (monsterWorld.getCurrentMap().battleSystem.playerBattleMonster.abilities.length - 1) *
      monsterWorld.getCurrentMap().movement.distance.y,
      left: 30,
      right: 210,
      top: 350,
    }
  },
  controls: function (key) {
    if (key === 'shift') {
      changeBattleState(battleMenuMain);
    } else if (key === 'space') {
      abilities.useAbility(monsterWorld.getCurrentMap().battleSystem.playerBattleMonster);
      checkFightWinCondition(monsterWorld.getCurrentMap().battleSystem.enemy);
      changeBattleState(playerTurn);
    }
  },
  movement: {
    x: 0,
    y: 40,
  },
  renderText: function () {
    ctx.font = '30px Arial';
    for (
      let i = 0, j = 0;
      i < monsterWorld.getCurrentMap().battleSystem.playerBattleMonster.abilities.length;
      i++, j += 40
    ) {
      ctx.fillText(
        monsterWorld.getCurrentMap().battleSystem.playerBattleMonster.abilities[i].name,
        monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn,
        monsterWorld.getCurrentMap().battleSystem.coordinates.topRow + j
      );
    }
  },
}
