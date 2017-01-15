import elixir from './elixir';
import net from './net';
import potion from './potion';
import allMaps from './../maps/all-maps';

export default {
  elixir: elixir,
  net: net,
  potion: potion,
  useItem: function () {
    for ( let i = 0; i <= player.inventory.length; i++ ) {
      if ( player.location.y === currentMap.boundaries.top + ( i * currentMap.movement.y ) ) {
        var itemUsed = player.inventory[i];
        itemUsed.func();
        if ( itemUsed.singleUse ) {
          player.inventory.splice( i, 1 );
        }
        if ( currentMap === allMaps.battle ) {
          return itemUsed.battleState;
        }
        break;
      }
    }
  },
}
