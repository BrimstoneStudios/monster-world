import Salamander from './../../monsters/salamander';
import Hydra from './../../monsters/hydra';
import GiantAnt from './../../monsters/giant-ant';
import allLevels from './../all-levels';

export default function ( key, player ) {
  if ( key === 'space' ) {
    var monsterSelected;
    if ( player.location.x === 200 ) {
      monsterSelected = new Salamander( 1 );
    } else if ( player.location.x === 300 ) {
      monsterSelected = new Hydra( 1 );
    } else {
      monsterSelected = new GiantAnt( 1 );
    }
    monsterSelected.controller = player;
    player.monsterInventory.push( monsterSelected );
    currentLevel = allLevels.firstLevel;
    player.initLocation();
  }
}
