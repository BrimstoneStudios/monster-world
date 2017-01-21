import allWhite from './../all-white';
import setBoundaries from './set-boundaries';
import renderText from './render-text';
import controls from './controls';
import {Maps} from './../maps';


var inventoryMenu = new Maps('inventoryMenu', allWhite);

inventoryMenu.setMovement = {
  boundaries: {
    bottom: 42,
    left: 100,
    right: 100,
    top: 42,
  },
  controls: controls,
  distance: {
    x: 0,
    y: 50,
  },
};

inventoryMenu.setInitLocation = {
  x: 100,
  y: 42,
};

inventoryMenu.setRenderText = renderText;
inventoryMenu.setSprite = 'images/characters/menuSelector.png';
inventoryMenu.setBoundaries = setBoundaries;


export {inventoryMenu as default};
