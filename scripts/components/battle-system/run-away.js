import rng from './../rng';
import changeBattleState from './change-battle-state';

function runAwaySuccess() {
  if (rng() <= 1) {
    return true
  }
  return false
}

export default {
  controls: function (key) {
    const player = monsterWorld.player;

    if (key === 'space') {
      if (runAwaySuccess()) {
        monsterWorld.setCurrentMap(player.savedAttributes.lastLevel);
        player.location.x = player.savedAttributes.location.x;
        player.location.y = player.savedAttributes.location.y;
      } else {
        changeBattleState();
      }
    }
  },
  movement: {
    x: 0,
    y: 0,
  },
  renderText: function () {
    monsterWorld.engine.ctx.font = '30px Arial';
    if (runAwaySuccess()) {
      monsterWorld.engine.ctx.fillText(
        'You ran away!? You wimp...',
        monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn,
        monsterWorld.getCurrentMap().battleSystem.coordinates.topRow
      );
    } else {
      monsterWorld.engine.ctx.fillText(
        'Escape failed. FIGHT!',
        monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn,
        monsterWorld.getCurrentMap().battleSystem.coordinates.topRow
      );
    }
  },
};
