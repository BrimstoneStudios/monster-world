import controls from './controls';
import renderText from './rendered-text';
import tiles from './../world-tiles.js';

var Wh = tiles.Wh;
var dT = tiles.dT;
var mT = tiles.mT;

export default {
  boundaries: {
    left: 250,
    top: 200,
    right: 400,
    bottom: 200
  },
  initLocation: {
    x: 250,
    y: 200
  },
  levelName: 'characterSelect',
  movement: {
    x: 150,
    y: 0
  },
  tiles: [
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
    ],
  sprite:  'images/characters/selector.png',
  controls: controls,
  renderText: renderText,
}
