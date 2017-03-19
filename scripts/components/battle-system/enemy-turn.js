import abilities from './../abilities/abilities';
import changeBattleState from './change-battle-state';
import checkWinCondition from './check-win-condition';
import battleMenuMain from './battle-menu-main';


export default {
  renderText: function () {
    ctx.font = '30px Arial';
    ctx.fillText(monsterWorld.getCurrentMap().battleSystem.enemy.name + ' hit you with ' + monsterWorld.getCurrentMap().battleSystem.abilityUsed.name, monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn, monsterWorld.getCurrentMap().battleSystem.coordinates.topRow);
    if (monsterWorld.getCurrentMap().battleSystem.abilityUsed.damageMod === 'super') {
      ctx.fillText('It was super effective!', monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn, monsterWorld.getCurrentMap().battleSystem.coordinates.middleRow);
    } else if (monsterWorld.getCurrentMap().battleSystem.abilityUsed.damageMod === 'notVery') {
      ctx.fillText('It was not very effective', monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn, monsterWorld.getCurrentMap().battleSystem.coordinates.middleRow);
    }
  },
  controls: function (key) {
    if (key === 'space') {
      checkWinCondition(monsterWorld.getCurrentMap().battleSystem.playerBattleMonster);
      if (monsterWorld.getCurrentMap().battleSystem.playerBattleMonster.currentHp === 0) {
        // changeBattleState( playerMonsterDies );
      } else {
        changeBattleState(battleMenuMain);
      }
    }
  },
  movement: {
    x: 0,
    y: 0,
  },
}
