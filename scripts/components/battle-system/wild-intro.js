import battleMenuMain from './battle-menu-main';
import changeBattleState from './change-battle-state';

export default {
  renderText: function () {
    ctx.font = '30px Arial';
    ctx.fillText( 'A wild ' + currentMap.battleSystem.enemy.name + ' has appeared!', currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.topRow );
  },
  controls: function ( key ) {
    if ( key === 'space' ) {
      changeBattleState(battleMenuMain);
    }
  },
  movement: {
    x: 0,
    y: 0,
  },
  boundaries: function () {
    return {
      left: 30,
      top: 350,
      right: 210,
      bottom: 390,
    }
  }
}
