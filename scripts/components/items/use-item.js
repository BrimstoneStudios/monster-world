export default function () {
  for ( let i = 0; i < player.inventory.length; i++ ) {
    if ( player.location.y === levels.currentLevel.boundaries.top + ( i * levels.currentLevel.movement.y ) ) {
      var itemUsed = player.inventory[i];
      itemUsed.func();

      if ( itemUsed.singleUse ) {
        player.inventory.splice( i, 1 );
      }
      if ( levels.currentLevel === levels.battleLevel ) {
        return itemUsed.battleState;
      }
    }
  }
}
