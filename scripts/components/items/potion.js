import allMaps from './../maps/all-maps';

export default {
  name: 'Potion',
  singleUse: true,
  battleState: 'potionUsed',
  func: function () {
    var monster;

    if (currentMap === allMaps.battle) {
      monster = currentMap.battleSystem.playerBattleMonster;
    } else {
      monster = player.monsterInventory[0];
    }

    monster.currentHp += 10;

    if (monster.currentHp > monster.hp) {
      monster.currentHp = monster.hp;
    }
  },
  renderBattleText: function () {
    ctx.fillText(currentMap.battleSystem.playerBattleMonster.name + ' healed for ' + 10 + ' hp.', currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.topRow);
  },
}
