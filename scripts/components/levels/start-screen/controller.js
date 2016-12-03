var startScreenControls = function ( key, player ) {
  if ( key === 'space' ) {
    levels.currentLevel = levels.characterSelect;
    player.initLocation();
  }
};

var initStartScreen = function () {
  levels.currentLevel = levels.startScreen;
};

initStartScreen();
