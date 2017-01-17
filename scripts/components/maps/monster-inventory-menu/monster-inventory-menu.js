import allWhite from './../all-white';
import setBoundaries from './set-boundaries';
import renderText from './render-text';
import controls from './controls';

export default {
  boundaries: {
    left: 20,
    top: 42,
    right: 20,
    bottom: 42,
  },
  displayStats: false,
  displayMonsterIndex: null,
  initLocation: {
    x: 20,
    y: 42,
  },
  levelName: 'monsterInventory',
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
