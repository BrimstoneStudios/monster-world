// State variable object
var state = {};

// ------ LEVEL -------
state.currentLevel = 'startScreen';

// ------ MONSTERS -------
var Monster = function (){
  
};

Monster.prototype.update = function(){
  
};
Monster.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// ------ NPCs -------
// Other characters in the game, can be friendly or hostile
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
  this.x = 0;
  this.y = 0;
};

var sprite;

Player.prototype.update = function(){
  // Update the sprite based on the level
  if (state.currentLevel === 'startScreen') {
    
    this.sprite = 'images/terrain/start-screen.png';
  }
  else if(state.currentLevel === 'charSelectLevel' || state.currentLevel === 'monsterSelectLevel'){
    this.sprite = 'images/characters/selector.png';
  }
  else {
    this.sprite = sprite;
  }
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
      this.x = 250;
      this.y = 200;
      default:
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
      state.currentLevel = 'monsterSelectLevel';
      
      if(this.x === 400){
        sprite = 'images/characters/monk.gif';
      }
      
      else{
        sprite = 'images/characters/deathCaster.gif';
      }
      
      this.x = 200;
      this.y = 200;
      break;
    };
  }
  
  else if(state.currentLevel === 'monsterSelectLevel'){
    switch(key) {
      case 'left':
      this.x = this.x - 100;
      
      if (this.x < 200) {
        this.x = 200;
      }
      break;
      
      case 'right':
      this.x = this.x + 100;
      if (this.x > 500) {
        this.x = 500;
      }
      
      break;
    }
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
