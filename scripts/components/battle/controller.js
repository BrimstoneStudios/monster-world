var battleEvent = function () {
  if ( rng() <= 1 ) {
    // Save the pre-battle state
    player.savedAttributes.lastLevel = levels.currentLevel;
    player.savedAttributes.location.x = player.location.x;
    player.savedAttributes.location.y = player.location.y;
    levels.currentLevel = levels.battleLevel;
    initBattleModel();
    player.initLocation();
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
  for ( let i = 0; i < player.monsterInventory.length; i++ ) {
    if ( player.location.y === levels.battleLevel.boundaries.top + ( i * levels.battleLevel.movement.y ) ) {
      if ( battle.playerBattleMonster === player.monsterInventory[i] ) {
        return 'battleMenuMain';
      } else {
        battle.playerBattleMonster = player.monsterInventory[i];
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
        for ( let i = 0; i <= player.monsterInventory.length; i++ ) {
          if ( player.monsterInventory[i] === defender ) {
            player.monsterInventory.splice( i, 1 );
          }
        }
         // If there are no more monsters left, create new PlayerMon
        if ( player.monsterInventory.length === 0 ) {
          var playerMon;
          if ( player.savedAttributes.sprite === 'images/characters/monk.gif' ) {
            playerMon = new PlayerMon( 2, 'monk' );
          } else {
            playerMon = new PlayerMon( 2, 'deathCaster' );
          }
          playerMon.controller = player;
          player.monsterInventory.push( playerMon );
        }
        battle.playerBattleMonster = player.monsterInventory[0];
      }
    } else {
      // Gain exp
      battle.playerBattleMonster.expGain();
    }
  }
};

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
  } else if ( battleState === 'wildIntroText' ) {
    bottomLimit = levels.battleLevel.boundaries.top;
    rightLimit = levels.battleLevel.boundaries.left;
  }

  levels.battleLevel.boundaries.bottom = bottomLimit;
  levels.battleLevel.boundaries.right = rightLimit;
};

// Controls for the battle system
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
      levels.currentLevel = player.savedAttributes.lastLevel;
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
    break

    case 'caughtMonster':
    if ( key === 'space' ) {
      levels.currentLevel = player.savedAttributes.lastLevel;
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
        levels.currentLevel = player.savedAttributes.lastLevel;
        battleState = 0;
      }
    }
    break;

    case 'itemDrop':
    if ( key === 'space' ) {
      levels.currentLevel = player.savedAttributes.lastLevel;
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
