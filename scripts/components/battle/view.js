var moveSelector = function ( keyPressed ) {
  var battleState = battle.battleState;
  var bottomLimit = 0;

  var offsetSelector = {
    x: battle.coordinates.middleColumn - battle.coordinates.leftColumn,
    y: battle.coordinates.middleRow - battle.coordinates.topRow
  };

  if ( battleState === 'battleMenuMain' ) {
    bottomLimit = battle.coordinates.selectorMiddleRow;
  } else if ( battleState === 'battleMenuFight' ) {
    bottomLimit = ( 350 + ( ( battle.playerBattleMonster.abilities.length - 1 ) * 40 ) );
  } else if ( battleState === 'invMenu' ) {
    bottomLimit = ( 350 + ( ( itemInventory.length - 1 ) * 40 ) );
  } else if  ( battleState === 'monsterInvMenu' ) {
    bottomLimit = ( 350 + ( ( monsterInventory.length - 1 ) * 40 ) );
  }

  if ( keyPressed === 'left' ) {
    player.location.x -= offsetSelector.x;
    if ( player.location.x < battle.coordinates.selectorLeftColumn ) {
      player.location.x = battle.coordinates.selectorLeftColumn;
    }
  } else if ( keyPressed === 'up' ) {
    player.location.y -= offsetSelector.y;
    if ( player.location.y < battle.coordinates.selectorTopRow ) {
      player.location.y = battle.coordinates.selectorTopRow;
    }
  } else if ( keyPressed === 'right' ) {
    player.location.x += offsetSelector.x;
    if ( player.location.x > battle.coordinates.selectorMiddleColumn ) {
      player.location.x = battle.coordinates.selectorMiddleColumn;
    }
  } else if ( keyPressed === 'down' ) {
    player.location.y += offsetSelector.y;
    if ( player.location.y > bottomLimit ) {
      player.location.y = bottomLimit;
    }
  }
};

var playerLocation = function () {
  var battleState = battle.battleState;
  var coordinates = battle.coordinates;

  if ( battleState === 0 ) {
    player.location.x = state.locX;
    player.location.y = state.locY;
  } else if ( battleState ) {
    player.location.x = coordinates.selectorLeftColumn;
    player.location.y = coordinates.selectorTopRow;
  }
}

// Battle Coordinates based off
//  | Top Left           |   Top Middle-col           |  Top Right
//  | Middle-row Left    |   Middle-row Middle-col    |  Middle-row Right
//  | Bottom Left        |   Bottom Middle-col        |  Bottom Right
// Text and menus for battles

Menu.prototype.renderBattleText = function () {
  var enemy = battle.enemy;
  var battleState = battle.battleState;
  var coordinates = battle.coordinates;

  ctx.font='30px Arial';

  if ( battleState === 'wildIntroText' ) {
    ctx.fillText( 'A wild ' + enemy.name + ' has appeared!', coordinates.leftColumn, coordinates.topRow );
  } else if ( battleState === 'battleMenuMain' ) {
    ctx.fillText( 'Fight', coordinates.leftColumn, coordinates.topRow );
    ctx.fillText( 'Bag', coordinates.middleColumn, coordinates.topRow );
    ctx.fillText( 'Monsters', coordinates.leftColumn, coordinates.middleRow );
    ctx.fillText( 'Run', coordinates.middleColumn, coordinates.middleRow );
  } else if ( battleState === 'playerMove' ) {
    ctx.fillText( 'You hit enemy ' + enemy.name + ' with ' + battle.abilityUsed.name, coordinates.leftColumn, coordinates.topRow );
    // Additional text if not very or super effective
    if ( battle.abilityUsed.damageMod === 'super' ) {
      ctx.fillText( 'It was super effective!', coordinates.leftColumn, coordinates.middleRow );
    } else if ( battle.abilityUsed.damageMod === 'notVery' ) {
      ctx.fillText( 'It was not very effective', coordinates.leftColumn, coordinates.middleRow );
    }
  } else if ( battleState === 'AI' ) {
    ctx.fillText( enemy.name + ' hit you with ' + battle.abilityUsed.name, coordinates.leftColumn, coordinates.topRow );
    if ( battle.abilityUsed.damageMod === 'super' ) {
      ctx.fillText( 'It was super effective!', coordinates.leftColumn, coordinates.middleRow );
    } else if ( battle.abilityUsed.damageMod === 'notVery' ) {
      ctx.fillText( 'It was not very effective', coordinates.leftColumn, coordinates.middleRow );
    }
  } else if ( battleState === 'potionUsed' ) {
    ctx.fillText( 'You used a potion!', coordinates.leftColumn, coordinates.topRow );
  } else if ( battleState === 'caughtMonster' ) {
    ctx.fillText( 'You caught ' + enemy.name + '!', coordinates.leftColumn, coordinates.topRow );
  } else if ( battleState === 'failedCatch' ) {
    ctx.fillText( 'You failed to catch ' + enemy.name + '!', coordinates.leftColumn, coordinates.topRow );
    ctx.fillText( 'Try dealing more damage next time.', coordinates.leftColumn, coordinates.middleRow );
  } else if ( battleState === 'battleMonsterDie' ) {
    if ( battle.playerBattleMonster.currentHp === 0 ) {
      ctx.fillText( battle.playerBattleMonster.name + ' has died!', coordinates.leftColumn, coordinates.topRow );
    } else {
      if ( battle.levelUp === 1 ) {
        ctx.fillText( enemy.name + ' has died!', coordinates.leftColumn, coordinates.topRow );
        ctx.fillText( battle.playerBattleMonster.name + ' has gained a level!', coordinates.leftColumn, coordinates.middleRow );
      } else {
        ctx.fillText( enemy.name + ' has died!', coordinates.leftColumn, coordinates.topRow );
      }
    }
  } else if ( battleState === 'itemDrop' ) {
    for ( let i = 0, j = 0; i < battle.itemsDropped.length; i++, j += 40 ) {
      ctx.fillText( enemy.name + ' dropped a ' + battle.itemsDropped[i] + '!', coordinates.leftColumn, coordinates.topRow + j );
    }
  } else if ( battleState === 'battleMenuFight' ) {
    for ( let i = 0, j = 0; i < battle.playerBattleMonster.abilities.length; i++, j = j + 40 ) {
      ctx.fillText( battle.playerBattleMonster.abilities[i].name, coordinates.leftColumn, coordinates.topRow + j );
    }
  } else if ( battleState === 'monsterInvMenu' ) {
    for ( let i = 0, j = 0; i < monsterInventory.length; i++, j = j + 40 ) {
      ctx.fillText( monsterInventory[i].name, coordinates.leftColumn, coordinates.topRow + j );
    }
  } else if ( battleState === 'invMenu' ) {
    if ( itemInventory.length > 0 ) {
      for ( let i = 0, j = 0; i < itemInventory.length; i++, j = j + 40 ) {
        ctx.fillText( itemInventory[i].name, coordinates.leftColumn, coordinates.topRow + j );
      }
    } else {
      ctx.fillText( 'You have no items to use!', coordinates.leftColumn, coordinates.topRow );
    }
  } else if ( battleState === 'battleFailedRunAway' ) {
    ctx.fillText( 'Escape failed. FIGHT!', coordinates.leftColumn, coordinates.topRow );
  } else if ( battleState === 'battleRunAway' ) {
    ctx.fillText( 'You ran away!? You wimp...', coordinates.leftColumn, coordinates.topRow );
  } else if ( battleState === 'battleWinText' ) {
    ctx.fillText( 'You have defeated ' + enemy.name + '!', coordinates.leftColumn, coordinates.topRow );
  }
};
