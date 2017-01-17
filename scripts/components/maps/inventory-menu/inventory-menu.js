import allWhite from './../all-white';
import setBoundaries from './set-boundaries';
import renderText from './render-text';
import controls from './controls';

export default {
  boundaries: {
    left: 100,
    top: 42,
    right: 100,
    bottom: 42,
  },
  initLocation: {
    x: 100,
    y: 42,
  },
  levelName: 'inventoryMenu',
  movement: {
    x: 0,
    y: 50,
  },
  tiles: allWhite,
  sprite: 'images/characters/menuSelector.png',
  setBoundaries: setBoundaries,
  renderText: renderText,
  controls: controls,
}
