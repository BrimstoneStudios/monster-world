import battleMenuMain from './battle-menu-main';
import battleWon from './battle-won';
import changeBattleState from './change-battle-state';

export default {
  renderText: function () {
    ctx.font = '30px Arial';
    monsterWorld.getCurrentMap().battleSystem.itemUsed.renderBattleText();
  },
  controls: function (key) {
    if (key === 'space') {
      if (monsterWorld.getCurrentMap().battleSystem.caughtMonster) {
        changeBattleState(battleWon);
      } else {
        changeBattleState(battleMenuMain);
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
