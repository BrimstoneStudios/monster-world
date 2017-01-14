import changeBattleState from './change-battle-state';
import battleMenuMain from './battle-menu-main';

export default {
  renderText: function () {
    ctx.font = '30px Arial';
    for ( let i = 0, j = 0; i < player.monsterInventory.length; i++, j = j + 40 ) {
      ctx.fillText( player.monsterInventory[i].name, currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.topRow + j );
    }
  },
  controls: function ( key ) {
    if ( key === 'space' ) {
      // battleState = swapMonsters();
    } else if ( key === 'shift' ) {
      changeBattleState( battleMenuMain );
    }
  },
  movement: {
    x: 0,
    y: 40,
  },
}
