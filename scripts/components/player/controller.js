// if ( levels.currentLevel != 'battleLevel') {
// Handles the player input, called on every key press
Player.prototype.handleInput = function ( key ) {
  this.render();


  switch ( levels.currentLevel ) {
    case levels.startScreen:
        startScreenControls( key, player );
        this.locationSetter( key );
    break;

    case levels.characterSelect:
        characterSelectControls( key, player );
        this.locationSetter( key );
    break;

    case levels.monsterSelect:
        monsterSelectControls( key, player );
        this.locationSetter( key );
    break;

    case levels.battleLevel:
        battleControls( key, player );
        this.locationSetter( key );
    break;

    case levels.firstLevel:
    case levels.fireLevel:
    case levels.waterLevel:
        worldControls( key, player );
        this.locationSetter( key );
        if ( key === 'left' || key === 'up' || key === 'right' || key === 'down' ) {
            battleEvent();
        };
        if ( key === 'space' ) {
            npcControls( player );
        }
    break;

    case levels.mainMenu:
        mainMenuControls( key, player );
        this.locationSetter( key );
    break;

    case levels.inventoryMenu:
        inventoryMenuControls( key, player );
        this.locationSetter( key );
    break;

    case levels.monsterInventory:
        monsterInventoryMenuControls( key, player );
        this.locationSetter( key );
    break;

    case levels.gameOver:
        gameOverControls( key, player );
    break;
  }
};
