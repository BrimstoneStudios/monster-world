var worldControls = function ( key, player ) {
  switch ( key ) {
    case 'shift':
      player.savedAttributes.lastLevel = levels.currentLevel;
      player.savedAttributes.location.x = player.location.x;
      player.savedAttributes.location.y = player.location.y;
      levels.currentLevel = levels.mainMenu;
      player.initLocation();
    break;

    case 'space':
      if ( this.x === healer.x && this.y === healer.y ) {
        player.monsterInventory.forEach( function ( monster ) {
          monster.currentHp = monster.hp;
        } );
      }
    break;
  }
};
