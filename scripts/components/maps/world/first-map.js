import tiles from './../world-tiles.js';
import controls from './controls';
import Bat from './../../monsters/bat';
import GiantRat from './../../monsters/giant-rat';
import Munchkin from './../../monsters/munchkin';
import HealerNPC from './../../npcs/healer';
import Maps from './../maps';

const Di = tiles.Di;
const Gr = tiles.Gr;
const wZ = tiles.wZ;
const healer = new HealerNPC('Flo', wZ, 60, 60);

let firstMap = new Maps('firstMap',
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
    bottom: 510,
    left: -40,
    right: 710,
    top: -40,
  },
  controls: controls,
  distance: {
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

firstMap.setNPCs = [
  healer,
];

export {firstMap as default};
