import tiles from './../world-tiles.js';
import controls from './controls';
import {Bat} from './../../monsters/bat';
import {GiantRat} from './../../monsters/giant-rat';
import {Munchkin} from './../../monsters/munchkin';
import HealerNPC from './../../npcs/healer';
import {LavaOgre} from './../../monsters/lava-ogre';

var Di = tiles.Di;
var Gr = tiles.Gr;
var wZ = tiles.wZ;
var healer = new HealerNPC('Flo', wZ, 60, 60);

export default {
  boundaries: {
    left: -40,
    top: -40,
    right: 710,
    bottom: 510
  },
  initLocation: {
    x: 10,
    y: 10
  },
  levelName : 'firstLevel',
  movement: {
    x: 50,
    y: 50
  },
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
  monsters: {
    minLevel: 1,
    maxLevel: 2,
    monster: [Munchkin]//, Bat, GiantRat, Munchkin],
  },
  controls: controls,
  npcs: [
    healer,
  ]
}
