import abilities from './../abilities/abilities';
import changeBattleState from './change-battle-state';
import enemyTurn from './enemy-turn';
import checkWinCondition from './check-win-condition';
import battleWon from './battle-won';
import checkFightWinCondition from './check-win-condition';

export default {
  renderText: function () {
    ctx.font = '30px Arial';
    ctx.fillText( 'You hit enemy ' + currentMap.battleSystem.enemy.name + ' with ' + currentMap.battleSystem.abilityUsed.name, currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.topRow );
    // Additional text if not very or super effective
    if ( currentMap.battleSystem.abilityUsed.damageMod === 'super' ) {
      ctx.fillText( 'It was super effective!', currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.middleRow );
    } else if ( currentMap.battleSystem.abilityUsed.damageMod === 'notVery' ) {
      ctx.fillText( 'It was not very effective', currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.middleRow );
    }
  },
  controls: function ( key ) {
    if ( key === 'space' ) {
      if ( checkWinCondition( currentMap.battleSystem.enemy ) ) {
        currentMap.battleSystem.playerBattleMonster.gainExp();
        changeBattleState( battleWon );
      } else {
        abilities.useAbility( currentMap.battleSystem.enemy );
        checkFightWinCondition( currentMap.battleSystem.playerBattleMonster );
        changeBattleState( enemyTurn );
      }
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
