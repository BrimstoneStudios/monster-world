import abilities from './../abilities/abilities';
import changeBattleState from './change-battle-state';
import playerTurn from './player-turn';
import battleMenuMain from './battle-menu-main';
import checkFightWinCondition from './check-win-condition';

export default {
  renderText: function () {
    ctx.font = '30px Arial';
    for (let i = 0, j = 0; i < currentMap.battleSystem.playerBattleMonster.abilities.length; i++, j += 40) {
      ctx.fillText(currentMap.battleSystem.playerBattleMonster.abilities[i].name, currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.topRow + j);
    }
  },
  controls: function (key) {
    if (key === 'shift') {
      changeBattleState(battleMenuMain);
    } else if (key === 'space') {
      abilities.useAbility(currentMap.battleSystem.playerBattleMonster);
      checkFightWinCondition(currentMap.battleSystem.enemy);
      changeBattleState(playerTurn);
    }
  },
  movement: {
    x: 0,
    y: 40,
  },
  boundaries: function () {
    return {
      left: 30,
      top: 350,
      right: 210,
      bottom: 350 + (currentMap.battleSystem.playerBattleMonster.abilities.length - 1) * currentMap.movement.y,
    }
  },
}
