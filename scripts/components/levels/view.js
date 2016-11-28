// Data for all levels
var Di = 'images/terrain/dirt-tile50.png'; // dirt tile 50x50
var Gr = 'images/terrain/grass-tile50.png'; // grass tile 50x50
var Wh = 'images/terrain/white-tile50.png'; // white tile 50x50
var La = 'images/terrain/lava-tile50.png';
var Ro = 'images/terrain/rock-tile50.jpg';
var Sa = 'images/terrain/sand-tile50.png';
var Wa = 'images/terrain/water-tile.jpg';

var s1 = 'images/terrain/drag1-wb.jpg';
var s2 = 'images/terrain/hydra1-wb.jpg';
var s3 = 'images/terrain/wormy1-wb.jpg';
var dT = 'images/terrain/deathCaster-wb.png';
var mT = 'images/terrain/monk-wb.png';
var dC = 'images/characters/deathCaster.gif';
var mK = 'images/characters/monk.gif';
var wZ = 'images/characters/wizard.gif';
var mo; //first monster in monsterInventory array. This var is defined during the battle event function

var allWhite = [
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
];

alevels = {
  itemsInv:{
    levelName : 'itemsInv',
    tiles : allWhite
  },
  monsterInventory:{
    levelName : 'monsterInventory',
    tiles : allWhite
  },
  monsterStats:{
    levelName : 'monsterStats',
    tiles : allWhite
  },
  gameOver:{
    levelName: 'gameOver',
    tiles: allWhite
  }
};

