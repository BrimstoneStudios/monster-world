// Global variable objects
var state = {};
var monsterInventory = [];
var itemInventory = [];

// ------Global State Variables -------
// Set the initial level
state.currentLevel = 'startScreen';
state.sprite = null;

// Where we will store our level and location when entering a battle/menu so we can return after
state.prevLevel = null;
state.locX = null;
state.locY = null;

// 0 = not currently displaying , 1 = currently displaying
state.monsterStatCurrent = 0;

// When a monster stat is going to be shown, save the ID here
state.monsterStatID = null;
state.run = null;

// Player monster currently battling
state.playerBattleMonster = null;
state.playerBattleMonsterAttack = null;
state.playerBattleMonsterDefense = null;
state.playerBattleMonsterSpAttack = null;
state.playerBattleMonsterSpDefense = null;
// Current monster battle opponent

state.levelUp = null;
state.itemDrop = null;
state.droppedItem = null;

// Battle states
state.playerAttackUsed = null;
state.playerDamageMod = 'none';
state.enemyAttackUsed = null;
state.enemyDamageMod = 'none';
state.battleState = null;
state.battle = {};







