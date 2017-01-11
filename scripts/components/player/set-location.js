import allLevels from './../levels/all-levels';

export default function ( key ) {
  var borderedLevels;
  var boundaries = currentLevel.boundaries;
  var movement = currentLevel.movement;
  var locX = this.location.x;
  var locY = this.location.y;

  if ( typeof currentLevel.borderedLevels !== 'undefined' ) {
    borderedLevels =  currentLevel.borderedLevels;
  } else {
    borderedLevels = false;
  }

  if ( key === 'left' ) {
    this.location.x -= movement.x;
    if ( this.location.x <= boundaries.left ) {
      this.location.x = boundaries.left;
      allLevels.borders();
    }
  } else if ( key === 'up' ) {
    this.location.y -= movement.y;
    if ( this.location.y <= boundaries.top ) {
      this.location.y = boundaries.top;
      allLevels.borders();
    }
  } else if ( key === 'right' ) {
    this.location.x += movement.x;
    if ( this.location.x >= boundaries.right ) {
      this.location.x = boundaries.right;
      allLevels.borders();
    }
  } else if ( key === 'down' ) {
    this.location.y += movement.y;
    if ( this.location.y >= boundaries.bottom ) {
      this.location.y = boundaries.bottom;
      allLevels.borders();
    }
  }
}
