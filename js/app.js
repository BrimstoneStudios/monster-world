// Global variable objects
var state = {};
var monsterInventory = [];
var itemInventory = [];

// ------ LEVEL -------
state.currentLevel = 'startScreen';

// ------ MONSTERS -------
var Monster = function (lvl){
  this.level = lvl;
  this.hp = this.level * this.hpMult;
  this.attack = this.level * this.attackMult;
  this.defense = this.level * this.defenseMult;
  this.spAttack = this.level * this.spAttackMult;
  this.spDefense = this.level * this.spDefenseMult;
  this.speed = this.level * this.speedMult;
};

Monster.prototype.update = function(){
};

Monster.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Level up method for every monster to update stats based on current level
Monster.prototype.levelUp = function(){
  this.hp = this.level * this.hpMult;
  this.attack = this.level * this.attackMult;
  this.defense = this.level * this.defenseMult;
  this.spAttack = this.level * this.spAttackMult;
  this.spDefense = this.level * this.spDefenseMult;
  this.speed = this.level * this.speedMult;
};



// Fire type - subclass of Monster
var FireType = function(lvl){
  Monster.call(this, lvl);
};

FireType.prototype = Object.create(Monster.prototype);
FireType.prototype.constructor = FireType;
FireType.prototype.type = 'fire';
FireType.prototype.weaknesss ='water';

// Dragon family - subclass of FireType
var DragFam = function(lvl){
  FireType.call(this, lvl);
};
DragFam.prototype = Object.create(FireType.prototype);
DragFam.prototype.constructor = DragFam;

// Drag1 monster - subclass of DragFam
var Drag1 = function(lvl){
  DragFam.call(this, lvl);
};
Drag1.prototype = Object.create(DragFam.prototype);
Drag1.prototype.constructor = Drag1;
Drag1.prototype.sprite = 'images/monsters/drag1.gif';
Drag1.prototype.hpMult = 5;
Drag1.prototype.attackMult = 3;
Drag1.prototype.defenseMult = 1;
Drag1.prototype.spAttackMult = 2;
Drag1.prototype.spDefenseMult = 1;
Drag1.prototype.speedMult = 3;



// ---


// Water type - subclass of Monster
var WaterType = function(lvl){
  Monster.call(this, lvl);
};
WaterType.prototype = Object.create(Monster.prototype);
WaterType.prototype.constructor = WaterType;
WaterType.prototype.type = 'water';
WaterType.prototype.weaknesss = 'grass';

// Hydra family - subclass of WaterType
var HydraFam = function(lvl){
  WaterType.call(this, lvl);
};
HydraFam.prototype = Object.create(Monster.prototype);
HydraFam.prototype.constructor = HydraFam;

// Hydra1 monster - subclass of HydraFam
var Hydra1 = function(lvl){
  HydraFam.call(this, lvl);
};
Hydra1.prototype = Object.create(HydraFam.prototype);
Hydra1.prototype.constructor = Hydra1;
Hydra1.prototype.sprite = 'images/monsters/hydra1.png';
Hydra1.prototype.hpMult = 7;
Hydra1.prototype.attackMult = 1;
Hydra1.prototype.defenseMult = 2;
Hydra1.prototype.spAttackMult = 1;
Hydra1.prototype.spDefenseMult = 3;
Hydra1.prototype.speedMult = 1;


// ---


// Grass type - subclass of Monster
var GrassType = function(lvl){
  Monster.call(this, lvl);
};
GrassType.prototype = Object.create(Monster.prototype);
GrassType.prototype.constructor = GrassType;
GrassType.prototype.type = 'grass';
GrassType.prototype.weaknesss = 'fire';

// Wormy family - subclass of GrassType
var WormyFam = function(lvl){
  GrassType.call(this, lvl);
};
WormyFam.prototype = Object.create(GrassType.prototype);
WormyFam.prototype.constructor = WormyFam;

// Wormy1 monster - subclass of WormyFam
var Wormy1 = function(lvl){
  WormyFam.call(this, lvl);
};
Wormy1.prototype = Object.create(WormyFam.prototype);
Wormy1.prototype.constructor = Wormy1;
Wormy1.prototype.sprite = 'images/monsters/wormy1.gif';
Wormy1.prototype.hpMult = 6;
Wormy1.prototype.attackMult = 1;
Wormy1.prototype.defenseMult = 2;
Wormy1.prototype.spAttackMult = 2;
Wormy1.prototype.spDefenseMult = 2;
Wormy1.prototype.speedMult = 2;



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
state.sprite;
var Player = function() {
  this.x = 0;
  this.y = 0;
};


Player.prototype.update = function(){
  // Update the sprite based on the level
  if (state.currentLevel === 'startScreen') {
    
    this.sprite = 'images/terrain/start-screen.png';
  }
  else if(state.currentLevel === 'charSelectLevel' || state.currentLevel === 'monsterSelectLevel'){
    this.sprite = 'images/characters/selector.png';
  }
  else {
    this.sprite = state.sprite;
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
        state.sprite = 'images/characters/monk.gif';
      }
      
      else{
        state.sprite = 'images/characters/deathCaster.gif';
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
      if (this.x > 400) {
        this.x = 400;
      }
      
      break;
      
      
      case 'enter':
      if(this.x === 200){
        var drag1 = new Drag1(1);
        monsterInventory.push(drag1);
      }
      
      else if(this.x === 300){
        var hydra1 = new Hydra1(1);
        monsterInventory.push(hydra1);
      }
      else{
        var wormy1 = new Wormy1(1);
        monsterInventory.push(wormy1);
      }
      console.log(monsterInventory);
      state.currentLevel = 'firstLevel';
      this.x = 10;
      this.y = 10;
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
