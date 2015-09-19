// State variable object
var state = {};


// ------ LEVEL -------
state.currentLevel = 'startScreen';

// Start class
var Start = function(){
  this.sprite = 'images/terrain/start-screen.png';
};
Start.prototype.render = function(){
  ctx.drawImage(Resources.get(this.sprite), 0, 0);
};
Start.prototype.handleInput = function(key){
  switch(key){
    case 'enter':
    state.currentLevel = 'charSelectLevel';
    break;
  };
};



// ------ MONSTERS -------



// ------ CHARACTERS -------
var Character = function() {
};

var dC = 'images/characters/deathCaster.gif';
var mK = 'images/characters/monk.gif';


// ------ NPCs -------
// Enemies our player must avoid
var NPC = function() {
  // Variables applied to each of our instances go here
  this.sprite = dC;
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
  this.sprite = dC;
  
  if(allLevels[state.currentLevel].levelName === 'charSelectLevel'){
    this.x= 250;
    this.y = 200;
  }
  else{
    this.x = 10;
    this.y = 10;
  }
}

Player.prototype.update = function(){
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {
  currentLevel = allLevels[state.currentLevel];
  this.render();
  
  if(allLevels[state.currentLevel].levelName === 'charSelectLevel'){
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
  }
}


// Global functions
var updateLevel = function(){
  currentLevel = allLevels[state.currentLevel];
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allNPC = [];

var start = new Start();
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
  if (state.currentLevel === 'startScreen') {
    start.handleInput(allowedKeys[e.keyCode]);
  }
  else {
    player.handleInput(allowedKeys[e.keyCode]);
  }
});
