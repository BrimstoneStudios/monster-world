import abilities from './../abilities/abilities';
import changeBattleState from './change-battle-state';
import enemyTurn from './enemy-turn';
import checkWinCondition from './check-win-condition';
import battleWon from './battle-won';
import checkFightWinCondition from './check-win-condition';

export default {
  renderText: function () {
    ctx.font = '30px Arial';
    ctx.fillText('You hit enemy ' + monsterWorld.getCurrentMap().battleSystem.enemy.name + ' with ' + monsterWorld.getCurrentMap().battleSystem.abilityUsed.name, monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn, monsterWorld.getCurrentMap().battleSystem.coordinates.topRow);

    // Additional text if not very or super effective
    if (monsterWorld.getCurrentMap().battleSystem.abilityUsed.damageMod === 'super') {
      ctx.fillText('It was super effective!', monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn, monsterWorld.getCurrentMap().battleSystem.coordinates.middleRow);
    } else if (monsterWorld.getCurrentMap().battleSystem.abilityUsed.damageMod === 'notVery') {
      ctx.fillText('It was not very effective', monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn, monsterWorld.getCurrentMap().battleSystem.coordinates.middleRow);
    }
  },
  controls: function (key) {
    if (key === 'space') {
      if (checkWinCondition(monsterWorld.getCurrentMap().battleSystem.enemy)) {
        monsterWorld.getCurrentMap().battleSystem.playerBattleMonster.gainExp();
        changeBattleState(battleWon);
      } else {
        abilities.useAbility(monsterWorld.getCurrentMap().battleSystem.enemy);
        checkFightWinCondition(monsterWorld.getCurrentMap().battleSystem.playerBattleMonster);
        changeBattleState(enemyTurn);
      }
    }
  },
  movement: {
    x: 0,
    y: 0,
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
