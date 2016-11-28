var useItem = function () {
  for ( let i = 0; i < itemInventory.length; i++ ) {
    if ( levels.currentLevel === levels.battleLevel ) {
      if ( player.location.y === levels.battleLevel.boundaries.top + ( i * 40 ) ) {
        var itemUsed = itemInventory[i];
        itemUsed.func();

        if ( itemUsed.singleUse ) {
          itemInventory.splice( i, 1 );
        }
        return itemUsed.battleState;
      }
    }
  }
}

// Item drop
// refactor so that only certain enemies have certain items to drop
var itemDrop = function () {
  var possibleItems = battle.enemy.items;

  for ( let i = 0; i < possibleItems.length; i++ ) {
    if ( rng() <= possibleItems[i].dropProbablity ) {
      itemInventory.push( possibleItems[i].item )
      battle.itemsDropped.push( possibleItems[i].item.name )
    }
  }
};
