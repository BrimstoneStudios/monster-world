var setMonsterInventoryLevelBoundaries = function () {
  levels.monsterInventory.boundaries.bottom = levels.monsterInventory.boundaries.top;
  levels.monsterInventory.boundaries.bottom += ( ( player.monsterInventory.length - 1 ) * levels.monsterInventory.movement.y );
};

var monsterInventoryMenuControls = function ( key, player ) {
  switch ( key ) {
    case 'shift':
      levels.monsterInventory.displayStats = false;
      currentLevel = levels.mainMenu;
      player.initLocation();
    break;

    case 'space':
      levels.monsterInventory.displayStats = !levels.monsterInventory.displayStats;
      levels.monsterInventory.displayMonsterIndex = ( player.location.y - levels.monsterInventory.initLocation.y ) / levels.monsterInventory.movement.y;
    break;
  }
};
