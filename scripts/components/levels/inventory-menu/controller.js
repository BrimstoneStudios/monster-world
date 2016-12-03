var setInventoryLevelBoundaries = function () {
  levels.inventoryMenu.boundaries.bottom = levels.inventoryMenu.boundaries.top;
  levels.inventoryMenu.boundaries.bottom += ( ( player.inventory.length - 1 ) * levels.inventoryMenu.movement.y );
};

var inventoryMenuControls = function ( key, player ) {
  switch ( key ) {
    case 'shift':
      levels.currentLevel = levels.mainMenu;
      player.initLocation();
    break;

    case 'space':
      useItem();
      setInventoryLevelBoundaries();
      player.initLocation();
    break;
  }
};
