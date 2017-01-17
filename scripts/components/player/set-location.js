import allMaps from './../maps/all-maps';

export default function (key) {
  var boundaries = currentMap.boundaries;
  var movement = currentMap.movement;

  if (key === 'left') {
    this.location.x -= movement.x;
    if (this.location.x <= boundaries.left) {
      this.location.x = boundaries.left;
      allMaps.borders();
    }
  } else if (key === 'up') {
    this.location.y -= movement.y;
    if (this.location.y <= boundaries.top) {
      this.location.y = boundaries.top;
      allMaps.borders();
    }
  } else if (key === 'right') {
    this.location.x += movement.x;
    if (this.location.x >= boundaries.right) {
      this.location.x = boundaries.right;
      allMaps.borders();
    }
  } else if (key === 'down') {
    this.location.y += movement.y;
    if (this.location.y >= boundaries.bottom) {
      this.location.y = boundaries.bottom;
      allMaps.borders();
    }
  }
}
