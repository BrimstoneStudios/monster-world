// Global variable objects
var state = {};
var monsterInventory = [];
var itemInventory = [];

// ------Global State Variables -------
// Set the initial level
state.currentLevel = 'startScreen';
state.sprite;

// Where we will store our level and location when entering a battle/menu so we can return after
state.prevLevel;
state.locX;
state.locY;

// 0 = not currently displaying , 1 = currently displaying
state.monsterStatCurrent = 0;

// When a monster stat is going to be shown, save the ID here
state.monsterStatID;
state.run;

// Player monster currently battling
state.playerBattleMonster;
state.playerBattleMonsterAttack;
state.playerBattleMonsterDefense;
state.playerBattleMonsterSpAttack;
state.playerBattleMonsterSpDefense;
// Current monster battle opponent
state.enemyToBattle;

state.levelUp;
state.itemDrop;
state.droppedItem;

// Battle states
state.playerAttackUsed;
state.playerDamageMod = 'none';
state.enemyAttackUsed;
state.enemyDamageMod = 'none';
state.battleState;







