import allLevels from './../all-levels';

export default function ( key, player ) {
  switch ( key ) {
    case 'shift':
      currentLevel = player.savedAttributes.lastLevel;
      player.location.x = player.savedAttributes.location.x;
      player.location.y = player.savedAttributes.location.y;
    break;

    case 'space':
      if ( player.location.y === 247 ) {
        currentLevel = allLevels.monsterInventoryMenu;
        currentLevel.setBoundaries();
      } else {
        currentLevel = allLevels.itemInventory;
        // setInventoryLevelBoundaries();
      }
      player.initLocation();
    break;
  }
}
