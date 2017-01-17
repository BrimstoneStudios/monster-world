import allMaps from './../all-maps';
import items from './../../items/items';

export default function (key, player) {
  switch (key) {
    case 'shift':
      currentMap = allMaps.mainMenu;
      player.initLocation();
      break;

    case 'space':
      items.useItem();
      currentMap.setBoundaries();
      player.initLocation();
      break;
  }
}
