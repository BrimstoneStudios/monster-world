var setBattleBoundaries = function ( keyPressed ) {
  var battleState = battle.state;
  var bottomLimit = levels.battleLevel.boundaries.bottom;
  var rightLimit = levels.battleLevel.boundaries.right;

  if ( battleState === 'battleMenuMain' ) {
    bottomLimit = 390;
    rightLimit = 210;
  } else if ( battleState === 'battleMenuFight' ) {
    bottomLimit = ( levels.battleLevel.boundaries.top + ( ( battle.playerBattleMonster.abilities.length - 1 ) * levels.battleLevel.movement.y ) );
    rightLimit = levels.battleLevel.boundaries.left;
  } else if ( battleState === 'invMenu' ) {
    bottomLimit = ( 350 + ( ( player.inventory.length - 1 ) * levels.battleLevel.movement.y ) );
    rightLimit = levels.battleLevel.boundaries.left;
  } else if  ( battleState === 'monsterInvMenu' ) {
    bottomLimit = ( 350 + ( ( player.monsterInventory.length - 1 ) * levels.battleLevel.movement.y ) );
    rightLimit = levels.battleLevel.boundaries.left;
  } else {
    bottomLimit = levels.battleLevel.boundaries.top;
    rightLimit = levels.battleLevel.boundaries.left;
  }

  levels.battleLevel.boundaries.bottom = bottomLimit;
  levels.battleLevel.boundaries.right = rightLimit;
}
