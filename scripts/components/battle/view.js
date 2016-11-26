var moveSelector = function ( keyPressed ) {
  var limit = {
   left: 0,
   top: 0,
   right: 0,
   bottom: 0
  };

  var offsetSelector = {
    x: 0,
    y: 0
  };

  if ( state.battle.battleState === 'battleMenuMain' ) {
    limit.left = 300;
    limit.top = 350;
    limit.right = 530;
    limit.bottom = 420;
    offsetSelector.x = 230;
    offsetSelector.y = 70
  } else if ( state.battle.battleState === 'battleMenuFight' ) {
    limit.top = 350;
    limit.bottom = ( 350 + ( ( state.battle.playerBattleMonster.abilities.length - 1 ) * 40 ) );
    offsetSelector.y = 40
  } else if ( state.battle.battleState === 'invMenu' ) {
    limit.top = 350;
    limit.bottom = ( 350 + ( ( itemInventory.length - 1 ) * 40 ) );
    offsetSelector.y = 40

  }

  if ( keyPressed === 'left' ) {
    player.x -= offsetSelector.x;
    if ( player.x < limit.left ) {
      player.x = limit.left;
    }
  } else if ( keyPressed === 'up' ) {
    player.y -= offsetSelector.y;
    if ( player.y < limit.top ) {
      player.y = limit.top;
    }
  } else if ( keyPressed === 'right' ) {
    player.x += offsetSelector.x;
    if ( player.x > limit.right ) {
      player.x = limit.right;
    }
  } else if ( keyPressed === 'down' ) {
    player.y += offsetSelector.y;
    if ( player.y > limit.bottom ) {
      player.y = limit.bottom;
    }
  }
};