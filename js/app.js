// Global variable objects
var state = {};
var monsterInventory = [];
var itemInventory = [];

// ------ State Variable -------
// Set the initial level
state.currentLevel = 'startScreen';

// Where we will store our level and location when entering a battle/menu so we can return after
state.prevLevel;
state.locX;
state.locY;

// 0 = not currently displaying , 1 = currently displaying
state.monsterStatCurrent= 0;

// When a monster stat is going to be shown, save the ID here
state.monsterStatID;

state.playerBattleMonster;
state.enemyToBattle;


// Battle menu states, 1 = currently displaying
state.enemyToBattle;
state.wildIntroText = 0;
state.battleMenuMain = 0;
state.battleMenuFight = 0;
state.battleMenuBag = 0;
state.battleMenuMonsters = 0;


// ---------------- MENU ----------------
var Menu = function(){
  
};

// Main menu
Menu.prototype.renderMain = function() {
  ctx.font="50px Arial";
  ctx.fillText("Items",280,200);
  ctx.fillText("Monsters",245,290);
};

// Monster Inventory Menu
Menu.prototype.renderMonsterInv = function(){
  ctx.font="50px Arial";
  for (var i = 0, j = 0; i < monsterInventory.length; i++, j = j+50){
    ctx.drawImage(Resources.get(monsterInventory[i].sprite), 85, 50+j);
    ctx.fillText(monsterInventory[i].name, 155, 85+j);
  };
};

// Monster Stats display
Menu.prototype.renderMonsterStat = function(monster) {
  ctx.font="25px Arial";
  ctx.fillText("Level:", 450, 65);
  ctx.fillText(monsterInventory[monster].level, 620, 65);
  ctx.fillText("HP:", 450, 105);
  ctx.fillText(monsterInventory[monster].hp, 620, 105);
  ctx.fillText("Attack:", 450, 145);
  ctx.fillText(monsterInventory[monster].attack, 620, 145);
  ctx.fillText("Defense:", 450, 185);
  ctx.fillText(monsterInventory[monster].defense, 620, 185);
  ctx.fillText("Sp Attack:", 450, 225);
  ctx.fillText(monsterInventory[monster].spAttack, 620, 225);
  ctx.fillText("Sp Defense:", 450, 265);
  ctx.fillText(monsterInventory[monster].spDefense, 620, 265);
  ctx.fillText("Speed:", 450, 305);
  ctx.fillText(monsterInventory[monster].speed, 620, 305);
};

Menu.prototype.renderWildIntroText = function(){
  var wildName = state.enemyToBattle.name;
  ctx.font="40px Arial";
  ctx.fillText('A wild ' + wildName + ' has appeared!', 50, 405);
};
Menu.prototype.renderBattleMenuMain = function() {
  ctx.font="30px Arial";
  ctx.fillText("Fight", 350, 385);
  ctx.fillText("Bag", 580, 385);
  ctx.fillText("Monsters", 350, 455);
  ctx.fillText("Run", 580, 455);
};
Menu.prototype.renderBattleMenuFight = function(){
  ctx.font="30px Arial";
  for (var i = 0, j = 0; i < state.playerBattleMonster.abilities.length; i++, j = j +40){
    ctx.fillText(state.playerBattleMonster.abilities[i].name, 50, 385+j);
  }
};

// ---------------- BATTLE ----------------

var battleEvent = function(){
  state.prevLevel = state.currentLevel;
  state.locX = player.x;
  state.locY = player.y;
  state.wildIntroText = 1;
  var randomNum = Math.random() * 100;
  
  if(randomNum <= 95){
    state.currentLevel = 'battleLevel';
    state.playerBattleMonster = monsterInventory[0];
    state.enemyToBattle = enemyBattle();
  };
};

var enemyBattle = function(){
  if(state.prevLevel === 'firstLevel'){
    monstersAvailable = [Drag1, Hydra1, Wormy1];
    var level = Math.floor(Math.random()*3) + 1;
    var randomMonster = Math.floor(Math.random() * monstersAvailable.length);
    var newMonster = monstersAvailable[randomMonster];
    var enemyMonster = new newMonster(level);
    return enemyMonster;
  }
}

// ---------------------- MONSTERS -----------------------

// Monster class determines the initial stats of the monster based on the level and the multiplier
// Multipliers defined later on individual monsters.
var Monster = function (lvl){
  this.level = lvl;
  this.hp = this.level * this.hpMult;
  this.currentHp = this.hp;
  this.attack = this.level * this.attackMult;
  this.defense = this.level * this.defenseMult;
  this.spAttack = this.level * this.spAttackMult;
  this.spDefense = this.level * this.spDefenseMult;
  this.speed = this.level * this.speedMult;
};

Monster.prototype.update = function(){
};

Monster.prototype.render = function(x, y) {
  ctx.drawImage(Resources.get(this.sprite), x, y, 100, 100);
};

