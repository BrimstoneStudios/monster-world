// ------ PLAYER -------
var Player = function () {
  // Initial location for the start screen, the whole start screen image is the player sprite, takes up the whole screen
  this.x = 0;
  this.y = 0;
};

// Update Player based on state
Player.prototype.update = function () {
  // Update the sprite based on the level
  if ( state.currentLevel === 'startScreen' ) {
    this.sprite = 'images/terrain/start-screen.png';
  } else if ( state.currentLevel === 'charSelectLevel' || state.currentLevel === 'monsterSelectLevel' ) {
    this.sprite = 'images/characters/selector.png';
  } else if ( state.currentLevel === 'mainMenu' || state.currentLevel === 'itemsInv' || state.currentLevel === 'monsterInventory' || state.currentLevel === 'battleLevel' ) {
    this.sprite = 'images/characters/menuSelector.png';
  } else if ( state.currentLevel === 'gameOver' ) {
    this.sprite = 'images/characters/gameOver.png';
  } else {
    this.sprite = state.sprite;
  }
};

// Renders the character on the screen based on it's sprite, x and  y location
Player.prototype.render = function () {
  ctx.drawImage( Resources.get( this.sprite ), this.x, this.y );
};

// if ( state.currentLevel != 'battleLevel') {
  // Handles the player input, called on every key press
  Player.prototype.handleInput = function ( key ) {
    this.render();
    var player = this;
    if ( state.currentLevel === 'battleLevel' ) {
      battleControls( key, player );
    } else if ( state.currentLevel === 'startScreen' ) {
    // Controls for the start screen
      switch ( key ) {
        case 'space':
        state.currentLevel = 'charSelectLevel' ;
        this.x = 250;
        this.y = 200;
        break;
        default:
      }
    } else if ( state.currentLevel === 'charSelectLevel' ) { // Controls for the character select level
      switch ( key ) {
        case 'left':
        this.x = this.x - 150;
        if ( this.x < 250 ) {
          this.x = 250;
        }
        break;
        case 'right':
        this.x = this.x + 150;
        if ( this.x > 400 ) {
          this.x = 400;
        }
        break;
        case 'space':
        state.currentLevel = 'monsterSelectLevel';
        if ( this.x === 400 ) {
          state.sprite = 'images/characters/monk.gif';
        } else {
          state.sprite = 'images/characters/deathCaster.gif';
        }
        this.x = 200;
        this.y = 200;
        break;
      }
    } else if ( state.currentLevel === 'monsterSelectLevel' ) { // Controls for the initial monster select level
      switch ( key ) {
        case 'left':
        this.x = this.x - 100;
        if ( this.x < 200 ) {
          this.x = 200;
        }
        break;

        case 'right':
        this.x = this.x + 100;
        if ( this.x > 400 ) {
          this.x = 400;
        }
        break;

        case 'space':
        if ( this.x === 200 ) {
          var drag1 = new Drag1( 1 );
          drag1.controller = 'player';
          monsterInventory.push( drag1 );
        } else if ( this.x === 300 ) {
          var hydra1 = new Hydra1( 1 );
          hydra1.controller = 'player';
          monsterInventory.push( hydra1 );
        } else {
          var wormy1 = new Wormy1( 1 );
          wormy1.controller = 'player';
          monsterInventory.push( wormy1 );
        }
        state.currentLevel = 'firstLevel';
        this.x = 10;
        this.y = 10;
        break;
      }
    } else if ( state.currentLevel === 'mainMenu' ) { // Controls for the main menu
      switch ( key ) {
        case 'shift':
        state.currentLevel = state.prevLevel;
        this.x = state.locX;
        this.y = state.locY;
        break;

        case 'up':
        this.y = this.y -90;
        if ( this.y < 140 ) {
          this.y=157;
        }
        break;

        case 'down':
        this.y = this.y + 90;
        if ( this.y >250 ) {
          this.y = 247;
        }
        break;

        case 'space':
        if ( this.y === 247 ) {
          state.currentLevel = 'monsterInventory';
          this.x = 15;
          this.y = 42;
        } else {
          state.currentLevel = 'itemsInv';
          this.x = 15;
          this.y = 42;
        }
        break;
      }
    } else if ( state.currentLevel === 'gameOver' ) {
      switch ( key ) {
        case 'space':
        location.reload();
        break;
      }
    } else { // Controls for all the world levels
      switch ( key ) {
        case 'shift':
        state.prevLevel = state.currentLevel;
        state.locX = this.x;
        state.locY = this.y;
        state.currentLevel = 'mainMenu';
        this.x = 180;
        this.y = 157;
        break;

        case 'space':
        if ( this.x === healer.x && this.y === healer.y ) {
          monsterInventory.forEach( function ( monster ) {
            monster.currentHp = monster.hp;
          } );
        }
        break;

        case 'left':
        this.x = this.x - 50;
        battleEvent();
        if ( state.currentLevel === 'firstLevel' && this.x < 10 ) {
          state.currentLevel = 'waterLevel';
          this.x = 660;
        } else if ( state.currentLevel ==='secondLevel' && this.x < 10 ) {
          this.x = 10;
          //Changes the level to the startScreen once player reach far left of screen
          state.currentLevel = 'firstLevel';
          this.x = 655;
        } else if ( this.x <10 ) {
          this.x=10;
        }
        break;

        case 'up':
        this.y = this.y - 50;
        battleEvent();
        if ( state.currentLevel === 'firstLevel' && this.y < 10 ) {
          // this.y = 10;
          state.currentLevel = 'fireLevel';
          this.y = 450;
        } else if ( this.y < 10 ) {
          this.y = 10;
        }
        break;

        case 'right':
        this.x = this.x + 50;
        battleEvent();
        if ( state.currentLevel === 'firstLevel' && this.x > 660 ) {
          // this.x = 660;
          //Changes the level to the firstLevel once player reaches far right of screen
          state.currentLevel = 'secondLevel';
          this.x = 10;
        }
        if ( state.currentLevel === 'waterLevel' && this.x > 660 ) {
          this.currentLevel = 'firstLevel';
          this.x = 10;
        } else if ( this.x >660 ) {
          this.x = 660;
        }
        break;

        case 'down':
        this.y = this.y + 50;
        battleEvent();
        if ( state.currentLevel === 'fireLevel' && this.y > 450 ) {
          state.currentLevel = 'firstLevel';
          this.y = 10;
        } else if ( this.y > 450 ) {
          this.y = 450;
        }
        break;
        default:
        break;
      }
    } //End of else

};
