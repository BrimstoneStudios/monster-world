import allWhite from './../all-white';
import controls from './controls';
// import renderText from './rendered-text';

export default {
  boundaries: {
    left: 180,
    top: 157,
    right: 180,
    bottom: 247
  },
  initLocation: {
    x: 180,
    y: 157
  },
  levelName : 'mainMenu',
  movement: {
    x: 0,
    y: 90
  },
  tiles : allWhite,
  sprite: 'images/characters/menuSelector.png',
  controls: controls,
  // renderText: renderText,
}