// Level up method to update stats based on current level
Monster.prototype.levelUp = function(){
  this.hp = this.level * this.hpMult;
  this.attack = this.level * this.attackMult;
  this.defense = this.level * this.defenseMult;
  this.spAttack = this.level * this.spAttackMult;
  this.spDefense = this.level * this.spDefenseMult;
  this.speed = this.level * this.speedMult;
};

Monster.prototype.renderBtlMonStats = function(player){
  ctx.font="35px Arial";
  if(player === "player"){
    ctx.fillText(this.name, 350, 260);
    ctx.fillText("Lv", 610, 260);
    ctx.fillText(this.level, 650, 260);
    ctx.fillText("HP:", 350, 300);
    ctx.fillText(this.currentHp, 450, 300);
    ctx.fillText("/", 495, 300)
    ctx.fillText(this.hp, 510, 300);
  }
  else{
    ctx.fillText(this.name, 50, 60);
    ctx.fillText("Lv", 310, 60);
    ctx.fillText(this.level, 350, 60);
    ctx.fillText("HP:", 50, 100);
    ctx.fillText(this.currentHp, 150, 100);
    ctx.fillText("/", 195, 100)
    ctx.fillText(this.hp, 210, 100);
  }
};

// ----------------------------

// Fire type - subclass of Monster
var FireType = function(lvl){
  Monster.call(this, lvl);
};

FireType.prototype = Object.create(Monster.prototype);
FireType.prototype.constructor = FireType;
FireType.prototype.type = 'fire';
FireType.prototype.weaknesss ='water';


// Drag1 monster - subclass of FireType
var Drag1 = function(lvl){
  FireType.call(this, lvl);
};
Drag1.prototype = Object.create(FireType.prototype);
Drag1.prototype.constructor = Drag1;
Drag1.prototype.sprite = 'images/monsters/drag1.gif';
Drag1.prototype.name = 'Drag1';
Drag1.prototype.hpMult = 5;
Drag1.prototype.attackMult = 3;
Drag1.prototype.defenseMult = 1;
Drag1.prototype.spAttackMult = 2;
Drag1.prototype.spDefenseMult = 1;
Drag1.prototype.speedMult = 3;
Drag1.prototype.abilities = [abilities.scratch, abilities.fireBreath];

// ----------------------------

// Water type - subclass of Monster
var WaterType = function(lvl){
  Monster.call(this, lvl);
};
WaterType.prototype = Object.create(Monster.prototype);
WaterType.prototype.constructor = WaterType;
WaterType.prototype.type = 'water';
WaterType.prototype.weaknesss = 'grass';


// Hydra1 monster - subclass of WaterType
var Hydra1 = function(lvl){
  WaterType.call(this, lvl);
};
Hydra1.prototype = Object.create(WaterType.prototype);
Hydra1.prototype.constructor = Hydra1;
Hydra1.prototype.sprite = 'images/monsters/hydra1.png';
Hydra1.prototype.name = 'Hydra1';
Hydra1.prototype.hpMult = 7;
Hydra1.prototype.attackMult = 1;
Hydra1.prototype.defenseMult = 2;
Hydra1.prototype.spAttackMult = 1;
Hydra1.prototype.spDefenseMult = 3;
Hydra1.prototype.speedMult = 1;
Hydra1.prototype.abilities = [abilities.bite, abilities.waterBlast];

// ----------------------------

// Grass type - subclass of Monster
var GrassType = function(lvl){
  Monster.call(this, lvl);
};
GrassType.prototype = Object.create(Monster.prototype);
GrassType.prototype.constructor = GrassType;
GrassType.prototype.type = 'grass';
GrassType.prototype.weaknesss = 'fire';

// Wormy1 monster - subclass of GrassType
var Wormy1 = function(lvl){
  GrassType.call(this, lvl);
};

Wormy1.prototype = Object.create(GrassType.prototype);
Wormy1.prototype.constructor = Wormy1;
Wormy1.prototype.sprite = 'images/monsters/wormy1.gif';
Wormy1.prototype.name = 'Wormy1';
Wormy1.prototype.hpMult = 6;
Wormy1.prototype.attackMult = 1;
Wormy1.prototype.defenseMult = 2;
Wormy1.prototype.spAttackMult = 2;
Wormy1.prototype.spDefenseMult = 2;
Wormy1.prototype.speedMult = 2;
Wormy1.prototype.abilities = [abilities.bite, abilities.razorLeaf];


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
  // Initial location for the start screen, the whole start screen image is the player sprite, takes up the whole screen
  this.x = 0;
  this.y = 0;
};

// Update Player based on state
Player.prototype.update = function(){
  // Update the sprite based on the level
  if (state.currentLevel === 'startScreen') {
    
    this.sprite = 'images/terrain/start-screen.png';
  }
  else if(state.currentLevel === 'charSelectLevel' || state.currentLevel === 'monsterSelectLevel'){
    this.sprite = 'images/characters/selector.png';
  }
  else if (state.currentLevel === 'mainMenu' || state.currentLevel === 'monsterInventory' || state.currentLevel === 'battleLevel'){
    this.sprite = 'images/characters/menuSelector.png';
  }
  else {
    this.sprite = state.sprite;
  };

  // Remove player from the screen 
  if (state.wildIntroText === 1) {
    this.x = -100;
    this.y = -100;
  };
};

