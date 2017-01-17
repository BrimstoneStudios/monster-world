export default function () {
  if (typeof currentMap.initLocation !== 'undefined') {
    this.location.x = currentMap.initLocation.x;
    this.location.y = currentMap.initLocation.y;
  }
}
