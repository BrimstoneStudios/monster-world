import battleMenuMain from './battle-menu-main';
import changeBattleState from './change-battle-state';

let battleWon = {
  renderText: function () {
    ctx.font = '30px Arial';
    ctx.fillText('You have defeated ' + monsterWorld.getCurrentMap().battleSystem.enemy.name + '!', monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn, monsterWorld.getCurrentMap().battleSystem.coordinates.topRow);
    if (monsterWorld.getCurrentMap().battleSystem.levelUp) {
      ctx.fillText(monsterWorld.getCurrentMap().battleSystem.playerBattleMonster.name + ' has gained a level!', monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn, monsterWorld.getCurrentMap().battleSystem.coordinates.middleRow);
    }
  },
  controls: function (key) {
    if (key === 'space') {
      monsterWorld.getCurrentMap().battleSystem.levelUp = false;
      monsterWorld.setCurrentMap(player.savedAttributes.lastLevel);
      player.location.x = player.savedAttributes.location.x;
      player.location.y = player.savedAttributes.location.y;
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

export { battleWon as default };
