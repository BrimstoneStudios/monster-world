// Global variable objects
var state = {};
var monsterInventory = [];
var itemInventory = [];

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

// ---

// Fire type - subclass of Monster
var FireType = function(){
  Monster.call(this);
};

//var fireAttack = function(){
 // console.log("I'M fire attacking!", this.name);
//}

// function getMonster(){
//   var monster = {};
//   monster.fireAttack = fireAttack.bind(monster);
//   return monster;
// }

// var monster = getMonster();
// monster.fireAAttack();

// function megaMonster(){
//   var proto = getMonster();
//   proto.megaAttack = function(){
//     console.log(this.damage + "RARRR!!!!");
//   }
//   return proto;
// }

// ES6
// class FireType extends Monster {
//   constructor(){

//   }
// }
//monster.fireAttack = fireAttack.bind(monster);
FireType.prototype = Object.create(Monster.prototype);
FireType.prototype.constructor = FireType;

// Dragon family - subclass of FireType
var DragFam = function(){
  FireType.call(this);
};
DragFam.prototype = Object.create(FireType.prototype);
DragFam.prototype.constructor = DragFam;

// Drag1 monster - subclass of DragFam
var Drag1 = function(){
  DragFam.call(this);
};
Drag1.prototype = Object.create(DragFam.prototype);
Drag1.prototype.constructor = Drag1;
<<<<<<< HEAD
Drag1.prototype.sprite = 'images/monsters/drag1.gif'

||||||| merged common ancestors


=======

>>>>>>> dd5ea145356cfec89b144ef3619bc4852914e6ef
// ---

// Water type - subclass of Monster
var WaterType = function(){
  Monster.call(this);
};
WaterType.prototype = Object.create(Monster.prototype);
WaterType.prototype.constructor = WaterType;

// Hydra family - subclass of WaterType
var HydraFam = function(){
  WaterType.call(this);
};
HydraFam.prototype = Object.create(Monster.prototype);
HydraFam.prototype.constructor = HydraFam;

// Hydra1 monster - subclass of HydraFam
var Hydra1 = function(){
  HydraFam.call(this);
};
Hydra1.prototype = Object.create(HydraFam.prototype);
Hydra1.prototype.constructor = Hydra1;
Hydra1.prototype.sprite = 'images/monsters/hydra1.png';

// ---

// Grass type - subclass of Monster
var GrassType = function(){
  Monster.call(this);
};
GrassType.prototype = Object.create(Monster.prototype);
GrassType.prototype.constructor = GrassType;

// Wormy family - subclass of GrassType
var WormyFam = function(){
  GrassType.call(this);
};
WormyFam.prototype = Object.create(GrassType.prototype);
WormyFam.prototype.constructor = WormyFam;

// Wormy1 monster - subclass of WormyFam
var Wormy1 = function(){
  WormyFam.call(this);
};
Wormy1.prototype = Object.create(WormyFam.prototype);
Wormy1.prototype.constructor = Wormy1;
Wormy1.prototype.sprite = 'images/monsters/wormy1.gif'

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
        var drag1 = new Drag1();
        monsterInventory.push(drag1);
      }
      
      else if(this.x === 300){
        var hydra1 = new Hydra1();
        monsterInventory.push(hydra1);
      }
      else{
        var wormy1 = new Wormy1();
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
