// ---------------- BATTLE ----------------
// state.battle {
//    battleState: 'string',
//    enemy: object,
//    playerBattleMonster: object,
//    abilityUsed: object
// }

var battleEvent = function () {
  if ( rng() <= 0.15 ) {
    // Save the pre-battle state
    var prevLevel = state.prevLevel = state.currentLevel;
    state.currentLevel = 'battleLevel';
    state.locX = player.x;
    state.locY = player.y;
    state.battle.battleState = 'wildIntroText';
    state.battle.enemy = randomEnemy(prevLevel);
    state.battle.playerBattleMonster = monsterInventory[0];
    state.battle.itemsDropped = []
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

