// import battleMenuMain from './battle-menu-main';
import changeBattleState from './change-battle-state';

export default {
  renderText: function () {
    ctx.font = '30px Arial';
    for ( let i = 0, j = 0; i < currentMap.battleSystem.playerBattleMonster.abilities.length; i++, j = j + 40 ) {
      ctx.fillText( currentMap.battleSystem.playerBattleMonster.abilities[i].name, currentMap.coordinates.leftColumn, currentMap.coordinates.topRow + j );
    }
  },
  controls: function ( key ) {
    if ( key === 'space' ) {
      // changeBattleState(battleMenuMain);
    }
  },
  movement: {
    x: 0,
    y: 0,
  },
}
