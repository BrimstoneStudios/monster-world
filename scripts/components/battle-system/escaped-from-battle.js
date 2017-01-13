import battleMenuMain from './battle-menu-main';
import changeBattleState from './change-battle-state';

export default {
  renderText: function () {
    ctx.font = '30px Arial';
    ctx.fillText( 'You ran away!? You wimp...', currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.topRow );
  },
  controls: function ( key ) {
    if ( key === 'space' ) {
      currentMap = player.savedAttributes.lastLevel;
      player.location.x = player.savedAttributes.location.x;
      player.location.y = player.savedAttributes.location.y;
    }
  },
  movement: {
    x: 0,
    y: 0,
  },
}
