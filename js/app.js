// ---------------- MENU ----------------
var Menu = function(){
};

Menu.prototype.renderCharSelect = function() {
  ctx.font="50px Arial";
  ctx.fillText("Choose a character",140,380);
}

Menu.prototype.renderMonsterSelect = function() {
  ctx.font="50px Arial";
  ctx.fillText("Choose a starting monster",50,380);
}

// Main menu
Menu.prototype.renderMain = function() {
  ctx.font="50px Arial";
  ctx.fillText("Items",280,200);
  ctx.fillText("Monsters",245,290);
};

Menu.prototype.renderItemsInv = function(){
  ctx.font="50px Arial";
  if (itemInventory.length > 0){
    for (var i = 0, j = 0; i < itemInventory.length; i++, j = j+50){
      ctx.fillText(itemInventory[i].name, 155, 85+j);
    }
  }
  else{
    ctx.fillText("Your bag is empty.", 155, 85);
  }
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

// Text and menus for battles
Menu.prototype.renderBattleText = function(){
	var battleMessagePos = {
		x: 75,
		y: 405
	}

	var button2 = {
		x: 0,
		y: 15
	}

  ctx.font="30px Arial";
  
  if (state.battleState === 'wildIntroText' ) {
    var wildName = state.enemyToBattle.name;
    ctx.font="40px Arial";
    ctx.fillText('A wild ' + wildName + ' has appeared!', battleMessagePos.x, battleMessagePos.y);
  }
  else if (state.battleState === 'battleMenuMain'){
    ctx.fillText("Fight", 350, 385);
    ctx.fillText("Bag", 580, 385);
    ctx.fillText("Monsters", 350, 455);
    ctx.fillText("Run", 580, 455);
  }
  else if (state.battleState === 'playerMove') {
    ctx.fillText("You hit enemy " + state.enemyToBattle.name + " with " + state.playerAttackUsed.name, battleMessagePos.x, battleMessagePos.y);
    // Additional text if not very or super effective
    if (state.playerDamageMod === 'super') {
      ctx.fillText("It was super effective!", battleMessagePos.x, battleMessagePos.y + 50);
    }
    else if (state.playerDamageMod === 'notVery'){
      ctx.fillText("It was not very effective", battleMessagePos.x, battleMessagePos.y + 50);
    };
  }
  else if (state.battleState === 'AI') {
    ctx.fillText(state.enemyToBattle.name + " hit you with " + state.enemyAttackUsed.name, battleMessagePos.x, battleMessagePos.y);
    if (state.enemyDamageMod === 'super') {
      ctx.fillText("It was super effective!", battleMessagePos.x, battleMessagePos.y + 50);
    }
    else if (state.enemyDamageMod === 'notVery'){
      ctx.fillText("It was not very effective", battleMessagePos.x, battleMessagePos.y + 50);
    };
  }
  else if (state.battleState === 'potionUsed') {
    ctx.fillText("You used a potion!", battleMessagePos.x, battleMessagePos.y);
  }
  else if (state.battleState === 'caughtMonster') {
    ctx.fillText("You caught " + state.enemyToBattle.name + "!", battleMessagePos.x, battleMessagePos.y);
  }
  else if (state.battleState === 'failedCatch'){
    ctx.fillText("You failed to catch " + state.enemyToBattle.name + "!", battleMessagePos.x, battleMessagePos.y);
    ctx.fillText("Try dealing more damage next time.", battleMessagePos.x, battleMessagePos.y+50);
  }
  else if (state.battleState === 'battleMonsterDie'){
    if(state.playerBattleMonster.currentHp === 0){
      ctx.fillText(state.playerBattleMonster.name + " has died!", battleMessagePos.x, battleMessagePos.y);
    }
    else{
      if (state.levelUp === 1){
        ctx.fillText(state.enemyToBattle.name + " has died!", battleMessagePos.x, battleMessagePos.y);
        ctx.fillText(state.playerBattleMonster.name + " has gained a level!", battleMessagePos.x, battleMessagePos.y +50);
      }
      else {
        ctx.fillText(state.enemyToBattle.name + " has died!", battleMessagePos.x, battleMessagePos.y);
      }
    }
  }
  else if (state.battleState === 'itemDrop'){
    ctx.fillText(state.enemyToBattle.name + " dropped a " + state.droppedItem + "!", battleMessagePos.x, battleMessagePos.y);
  }
  else if (state.battleState === 'battleMenuFight'){
    for (var i = 0, j = 0; i < state.playerBattleMonster.abilities.length; i++, j = j + 40){
      ctx.fillText(state.playerBattleMonster.abilities[i].name, 50, 385 + j);
    }
  }
  else if (state.battleState === 'monsterInvMenu'){
    for (var i = 0, j = 0; i < monsterInventory.length; i++, j = j + 40){
      ctx.fillText(monsterInventory[i].name, 50, 385 + j);
    }
  }
  else if (state.battleState === 'invMenu'){
    if (itemInventory.length > 0){
      for (var i = 0, j = 0; i < itemInventory.length; i++, j = j + 40){
        ctx.fillText(itemInventory[i].name, 75, 385 + j);
      }
    }
    else{
      ctx.fillText("You have no items to use!", battleMessagePos.x, battleMessagePos.y);
    }
  }
  else if (state.battleState === 'battleFailedRunAway') {
    ctx.fillText("Escape failed. FIGHT!", battleMessagePos.x, battleMessagePos.y);
  }
  else if (state.battleState === 'battleRunAway'){
    ctx.fillText("You ran away!? You wimp...", battleMessagePos.x, battleMessagePos.y);
  }
  //This will be used when we defeat NPC
  else if (state.battleState === 'battleWinText'){
    ctx.fillText('You have defeated ' + state.enemyToBattle.name + '!', battleMessagePos.x, battleMessagePos.y);
  }
};

// ---------------- BATTLE ----------------

var battleEvent = function(){
  // Save the pre-battle state
  state.prevLevel = state.currentLevel;
  state.locX = player.x;
  state.locY = player.y;
  
  var randomNum = Math.random() * 100;
  
  if(randomNum <= 25){
    state.battleState = 'wildIntroText';
    state.currentLevel = 'battleLevel';
    state.playerBattleMonster = monsterInventory[0];
    state.enemyToBattle = enemyBattle();
    state.playerBattleMonsterAttack = state.playerBattleMonster.attack;
    state.playerBattleMonsterDefense = state.playerBattleMonster.defense;
    state.playerBattleMonsterSpAttack = state.playerBattleMonster.spAttack;
    state.playerBattleMonsterSpDefense = state.playerBattleMonster.spDefense;
  };
};

var enemyBattle = function(){
  if(state.prevLevel === 'firstLevel'){
    monstersAvailable = [Bat, GiantRat, Munchkin];
    var levelsAvailable = [1, 2];
  }
  else if(state.prevLevel === 'secondLevel'){
    monstersAvailable = [Bat, GiantRat, Munchkin];
    var levelsAvailable = [3,4,5];
  }
  
  var randomLevel = Math.floor(Math.random()*levelsAvailable.length);
  var newLevel = levelsAvailable[randomLevel];
  var randomMonster = Math.floor(Math.random() * monstersAvailable.length);
  var newMonster = monstersAvailable[randomMonster];
  var enemyMonster = new newMonster(newLevel);
  return enemyMonster;
}

//function to run from battle when run is selected in the menu
var runFromBattle = function(){
  var randomNum = Math.floor(Math.random()*2); //produces either 0 or 1
  if (randomNum === 1){
    player.x = 30;
    player.y = 370;
    state.battleState = 'battleRunAway';
  }
  
  else{
    player.x = 30;
    player.y = 370;
    state.battleState = 'battleFailedRunAway';
  }
};

// Item drop
var itemDrop = function(){
  var randNum = Math.random();
  if (randNum > 0.8) {
    itemInventory.push(items.net);
    state.droppedItem = 'net';
  }
  else {
    itemInventory.push(items.potion);
    state.droppedItem = 'potion';
  }
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
  else if (state.currentLevel === 'mainMenu' || state.currentLevel === 'itemsInv' || state.currentLevel === 'monsterInventory' || state.currentLevel === 'battleLevel'){
    this.sprite = 'images/characters/menuSelector.png';
  }
  else if (state.currentLevel === 'gameOver'){
    this.sprite = 'images/characters/gameOver.png';
  }
  else {
    this.sprite = state.sprite;
  };
  
  // Remove player from the screen
  if (state.battleState === 'wildIntroText') {
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
        drag1.controller = 'player';
        monsterInventory.push(drag1);
      }
      
      else if(this.x === 300){
        var hydra1 = new Hydra1(1);
        hydra1.controller = 'player';
        monsterInventory.push(hydra1);
      }
      else{
        var wormy1 = new Wormy1(1);
        wormy1.controller = 'player';
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
      else{
        state.currentLevel = 'itemsInv';
        this.x = 15;
        this.y = 42;
      }
      break;
    }
  }
  
  // Controls for the items inventory
  else if (state.currentLevel === 'itemsInv'){
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
      if (this.y > ((itemInventory.length-1) *90)+42) {
        this.y = ((itemInventory.length-1) *90)+42;
      }
      break;
      
      case 'space':
      for (var i = 0; i < itemInventory.length; i++){
        console.log(this.y);
        if (this.y === 42 + (i*90)){
          itemInventory[i].func();
          itemInventory.splice(i, 1);
        }
      }
      break;
    }
  }
  // Monster inventory controls
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
        else{
          state.monsterStatCurrent = 0;
        };
      }
      break;
    }
  }
  
  // Controls for the battle system
  else if(state.currentLevel === 'battleLevel'){
    if (state.battleState === 'wildIntroText') {
      switch(key){
        case 'space':
        state.battleState = 'battleMenuMain';
        this.x = 300;
        this.y = 350;
        break;
      };
    }
    // Controls for after an opponent attacks
    else if (state.battleState === 'battleMonsterDie'){
      switch(key){
        case 'space':
          if (state.enemyToBattle.currentHp === 0) {
            var randNum = Math.random();
            if (randNum > 0.5) {
              itemDrop();
              state.battleState = 'itemDrop';
              return;
            }
          }
        // Remove dead monster from the inventory
        else if (state.playerBattleMonster.currentHp === 0){
          // ** Will have to change to target the current monster rather than the first in the array
          monsterInventory.splice(0, 1);

          // If there are no more monsters left, create new PlayerMon
          if (monsterInventory.length === 0) {
            if (state.sprite === 'images/characters/monk.gif') {
              var playerMon = new PlayerMon(2, 'monk');
            }
            else {
              var playerMon = new PlayerMon(2, 'deathCaster');
            };
            playerMon.controller = 'player';
            monsterInventory.push(playerMon);
            state.playerMonster = 1;
          }
        }
        // Return to pre-fight level and location
        state.currentLevel = state.prevLevel;
        this.x = state.locX;
        this.y = state.locY;

        // Reset battle states
        state.levelUp = 0;
        state.itemDrop = 0;
        state.battleState = 'battleMenuMain';

        break;
      }
    }
    else if (state.battleState === 'itemDrop') {
      switch(key){
        case 'space':
          // Return to pre-fight level and location
          state.currentLevel = state.prevLevel;
          this.x = state.locX;
          this.y = state.locY;

          // Reset battle states
          state.levelUp = 0;
          state.itemDrop = 0;
          state.battleState = 'battleMenuMain';
        break;
      }
    }
    else if(state.battleState === 'potionUsed' || state.battleState === 'failedCatch'){
      switch(key){
        case 'space':
        this.x = 300;
        this.y = 350;
        enemyAbilityUsed();
        state.battleState = 'AI';
        break;
      }
    }
    else if (state.battleState === 'caughtMonster'){
      switch(key){
        case 'space':
          state.currentLevel = state.prevLevel;
          this.x = state.locX;
          this.y = state.locY;
        break;
      };
    }
    else if (state.battleState === 'playerMove'){
      switch(key){
        case 'space':
        state.playerDamageMod = 'none';
        state.battleState = 'AI';
        break;
      };
    }
    else if(state.battleState === 'AI'){
      switch(key){
        case 'space':
        this.x = 300;
        this.y = 350;
        state.enemyDamageMod = 'none';
        if(state.playerBattleMonster.currentHp === 0){
          state.battleState = 'battleMonsterDie';
        }
        else{
          state.battleState = 'battleMenuMain';
        }
        break;
      }
    }
    // Battle menu main controls
    else if (state.battleState === 'battleMenuMain'){
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
          state.battleState = 'battleMenuFight';
          this.x = 0;
        }
        else if(this.x === 300 && this.y === 420){ //Monsters inventory in battleMenuMain
          state.battleState = 'monsterInvMenu';
        }
        else if (this.x === 530 && this.y === 420){ //Run in battleMenuMain
          runFromBattle();
        }
        else{ // Inventory in battleMenuMain
          state.battleState = 'invMenu';

            if (itemInventory.length > 0){
            	this.x = 30;
            	this.y = 350;
      	}
      	else{
	          this.x = 50;
      	    this.y = 370;	
      	}
        }
        break;
      }
    }
    // Battle Monster inventory
    else if(state.battleState === 'monsterInvMenu'){
      switch(key){
        case 'space':
        state.battleState = 'battleMenuMain';
        break;
        
        case 'shift':
        state.battleState = 'battleMenuMain';
        break;
      }
    }
    
    // Battle item inventory
    else if(state.battleState === 'invMenu'){
      if(itemInventory.length > 0){
        switch(key){
          case 'up':
            this.y = this.y - 40;
            if (this.y <350) {
              this.y = 350;
            }
          break;
          case 'down':
            this.y = this.y +40;
            var maxY =  (350+((itemInventory.length-1) * 40));
            if (this.y > maxY) {
              this.y = maxY;
            }
          break;
          case 'space':
            for (var i = 0; i < itemInventory.length; i++){
              if (this.y === 350 +(i*40)){
                itemInventory[i].func();
                if (itemInventory[i].name === 'Potion') {
                  state.battleState = 'potionUsed';
                }
                itemInventory.splice(i, 1);
              }
            }
          break;
        }
      }
      else{
        switch(key){
          case 'space':
          state.battleState = 'battleMenuMain';
          break;
        }
      }
      switch(key){
        case 'shift':
        state.battleState = 'battleMenuMain';
        break;
      }
    }
    else if(state.battleState === 'battleFailedRunAway'){
      switch(key){
        case 'space':
        state.battleState = 'AI';
        enemyAbilityUsed();
        break;
      }
    }
    else if (state.battleState === 'battleRunAway'){
      switch(key){
        case 'space':
        state.battleState = 'battleMenuMain';
        state.currentLevel = state.prevLevel;
        player.x = state.locX;
        player.y = state.locY;
        break;
      }
    }
    
    // Battle menu fight controls
    else if (state.battleState === 'battleMenuFight') {
      switch(key){
        case 'shift':
        state.battleState = 'battleMenuMain';
        break;
        
        case 'up':
        this.y = this.y - 40;
        if (this.y <350) {
          this.y = 350;
        }
        break;
        case 'down':
        this.y = this.y +40;
        var maxY =  (350+((state.playerBattleMonster.abilities.length-1) * 40));
        if (this.y > maxY) {
          this.y = maxY;
        }
        break;
        case 'space':
        for (var i = 0; i < state.playerBattleMonster.abilities.length; i++){
          if (this.y === 350 +(i*40)){
            state.playerBattleMonster.abilities[i].func(state.playerBattleMonster.controller);
            if(state.enemyToBattle.currentHp > 0){
              enemyAbilityUsed();
              state.battleState = 'playerMove';
            }
            else{
              state.battleState = 'battleMonsterDie';
            }
          }
        };
        break;
      };
    }
    else if (state.battleState === 'battleWinText'){
      switch(key){
        case 'space':
        state.currentLevel = state.prevLevel;
        this.x = state.locX;
        this.y = state.locY;
        state.battleState = 0;
        break;
      }
    };
  } // End of Battle controls
  
  else if(state.currentLevel === 'gameOver'){
    switch(key) {
      case 'space':
      location.reload();
      break;
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
      break;
      default:
      break;
    }
  } //End of else
}


