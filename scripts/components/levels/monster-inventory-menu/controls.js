import allLevels from './../all-levels.js';

export default function ( key, player ) {
  switch ( key ) {
    case 'shift':
      currentLevel.displayStats = false;
      currentLevel = allLevels.mainMenu;
      player.initLocation();
    break;

    case 'space':
      currentLevel.displayStats = !currentLevel.displayStats;
      currentLevel.displayMonsterIndex = ( player.location.y - currentLevel.initLocation.y ) / currentLevel.movement.y;
    break;
  }
}
