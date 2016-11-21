// ---------------- MENU ----------------
var Menu = function () {
};

var maxY;

Menu.prototype.renderCharSelect = function () {
  ctx.font='50px Arial';
  ctx.fillText( 'Choose a character',140,380 );
};

Menu.prototype.renderMonsterSelect = function () {
  ctx.font='50px Arial';
  ctx.fillText( 'Choose a starting monster',50,380 );
};

// Main menu
Menu.prototype.renderMain = function () {
  ctx.font='50px Arial';
  ctx.fillText( 'Items',280,200 );
  ctx.fillText( 'Monsters',245,290 );
};

Menu.prototype.renderItemsInv = function () {
  ctx.font='50px Arial';
  if ( itemInventory.length > 0 ) {
    for ( let i = 0, j = 0; i < itemInventory.length; i++, j = j + 50 ) {
      ctx.fillText( itemInventory[i].name, 155, 85 + j );
    }
  } else {
    ctx.fillText( 'Your bag is empty.', 155, 85 );
  }
};

// Monster Inventory Menu
Menu.prototype.renderMonsterInv = function () {
  ctx.font='50px Arial';
  for ( let i = 0, j = 0; i < monsterInventory.length; i++, j = j + 50 ) {
    ctx.drawImage( Resources.get( monsterInventory[i].sprite ), 85, 50 + j );
    ctx.fillText( monsterInventory[i].name, 155, 85 + j );
  }
};

// Monster Stats display
Menu.prototype.renderMonsterStat = function ( monster ) {
  ctx.font='25px Arial';
  ctx.fillText( 'Level:', 430, 65 );
  ctx.fillText( monsterInventory[monster].level, 620, 65 );
  ctx.fillText( 'HP:', 430, 105 );
  ctx.fillText( monsterInventory[monster].hp, 620, 105 );
  ctx.fillText( 'Attack:', 430, 145 );
  ctx.fillText( monsterInventory[monster].attack, 620, 145 );
  ctx.fillText( 'Defense:', 430, 185 );
  ctx.fillText( monsterInventory[monster].defense, 620, 185 );
  ctx.fillText( 'Sp Attack:', 430, 225 );
  ctx.fillText( monsterInventory[monster].spAttack, 620, 225 );
  ctx.fillText( 'Sp Defense:', 430, 265 );
  ctx.fillText( monsterInventory[monster].spDefense, 620, 265 );
  ctx.fillText( 'Speed:', 430, 305 );
  ctx.fillText( monsterInventory[monster].speed, 620, 305 );
  ctx.fillText( 'Type:', 430, 345 );
  ctx.fillText( monsterInventory[monster].type, 620, 345 );
};

//Set of common button locations
//  levelRowColumn
// Battle Coordinates based off
//  | Top Left           |   Top Middle-col           |  Top Right
//  | Middle-row Left    |   Middle-row Middle-col    |  Middle-row Right
//  | Bottom Left        |   Bottom Middle-col        |  Bottom Right

var battleLeftCol = 75;
var battleMiddleCol = battleLeftCol + 150;
var battleRightCol = battleLeftCol + 225;

var battleTopRow = 385;
var battleMiddleRowRow = battleTopRow + 40;
var battleBottomRow = battleTopRow + 80;


var battleTopLeftSelector = {
  x: 30,
  y: 350
};

