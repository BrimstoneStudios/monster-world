import allWhite from './../all-white';
import setBoundaries from './set-boundaries';
import renderText from './render-text';
import controls from './controls';
import Maps from './../maps';

var monsterInventoryMenu = new Maps('monsterInventoryMenu', allWhite);

monsterInventoryMenu.setMovement = {
  boundaries: {
    bottom: 42,
    left: 20,
    right: 20,
    top: 42,
  },
  controls: controls,
  distance: {
    x: 0,
    y: 60,
  },
};

monsterInventoryMenu.setInitLocation = {
  x: 20,
  y: 42,
};

monsterInventoryMenu.setRenderText = renderText;
monsterInventoryMenu.setSprite = 'images/characters/menuSelector.png';
monsterInventoryMenu.setBoundaries = setBoundaries;

export {monsterInventoryMenu as default};
