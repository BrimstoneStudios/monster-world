export default function () {
  if ( typeof currentLevel.initLocation !== 'undefined' ) {
    this.location.x = currentLevel.initLocation.x;
    this.location.y = currentLevel.initLocation.y;
  }
}
