

// ------ LEVEL -------
// var selectedLevel = 0;

var Di = 'images/terrain/dirt-tile50.png';//dirt tile 50x50
var Gr = 'images/terrain/grass-tile50.png'//grass tile 50x50

var Levels = {};

Levels.selectedLevel = 0;

Levels.level = function(){
};


// ------ MONSTERS -------



// ------ CHARACTERS -------
var Character = function() {
  
};


// ------ NPCs -------
// Enemies our player must avoid
var NPC = function() {
  // Variables applied to each of our instances go here
  this.sprite = 'images/characters/deathCaster.gif';
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
      Levels.selectedLevel = 0;
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
      Levels.selectedLevel = 1;
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
var startScreen = new Levels.level();

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


var charSelLevel = new Level();
charSelLevel.tiles = [
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

var firstLevel = new Levels.level()
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
var allNPC = [];
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
