// Controls for the battle system
var battleControls = function ( key, player ) {
  var battleState = state.battle.battleState;
  var playerBattleMonster = state.battle.playerBattleMonster;
  var enemy = state.battle.enemy;
  var coordinates = state.battle.coordinates;

  switch ( battleState ) {
    case 'wildIntroText':
    if ( key === 'space' ) {
      battleState = 'battleMenuMain';
    }
    break;

    case 'battleMonsterDie':
    if ( key === 'space' ) {
      if ( state.battle.enemy.currentHp === 0 ) {
        battleState = 'battleWinText';
      } else {
        state.currentLevel = state.prevLevel;
        battleState = 0;
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
    if ( key === 'left' || key === 'up' || key === 'right' || key === 'down' ) {
      moveSelector( key );
    } else if ( key === 'space' ) {
      if ( player.x === coordinates.selectorLeftColumn && player.y === coordinates.selectorTopRow ) {
        battleState = 'battleMenuFight';
      } else if ( player.x === coordinates.selectorLeftColumn && player.y === coordinates.selectorMiddleRow ) {
        //Monsters inventory in battleMenuMain
        battleState = 'monsterInvMenu';
      } else if ( player.x === coordinates.selectorMiddleColumn && player.y === coordinates.selectorMiddleRow ) {
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
    } else if ( key === 'up' || key === 'down' ) {
      moveSelector( key );
    } else if ( key === 'space' ) {
      abilityUsed( state.battle.playerBattleMonster );
      if ( enemy.currentHp > 0 ) {
        battleState = 'playerMove';
      } else {
        battleState = 'battleMonsterDie';
      }
    }
    break;

    case 'monsterInvMenu':
    if ( key === 'space' || key === 'shift' ) {
      battleState = 'battleMenuMain';
    }
    break;
    case 'battleRunAway':
    if ( key === 'space' ) {
      battleState = 0;
      state.currentLevel = state.prevLevel;
    }
    break;

    case 'battleFailedRunAway':
    if ( key === 'space' ) {
      battleState = 'AI';
      abilityUsed( enemy );
    }
    break;

    case 'invMenu':
    if ( itemInventory.length > 0 ) {
      if ( key === 'up' || key === 'down' ) {
        moveSelector( key );
      }
    }
    if ( key === 'space' ) {
      battleState = useItem();
    } else if ( key === 'shift' ) {
      battleState = 'battleMenuMain';
    }
    break

    case 'caughtMonster':
    if ( key === 'space' ) {
      state.currentLevel = state.prevLevel;
      battleState = 0;
    }
    break

    case 'failedCatch':
    case 'potionUsed':
    if ( key === 'space' ) {
      battleState = 'battleMenuMain';
    }
    break

    case 'battleWinText':
    if ( key === 'space' ) {
      itemDrop();
      if ( state.battle.itemsDropped.length > 0 ) {
        battleState = 'itemDrop';
      } else {
        state.currentLevel = state.prevLevel;
        battleState = 0;
      }
    }
    break;

    case 'itemDrop':
    if ( key === 'space' ) {
      state.currentLevel = state.prevLevel;
      battleState = 0;
    }
    break;
  } // end of switch
  state.battle.battleState = battleState;

  if ( key === 'space' || key === 'shift' ) {
    selectorLocation();
  }
}
