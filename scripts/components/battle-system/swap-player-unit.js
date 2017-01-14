default export function () {
  for ( let i = 0; i < player.monsterInventory.length; i++ ) {
    if ( player.location.y === levels.battleMap.boundaries.top + ( i * levels.battleMap.movement.y ) ) {
      if ( battle.playerBattleMonster === player.monsterInventory[i] ) {
        return 'battleMenuMain';
      } else {
        battle.playerBattleMonster = player.monsterInventory[i];
        abilityUsed( battle.enemy );
        return 'AI';
      }
    }
  }
}