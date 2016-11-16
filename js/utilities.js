var rng = function() {
  return Math.random();
}

var gameOver = function () {
  state.battleState = 0;
  state.currentLevel = 'gameOver';
  player.x = 0;
  player.y = 0;
}

var checkFightWinCondition = function ( defender ) {
  if ( defender.currentHp <= 0 ) {
    defender.currentHp = 0;

    if ( defender.controller === 'player' ) {
      if ( defender instanceof PlayerMon ) {
        gameOver();
      } else {
        state.battleState = 'battleMonsterDie';
      }
    } else {
      // Return your stats to original state
      state.playerBattleMonster.attack = state.playerBattleMonsterAttack;
      state.playerBattleMonster.defense = state.playerBattleMonsterDefense;
      state.playerBattleMonster.spAttack = state.playerBattleMonsterSpAttack;
      state.playerBattleMonster.spDefense = state.playerBattleMonsterSpDefense;
      // Gain exp
      state.playerBattleMonster.expGain();
    }
  }
};

var checkTypeEffectiveness = function ( ability, defender ) {
  if ( type[ability.type].super.indexOf( defender.type ) >= 0 ) {
    state.enemyDamageMod = 'super';
    damageModifier = 1.5;
  } else if ( type[ability.type].notVery.indexOf( defender.type ) >= 0) {
    state.enemyDamageMod = 'notVery';
    damageModifier = 0.5;
  } else {
    state.enemyDamageMod = 'none';
    damageModifier = 1;
  }
  return damageModifier;
};

var dealDamage = function ( attacker, ability, damageModifier, defender ) {
  // Still needs accuracy modifier
  // Physical attacks use the attack and defense attributes
  var damage;
  if ( ability.category === 'physical' ) {
    damage = ( ( ( ability.power * ( attacker.attack * 1.5 ) ) * 0.04 ) / ( defender.defense ) * damageModifier );
  } else if ( ability.category === 'special' ) { // Special attacks use the spAttack and spDefense attributes
    damage = ( ( ( ( ability.power * ( attacker.spAttack * 1.5 ) ) * 0.04 ) / defender.spDefense ) * damageModifier );
  }

  if ( damage != null ) {
    defender.currentHp = Math.round( defender.currentHp - damage );
  }
}

var attributeModification = function ( ability, attacker, defender ) {
  var target;

  ability.targetSelf ? target = attacker : target = defender;

  attributeAffected = ability.attribute;
  if ( attributeAffected === 'condition' ) {
    var rng = Math.random();
    if ( rng <= ability.modifier ) {
      target[attributeAffected] = ability.conditionApplied;
    }
  } else {
    target[attributeAffected] = target[attributeAffected] * ability.modifier;
  }
}
