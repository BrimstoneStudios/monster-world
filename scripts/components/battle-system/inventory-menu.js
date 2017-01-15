import changeBattleState from './change-battle-state';
import battleMenuMain from './battle-menu-main';
import itemUsed from './item-used';
import items from './../items/items';

export default {
  renderText: function () {
    ctx.font = '30px Arial';
    if ( player.inventory.length > 0 ) {
      for ( let i = 0, j = 0; i < player.inventory.length; i++, j = j + 40 ) {
        ctx.fillText( player.inventory[i].name, currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.topRow + j );
      }
    } else {
      ctx.fillText( 'You have no items to use!', currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.topRow );
    }
  },
  controls: function ( key ) {
    if ( key === 'space' ) {
      items.useItem();
      changeBattleState( itemUsed );
    } else if ( key === 'shift' ) {
      changeBattleState( battleMenuMain );
    }
  },
  movement: {
    x: 0,
    y: 40,
  },
}
