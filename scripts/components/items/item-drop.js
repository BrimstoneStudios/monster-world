export default function () {
  var possibleItems = battle.enemy.items;

  for ( let i = 0; i < possibleItems.length; i++ ) {
    if ( rng() <= possibleItems[i].dropProbablity ) {
      player.inventory.push( possibleItems[i].item );
      battle.itemsDropped.push( possibleItems[i].item.name );
    }
  }
}
