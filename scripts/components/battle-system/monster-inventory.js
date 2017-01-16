import changeBattleState from './change-battle-state';
import battleMenuMain from './battle-menu-main';
import enemyTurn from './enemy-turn';
import swapMonsters from './swap-monsters';
import abilities from './../abilities/abilities';
import checkFightWinCondition from './check-win-condition';

export default {
  renderText: function () {
    ctx.font = '30px Arial';
    for ( let i = 0, j = 0; i < player.monsterInventory.length; i++, j = j + 40 ) {
      ctx.fillText( player.monsterInventory[i].name, currentMap.battleSystem.coordinates.leftColumn, currentMap.battleSystem.coordinates.topRow + j );
    }
  },
  controls: function ( key ) {
    if ( key === 'space' ) {
      swapMonsters();
      abilities.useAbility( currentMap.battleSystem.enemy );
      checkFightWinCondition( currentMap.battleSystem.playerBattleMonster );
      changeBattleState( enemyTurn );
    } else if ( key === 'shift' ) {
      changeBattleState( battleMenuMain );
    }
  },
  movement: {
    x: 0,
    y: 40,
  },
  boundaries: function () {
    return {
      left: 30,
      top: 350,
      right: 210,
      bottom: ( 350 + ( ( player.monsterInventory.length - 1 ) * currentMap.movement.y ) ),
    }
  }
}
