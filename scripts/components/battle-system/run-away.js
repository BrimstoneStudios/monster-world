import rng from './../rng';
import failedEscape from './failed-escape.js';
import escapedBattle from './escaped-from-battle';
import changeBattleState from './change-battle-state';

var runAwayResult = {
  movement: {
    x: 0,
    y: 0,
  }
};

export default runAwayResult;

(function () {
  if ( rng() <= 1 ) {
  runAwayResult.renderText = function () {
    ctx.font = '30px Arial';
    ctx.fillText( 'You ran away!? You wimp...', currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.topRow );
  };
  runAwayResult.controls = function ( key ) {
    if ( key === 'space' ) {
      currentMap = player.savedAttributes.lastLevel;
      player.location.x = player.savedAttributes.location.x;
      player.location.y = player.savedAttributes.location.y;
    }
  }
  } else {
    runAwayResult.renderText = function () {
      ctx.font = '30px Arial';
      ctx.fillText( 'Escape failed. FIGHT!', currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.topRow );
    };
    runAwayResult.controls = function ( key ) {
      if ( key === 'space' ) {
        // changeBattleState(AITurn);
      }
    };
  }
})();
