import allWhite from './../all-white';
import controls from './controls';
import {Maps} from './../maps';

var startScreen = new Maps('startScreen', allWhite);

startScreen.setSprite = 'images/terrain/start-screen.png';

startScreen.setMovement = {
  boundaries: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
  },
  controls: controls,
  distancePerMove: {
    x: 0,
    y: 0,
  },
}

export {startScreen as default};
