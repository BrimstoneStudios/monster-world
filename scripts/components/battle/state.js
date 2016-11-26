// Controls for the battle system
var battleControls = function ( key, player ) {
  var battleState = state.battle.battleState;
  var playerBattleMonster = state.battle.playerBattleMonster;
  var enemy = state.battle.enemy;

  switch ( battleState ) {
    case 'wildIntroText':
    if ( key === 'space' ) {
      battleState = 'battleMenuMain';
      player.x = 300;
      player.y = 350;
    }
    break;

    case 'battleMonsterDie':
    if ( key === 'space' ) {
      // Return to pre-fight level and location
      state.currentLevel = state.prevLevel;
      player.x = state.locX;
      player.y = state.locY;

      // Reset battle states
      state.levelUp = 0;
      battleState = 'battleMenuMain';
    }
    break;

    case 'playerMove':
    if ( key === 'space' ) {
      player.x = battleTopLeftSelector.x;
      player.y = battleTopLeftSelector.y;
      abilityUsed( enemy );
      battleState = 'AI';
    }
    break;

    case 'AI':
    if ( key === 'space' ) {
      player.x = 300;
      player.y = 350;
      if ( playerBattleMonster.currentHp === 0 ) {
        player.x = battleTopLeftSelector.x;
        player.y = battleTopLeftSelector.y;
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
      if ( player.x === 300 && player.y === 350 ) {
        battleState = 'battleMenuFight';
        player.x = 0;
      } else if ( player.x === 300 && player.y === 420 ) {
        //Monsters inventory in battleMenuMain
        battleState = 'monsterInvMenu';
        player.x = battleTopLeftSelector.x;
        player.y = battleTopLeftSelector.y;
      } else if ( player.x === 530 && player.y === 420 ) {
        //Run in battleMenuMain
        if ( runFromBattle() ) {
          battleState = 'battleRunAway';
        } else {
          battleState = 'battleFailedRunAway';
        }
        player.x = battleTopLeftSelector.x;
        player.y = battleTopLeftSelector.y;
      } else {
        // Inventory in battleMenuMain
        battleState = 'invMenu';
        player.x = battleTopLeftSelector.x;
        player.y = battleTopLeftSelector.y;
        if ( key === 'shift' ) {
          player.x = 0;
          player.y = 0;
        }
      }
    }
    break;

    case 'battleMenuFight':
    if ( key === 'shift' ) {
      battleState = 'battleMenuMain';
      player.x = 300;
      player.y = 350;   
    } else if ( key === 'up' || key === 'down' ) {
      moveSelector( key );
    } else if ( key === 'space' ) {
      abilityUsed( state.battle.playerBattleMonster );
      if ( enemy.currentHp > 0 ) {
        battleState = 'playerMove';
        player.x = battleTopLeftSelector.x;
        player.y = battleTopLeftSelector.y;
      } else {
        battleState = 'battleMonsterDie';
      }
    }
    break;

    case 'monsterInvMenu':
    if ( key === 'space' || key === 'shift' ) {
      battleState = 'battleMenuMain';
      player.x = 300;
      player.y = 350;
    }
    break;
    case 'battleRunAway':
    if ( key === 'space' ) {
      battleState = 'battleMenuMain';
      state.currentLevel = state.prevLevel;
      player.x = state.locX;
      player.y = state.locY;
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
      player.x = 300;
      player.y = 350;
    }
    break

    case 'caughtMonster':
    if ( key === 'space' ) {
      state.currentLevel = state.prevLevel;
      player.x = state.locX;
      player.y = state.locY;
      battleState = 0;
    }
    break

    case 'failedCatch':
    case 'potionUsed':
    if ( key === 'space' ) {
      battleState = 'battleMenuMain';
      player.x = 300;
      player.y = 350;
    }
    break

    case 'battleWinText':
    if ( key === 'space' ) {
      state.currentLevel = state.prevLevel;
      player.x = state.locX;
      player.y = state.locY;
      battleState = 0;
    }
    break;
  } // end of switch
  state.battle.battleState = battleState;
}
