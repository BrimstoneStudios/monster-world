// Data for all levels 

var Di = 'images/terrain/dirt-tile50.png'; // dirt tile 50x50
var Gr = 'images/terrain/grass-tile50.png' // grass tile 50x50
var Wh = 'images/terrain/white-tile50.png' // white tile 50x50
var dC = 'images/characters/deathCaster.gif';
var mK = 'images/characters/monk.gif';
var allLevels = {
  startScreen:{
    levelName : 'startScreen',
    charRender : 0,
    tiles : [
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
    ]
  },
  charSelectLevel: {
    levelName : 'charSelectLevel',
    charRender : 0,
    tiles : [
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, dC, Wh, Wh, mK, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    ]
  },
  battleLevel: {
    levelName :  'battleLevel',
    charRender :  0,
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
      [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    ],
  }, 
  firstLevel:{
    levelName : 'firstLevel',
    charRender : 1,
    tiles : [
      [Di, Di, Di, Gr, Gr, Gr, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
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
    secondName : 'secondLevel',
    charRender : 1,
    tiles : [
      [Di, Di, Di, Gr, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Gr, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
      [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di]
    ],
  }
};