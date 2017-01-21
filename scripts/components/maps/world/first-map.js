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

firstMap.setMovement =
{
  boundaries: {
    left: -40,
    top: -40,
    right: 710,
    bottom: 510,
  },
  movement: {
    x: 50,
    y: 50,
  },
  controls: controls,
};

firstMap.setMonsters = [
  {
    monster: Bat,
    maxLevel: 3,
    minLevel: 1,
  }, {
    monster: GiantRat,
    maxLevel: 5,
    minLevel: 2,
  }, {
    monster: Munchkin,
    maxLevel: 8,
    minLevel: 5,
  },
];

export {firstMap as default};

// export default {
//   boundaries: {
//     left: -40,
//     top: -40,
//     right: 710,
//     bottom: 510,
//   },
//   initLocation: {
//     x: 10,
//     y: 10,
//   },
//   levelName: 'firstMap',
//   movement: {
//     x: 50,
//     y: 50,
//   },
//   tiles: [
//     [Di, Di, Di, Gr, Gr, Gr, Di, Di, Di, Di, Di, Di, Di, Gr],
//     [Di, Di, Di, Gr, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di],
//     [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
//     [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
//     [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
//     [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
//     [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
//     [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
//     [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
//     [Di, Di, Di, Gr, Di, Di, Di, Di, Di, Di, Di, Di, Di, Di],
//   ],
//   monsters: {
//     minLevel: 1,
//     maxLevel: 2,
//     monster: [Bat, GiantRat, Munchkin, ],
//   },
//   controls: controls,
//   npcs: [
//     healer,
//   ],
// }


