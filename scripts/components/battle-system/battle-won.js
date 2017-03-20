let battleWon = {
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
  renderText: function () {
    ctx.font = '30px Arial';
    ctx.fillText(
      'You have defeated ' +
      monsterWorld.getCurrentMap().battleSystem.enemy.name + '!',
      monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn,
      monsterWorld.getCurrentMap().battleSystem.coordinates.topRow
    );
    if (monsterWorld.getCurrentMap().battleSystem.levelUp) {
      ctx.fillText(
        monsterWorld.getCurrentMap().battleSystem.playerBattleMonster.name +
        ' has gained a level!',
        monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn,
        monsterWorld.getCurrentMap().battleSystem.coordinates.middleRow
      );
    }
  },
}

export { battleWon as default };
