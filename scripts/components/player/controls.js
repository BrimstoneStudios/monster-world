import allLevels from './../levels/all-levels';
// if ( currentLevel != 'battleLevel') {
// Handles the player input, called on every key press
export default function ( key ) {

  this.render();

  switch ( currentLevel ) {
    case allLevels.startScreen:
        allLevels.startScreen.controls( key, player );
        this.locationSetter( key );
    break;

    case allLevels.characterSelect:
        characterSelectControls( key, player );
        this.locationSetter( key );
    break;

    case allLevels.monsterSelect:
        monsterSelectControls( key, player );
        this.locationSetter( key );
    break;

    case allLevels.battleLevel:
        battleControls( key, player );
        this.locationSetter( key );
    break;

    case allLevels.firstLevel:
    case allLevels.fireLevel:
    case allLevels.waterLevel:
        worldControls( key, player );
        this.locationSetter( key );
        if ( key === 'left' || key === 'up' || key === 'right' || key === 'down' ) {
            battleEvent();
        };
        if ( key === 'space' ) {
            npcControls( player );
        }
    break;

    case allLevels.mainMenu:
        mainMenuControls( key, player );
        this.locationSetter( key );
    break;

    case allLevels.inventoryMenu:
        inventoryMenuControls( key, player );
        this.locationSetter( key );
    break;

    case allLevels.monsterInventory:
        monsterInventoryMenuControls( key, player );
        this.locationSetter( key );
    break;

    case allLevels.gameOver:
        gameOverControls( key, player );
    break;
  }
};
