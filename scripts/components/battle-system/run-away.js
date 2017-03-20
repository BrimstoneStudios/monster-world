import rng from './../rng';
import changeBattleState from './change-battle-state';

export default {
  controls: function (key) {
    if (key === 'space') {
      if (this.runAwaySuccess()) {
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
    ctx.font = '30px Arial';
    if (this.runAwaySuccess()) {
      ctx.fillText(
        'You ran away!? You wimp...',
        monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn,
        monsterWorld.getCurrentMap().battleSystem.coordinates.topRow
      );
    } else {
      ctx.fillText(
        'Escape failed. FIGHT!',
        monsterWorld.getCurrentMap().battleSystem.coordinates.leftColumn,
        monsterWorld.getCurrentMap().battleSystem.coordinates.topRow
      );
    }
  },
  runAwaySuccess: function () {
    if (rng() <= 1) {
      return true
    }
    return false
  },
};
