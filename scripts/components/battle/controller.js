//  if ( battleState === 'battleMenuMain' ) {
  // bottomLimit = 390;
  // rightLimit = 210;
// }  else if ( battleState === 'battleMenuFight' ) {
//   bottomLimit = ( levels.battleLevel.boundaries.top + ( ( battle.playerBattleMonster.abilities.length - 1 ) * levels.battleLevel.movement.y ) );
//   rightLimit = levels.battleLevel.boundaries.left;
// } else if ( battleState === 'invMenu' ) {
//   bottomLimit = ( 350 + ( ( player.inventory.length - 1 ) * levels.battleLevel.movement.y ) );
//   rightLimit = levels.battleLevel.boundaries.left;
// } else if  ( battleState === 'monsterInvMenu' ) {
//   bottomLimit = ( 350 + ( ( player.monsterInventory.length - 1 ) * levels.battleLevel.movement.y ) );
//   rightLimit = levels.battleLevel.boundaries.left;
// } else {
//   bottomLimit = levels.battleLevel.boundaries.top;
//   rightLimit = levels.battleLevel.boundaries.left;
// }


var battleControls = function ( key, player ) {
  var battleState = battle.state;
  var playerBattleMonster = battle.playerBattleMonster;
  var enemy = battle.enemy;
  var coordinates = battle.coordinates;

  setBattleBoundaries( key );

  switch ( battleState ) {
    case 'wildIntroText':
      if ( key === 'space' ) {
        battleState = 'battleMenuMain';
      }
    break;

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

    case 'playerMove':
      if ( key === 'space' ) {
        abilityUsed( enemy );
        battleState = 'AI';
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

    case 'battleMenuMain':
      if ( key === 'space' ) {
        if ( player.location.x === levels.battleLevel.boundaries.left && player.location.y === levels.battleLevel.boundaries.top ) {
          battleState = 'battleMenuFight';
        } else if ( player.location.x === levels.battleLevel.boundaries.left && player.location.y === levels.battleLevel.boundaries.bottom ) {
          //Monsters inventory in battleMenuMain
          battleState = 'monsterInvMenu';
        } else if ( player.location.x === levels.battleLevel.boundaries.right && player.location.y === levels.battleLevel.boundaries.bottom ) {
          //Run in battleMenuMain
          if ( runFromBattle() ) {
            battleState = 'battleRunAway';
          } else {
            battleState = 'battleFailedRunAway';
          }
        } else {
          // Inventory in battleMenuMain
          battleState = 'invMenu';
        }
      }
    break;

    case 'battleMenuFight':
    if ( key === 'shift' ) {
      battleState = 'battleMenuMain';
    } else if ( key === 'space' ) {
      abilityUsed( battle.playerBattleMonster );
      if ( enemy.currentHp > 0 ) {
        battleState = 'playerMove';
      } else {
        battleState = 'battleMonsterDie';
      }
    }
    break;

    case 'monsterInvMenu':
    if ( key === 'space' ) {
      battleState = swapMonsters();
    } else if ( key === 'shift' ) {
      battleState = 'battleMenuMain';
    }
    break;

    case 'battleRunAway':
      if ( key === 'space' ) {
        battleState = 0;
        currentMap
 = player.savedAttributes.lastLevel;
      }
    break;

    case 'battleFailedRunAway':
      if ( key === 'space' ) {
        battleState = 'AI';
        abilityUsed( enemy );
      }
    break;

    case 'invMenu':
      if ( key === 'space' ) {
        battleState = useItem();
      } else if ( key === 'shift' ) {
        battleState = 'battleMenuMain';
      }
    break;

    case 'caughtMonster':
      if ( key === 'space' ) {
        currentMap
 = player.savedAttributes.lastLevel;
        battleState = 0;
      }
    break;

    case 'failedCatch':
    case 'potionUsed':
      if ( key === 'space' ) {
        battleState = 'battleMenuMain';
      }
    break;

    case 'battleWinText':
      if ( key === 'space' ) {
        itemDrop();
        if ( battle.itemsDropped.length > 0 ) {
          battleState = 'itemDrop';
        } else {
          currentMap
 = player.savedAttributes.lastLevel;
          battleState = 0;
        }
      }
    break;

    case 'itemDrop':
      if ( key === 'space' ) {
        currentMap
 = player.savedAttributes.lastLevel;
        battleState = 0;
      }
    break;
  } // end of switch
  if ( battleState !== battle.state ) {
    player.initLocation();
  }
  battle.state = battleState;

  if ( battleState === 0 ) {
    player.location.x = player.savedAttributes.location.x;
    player.location.y = player.savedAttributes.location.y;
  }
};
