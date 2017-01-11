// import allLevels from './../levels/all-levels';
// if ( currentLevel != 'battleLevel') {
// Handles the player input, called on every key press
export default function ( key ) {
    this.render();
    currentLevel.controls(key, player)
    this.locationSetter( key );
}
