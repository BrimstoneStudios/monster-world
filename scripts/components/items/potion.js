export default {
  name: 'Potion',
  initVariables: function () {
    if (monsterWorld.getBattleState()) {
      const playerMonster = monsterWorld.getCurrentMap().battleSystem.playerBattleMonster
      const battleCoordinates = monsterWorld.getCurrentMap().battleSystem.coordinates;
    }
  },
  renderBattleText: function () {
    ctx.fillText(playerMonster.name + ' healed for ' + 10 + ' hp.', battleCoordinates.leftColumn, battleCoordinates.topRow);
  },
  singleUse: true,
  useItem: function () {
    let monster;

    if (monsterWorld.getCurrentMap() === monsterWorld.maps.battle) {
      monster = playerMonster;
    } else {
      monster = player.monsterInventory[0];
    }

    monster.currentHp += 10;

    if (monster.currentHp > monster.hp) {
      monster.currentHp = monster.hp;
    }
  },
}
