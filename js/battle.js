// ---------------- BATTLE ----------------
// state.battle {
//    battleState: 'string',
//    enemy: object,
//    enemyAttackUsed: object,
//    enemyDamageMod: 'string',
//    playerBattleMonster: object,
//    playerAttackUsed: object,
//    playerDamageMod: 'string',
//    itemDrop: object
// }
var battleEvent = function () {
  if ( rng() <= 0.1 ) {
    // Save the pre-battle state
    var prevLevel = state.prevLevel = state.currentLevel;
    state.currentLevel = 'battleLevel';
    state.locX = player.x;
    state.locY = player.y;
    state.battle.battleState = 'wildIntroText';
    state.battle.enemy = randomEnemy(prevLevel);

    state.battle.playerBattleMonster = monsterInventory[0];
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
  player.x = battleTopLeftSelector.x;
  player.y = battleTopLeftSelector.y;
  if ( rng() <= 0.5 ) {
    state.battle.battleState = 'battleRunAway';
  } else {
    state.battle.battleState = 'battleFailedRunAway';
  }
};

// Item drop
var itemDrop = function () {
  if ( rng() <= 0.8 ) {
    itemInventory.push( items.net );
    state.droppedItem = 'net';
  } else {
    itemInventory.push( items.potion );
    state.droppedItem = 'potion';
  }
};
