import tiles from './../world-tiles.js';
import controls from './controls';
import {Bat} from './../../monsters/bat';
import {GiantRat} from './../../monsters/giant-rat';
import {Munchkin} from './../../monsters/munchkin';
import {Maps} from './../maps';

var Wa = tiles.Wa;
var Sa = tiles.Sa;

var waterMap = new Maps('waterMap',
  [
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
);

waterMap.setMovement = {
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

waterMap.setMonsters = [
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

waterMap.setInitLocation = {
  x: 10,
  y: 10,
};

export {waterMap as default};
