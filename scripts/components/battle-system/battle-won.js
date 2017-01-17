import battleMenuMain from './battle-menu-main';
import changeBattleState from './change-battle-state';

let battleWon = {
  renderText: function () {
    ctx.font = '30px Arial';
    ctx.fillText('You have defeated ' + currentMap.battleSystem.enemy.name + '!', currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.topRow);
    if (currentMap.battleSystem.levelUp) {
      ctx.fillText(currentMap.battleSystem.playerBattleMonster.name + ' has gained a level!', currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.middleRow);
    }
  },
  controls: function (key) {
    if (key === 'space') {
      currentMap.battleSystem.levelUp = false;
      currentMap = player.savedAttributes.lastLevel;
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
