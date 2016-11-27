var mainMenuControls = function ( key, player ) {
  switch ( key ) {
    case 'shift':
      levels.currentLevel = player.savedAttributes.lastLevel;
      player.location.x = player.savedAttributes.location.x;
      player.location.y = player.savedAttributes.location.y;
    break;

    case 'space':
      if ( player.location.y === 247 ) {
        levels.currentLevel = levels.monsterInventory;
      } else {
        levels.currentLevel = levels.itemsInventory;
      }
      player.location.x = 15;
      player.location.y = 42;
    break;
  }
};
