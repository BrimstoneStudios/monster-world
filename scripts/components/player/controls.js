// import allLevels from './../levels/all-levels';
// if ( currentLevel != 'battleLevel') {
// Handles the player input, called on every key press
export default function ( key ) {

    this.render();
    currentLevel.controls(key, player)
    this.locationSetter( key );

  // switch ( currentLevel ) {
  //   case allLevels.firstLevel:
  //   case allLevels.fireLevel:
  //   case allLevels.waterLevel:
  //       worldControls( key, player );
  //       this.locationSetter( key );
  //       if ( key === 'left' || key === 'up' || key === 'right' || key === 'down' ) {
  //           battleEvent();
  //       };
  //       if ( key === 'space' ) {
  //           npcControls( player );
  //       }
  //   break;
  // }
};
