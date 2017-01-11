export default function () {
  for ( let i = 0; i < player.inventory.length; i++ ) {
    if ( player.location.y === currentMap
.boundaries.top + ( i * currentMap
.movement.y ) ) {
      var itemUsed = player.inventory[i];
      itemUsed.func();

      if ( itemUsed.singleUse ) {
        player.inventory.splice( i, 1 );
      }
      if ( currentMap
 === levels.battleLevel ) {
        return itemUsed.battleState;
      }
    }
  }
}
