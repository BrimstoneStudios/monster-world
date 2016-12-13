import rng from './rng';
// ------ ITEMS -------
export default {
  potion:{
    name:'Potion',
    singleUse: true,
    battleState: 'potionUsed',
    func: function () {

      if ( levels.currentLevel === levels.battleLevel ) {
        monster = battle.playerBattleMonster;
      } else {
        monster = player.monsterInventory[0];
      }

      monster.currentHp += 10;

      if ( monster.currentHp > monster.hp ) {
          monster.currentHp = monster.hp;
      }
    }
  },
  elixir:{
    name:'Elixir',
    func: function () {
      battle.playerBattleMonster.condition = 'healthy';
    }
  },
  net:{
    name:'Net',
    singleUse: false,
    func: function () {
      var enemy = battle.enemy;

      if ( levels.currentLevel === levels.battleLevel ) {
        var hpPercent = enemy.currentHp / enemy.hp;

        var catchMonster = function ( probability ) {
          if ( rng() <= probability ) {
            if ( player.monsterInventory[0].name === 'PlayerMon' ) {
              battle.playerBattleMonster.player = 0;
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
};
