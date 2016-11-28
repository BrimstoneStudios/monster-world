// Attack function
var abilityUsed = function ( attacker ) {
	var ability;
	var defender;

	if ( attacker.controller === player ) {
		defender = battle.enemy;

		for ( let i = 0; i < battle.playerBattleMonster.abilities.length; i++ ) {
			if ( player.location.y === levels.battleLevel.boundaries.top + ( i * levels.battleLevel.movement.y ) ) {
				ability = battle.abilityUsed = battle.playerBattleMonster.abilities[i];
				break;
			}
		}
	} else {
		defender = battle.playerBattleMonster;
		var randomAttack = Math.floor( Math.random() * battle.enemy.abilities.length );
		ability = battle.abilityUsed = battle.enemy.abilities[randomAttack];
	}

	if ( ability.category === 'status' || ability.category === 'special' ) {
		attributeModification( ability, attacker, defender );
	}

	var damageModifier = checkTypeEffectiveness( ability, defender )
	dealDamage( attacker, ability, damageModifier, defender );
	checkFightWinCondition( defender );
};

var checkTypeEffectiveness = function ( ability, defender ) {
	if ( type[ability.type].super.indexOf( defender.type ) >= 0 ) {
		battle.abilityUsed.damageMod = 'super';
		damageModifier = 1.5;
	} else if ( type[ability.type].notVery.indexOf( defender.type ) >= 0) {
		battle.abilityUsed.damageMod = 'notVery';
		damageModifier = 0.5;
	} else {
		battle.abilityUsed.damageMod = 'none';
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
};

var attributeModification = function ( ability, attacker, defender ) {
	var target;

	ability.targetSelf ? target = attacker : target = defender;

	attributeAffected = ability.attribute;
	if ( attributeAffected === 'condition' ) {
		if ( rng() <= ability.modifier ) {
			target[attributeAffected] = ability.conditionApplied;
		}
	} else {
		target[attributeAffected] = target[attributeAffected] * ability.modifier;
	}
};
