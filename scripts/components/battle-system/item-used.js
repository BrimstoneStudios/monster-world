import battleMenuMain from './battle-menu-main';
import battleWon from './battle-won';
import changeBattleState from './change-battle-state';

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
  renderText: function () {
    monsterWorld.engine.ctx.font = '30px Arial';
    monsterWorld.getCurrentMap().battleSystem.itemUsed.renderBattleText();
  },
}
