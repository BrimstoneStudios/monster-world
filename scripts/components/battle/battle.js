// ---------------- BATTLE ----------------
// state.battle {
//    battleState: 'string',
//    enemy: object,
//    playerBattleMonster: object,
//    abilityUsed: object,
//    itemsDropped: array
// }

var battleEvent = function () {
  if ( rng() <= 1 ) {
    // Save the pre-battle state
    var prevLevel = state.prevLevel = state.currentLevel;
    state.currentLevel = 'battleLevel';
    state.locX = player.x;
    state.locY = player.y;

    state.battle = {
      battleState: 'wildIntroText',
      enemy: randomEnemy(prevLevel),
      playerBattleMonster: monsterInventory[0],
      itemsDropped: [],
      coordinates: {
        leftColumn: 80,
        middleColumn: 260,
        rightColumn: 440,
        topRow: 385,
        middleRow: 425,
        bottomRow: 465,
        selectorLeftColumn: 30,
        selectorMiddleColumn: 210,
        selectorRightColumn: 390,
        selectorTopRow: 350,
        selectorMiddleRow: 390,
        selectorBottomRow: 430
      }
    };
    player.x = state.battle.coordinates.selectorLeftColumn;
    player.y = state.battle.coordinates.selectorTopRow;
  }
};

var randomEnemy = function ( prevLevel ) {
  var monsters = allLevels[prevLevel].monsters;
  var enemyLevel = Math.floor( rng() * ( monsters.maxLevel - monsters.minLevel + 1 ) ) + monsters.minLevel;
  var enemyMonster = monsters.monster[Math.floor( rng() * monsters.monster.length )];
  var enemy = new enemyMonster( enemyLevel );
  return enemy;
};

//function to run from battle when run is selected in the menu
var runFromBattle = function () {
  if ( rng() <= 0.5 ) {
    return true;
  } else {
    return false;
  }
};

var swapMonsters = function () {
  for ( let i = 0; i < monsterInventory.length; i++ ) {
    if ( player.y === state.battle.coordinates.selectorTopRow + ( i * 40 ) ) {
      if ( state.battle.playerBattleMonster === monsterInventory[i] ) {
        return 'battleMenuMain';
      } else {
        state.battle.playerBattleMonster = monsterInventory[i];
        abilityUsed( state.battle.enemy );
        return 'AI'
      }
    }
  }
}

