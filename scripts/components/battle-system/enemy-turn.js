import abilities from './../abilities/abilities';
import changeBattleState from './change-battle-state';
import playerMonsterDies from './player-monster-dies';
import battleMenuMain from './battle-menu-main';

export default {
  renderText: function () {
    ctx.font = '30px Arial';
    ctx.fillText( enemy.name + ' hit you with ' + battle.abilityUsed.name, coordinates.leftColumn, coordinates.topRow );
    if ( battle.abilityUsed.damageMod === 'super' ) {
      ctx.fillText( 'It was super effective!', coordinates.leftColumn, coordinates.middleRow );
    } else if ( battle.abilityUsed.damageMod === 'notVery' ) {
      ctx.fillText( 'It was not very effective', coordinates.leftColumn, coordinates.middleRow );
    }
  },
  controls: function ( key ) {
    if ( key === 'space' ) {
        abilityUsed( currentMap.battleSystem.enemy );
        if ( playerBattleMonster.currentHp === 0 ) {
          changeBattleState( playerMonsterDies );
        } else {
          changeBattleState( battleMenuMain );
        }
      }
    }
  },
  movement: {
    x: 0,
    y: 0,
  },
}
