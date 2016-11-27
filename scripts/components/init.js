// Global variable objects
var state = {};
var battle = {};
var player = {};
var levels = {};
var monsterInventory = [];
var itemInventory = [];


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
battle = {};







