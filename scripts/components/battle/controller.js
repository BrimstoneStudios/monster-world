var battleEvent = function () {
  if ( rng() <= 0 ) {
    // Save the pre-battle state
    player.savedAttributes.lastLevel = levels.currentLevel;
    levels.currentLevel = levels.battleLevel;
    player.savedAttributes.location.x = player.location.x;
    player.savedAttributes.location.y = player.location.y;
    initBattleModel();
    player.location.x = battle.coordinates.selectorLeftColumn;
    player.location.y = battle.coordinates.selectorTopRow;
  }
};

var randomEnemy = function ( prevLevel ) {
  var monsters = player.savedAttributes.lastLevel.monsters;
  var enemyLevel = Math.floor( rng() * ( monsters.maxLevel - monsters.minLevel + 1 ) ) + monsters.minLevel;
  var enemyMonster = monsters.monster[Math.floor( rng() * monsters.monster.length )];
  var enemy = new enemyMonster( enemyLevel );
  return enemy;
};

//function to run from battle when run is selected in the menu
var runFromBattle = function () {
  if ( rng() <= 0.5 ) {
    return true;
  } else {
    return false;
  }
};

var swapMonsters = function () {
  for ( let i = 0; i < monsterInventory.length; i++ ) {
    if ( player.location.y === battle.coordinates.selectorTopRow + ( i * 40 ) ) {
      if ( battle.playerBattleMonster === monsterInventory[i] ) {
        return 'battleMenuMain';
      } else {
        battle.playerBattleMonster = monsterInventory[i];
        abilityUsed( battle.enemy );
        return 'AI'
      }
    }
  }
};

var checkFightWinCondition = function ( defender ) {
  if ( defender.currentHp <= 0 ) {
    defender.currentHp = 0;

    if ( defender.controller === player ) {
      if ( defender instanceof PlayerMon ) {
        gameOver();
        return 0;
      } else {
        for ( let i = 0; i <= monsterInventory.length; i++ ) {
          if ( monsterInventory[i] === defender ) {
            monsterInventory.splice( i, 1 );
          }
        }
         // If there are no more monsters left, create new PlayerMon
        if ( monsterInventory.length === 0 ) {
          var playerMon;
          if ( state.sprite === 'images/characters/monk.gif' ) {
            playerMon = new PlayerMon( 2, 'monk' );
          } else {
            playerMon = new PlayerMon( 2, 'deathCaster' );
          }
          playerMon.controller = player;
          monsterInventory.push( playerMon );
        }
        battle.playerBattleMonster = monsterInventory[0];
      }
    } else {
      // Gain exp
      battle.playerBattleMonster.expGain();
    }
  }
};

// Controls for the battle system
var battleControls = function ( key, player ) {
  var battleState = battle.battleState;
  var playerBattleMonster = battle.playerBattleMonster;
  var enemy = battle.enemy;
  var coordinates = battle.coordinates;

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
        checkFightWinCondition( state.playerBattleMonster );
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
    if ( key === 'left' || key === 'up' || key === 'right' || key === 'down' ) {
      moveSelector( key );
    } else if ( key === 'space' ) {
      if ( player.location.x === coordinates.selectorLeftColumn && player.location.y === coordinates.selectorTopRow ) {
        battleState = 'battleMenuFight';
      } else if ( player.location.x === coordinates.selectorLeftColumn && player.location.y === coordinates.selectorMiddleRow ) {
        //Monsters inventory in battleMenuMain
        battleState = 'monsterInvMenu';
      } else if ( player.location.x === coordinates.selectorMiddleColumn && player.location.y === coordinates.selectorMiddleRow ) {
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
    } else if ( key === 'up' || key === 'down' ) {
      moveSelector( key );
    }
    break;

    case 'battleRunAway':
    if ( key === 'space' ) {
      battleState = 0;
      levels.currentLevel = state.prevLevel;
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
      levels.currentLevel = state.prevLevel;
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
      if ( battle.itemsDropped.length > 0 ) {
        battleState = 'itemDrop';
      } else {
        levels.currentLevel = state.prevLevel;
        battleState = 0;
      }
    }
    break;

    case 'itemDrop':
    if ( key === 'space' ) {
      levels.currentLevel = state.prevLevel;
      battleState = 0;
    }
    break;
  } // end of switch
  battle.battleState = battleState;

  if ( key === 'space' || key === 'shift' ) {
    selectorLocation();
  }
};
