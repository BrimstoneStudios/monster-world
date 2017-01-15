import changeBattleState from './change-battle-state';

export default function  ( defender ) {
  if ( defender.currentHp <= 0 ) {
    defender.currentHp = 0;

    if ( defender.controller === player ) {
      if ( defender instanceof PlayerMon ) {
        gameOver();
        return 0;
      } else {
        for ( let i = 0; i <= player.monsterInventory.length; i++ ) {
          if ( player.monsterInventory[i] === defender ) {
            player.monsterInventory.splice( i, 1 );
          }
        }
         // If there are no more monsters left, create new PlayerMon
        if ( player.monsterInventory.length === 0 ) {
          var playerMon;
          if ( player.savedAttributes.sprite === 'images/characters/monk.gif' ) {
            playerMon = new PlayerMon( 2, 'monk' );
          } else {
            playerMon = new PlayerMon( 2, 'deathCaster' );
          }
          playerMon.controller = player;
          player.monsterInventory.push( playerMon );
        }
        currentMap.battleSystem.playerBattleMonster = player.monsterInventory[0];
      }
    } else {
      // Gain exp
      return true;
    }
  }
}
