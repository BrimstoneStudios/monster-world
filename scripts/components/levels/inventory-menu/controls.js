import allLevels from './../all-levels';

export default function ( key, player ) {
  switch ( key ) {
    case 'shift':
      currentLevel = allLevels.mainMenu;
      player.initLocation();
    break;

    case 'space':
      useItem();
      currentLevel.setBoundaries();
      player.initLocation();
    break;
  }
}
