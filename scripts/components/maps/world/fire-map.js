import tiles from './../world-tiles.js';
import controls from './controls';
import {LavaOgre} from './../../monsters/lava-ogre';
import {Ignis} from './../../monsters/ignis';
import {Phoenix} from './../../monsters/phoenix';

var La = tiles.La
var Ro = tiles.Ro

export default {
  boundaries: {
    left: -40,
    top: -40,
    right: 710,
    bottom: 510,
  },
  initLocation: {
    y: 460,
  },
  levelName: 'fireLevel',
  movement: {
    x: 50,
    y: 50,
  },
  tiles: [
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
  monsters: {
    minLevel: 2,
    maxLevel: 23,
    monster: [LavaOgre, Ignis, Phoenix],
  },
  controls: controls,
}
