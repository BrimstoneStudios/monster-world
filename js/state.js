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
// if we need this refactor to displayStat = true or false
state.monsterStatCurrent = 0;
// When a monster stat is going to be shown, save the ID here
state.monsterStatID = null;

// Battle states
state.battle = {};







