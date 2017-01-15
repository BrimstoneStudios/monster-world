import battleMenuMain from './battle-menu-main';
import changeBattleState from './change-battle-state';

export default {
  renderText: function () {
    ctx.font = '30px Arial';
    currentMap.battleSystem.itemUsed.renderBattleText();
  },
  controls: function ( key ) {
    if ( key === 'space' ) {
      changeBattleState( battleMenuMain );
    }
  },
  movement: {
    x: 0,
    y: 0,
  },
}
