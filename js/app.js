

// ------ LEVEL -------
// var selectedLevel = 0;

var Di = 'images/terrain/dirt-tile50.png'; // dirt tile 50x50
var Gr = 'images/terrain/grass-tile50.png' // grass tile 50x50
var Wh = 'images/terrain/white-tile50.png' // white tile 50x50

var Levels = {};

Levels.selectedLevel = 0;

Levels.level = function(){
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
  
  if(allLevels[Levels.selectedLevel].levelName === 'charSelectLevel'){
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
  this.render();
  if(allLevels[Levels.selectedLevel].levelName === 'charSelectLevel'){
    
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
      if (Levels.selectedLevel ===1 && this.x < 10) {
        this.x = 10;
        //Changes the level to the startScreen once player reach far left of screen
        Levels.selectedLevel = 0;
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
      if (Levels.selectedLevel === 0 && this.x > 660) {
        this.x = 660;
        //Changes the level to the firstLevel once player reaches far right of screen
        Levels.selectedLevel = 1;
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


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var startScreen = new Levels.level();
<<<<<<< HEAD
startScreen.levelName = 'startScreen';
startScreen.tiles = [
  
  =======
  startScreen.tiles = [
    >>>>>>> 21e203709bf155a0a37fc8229c634506b0d9bd6c
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
  
  
  var charSelectLevel = new Levels.level();
  charSelectLevel.levelName = 'charSelectLevel';
  charSelectLevel.tiles = [
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, Wh, dC, Wh, Wh, mK, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  ];
  
  var firstLevel = new Levels.level()
  firstLevel.tiles = [
    [Di, Di, Di, Gr, Gr, Gr, Di, Di, Di, Di, Di, Di, Di, Di],
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
  <<<<<<< HEAD
  var allLevels = [ startScreen, firstLevel];
  =======
  var secondLevel = new Levels.level()
  secondLevel.tiles = [
    [Di, Di, Di, Gr, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Gr, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di]
  ];
  
  var allLevels = [startScreen, firstLevel, secondLevel];
  >>>>>>> 21e203709bf155a0a37fc8229c634506b0d9bd6c
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
