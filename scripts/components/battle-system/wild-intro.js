import battleMenuMain from './battle-menu-main';
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
  caughtMonster: false,
  controls: function (key) {
    if (key === 'space') {
      changeBattleState(battleMenuMain);
    }
  },
  movement: {
    x: 0,
    y: 0,
  },
  renderText: function () {
    ctx.font = '30px Arial';
    ctx.fillText(
      'A wild ' +
      monsterWorld.getCurrentMap().battleSystem.enemy.name +
      ' has appeared!',
      monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn,
      monsterWorld.getCurrentMap().battleSystem.coordinates.topRow
    );
  },
}
