import rng from './../rng';

export default {
  catchMonster: function () {
    const enemy = monsterWorld.getCurrentMap().battleSystem.enemy;

    if (monsterWorld.player.monsterInventory[0].name === 'PlayerMon') {
      monsterWorld.getCurrentMap().battleSystem.playerBattleMonster.player = 0;
      monsterWorld.player.monsterInventory.pop();
    }

    enemy.controller = monsterWorld.player;
    monsterWorld.player.monsterInventory.push(enemy);
    monsterWorld.getCurrentMap().battleSystem.caughtMonster = true;
  },
  name: 'Net',
  probabilityOfCatch: function (hp) {
    return -2.8571 * hp + 1;
  },
  renderBattleText: function () {
    var enemy = monsterWorld.getCurrentMap().battleSystem.enemy;
    var coordinates = monsterWorld.getCurrentMap().battleSystem.coordinates;

    if (monsterWorld.getCurrentMap().battleSystem.caughtMonster) {
      monsterWorld.engine.ctx.fillText(
        'You caught ' + enemy.name + '!',
        coordinates.leftColumn,
        coordinates.topRow);
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

      if (rng() <= this.probabilityOfCatch(hpPercent)) {
        this.catchMonster();
      }
    }
  },
}
