import allWhite from './../all-white';
import battleSystem from './../../battle-system/battle-system';

export default {
  boundaries: {
    left: 30,
    top: 350,
    right: 210,
    bottom: 390,
  },
  initLocation: {
    x: 30,
    y: 350,
  },
  levelName : 'battleMap',
  movement: {
    x: battleSystem.state.movement.x,
    y: battleSystem.state.movement.y,
  },
  sprite: 'images/characters/menuSelector.png',
  tiles : allWhite,
  battleSystem: battleSystem,
  renderText: battleSystem.state.renderText,
  controls: battleSystem.state.controls,
  multipleRenderTextCounter: battleSystem.state.multipleRenderTextCounter,
}