// Renders the character on the screen based on it's sprite, x and  y location
Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Handles the player input, called on every key press
Player.prototype.handleInput = function(key) {
  this.render();
  
  // Controls for the start screen
  if (state.currentLevel === 'startScreen') {
    switch(key){
      case 'space':
      state.currentLevel = 'charSelectLevel' ;
      this.x = 250;
      this.y = 200;
      default:
      break;
    };
  }
  
  // Controls for the character select level
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
      
      case 'space':
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
  
  // Controls for the initial monster select level
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
      
      
      case 'space':
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
      state.currentLevel = 'firstLevel';
      this.x = 10;
      this.y = 10;
      break;
    }
  }
  
  // Controls for the main menu
  else if (state.currentLevel === 'mainMenu'){
    switch(key){
      case 'shift':
      state.currentLevel = state.prevLevel;
      this.x = state.locX;
      this.y = state.locY;
      break;
      case 'up':
      this.y = this.y -90;
      if (this.y < 140){
        this.y=157;
      }
      break;
      case 'down':
      this.y = this.y + 90;
      if (this.y >250) {
        this.y = 247;
      }
      break;
      case 'space':
      if (this.y === 247){
        state.currentLevel = 'monsterInventory';
        this.x = 15;
        this.y = 42;
      }
      break;
    }
  }
  
  // Controls for the monster inventory
  else if (state.currentLevel === 'monsterInventory'){
    switch(key){
      case 'shift':
      state.currentLevel = state.prevLevel;
      this.x = state.locX;
      this.y = state.locY;
      break;
      
      case 'up' :
      this.y = this.y -90;
      if (this.y < 42){
        this.y=42;
      }
      break;
      case 'down':
      this.y = this.y + 90;
      if (this.y > ((monsterInventory.length-1) *90)+42) {
        this.y = ((monsterInventory.length-1) *90)+42;
      }
      break;
      case 'space':
      if (this.y === 42){
        state.monsterStatID = 0;
        if (state.monsterStatCurrent === 0) {
          state.monsterStatCurrent = 1;
        }
        else {
          state.monsterStatCurrent = 0;
        };
      }
      break;
    }
  }
  // Controls for the battle system
  else if(state.currentLevel === 'battleLevel'){
    if (state.wildIntroText === 1) {
      switch(key){
        case 'space':
          state.wildIntroText = 0;
          state.battleMenuMain = 1;
          this.x = 300;
          this.y = 350;
          break;
      };
    }
    // battleMenuMain controls
    else if (state.battleMenuMain === 1){
      switch(key){
        case 'left':
          this.x = this.x - 230;
          if (this.x < 300){
            this.x = 300;
          }
          break;
        case 'up':
          this.y = this.y - 70;
          if (this.y < 350) {
            this.y = 350;
          }
          break;
        case 'right':
          this.x = this.x + 230;
          if (this.x >530) {
            this.x = 530;
          }
          break;
        case 'down':
          this.y = this.y + 70;
          if (this.y >420) {
            this.y = 420;
          }
          break;
        case 'space':
          if (this.x === 300 && this.y === 350){
            state.battleMenuMain = 0;
            state.battleMenuFight = 1;
            this.x = 0;
          }
          break;
      }
    }
    // batleMenuFight controls
    else if (state.battleMenuFight === 1) {
      switch(key){
        case 'up':
          this.y = this.y - 40;
          if (this.y <350) {
            this.y = 350;
          }
          break;
        case 'down':
          this.y = this.y +40;
          var maxY =  (350+((state.playerBattleMonster.abilities.length-1) * 40));
          console.log(maxY);
          if (this.y > maxY) {
             this.y = maxY;
            }
          break;
        case 'space':
          break;
      };
    }
    else {
      switch(key){
        case 'space':
        state.currentLevel = state.prevLevel;
        this.x = state.locX;
        this.y = state.locY;
        break;
      }
    };
  }
  // Controls for all the world levels
  else{
    switch(key) {
      case 'shift':
      state.prevLevel = state.currentLevel;
      state.locX = this.x;
      state.locY = this.y;
      state.currentLevel = 'mainMenu';
      this.x = 180;
      this.y = 157;
      break;
      
      case 'left':
      this.x = this.x - 50;
      battleEvent();
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
      battleEvent();
      if (this.y < 10){
        this.y = 10;
      }
      break;
      
      case 'right':
      this.x = this.x + 50;
      battleEvent();
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
      battleEvent();
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
// Place all NPC objects in an array called allNPC
// Place the player object in a variable called player

var allNPC = [];
var player = new Player();
var menu = new Menu();

// This listens for key presses and sends the keys to your
// Player.handleInput() method.

document.addEventListener('keyup', function(e) {
  var allowedKeys = {
    16: 'shift',
    32: 'space',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };
  
  player.handleInput(allowedKeys[e.keyCode]);
});
