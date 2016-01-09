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
var mo //first monster in monsterInventory array. This var is defined during the battle event function

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

var allLevels = {
  startScreen:{
    levelName : 'startScreen',
    tiles : allWhite,
  },
  charSelectLevel: {
    levelName : 'charSelectLevel',
    tiles : [
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, dT, Wh, Wh, mT, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    ]
  },
  monsterSelectLevel: {
    levelName : 'monsterSelectLevel',
    tiles : [
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, s1, Wh, s2, Wh, s3, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    ]
  },
  battleLevel: {
    levelName :  'battleLevel',
    tiles :  [
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh]
    ]
  },
  mainMenu:{
    levelName : 'mainMenu',
    tiles : allWhite,
  },
  itemsInv:{
    levelName : 'itemsInv',
    tiles : allWhite,
  },
  monsterInventory:{
    levelName : 'monsterInventory',
    tiles : allWhite,
  },
  monsterStats:{
    levelName : 'monsterStats',
    tiles : allWhite,
  },
  gameOver:{
    levelName: 'gameOver',
    tiles: allWhite,
  },
  firstLevel:{
    levelName : 'firstLevel',
    tiles : [
      [Di, Di, Di, Gr, Gr, Gr, Di, Di, Di, Di, Di, Di, Di, Gr],
      [Di, Di, Di, Gr, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di]
    ],
  },
  secondLevel:{
    levelName : 'secondLevel',
    tiles : [
      [Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Gr, Gr, Gr, Gr, Gr, Gr, Gr, Gr, Gr, Gr, Gr, Gr, Gr, Gr],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Gr, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di]
    ],
  },
  fireLevel: {
    levelName: 'fireLevel',
    tiles : [
      [La, La, La, La, Ro, Ro, La, Ro, Ro, Ro, Ro, Ro, Ro, Ro],
      [La, La, La, Ro, Ro, La, La, La, Ro, Ro, Ro, Ro, Ro, Ro],
      [La, La, La, Ro, Ro, La, La, La, Ro, Ro, Ro, Ro, Ro, Ro],
      [La, Ro, Ro, Ro, Ro, Ro, La, Ro, Ro, Ro, Ro, Ro, Ro, Ro],
      [Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, La, La, La, La],
      [Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, La, Ro, Ro, Ro],
      [Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, La, Ro, Ro],
      [Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, La, Ro],
      [Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, La],
      [Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro, Ro],  
    ],
  },
  waterLevel: {
    levelName: 'waterLevel',
    tiles : [
      [Wa, Wa, Wa, Wa, Wa, Wa, Wa, Wa, Wa, Sa, Sa, Sa, Sa, Sa],
      [Wa, Wa, Wa, Wa, Wa, Wa, Wa, Wa, Sa, Sa, Sa, Sa, Sa, Sa],
      [Wa, Wa, Wa, Wa, Wa, Wa, Wa, Sa, Sa, Sa, Sa, Sa, Sa, Sa],
      [Wa, Wa, Wa, Wa, Wa, Wa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa],
      [Wa, Wa, Wa, Wa, Wa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa],
      [Wa, Wa, Wa, Wa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa],
      [Wa, Wa, Wa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa],
      [Wa, Wa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa],
      [Wa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa],
      [Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa, Sa],
    ],
  }
};
