import allMaps from './../maps/all-maps';

export default {
  name:'Net',
  singleUse: false,
  func: function () {
    if ( currentMap === allMaps.battle ) {
      var enemy = currentMap.battleSystem.enemy;
      var hpPercent = enemy.currentHp / enemy.hp;

      var catchMonster = function ( probability ) {
        if ( rng() <= probability ) {
          if ( player.monsterInventory[0].name === 'PlayerMon' ) {
            currentMap.battleSystem.playerBattleMonster.player = 0;
            player.monsterInventory.pop();
          }

          enemy.controller = player;
          player.monsterInventory.push( enemy );
          items.net.battleState = 'caughtMonster';
        } else {
          items.net.battleState = 'failedCatch';
        }
      };

      // Probability of successfully catching a monster increases with decreasing monster health %
      if ( hpPercent >= 0.9 ) {
        catchMonster( 1 );
      } else if ( hpPercent >= 0.6 ) {
        catchMonster( 0.5 );
      } else if ( hpPercent >= 0.3 ) {
        catchMonster( 0.85 );
      } else {
        catchMonster( 1 );
      }
    }
  }
}
