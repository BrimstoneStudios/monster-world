import allMaps from './../all-maps.js';

export default function ( key, player ) {
  switch ( key ) {
    case 'shift':
      currentMap.displayStats = false;
      currentMap = allMaps.mainMenu;
      player.initLocation();
    break;

    case 'space':
      currentMap.displayStats = !currentMap.displayStats;
      currentMap.displayMonsterIndex = ( player.location.y - currentMap.initLocation.y ) / currentMap.movement.y;
    break;
  }
}
