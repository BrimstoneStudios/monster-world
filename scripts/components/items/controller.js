var useItem = function () {
  for ( let i = 0; i < itemInventory.length; i++ ) {
    if ( player.y === 350 + ( i * 40 ) ) {
      var itemUsed = itemInventory[i];
      itemUsed.func();

      if ( itemUsed.singleUse ) {
        itemInventory.splice( i, 1 );
      }

      player.y = 350;
      if ( state.currentLevel === 'battleLevel' ) {
        return itemUsed.battleState;
      }
    }
  }
}

// Item drop
// refactor so that only certain enemies have certain items to drop
var itemDrop = function () {
  var possibleItems = state.battle.enemy.items;

  for ( let i = 0; i < possibleItems.length; i++ ) {
    if ( rng() <= possibleItems[i].dropProbablity ) {
      itemInventory.push( possibleItems[i].item )
      state.battle.itemsDropped.push( possibleItems[i].item.name )
    }
  }
};
