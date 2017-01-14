import abilities from './../abilities/abilities';
import changeBattleState from './change-battle-state';
import enemyTurn from './enemy-turn';

export default {
  renderText: function () {
    ctx.font = '30px Arial';
    ctx.fillText( 'You hit enemy ' + enemy.name + ' with ' + battle.abilityUsed.name, coordinates.leftColumn, coordinates.topRow );
      // Additional text if not very or super effective
      if ( battle.abilityUsed.damageMod === 'super' ) {
        ctx.fillText( 'It was super effective!', coordinates.leftColumn, coordinates.middleRow );
      } else if ( battle.abilityUsed.damageMod === 'notVery' ) {
        ctx.fillText( 'It was not very effective', coordinates.leftColumn, coordinates.middleRow );
      }
    }
  },
  controls: function ( key ) {
    if ( key === 'space' ) {
        abilityUsed( currentMap.battleSystem.enemy );
        changeBattleState( enemyTurn );
      }
    }
  },
  movement: {
    x: 0,
    y: 0,
  },
}
