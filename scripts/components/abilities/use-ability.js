export default function ( attacker ) {
	var ability;
	var defender;

	if ( attacker.controller === player ) {
		defender = battle.enemy;

		for ( let i = 0; i < battle.playerBattleMonster.abilities.length; i++ ) {
			if ( player.location.y === levels.battleMap.boundaries.top + ( i * levels.battleMap.movement.y ) ) {
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

	var damageModifier = checkTypeEffectiveness( ability, defender );
	dealDamage( attacker, ability, damageModifier, defender );
	checkFightWinCondition( defender );
}
