import tiles from './../world-tiles.js';
import controls from './controls';
import {LavaOgre} from './../../monsters/lava-ogre';
import {Ignis} from './../../monsters/ignis';
import {Phoenix} from './../../monsters/phoenix';
import {Maps} from './../maps';

var La = tiles.La
var Ro = tiles.Ro
var fireMap = new Maps('fireMap',
  [
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
  ]
);

fireMap.setMovement = {
  boundaries: {
    bottom: 510,
    left: -40,
    right: 710,
    top: -40,
  },
  controls: controls,
  distancePerMove: {
    x: 50,
    y: 50,
  },
};

fireMap.setMonsters = [
  {
    initMonster: LavaOgre,
    maxLevel: 9000,
    minLevel: 9000,
    probability: 0.05,
  }, {
    initMonster: Ignis,
    maxLevel: 50,
    minLevel: 31,
    probability: 0.55,
  }, {
    initMonster: Phoenix,
    maxLevel: 8,
    minLevel: 5,
    probability: 0.4,
  },
];

fireMap.setInitLocation = {
  y: 460,
};

export {fireMap as default};
