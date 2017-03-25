import allWhite from './../all-white';
import controls from './controls';
import Maps from './../maps';

var startScreen = new Maps('startScreen', allWhite);

startScreen.setSprite = 'images/terrain/start-screen.png';

startScreen.setControls = controls;

export {startScreen as default};
