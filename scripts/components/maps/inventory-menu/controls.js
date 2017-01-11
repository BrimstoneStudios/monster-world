import allMaps from './../all-maps';

export default function ( key, player ) {
  switch ( key ) {
    case 'shift':
      currentMap = allMaps.mainMenu;
      player.initLocation();
    break;

    case 'space':
      useItem();
      currentMap.setBoundaries();
      player.initLocation();
    break;
  }
}
