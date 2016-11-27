var monsterSelectControls = function ( key, player ) {
  if ( key === 'space' ) {
    var monsterSelected;
    if ( player.location.x === 200 ) {
      monsterSelected = new Drag1( 1 );
    } else if ( player.location.x === 300 ) {
      monsterSelected = new Hydra1( 1 );
    } else {
      monsterSelected = new Wormy1( 1 );
    }
    monsterSelected.controller = player;
    player.monsterInventory.push( monsterSelected );
    levels.currentLevel = levels.firstLevel;
    player.location.x = 10;
    player.location.y = 10;
  }
};
