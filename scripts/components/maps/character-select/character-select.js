import controls from './controls';
import renderText from './render-text';
import tiles from './../world-tiles.js';
import {Maps} from './../maps';

const dT = tiles.dT;
const mT = tiles.mT;
const Wh = tiles.Wh;

var characterSelect = new Maps(
  'characterSelect',
  [
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
);

characterSelect.setMovement = {
  boundaries: {
    bottom: 200,
    left: 250,
    right: 400,
    top: 200,
  },
  controls: controls,
  distancePerMove: {
    x: 150,
    y: 0,
  },
};

characterSelect.setRenderText = renderText;
characterSelect.setSprite = 'images/characters/selector.png';
characterSelect.setInitLocation = {
  x: 250,
  y: 200,
};

export {characterSelect as default};
