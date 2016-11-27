// ------ ITEMS -------
var items = {
  potion:{
    name:'Potion',
    singleUse: true,
    battleState: 'potionUsed',
    func: function () {
      //checks to see if the potion is used in a battle
      if ( levels.currentLevel === 'battleLevel' ) {
        monster = battle.playerBattleMonster;
        monster.currentHp += 10;
        if ( monster.currentHp > monster.hp ) {
          monster.currentHp = monster.hp;
        }
      } else {
        // if not used in a battle the potion is used in the invMenu
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
      battle.playerBattleMonster.condition = 'healthy';
    }
  },
  net:{
    name:'Net',
    singleUse: false,
    func: function () {
      var battle = battle,
          enemy = battle.enemy;

      if ( levels.currentLevel === 'battleLevel' ) {
        var hpPercent = enemy.currentHp / enemy.hp;

        var catchMonster = function ( probability ) {
          if ( rng() <= probability ) {
            if ( monsterInventory[0].name === 'PlayerMon' ) {
              battle.playerBattleMonster.player = 0;
              monsterInventory.pop();
            }

            enemy.controller = player;
            monsterInventory.push( enemy );
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