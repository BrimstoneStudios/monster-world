import rng from './../rng';
import changeBattleState from './change-battle-state';

var runAwayResult = {
  movement: {
    x: 0,
    y: 0,
  },
};

export default runAwayResult;

(function () {
  if (rng() <= 1) {
    runAwayResult.renderText = function () {
      ctx.font = '30px Arial';
      ctx.fillText('You ran away!? You wimp...', monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn, monsterWorld.getCurrentMap().battleSystem.coordinates.topRow);
    };
    runAwayResult.controls = function (key) {
      if (key === 'space') {
        monsterWorld.setCurrentMap(player.savedAttributes.lastLevel);
        player.location.x = player.savedAttributes.location.x;
        player.location.y = player.savedAttributes.location.y;
      }
    }
  } else {
    runAwayResult.renderText = function () {
      ctx.font = '30px Arial';
      ctx.fillText('Escape failed. FIGHT!', monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn, monsterWorld.getCurrentMap().battleSystem.coordinates.topRow);
    };
    runAwayResult.controls = function (key) {
      if (key === 'space') {
        // changeBattleState(AITurn);
      }
    };
  }
})();
