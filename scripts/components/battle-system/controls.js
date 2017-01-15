//  if ( battleState === 'battleMenuMain' ) {
  // bottomLimit = 390;
  // rightLimit = 210;
// }  else if ( battleState === 'battleMenuFight' ) {
//   bottomLimit = ( levels.battleMap.boundaries.top + ( ( battle.playerBattleMonster.abilities.length - 1 ) * levels.battleMap.movement.y ) );
//   rightLimit = levels.battleMap.boundaries.left;
// } else if ( battleState === 'invMenu' ) {
//   bottomLimit = ( 350 + ( ( player.inventory.length - 1 ) * levels.battleMap.movement.y ) );
//   rightLimit = levels.battleMap.boundaries.left;
// } else if  ( battleState === 'monsterInvMenu' ) {
//   bottomLimit = ( 350 + ( ( player.monsterInventory.length - 1 ) * levels.battleMap.movement.y ) );
//   rightLimit = levels.battleMap.boundaries.left;
// } else {
//   bottomLimit = levels.battleMap.boundaries.top;
//   rightLimit = levels.battleMap.boundaries.left;
// }

export default function ( key, player ) {
  var battleState = battle.state;
  var playerBattleMonster = battle.playerBattleMonster;
  var enemy = battle.enemy;
  var coordinates = battle.coordinates;

  setBattleBoundaries( key );

  switch ( battleState ) {

    case 'battleMonsterDie':
      if ( key === 'space' ) {
        if ( battle.enemy.currentHp === 0 ) {
          battleState = 'battleWinText';
        } else {
          checkFightWinCondition( battle.playerBattleMonster );
          battleState = 'battleMenuMain';
        }
      }
    break;

    case 'AI':
      if ( key === 'space' ) {
        if ( playerBattleMonster.currentHp === 0 ) {
          battleState = 'battleMonsterDie';
        } else {
          battleState = 'battleMenuMain';
        }
      }
    break;

    case 'caughtMonster':
      if ( key === 'space' ) {
        currentMap = player.savedAttributes.lastLevel;
        battleState = 0;
      }
    break;

    case 'failedCatch':
    case 'potionUsed':
      if ( key === 'space' ) {
        battleState = 'battleMenuMain';
      }
    break;



    case 'itemDrop':
      if ( key === 'space' ) {
        currentMap = player.savedAttributes.lastLevel;
        battleState = 0;
      }
    break;
  } // end of switch
  if ( battleState !== battle.state ) {
    player.initLocation();
  }
  battle.state = battleState;

  if ( battleState === 0 ) {
    // player.location.x = player.savedAttributes.location.x;
    // player.location.y = player.savedAttributes.location.y;
  }
}
