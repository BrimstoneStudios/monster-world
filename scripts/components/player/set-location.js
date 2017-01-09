import allLevels from './../levels/all-levels';

export default function ( key ) {
  var borderedLevels;
  if ( typeof currentLevel.borderedLevels !== 'undefined' ) {
    borderedLevels =  currentLevel.borderedLevels;
  } else {
    borderedLevels = false;
  }

  var boundaries = currentLevel.boundaries;
  var movement = currentLevel.movement;

  if ( key === 'left' ) {
    this.location.x -= movement.x;
    if ( this.location.x <= boundaries.left ) {
      this.location.x = boundaries.left;
      if ( typeof borderedLevels.left !== 'undefined' ) {
         this.initBorderTransitionLocation( borderedLevels.left.initLocation );
        currentLevel = levels[borderedLevels.left.levelName];
      }
    }
  } else if ( key === 'up' ) {
    this.location.y -= movement.y;
    if ( this.location.y <= boundaries.top ) {
      this.location.y = boundaries.top;
      if ( typeof borderedLevels.top !== 'undefined' ) {
        this.initBorderTransitionLocation( borderedLevels.top.initLocation );
        currentLevel = levels[borderedLevels.top.levelName];
      }
    }
  } else if ( key === 'right' ) {
    this.location.x += movement.x;
    if ( this.location.x >= boundaries.right ) {
      this.location.x = boundaries.right;
      if ( typeof borderedLevels.right !== 'undefined' ) {
         this.initBorderTransitionLocation( borderedLevels.right.initLocation );
        currentLevel = levels[borderedLevels.right.levelName];
      }
    }
  } else if ( key === 'down' ) {
    this.location.y += movement.y;
    if ( this.location.y >= boundaries.bottom ) {
      this.location.y = boundaries.bottom;
      if ( typeof borderedLevels.bottom !== 'undefined' ) {
        this.initBorderTransitionLocation( borderedLevels.bottom.initLocation );
        currentLevel = levels[borderedLevels.bottom.levelName];
      }
    }
  }
}
