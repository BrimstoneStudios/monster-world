// if ( currentMap != 'battleMap') {
// Handles the player input, called on every key press
export default function (key) {
  this.render();
  currentMap.controls(key, player)
  this.locationSetter(key);
}
