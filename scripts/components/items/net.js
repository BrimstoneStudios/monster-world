import rng from './../rng';

export default {
  catchMonster: function (probability) {
    const enemy = monsterWorld.getCurrentMap().battleSystem.enemy;

    if (rng() <= probability) {
      if (monsterWorld.player.monsterInventory[0].name === 'PlayerMon') {
        monsterWorld.getCurrentMap().battleSystem.playerBattleMonster.player = 0;
        monsterWorld.player.monsterInventory.pop();
      }

      enemy.controller = monsterWorld.player;
      monsterWorld.player.monsterInventory.push(enemy);
      monsterWorld.getCurrentMap().battleSystem.caughtMonster = true;
    }
  },
  name: 'Net',
  renderBattleText: function () {
    var enemy = monsterWorld.getCurrentMap().battleSystem.enemy;
    var coordinates = monsterWorld.getCurrentMap().battleSystem.coordinates;

    if (monsterWorld.getCurrentMap().battleSystem.caughtMonster) {
      monsterWorld.engine.ctx.fillText('You caught ' + enemy.name + '!', coordinates.leftColumn, coordinates.topRow);
    } else {
      monsterWorld.engine.ctx.fillText(
        'You failed to catch ' + enemy.name + '!',
        coordinates.leftColumn,
        coordinates.topRow
      );
      monsterWorld.engine.ctx.fillText(
        'Try dealing more damage next time.',
        coordinates.leftColumn,
        coordinates.middleRow
      );
    }
  },
  singleUse: false,
  useItem: function () {
    if (monsterWorld.getCurrentMap() === monsterWorld.maps.battle) {
      const enemy = monsterWorld.getCurrentMap().battleSystem.enemy;
      const hpPercent = enemy.currentHp / enemy.hp;

      // Probability of successfully catching a monster increases with decreasing monster health %
      if (hpPercent >= 0.9) {
        this.catchMonster(1);
      } else if (hpPercent >= 0.6) {
        this.catchMonster(0.5);
      } else if (hpPercent >= 0.3) {
        this.catchMonster(0.85);
      } else {
        this.catchMonster(1);
      }
    }
  },
}
