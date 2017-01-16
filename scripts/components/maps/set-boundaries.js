
var setBattleBoundaries = function ( keyPressed ) {
  var battleState = battle.state;
  var bottomLimit = levels.battleMap.boundaries.bottom;
  var rightLimit = levels.battleMap.boundaries.right;

  if ( battleState === 'battleMenuMain' ) {
    bottomLimit = 390;
    rightLimit = 210;
  } else if ( battleState === 'battleMenuFight' ) {
    bottomLimit = ( levels.battleMap.boundaries.top + ( ( battle.playerBattleMonster.abilities.length - 1 ) * levels.battleMap.movement.y ) );
    rightLimit = levels.battleMap.boundaries.left;
  } else if ( battleState === 'invMenu' ) {
    bottomLimit = ( 350 + ( ( player.inventory.length - 1 ) * levels.battleMap.movement.y ) );
    rightLimit = levels.battleMap.boundaries.left;
  } else if  ( battleState === 'monsterInvMenu' ) {
    bottomLimit = ( 350 + ( ( player.monsterInventory.length - 1 ) * levels.battleMap.movement.y ) );
    rightLimit = levels.battleMap.boundaries.left;
  } else {
    bottomLimit = levels.battleMap.boundaries.top;
    rightLimit = levels.battleMap.boundaries.left;
  }

  levels.battleMap.boundaries.bottom = bottomLimit;
  levels.battleMap.boundaries.right = rightLimit;
}

