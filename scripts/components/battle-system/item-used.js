import battleMenuMain from './battle-menu-main';
import battleWon from './battle-won';
import changeBattleState from './change-battle-state';

export default {
  renderText: function () {
    ctx.font = '30px Arial';
    currentMap.battleSystem.itemUsed.renderBattleText();
  },
  controls: function ( key ) {
    if ( key === 'space' ) {
      if ( currentMap.battleSystem.caughtMonster ) {
        changeBattleState( battleWon );
      } else {
        changeBattleState( battleMenuMain );
      }
    }
  },
  movement: {
    x: 0,
    y: 0,
  },
}
