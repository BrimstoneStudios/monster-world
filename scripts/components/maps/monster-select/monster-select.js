import controls from './controls';
import renderText from './render-text';
import tiles from './../world-tiles.js';
import {Maps} from './../maps';

var Wh = tiles.Wh;
var s1 = tiles.s1;
var s2 = tiles.s2;
var s3 = tiles.s3;

var monsterSelect = new Maps(
  'monsterSelect',
  [
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, s1, Wh, s2, Wh, s3, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
    [Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh, Wh],
  ]
);

monsterSelect.setMovement = {
  boundaries: {
    bottom: 200,
    left: 200,
    right: 400,
    top: 200,
  },
  controls: controls,
  distancePerMove: {
    x: 100,
    y: 0,
  },
}

monsterSelect.setRenderText = renderText;
monsterSelect.setSprite = 'images/characters/selector.png';
monsterSelect.setInitLocation = {
  x: 200,
  y: 200,
};

export {monsterSelect as default};
