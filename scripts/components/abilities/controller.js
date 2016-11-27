// Attack function
var abilityUsed = function ( attacker ) {
	var ability;
	var defender;

	if ( attacker.controller === 'player' ) {
		defender = state.battle.enemy;

		for ( let i = 0; i < state.battle.playerBattleMonster.abilities.length; i++ ) {
			if ( player.y === 350 + ( i * 40 ) ) {
				ability = state.battle.abilityUsed = state.battle.playerBattleMonster.abilities[i];
			}
		}
	} else {
		defender = state.battle.playerBattleMonster;
		var randomAttack = Math.floor( Math.random() * state.battle.enemy.abilities.length );
		ability = state.battle.abilityUsed = state.battle.enemy.abilities[randomAttack];
	}

	if ( ability.category === 'status' || ability.category === 'special' ) {
		attributeModification( ability, attacker, defender );
	}

	var damageModifier = checkTypeEffectiveness( ability, defender )
	dealDamage( attacker, ability, damageModifier, defender );

	checkFightWinCondition( defender );
};

