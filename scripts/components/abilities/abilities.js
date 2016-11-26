// Types: normal, fire, water, grass, etc..
// Categories: physical, special, status
// Power: range from 10-???,  status moves have 0 power
// Accuracy: Range from 0.5-1
// Effect: A description of the special effects on some abilities
// Ability type effectiveness data
var type = {
	normal: {
		super: [],
		notVery: ['ghost', 'rock'],
	},
	fire: {
		super: ['grass'],
		notVery: ['water', 'fire'],
	},
	water: {
		super: ['fire', 'rock'],
		notVery: ['grass', 'water'],
	},
	grass: {
		super: ['water', 'rock'],
		notVery: ['fire', 'grass'],
	},
	electric: {
		super: ['water'],
		notVery: ['rock', 'electric'],
	},
	rock: {
		super: ['electric'],
		notVery: ['rock'],
	},
	ghost: {
		super: ['ghost', 'psychic'],
		notVery: ['normal'],
	},
	psychic: {
		super: ['fighting'],
		notVery: ['psychic', 'ghost'],
	},
	fighting: {
		super: ['normal'],
		notVery: ['psychic'],
	}
};

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

// Template:
// : {
// 	name: string,
// 	type: string,
// 	category: ['physical', 'special', 'status'],
//	attribute: string,
//	modifier: num,
//	targetSelf: boolean,
//	conditionApplied: ['burn', 'poison', 'sleep'],
// 	power: num,
// 	accuracy: num,
// 	effect: string,
// },

// Database of monster abilities
var abilities = {
	scratch: {
		name: 'Scratch',
		type: 'normal',
		category: 'physical',
		power: 40,
		accuracy: 1,
		effect: '',
		func: function () {
			abilityUsed.call( this, state.battle.playerBattleMonster );
		}
	},
	bite: {
		name: 'Bite',
		type: 'normal',
		category:'physical',
		power: 45,
		accuracy: 0.9,
		effect: '',
		func: function () {
			abilityUsed.call( this, state.battle.playerBattleMonster );
		}
	},
	growl: {
		name: 'Growl',
		type: 'normal',
		category: 'status',
		attribute: 'attack',
		modifier: 0.8,
		targetSelf: false,
		power: 0,
		accuracy: 1,
		effect: 'Decrease opponent attack damage',
		func: function () {
			abilityUsed.call( this, state.battle.playerBattleMonster );
		}
	},
	stare: {
		name: 'Stare',
		type: 'normal',
		category: 'status',
		attribute: 'defense',
		modifier: 0.9,
		targetSelf: false,
		power: 0,
		accuracy: 1,
		effect: 'Decrease opponent defense',
		func: function () {
			abilityUsed.call( this, state.battle.playerBattleMonster );
		}
	},
	fireBreath: {
		name: 'Fire Breath',
		type: 'fire',
		category: 'special',
		attribute: 'condition',
		modifier: 0.1,
		targetSelf: false,
		conditionApplied: 'burn',
		power: 50,
		accuracy: 0.9,
		effect: 'Chance of burn',
		func: function () {
			abilityUsed.call( this, state.battle.playerBattleMonster );
		}
	},
	fireBlast: {
		name: 'Fire Blast',
		type: 'fire',
		category: 'special',
		attribute: 'condition',
		modifier: 0.1,
		targetSelf: false,
		conditionApplied: 'burn',
		power: 80,
		accuracy: 0.9,
		effect: 'Chance of burn',
		func: function () {
			abilityUsed.call( this, state.battle.playerBattleMonster );
		}
	},
	razorLeaf: {
		name: 'Razor Leaf',
		type: 'grass',
		category: 'special',
		attribute: 'defense',
		modifier: 0.9,
		targetSelf: false,
		conditionApplied: 'burn',
		power: 50000,
		accuracy: 0.9,
		effect: 'Reduces defending monster defense',
		func: function () {
			abilityUsed.call( this, state.battle.playerBattleMonster );
		}
	},
	waterBlast: {
		name: 'Water Blast',
		type: 'water',
		category: 'special',
		attribute: 'attack',
		modifier: 0.9,
		targetSelf: false,
		power: 50,
		accuracy: 0.9,
		effect: 'Reduces defending monsters attack',
		func: function () {
			abilityUsed.call( this, state.battle.playerBattleMonster );
		}
	}
};
