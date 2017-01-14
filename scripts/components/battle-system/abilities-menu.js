import abilities from './../abilities/abilities';
import changeBattleState from './change-battle-state';
import playerTurn from './player-turn';
import battleMenuMain from './battle-menu-main';

export default {
  renderText: function () {
    ctx.font = '30px Arial';
    for ( let i = 0, j = 0; i < currentMap.battleSystem.playerBattleMonster.abilities.length; i++, j = j + 40 ) {
      ctx.fillText( currentMap.battleSystem.playerBattleMonster.abilities[i].name, currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.topRow + j );
    }
  },
  controls: function ( key ) {
    if ( key === 'shift' ) {
      changeBattleState( battleMenuMain );
    } else if ( key === 'space' ) {
      abilities.useAbility( currentMap.battleSystem.playerBattleMonster );
      changeBattleState( playerTurn );
    }
  },
  movement: {
    x: 0,
    y: 40,
  },
}