// ------ ITEMS -------
// ** Refactor to reference currently selected monster outside of combat
// ** (i.e. choose which monster to give a potion to)
var items = {
  potion:{
    name:'Potion',
    func: function(){
      //checks to see if the potion is used in a battle
      if(state.currentLevel === 'battleLevel'){
        state.playerBattleMonster.currentHp += 10;
        if (state.playerBattleMonster.currentHp > state.playerBattleMonster.hp){
          state.playerBattleMonster.currentHp = state.playerBattleMonster.hp;
        }
      }
      //if not used in a battle the potion is used in the invMenu
      else{
        monsterInventory[0].currentHp += 10;
        if(monsterInventory[0].currentHp > monsterInventory.hp){
          monsterInventory[0].currentHp = monsterInventory[0].hp;
        }
      }
    }
  },
  elixir:{
    name:'Elixir',
    func: function(){
      //must remove ailments
      if(state.playerBattleMonster.condition != 'healthy'){
        state.playerBattleMonster.condition = 'healthy';
        
      }
    }
  },
  net:{
    name:'Net',
    func: function(){
      //captures monster
      if(state.currentLevel === 'battleLevel'){
        var hpPercent = state.enemyToBattle.currentHp / state.enemyToBattle.hp;
        var randomNum = Math.random();

        var catchMonster = function() {
          if (monsterInventory[0].name === 'PlayerMon') {
            state.playerBattleMonster.player = 0;
            monsterInventory.pop();
          };

          state.enemyToBattle.controller = 'player';
          monsterInventory.push(state.enemyToBattle);

          state.battleState = 'caughtMonster';
          console.log(state.battleState);
        };
 
        // Probability of successfully catching a monster increases with decreasing monster health %
        if (hpPercent >= 0.9) {
          if (randomNum >= 0.8) {
            catchMonster();
          };
          state.battleState = "failedCatch";
          return;
        }
        else if (hpPercent >= 0.6) {
          if (randomNum >= 0.5) {
            catchMonster();
          };
          state.battleState = "failedCatch";
          return;
        }
        else if (hpPercent >= 0.3) {
          if (randomNum >= 0.25) {
            catchMonster();
          }
          state.battleState = "failedCatch";
          return;
        }
        else {
          catchMonster();
        };

      };
    }
  }
}

itemInventory.push(items.net);
itemInventory.push(items.potion);


// Instantiate objects
var allNPC = [];
var player = new Player();
var menu = new Menu();

// Listens for key presses and sends the keys to 
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
