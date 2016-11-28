var useItem = function () {
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
};

var itemDrop = function () {
  var possibleItems = battle.enemy.items;

  for ( let i = 0; i < possibleItems.length; i++ ) {
    if ( rng() <= possibleItems[i].dropProbablity ) {
      player.inventory.push( possibleItems[i].item );
      battle.itemsDropped.push( possibleItems[i].item.name );
    }
  }
};
