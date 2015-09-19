// State variable object
var state = {};

// ------ LEVEL -------
state.currentLevel = 'startScreen';

// ------ MONSTERS -------

// ------ CHARACTERS -------
var Character = function() {
};

// ------ NPCs -------
// Enemies our player must avoid
var NPC = function() {
  // Variables applied to each of our instances go here
  this.sprite = mK;
  this.x= 20;
  this.y = 20;
};

// Update the NPC's position, required method for game
// Parameter: dt, a time delta between ticks
NPC.prototype.update = function(dt) {
};

// Draw the NPC on the screen
NPC.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


// ------ PLAYER -------
var Player = function() {
}

Player.prototype.update = function(){
  if(state.currentLevel === 'charSelectLevel'){
    this.x = 250;
    this.y = 200;
  }
  
  else{
    this.x = 10;
    this.y = 10;
  }
  // Update the sprite based on the level
  if (state.currentLevel === 'startScreen') {
    
    this.sprite = 'images/terrain/start-screen.png';
  }
  else {
    this.sprite = 'images/characters/deathCaster.gif';
  };
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {
  
  this.render();
  
  if (state.currentLevel === 'startScreen') {
    switch(key){
      case 'enter':
      state.currentLevel = 'charSelectLevel' ;
      break;
    };
  }
  
  else if(state.currentLevel === 'charSelectLevel'){
    switch(key) {
      case 'left':
      this.x = this.x - 150;
      
      if (this.x < 250) {
        this.x = 250;
      }
      
      break;
      
      case 'right':
      this.x = this.x + 150;
      if (this.x > 400) {
        this.x = 400;
      }
      
      break;
      
      case 'enter':
      state.currentLevel = 'firstLevel' ;
      break;
    };
  }
  
  else{
    switch(key) {
      case 'left':
      this.x = this.x - 50;
      if (state.currentLevel ==='secondLevel' && this.x < 10) {
        this.x = 10;
        //Changes the level to the startScreen once player reach far left of screen
        state.currentLevel = 'firstLevel';
        this.x = 655;
      }
      
      else if (this.x <10) {
        this.x=10;
      }
      
      break;
      case 'up':
      this.y = this.y - 50;
      if (this.y < 10){
        this.y = 10;
      }
      
      break;
      
      case 'right':
      this.x = this.x + 50;
      if (state.currentLevel === 'firstLevel' && this.x > 660) {
        this.x = 660;
        //Changes the level to the firstLevel once player reaches far right of screen
        state.currentLevel = 'secondLevel';
        this.x = 10;
      }
      
      else if (this.x >660) {
        this.x = 660;
      };
      
      break;
      case 'down':
      this.y = this.y + 50;
      if (this.y > 450) {
        this.y = 450;
      }
      
      default:
      break;
    }
  } //End of else
}

// Global functions
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allNPC = [];
var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method.

document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    13: 'enter',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  
  player.handleInput(allowedKeys[e.keyCode]);
});
