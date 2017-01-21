import allWhite from './../all-white';
import controls from './controls';
import {Maps} from './../maps';

var startScreen = new Maps('startScreen', allWhite);
startScreen.setSprite = 'images/terrain/start-screen.png';

startScreen.setMovement = {
  boundaries: {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  movement: {
    x: 0,
    y: 0,
  },
  controls: controls,
}

export {startScreen as default};
