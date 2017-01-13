import changeBattleState from './change-battle-state';
// import AITurn from './ai-turn';

export default {
  renderText: function () {
    ctx.font = '30px Arial';
    ctx.fillText( 'Escape failed. FIGHT!', currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.topRow );
  },
  controls: function ( key ) {
    if ( key === 'space' ) {
      // changeBattleState(AITurn);
    }
  },
  movement: {
    x: 0,
    y: 0,
  },
}
