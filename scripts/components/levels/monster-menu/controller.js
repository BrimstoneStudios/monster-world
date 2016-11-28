var setMonsterInventoryLevelBoundaries = function () {
  levels.monsterInventory.boundaries.bottom = levels.monsterInventory.boundaries.top;
  levels.monsterInventory.boundaries.bottom += ( ( player.inventory.length - 1 ) * levels.monsterInventory.movement.y );
};

var monsterInventoryMenuControls = function ( key, player ) {
  switch ( key ) {
    case 'shift':
      levels.monsterInventory.displayStats = false;
      levels.currentLevel = levels.mainMenu;
      player.initLocation();
    break;

    case 'space':
      levels.monsterInventory.displayStats = !levels.monsterInventory.displayStats;
      levels.monsterInventory.displayMonsterIndex = ( levels.monsterInventory.initLocation.y - player.location.y ) / levels.monsterInventory.movement.y;
    break;
  }
};
