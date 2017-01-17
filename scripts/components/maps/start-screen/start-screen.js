import allWhite from './../all-white';
import controls from './controls';

export default {
  boundaries: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  levelName: 'startScreen',
  movement: {
    x: 0,
    y: 0,
  },
  tiles: allWhite,
  sprite: 'images/terrain/start-screen.png',
  controls: controls,
}
