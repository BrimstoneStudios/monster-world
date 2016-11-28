// Update Player based on state
Player.prototype.update = function () {
  // Update the sprite based on the level
  if ( typeof levels.currentLevel.sprite !== 'undefined' ) {
    this.sprite = levels.currentLevel.sprite;
  } else {
    this.sprite = this.savedAttributes.sprite;
  }
};

// Renders the character on the screen based on it's sprite, x and  y location
Player.prototype.render = function () {
  ctx.drawImage( Resources.get( this.sprite ), this.location.x, this.location.y );
};

Player.prototype.initLocation = function () {
  if ( typeof levels.currentLevel.initLocation !== 'undefined' ) {
    this.location.x = levels.currentLevel.initLocation.x;
    this.location.y = levels.currentLevel.initLocation.y;
  }
};

Player.prototype.initBorderTransitionLocation = function ( coordinates ) {
  if ( typeof coordinates.x !== 'undefined' ) {
    this.location.x = coordinates.x;
  }
  if ( typeof coordinates.y !== 'undefined' ) {
    this.location.y = coordinates.y;
  }
}

Player.prototype.locationSetter = function ( key ) {
  var borderedLevels;
  if ( typeof levels.currentLevel.borderedLevels !== 'undefined' ) {
    borderedLevels =  levels.currentLevel.borderedLevels;
  } else {
    borderedLevels = false;
  };

  var boundaries = levels.currentLevel.boundaries;
  var movement = levels.currentLevel.movement;

  if ( key === 'left' ) {
    this.location.x -= movement.x;
    if ( this.location.x <= boundaries.left ) {
      this.location.x = boundaries.left;
      if ( typeof borderedLevels.left !== 'undefined' ) {
         this.initBorderTransitionLocation( borderedLevels.left.initLocation );
        levels.currentLevel = levels[borderedLevels.left.levelName];
      }
    }
  } else if ( key === 'up' ) {
    this.location.y -= movement.y;
    if ( this.location.y <= boundaries.top ) {
      this.location.y = boundaries.top;
      if ( typeof borderedLevels.top !== 'undefined' ) {
        this.initBorderTransitionLocation( borderedLevels.top.initLocation );
        levels.currentLevel = levels[borderedLevels.top.levelName];
      }
    }
  } else if ( key === 'right' ) {
    this.location.x += movement.x;
    if ( this.location.x >= boundaries.right ) {
      this.location.x = boundaries.right;
      if ( typeof borderedLevels.right !== 'undefined' ) {
         this.initBorderTransitionLocation( borderedLevels.right.initLocation );
        levels.currentLevel = levels[borderedLevels.right.levelName];
      }
    }
  } else if ( key === 'down' ) {
    this.location.y += movement.y;
    if ( this.location.y >= boundaries.bottom ) {
      this.location.y = boundaries.bottom;
      if ( typeof borderedLevels.bottom !== 'undefined' ) {
        this.initBorderTransitionLocation( borderedLevels.bottom.initLocation );
        levels.currentLevel = levels[borderedLevels.bottom.levelName];
      }
    }
  }
}
