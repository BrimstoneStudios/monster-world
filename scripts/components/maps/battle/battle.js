import allWhite from './../all-white';
import battleSystem from './../../battle-system/battle-system';
import Maps from './../maps';
var battleMap = new Maps('battleMap', allWhite);

battleMap.battleSystem = battleSystem;

battleMap.setMovement = {
  boundaries: battleSystem.state.boundaries(),
  controls: battleSystem.state.controls,
  distance: {
    x: battleSystem.state.movement.x,
    y: battleSystem.state.movement.y,
  },
};

battleMap.setInitLocation = {
  x: 30,
  y: 350,
};

battleMap.setRenderText = battleSystem.state.renderText;

battleMap.setSprite = 'images/characters/menuSelector.png';

export {battleMap as default};

  // multipleRenderTextCounter: battleSystem.state.multipleRenderTextCounter,
