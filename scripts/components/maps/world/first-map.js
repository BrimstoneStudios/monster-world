import tiles from './../world-tiles.js';
import controls from './controls';
import {Bat} from './../../monsters/bat';
import {GiantRat} from './../../monsters/giant-rat';
import {Munchkin} from './../../monsters/munchkin';
import HealerNPC from './../../npcs/healer';
import {Maps} from './../maps';

var Di = tiles.Di;
var Gr = tiles.Gr;
var wZ = tiles.wZ;
var healer = new HealerNPC('Flo', wZ, 60, 60);

var firstMap = new Maps('firstMap',
  [
    [Di, Di, Di, Gr, Gr, Gr, Di, Di, Di, Di, Di, Di, Di, Gr],
    [Di, Di, Di, Gr, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
    [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
  ]
);

firstMap.setMovement = {
  boundaries: {
    left: -40,
    top: -40,
    right: 710,
    bottom: 510,
  },
  controls: controls,
  distancePerMove: {
    x: 50,
    y: 50,
  },
};

firstMap.setMonsters = [
  {
    initMonster: Bat,
    maxLevel: 3,
    minLevel: 1,
    probability: 0.3,
  }, {
    initMonster: GiantRat,
    maxLevel: 5,
    minLevel: 2,
    probability: 0.5,
  }, {
    initMonster: Munchkin,
    maxLevel: 8,
    minLevel: 5,
    probability: 0.2,
  },
];

firstMap.setInitLocation = {
  x: 10,
  y: 10,
};

export {firstMap as default};

// export default {
//   npcs: [
//     healer,
//   ],
// }


