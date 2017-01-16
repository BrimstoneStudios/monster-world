import changeBattleState from './change-battle-state';
import PlayerMonster from './../monsters/player-monster';

export default function  ( defender ) {
  if ( defender.currentHp <= 0 ) {

    if ( defender.controller === player ) {
      if ( defender instanceof PlayerMonster ) {
        gameOver();
        return 0;
      } else {
        for ( let i = 0; i <= player.monsterInventory.length; i++ ) {
          if ( player.monsterInventory[i] === defender ) {
            player.monsterInventory.splice( i, 1 );
          }
        }
         // If there are no more monsters left, create new PlayerMonster
        if ( player.monsterInventory.length === 0 ) {
          var playerMonster = new PlayerMonster( 2 );
          if ( player.savedAttributes.sprite === 'images/characters/monk.gif' ) {
            playerMonster.sprite = 'images/characters/monk.gif'
          } else {
            playerMonster.sprite = 'images/characters/deathCaster.gif'
          }
          playerMonster.controller = player;
          player.monsterInventory.push( playerMonster );
        }
        currentMap.battleSystem.playerBattleMonster = player.monsterInventory[0];
      }
    } else {
      // Gain exp
      return true;
    }
  }
}
