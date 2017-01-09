export default {
  name:'Potion',
  singleUse: true,
  battleState: 'potionUsed',
  func: function () {

    if ( currentLevel === levels.battleLevel ) {
      monster = battle.playerBattleMonster;
    } else {
      monster = player.monsterInventory[0];
    }

    monster.currentHp += 10;

    if ( monster.currentHp > monster.hp ) {
        monster.currentHp = monster.hp;
    }
  }
}
