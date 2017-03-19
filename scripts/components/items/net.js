import rng from './../rng';

export default {
  name: 'Net',
  singleUse: false,
  useItem: function () {
    if (monsterWorld.getCurrentMap() === monsterWorld.maps.battle) {
      var enemy = monsterWorld.getCurrentMap().battleSystem.enemy;
      var hpPercent = enemy.currentHp / enemy.hp;

      var catchMonster = function (probability) {
        if (rng() <= probability) {
          if (player.monsterInventory[0].name === 'PlayerMon') {
            monsterWorld.getCurrentMap().battleSystem.playerBattleMonster.player = 0;
            player.monsterInventory.pop();
          }

          enemy.controller = player;
          player.monsterInventory.push(enemy);
          monsterWorld.getCurrentMap().battleSystem.caughtMonster = true;
        }
      };

      // Probability of successfully catching a monster increases with decreasing monster health %
      if (hpPercent >= 0.9) {
        catchMonster(1);
      } else if (hpPercent >= 0.6) {
        catchMonster(0.5);
      } else if (hpPercent >= 0.3) {
        catchMonster(0.85);
      } else {
        catchMonster(1);
      }
    }
  },
  renderBattleText: function () {
    var enemy = monsterWorld.getCurrentMap().battleSystem.enemy;
    var coordinates = monsterWorld.getCurrentMap().battleSystem.coordinates;

    if (monsterWorld.getCurrentMap().battleSystem.caughtMonster) {
      ctx.fillText('You caught ' + enemy.name + '!', coordinates.leftColumn, coordinates.topRow);
    } else {
      ctx.fillText('You failed to catch ' + enemy.name + '!', coordinates.leftColumn, coordinates.topRow);
      ctx.fillText('Try dealing more damage next time.', coordinates.leftColumn, coordinates.middleRow);
    }
  },
}
