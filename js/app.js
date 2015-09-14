var app = angular.module('MonsterWorld', [])


var selectedLevel = 0;

var Level = function(){
  this.tiles = [];
};

// Level.prototype.tiles =   [];

// Enemies our player must avoid
var Enemy = function() {
  // Variables applied to each of our instances go here,
  // we've provided one for you to get started
  // The image/sprite for our enemies
  this.sprite = 'images/characters/deathCaster.gif';
};
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
  // You should multiply any movement by the dt parameter
  // which will ensure the game runs at the same speed for
  // all computers.
};
// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
  this.sprite = 'images/characters/monk.gif';
  this.x = 10;
  this.y = 10;
}

Player.prototype.update = function(){
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(key) {
  this.render();
  switch(key) {
    case 'left':
    this.x = this.x - 50;
    if (this.x < 10) {
      this.x = 10;
      //Changes the level to the startScreen once player reach far left of screen
      selectedLevel = 0;
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
    if (this.x > 660) {
      this.x = 660;
      
      //Changes the level to the firstLevel once player reachs far right of screen
      selectedLevel = 1;
    }
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


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var startScreen = new Level();

var Di = 'images/terrain/dirt-tile50.png';//dirt tile 50x50
var Gr = 'images/terrain/grass-tile50.png'//grass tile 50x50

startScreen.tiles = [

  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di]
];

var firstLevel = new Level()
firstLevel.tiles = [
  [Di, Di, Di, Gr, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di]
];
var allLevels = [startScreen, firstLevel];
var allEnemies = [];
var player = new Player();


// This listens for key presses and sends the keys to your
// Player.handleInput() method. 
document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  
  player.handleInput(allowedKeys[e.keyCode]);
});
