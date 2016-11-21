// ------ ITEMS -------
// ** Refactor to reference currently selected monster outside of combat
// ** ( i.e. choose which monster to give a potion to )
var items = {
  potion:{
    name:'Potion',
    func: function () {
      //checks to see if the potion is used in a battle
      if ( state.currentLevel === 'battleLevel' ) {
        state.battle.playerBattleMonster.currentHp += 10;
        if ( state.battle.playerBattleMonster.currentHp > state.battle.playerBattleMonster.hp) {
          state.battle.playerBattleMonster.currentHp = state.battle.playerBattleMonster.hp;
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
      //must remove ailments
      if ( state.battle.playerBattleMonster.condition != 'healthy' ) {
        state.battle.playerBattleMonster.condition = 'healthy';
      }
    }
  },
  net:{
    name:'Net',
    func: function () {
      //captures monster
      if ( state.currentLevel === 'battleLevel' ) {
        var hpPercent = state.battle.enemy.currentHp / state.battle.enemy.hp;
        var randomNum = Math.random();

        var catchMonster = function () {
          if ( monsterInventory[0].name === 'PlayerMon' ) {
            state.battle.playerBattleMonster.player = 0;
            monsterInventory.pop();
          }

          state.battle.enemy.controller = 'player';
          monsterInventory.push( state.battle.enemy );

          state.battle.battleState = 'caughtMonster';
        };

        // Probability of successfully catching a monster increases with decreasing monster health %
        if ( hpPercent >= 0.9 ) {
          if ( randomNum >= 0.8 ) {
            catchMonster();
          }
          state.battle.battleState = 'failedCatch';
          return;
        } else if ( hpPercent >= 0.6 ) {
          if ( randomNum >= 0.5 ) {
            catchMonster();
          }
          state.battle.battleState = 'failedCatch';
          return;
        } else if ( hpPercent >= 0.3 ) {
          if ( randomNum >= 0.25 ) {
            catchMonster();
          }
          state.battle.battleState = 'failedCatch';
          return;
        } else {
          catchMonster();
        }
      }
    }
  }
};