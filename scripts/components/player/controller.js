// if ( levels.currentLevel != 'battleLevel') {
// Handles the player input, called on every key press
Player.prototype.handleInput = function ( key ) {
  this.render();
  var player = this;

  switch ( levels.currentLevel ) {
    case levels.startScreen:
    startScreenControls( key, player );
    break

    case levels.characterSelect:
    characterSelectControls( key, player );
    break

    case levels.monsterSelect:
    monsterSelectControls( key, player );
    break

    case 'battleLevel':
    battleControls( key, player );
    break

    case levels.firstLevel:
    worldControls( key, player );
    break

    case levels.mainMenu:
    mainMenuControls( key, player );
    break
  }

  this.locationSetter( key );
};

// }  else if ( levels.currentLevel === 'gameOver' ) {
//   switch ( key ) {
//     case 'space':
//     location.reload();
//     break;
//   }
// }
