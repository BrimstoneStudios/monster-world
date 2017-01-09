var npcControls = function ( player ) {
  for ( let i = 0; i < allNPC.length; i++ ) {
    if ( player.location.x === allNPC[ i ].location.x && player.location.y === allNPC[i].location.y )
      for( let j = 0; j < allNPC[i].location.level.length; j++ ) {
       if ( currentLevel === allNPC[i].location.level[j] ) {
        allNPC[i].func();
      }
    }
  }
};
