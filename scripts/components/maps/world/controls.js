import allMaps from './../all-maps';
import resolveBattleEvent from './../battle/resolve-battle-event';
import initNPC from './../../npcs/init-npc';

export default function ( key, player ) {
  switch ( key ) {
    case 'shift':
      player.savedAttributes.lastLevel = currentMap;
      player.savedAttributes.location.x = player.location.x;
      player.savedAttributes.location.y = player.location.y;
      currentMap = allMaps.mainMenu;
      player.initLocation();
    break;

    case 'space':
      initNPC();
    break;

    case 'left':
    case 'up':
    case 'right':
    case 'down':
    // this.locationSetter( key );
      resolveBattleEvent();
    break;
    // case 'space':
      // npcControls( player );
    // break;
  }
}
