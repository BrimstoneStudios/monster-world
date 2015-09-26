// ---------------------- MONSTERS -----------------------

// Monster class determines the initial stats of the monster based on the level and the multiplier
// Multipliers defined later on individual monsters.
var Monster = function (lvl){
  this.level = lvl;
  this.hp = this.level * this.hpMult;
  this.currentHp = this.hp;
  this.condition = 'healthy';
  this.attack = ((((5 + this.attackMult) * 11)* this.level)/100)+2;
  this.defense = ((((5 + this.defenseMult) * 11)* this.level)/100)+2;
  this.spAttack = ((((5 + this.spAttackMult) * 11)* this.level)/100)+2;
  this.spDefense = ((((5 + this.spDefenseMult) * 11)* this.level)/100)+2;
  this.speed = ((((30 + this.speedMult) * 11)* this.level)/100)+2;
  this.currentExp = 0;
  this.expToLevel = 10 + (10*this.level);
  this.expReward = 5 + (3*this.level);
};
Monster.prototype.controller = 'computer';

Monster.prototype.update = function(){
};

// Render the monster onto the screen
Monster.prototype.render = function(x, y) {
  ctx.drawImage(Resources.get(this.sprite), x, y, 100, 100);
};

// Gain exp upon defeating an enemy monster
Monster.prototype.expGain = function(){
  this.currentExp += state.enemyToBattle.expReward;
  console.log(this.currentExp);
  if (this.currentExp >= this.expToLevel){
    this.levelUp();
  }
};

// Level up method to update stats based on current level
Monster.prototype.levelUp = function(){
  state.levelUp = 1;
  this.level++;
  this.hp = this.level * this.hpMult;
  this.attack = this.level * this.attackMult;
  this.defense = this.level * this.defenseMult;
  this.spAttack = this.level * this.spAttackMult;
  this.spDefense = this.level * this.spDefenseMult;
  this.speed = this.level * this.speedMult;
  this.currentExp = 0;
  this.expToLevel = 10 + (4*this.level);
};

// Show player and enemy monster stats on the screen during a battle
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

// Normal type - subclass of Monster
var NormalType = function(lvl){
  Monster.call(this, lvl);
};

NormalType.prototype = Object.create(Monster.prototype);
NormalType.prototype.constructor = NormalType;
NormalType.prototype.type = 'normal';
NormalType.prototype.weaknesss ='';

// PlayerMon monster - subclass of NormalType
var PlayerMon = function(lvl, char){
  NormalType.call(this, lvl);
  if (char === "monk") {
    this.sprite = 'images/characters/monk.gif';
  }
  else {
    this.sprite = 'images/characters/deathCaster.gif';
  }
};
PlayerMon.prototype = Object.create(NormalType.prototype);
PlayerMon.prototype.constructor = PlayerMon;
PlayerMon.prototype.sprite = state.sprite;
PlayerMon.prototype.name = 'PlayerMon';
PlayerMon.prototype.player = 1;
PlayerMon.prototype.hpMult = 5;
PlayerMon.prototype.attackMult = 3;
PlayerMon.prototype.defenseMult = 1;
PlayerMon.prototype.spAttackMult = 2;
PlayerMon.prototype.spDefenseMult = 1;
PlayerMon.prototype.speedMult = 3;
PlayerMon.prototype.abilities = [abilities.scratch, abilities.stare];

// GiantRat monster - subclass of NormalType
var GiantRat = function(lvl, char){
  NormalType.call(this, lvl);
  this.sprite = 'images/monsters/giantRat.gif';
};
GiantRat.prototype = Object.create(NormalType.prototype);
GiantRat.prototype.constructor = GiantRat;
GiantRat.prototype.sprite = state.sprite;
GiantRat.prototype.name = 'Giant Rat';
GiantRat.prototype.player = 1;
GiantRat.prototype.hpMult = 5;
GiantRat.prototype.attackMult = 2;
GiantRat.prototype.defenseMult = 2;
GiantRat.prototype.spAttackMult = 2;
GiantRat.prototype.spDefenseMult = 2;
GiantRat.prototype.speedMult = 3;
GiantRat.prototype.abilities = [abilities.scratch, abilities.growl];

// Bat monster - subclass of NormalType
var Bat = function(lvl, char){
  NormalType.call(this, lvl);
  this.sprite = 'images/monsters/bat.gif';
};
Bat.prototype = Object.create(NormalType.prototype);
Bat.prototype.constructor = Bat;
Bat.prototype.sprite = state.sprite;
Bat.prototype.name = 'Bat';
Bat.prototype.player = 1;
Bat.prototype.hpMult = 6;
Bat.prototype.attackMult = 2;
Bat.prototype.defenseMult = 1;
Bat.prototype.spAttackMult = 2;
Bat.prototype.spDefenseMult = 2;
Bat.prototype.speedMult = 3;
Bat.prototype.abilities = [abilities.bite, abilities.stare];

// Munchkin monster - subclass of NormalType
var Munchkin = function(lvl, char){
  NormalType.call(this, lvl);
  this.sprite = 'images/monsters/munchkin.gif';
};
Munchkin.prototype = Object.create(NormalType.prototype);
Munchkin.prototype.constructor = Munchkin;
Munchkin.prototype.sprite = state.sprite;
Munchkin.prototype.name = 'Munchkin';
Munchkin.prototype.player = 1;
Munchkin.prototype.hpMult = 6;
Munchkin.prototype.attackMult = 2;
Munchkin.prototype.defenseMult = 1;
Munchkin.prototype.spAttackMult = 2;
Munchkin.prototype.spDefenseMult = 2;
Munchkin.prototype.speedMult = 3;
Munchkin.prototype.abilities = [abilities.bite, abilities.stare];

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
Drag1.prototype.abilities = [abilities.scratch, abilities.stare, abilities.fireBreath];

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
Hydra1.prototype.abilities = [abilities.bite, abilities.growl, abilities.waterBlast];

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
Wormy1.prototype.abilities = [abilities.bite, abilities.growl, abilities.razorLeaf];
