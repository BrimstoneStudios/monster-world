import allWhite from './../all-white';
import controls from './controls';
import renderText from './rendered-text';
import {Maps} from './../maps';

var mainMenu = new Maps('mainMenu', allWhite);

mainMenu.setMovement = {
  boundaries: {
    bottom: 247,
    left: 180,
    right: 180,
    top: 157,
  },
  controls: controls,
  distancePerMove: {
    x: 0,
    y: 90,
  },
};

mainMenu.setInitLocation = {
  x: 180,
  y: 157,
};

mainMenu.setRenderText = renderText;
mainMenu.setSprite = 'images/characters/menuSelector.png';


export {mainMenu as default};