// Text and menus for battles
Menu.prototype.renderBattleText = function () {
  var enemy = state.battle.enemy;
  ctx.font='30px Arial';

  if ( state.battle.battleState === 'wildIntroText' ) {
    var wildName = enemy.name;
    ctx.font='40px Arial';
    ctx.fillText( 'A wild ' + wildName + ' has appeared!', battleLeftCol, battleTopRow );
  } else if ( state.battle.battleState === 'battleMenuMain' ) {
    ctx.fillText( 'Fight', 350, 385 );
    ctx.fillText( 'Bag', 580, 385 );
    ctx.fillText( 'Monsters', 350, 455 );
    ctx.fillText( 'Run', 580, 455 );
  } else if ( state.battle.battleState === 'playerMove' ) {
    ctx.fillText( 'You hit enemy ' + enemy.name + ' with ' + state.battle.abilityUsed.name, battleLeftCol, battleTopRow );
    // Additional text if not very or super effective
    if ( state.battle.abilityUsed.damageMod === 'super' ) {
      ctx.fillText( 'It was super effective!', battleLeftCol, battleTopRow + 50 );
    } else if ( state.battle.abilityUsed.damageMod === 'notVery' ) {
      ctx.fillText( 'It was not very effective', battleLeftCol, battleTopRow + 50 );
    }
  } else if ( state.battle.battleState === 'AI' ) {
    ctx.fillText( enemy.name + ' hit you with ' + state.battle.abilityUsed.name, battleLeftCol, battleTopRow );
    if ( state.battle.abilityUsed.damageMod === 'super' ) {
      ctx.fillText( 'It was super effective!', battleLeftCol, battleTopRow + 50 );
    } else if ( state.battle.abilityUsed.damageMod === 'notVery' ) {
      ctx.fillText( 'It was not very effective', battleLeftCol, battleTopRow + 50 );
    }
  } else if ( state.battle.battleState === 'potionUsed' ) {
    ctx.fillText( 'You used a potion!', battleLeftCol, battleTopRow );
  } else if ( state.battle.battleState === 'caughtMonster' ) {
    ctx.fillText( 'You caught ' + enemy.name + '!', battleLeftCol, battleTopRow );
  } else if ( state.battle.battleState === 'failedCatch' ) {
    ctx.fillText( 'You failed to catch ' + enemy.name + '!', battleLeftCol, battleTopRow );
    ctx.fillText( 'Try dealing more damage next time.', battleLeftCol, battleTopRow + 50 );
  } else if ( state.battle.battleState === 'battleMonsterDie' ) {
    if ( state.battle.playerBattleMonster.currentHp === 0 ) {
      ctx.fillText( state.battle.playerBattleMonster.name + ' has died!', battleLeftCol, battleTopRow );
    } else {
      if ( state.battle.levelUp === 1 ) {
        ctx.fillText( enemy.name + ' has died!', battleLeftCol, battleTopRow );
        ctx.fillText( state.battle.playerBattleMonster.name + ' has gained a level!', battleLeftCol, battleTopRow + 50 );
      } else {
        ctx.fillText( enemy.name + ' has died!', battleLeftCol, battleTopRow );
      }
    }
  } else if ( state.battle.battleState === 'itemDrop' ) {
    ctx.fillText( enemy.name + ' dropped a ' + state.battle.droppedItem + '!', battleLeftCol, battleTopRow );
  } else if ( state.battle.battleState === 'battleMenuFight' ) {
    for ( let i = 0, j = 0; i < state.battle.playerBattleMonster.abilities.length; i++, j = j + 40 ) {
      ctx.fillText( state.battle.playerBattleMonster.abilities[i].name, 50, 385 + j );
    }
  } else if ( state.battle.battleState === 'monsterInvMenu' ) {
    for ( let i = 0, j = 0; i < monsterInventory.length; i++, j = j + 40 ) {
      ctx.fillText( monsterInventory[i].name, battleLeftCol, battleTopRow + j );
    }
  } else if ( state.battle.battleState === 'invMenu' ) {
    if ( itemInventory.length > 0 ) {
      for ( let i = 0, j = 0; i < itemInventory.length; i++, j = j + 40 ) {
        ctx.fillText( itemInventory[i].name, 75, 385 + j );
      }
    } else {
      ctx.fillText( 'You have no items to use!', battleLeftCol, battleTopRow );
    }
  } else if ( state.battle.battleState === 'battleFailedRunAway' ) {
    ctx.fillText( 'Escape failed. FIGHT!', battleLeftCol, battleTopRow );
  } else if ( state.battle.battleState === 'battleRunAway' ) {
    ctx.fillText( 'You ran away!? You wimp...', battleLeftCol, battleTopRow );
  } else if ( state.battle.battleState === 'battleWinText' ) { //This will be used when we defeat NPC
    ctx.fillText( 'You have defeated ' + enemy.name + '!', battleLeftCol, battleTopRow );
  }
};