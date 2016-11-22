// ------ ITEMS -------
var items = {
  potion:{
    name:'Potion',
    func: function () {
      //checks to see if the potion is used in a battle
      if ( state.currentLevel === 'battleLevel' ) {
        monster = state.battle.playerBattleMonster;
        monster.currentHp += 10;
        if ( monster.currentHp > monster.hp ) {
          monster.currentHp = monster.hp;
        }
      } else { // if not used in a battle the potion is used in the invMenu
        monsterInventory[0].currentHp += 10;
        if ( monsterInventory[0].currentHp > monsterInventory.hp) {
          monsterInventory[0].currentHp = monsterInventory[0].hp;
        }
      }
    }
  },
  elixir:{
    name:'Elixir',
    func: function () {
      state.battle.playerBattleMonster.condition = 'healthy';
    }
  },
  net:{
    name:'Net',
    func: function () {
      var battle = state.battle,
          enemy = battle.enemy;

      if ( state.currentLevel === 'battleLevel' ) {
        var hpPercent = enemy.currentHp / enemy.hp;

        var catchMonster = function ( probability ) {
          if ( rng() <= probability ) {
            if ( monsterInventory[0].name === 'PlayerMon' ) {
              battle.playerBattleMonster.player = 0;
              monsterInventory.pop();
            }

            enemy.controller = 'player';
            monsterInventory.push( enemy );
            battle.battleState = 'caughtMonster';
          } else {
            battle.battleState = 'failedCatch';
            return;
          }
        };

        // Probability of successfully catching a monster increases with decreasing monster health %
        if ( hpPercent >= 0.9 ) {
          catchMonster( 0.2 );
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
