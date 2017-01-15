import allMaps from './../maps/all-maps';

export default {
  name:'Potion',
  singleUse: true,
  battleState: 'potionUsed',
  func: function () {
    var monster;
    if ( currentMap === allMaps.battle ) {
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
