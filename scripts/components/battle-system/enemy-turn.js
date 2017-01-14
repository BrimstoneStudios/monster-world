import abilities from './../abilities/abilities';
import changeBattleState from './change-battle-state';
import checkWinCondition from './check-win-condition';
import battleMenuMain from './battle-menu-main';


export default {
  renderText: function () {
    ctx.font = '30px Arial';
    ctx.fillText( currentMap.battleSystem.enemy.name + ' hit you with ' + currentMap.battleSystem.abilityUsed.name, currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.topRow );
    if ( currentMap.battleSystem.abilityUsed.damageMod === 'super' ) {
      ctx.fillText( 'It was super effective!', currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.middleRow );
    } else if ( currentMap.battleSystem.abilityUsed.damageMod === 'notVery' ) {
      ctx.fillText( 'It was not very effective', currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.middleRow );
    }
  },
  controls: function ( key ) {
    if ( key === 'space' ) {
      checkWinCondition( currentMap.battleSystem.playerBattleMonster );
      if ( currentMap.battleSystem. playerBattleMonster.currentHp === 0 ) {
        // changeBattleState( playerMonsterDies );
      } else {
        changeBattleState( battleMenuMain );
      }
    }
  },
  movement: {
    x: 0,
    y: 0,
  },
}
