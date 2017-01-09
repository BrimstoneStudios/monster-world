import Salamander from './../../monsters/salamander';

export default function ( key, player ) {
  if ( key === 'space' ) {
    var monsterSelected;
    if ( player.location.x === 200 ) {
      monsterSelected = new Salamander( 1 );
    } else if ( player.location.x === 300 ) {
      monsterSelected = new Hydra1( 1 );
    } else {
      monsterSelected = new Wormy1( 1 );
    }
    monsterSelected.controller = player;
    player.monsterInventory.push( monsterSelected );
    levels.currentLevel = levels.firstLevel;
    player.initLocation();
  }
}
