import allMaps from './../all-maps';
import resolveBattleEvent from './../battle/resolve-battle-event';

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
      if ( this.x === healer.x && this.y === healer.y ) {
        player.monsterInventory.forEach( function ( monster ) {
          monster.currentHp = monster.hp;
        } );
      }
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
