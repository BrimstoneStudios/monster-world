export default {
  name: 'Potion',
  renderBattleText: function () {
    const playerMonster = monsterWorld.getCurrentMap().battleSystem.playerBattleMonster
    const battleCoordinates = monsterWorld.getCurrentMap().battleSystem.coordinates;

    monsterWorld.engine.ctx.fillText(
      playerMonster.name + ' healed for ' + 10 + ' hp.',
      battleCoordinates.leftColumn,
      battleCoordinates.topRow
    );
  },
  singleUse: true,
  useItem: function () {
    let monster;

    if (monsterWorld.getBattleState()) {
      monster = monsterWorld.getCurrentMap().battleSystem.playerBattleMonster;
    } else {
      monster = monsterWorld.player.monsterInventory[0];
    }

    monster.currentHp += 10;

    if (monster.currentHp > monster.hp) {
      monster.currentHp = monster.hp;
    }
  },
}
