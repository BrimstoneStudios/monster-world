// Types: normal, fire, water, grass
// Categories: physical, special, status
// Power: range from 10-???,  status moves have 0 power
// Accuracy: Range from 0.5-1
// Effect: A description of the special effects on some abilities

// Type effectiveness data
var type = {
	fire: {
		super: ['grass'],
		notVery: ['water', 'fire'],
	},
	water: {
		super: ['fire'],
		notVery: ['grass', 'water'],
	},
	grass: {
		super: ['water'],
		notVery: ['fire', 'grass'],
	},
};

// Template:

// : {
// 	name: '',
// 	type: '',
// 	category:'',
// 	power:,
// 	accuracy:,
// 	effect:,
// },

// Attack function for physical attacks
var attackFunc = function(controller){
	if (controller === 'player') {
		state.playerAttackUsed = this;
		// Still needs random modifier, effectiveness modifier, accuracy modifier
		var damage = (((this.power*state.playerBattleMonster.attack)*0.05)/state.enemyToBattle.defense);
		state.enemyToBattle.currentHp = Math.round(state.enemyToBattle.currentHp - damage);
		if (state.enemyToBattle.currentHp <= 0){
			state.enemyToBattle.currentHp = 0;
			state.playerBattleMonster.expGain();
		}
	}
};
// Ability needs to be able to see its type and the defending monsters type
// 


// Attack function for special attacks
var spAttackFunc = function(controller){
	if (controller === 'player') {
		state.playerAttackUsed = this;
		// Check effectiveness 
		var damageMod;
		var enemyType = state.enemyToBattle.type;
		var spellType = this.type;

		if (type[spellType].super.indexOf(enemyType) >= 0){
			state.playerDamageMod = 'super'; 
			damageMod = 1.5;
		}
		else if (type[spellType].notVery.indexOf(enemyType) >= 0) {
			state.playerDamageMod = 'notVery'; 
			damageMod = 0.5;
		}
		else {
			damageMod = 1;
		};

		var damage = ((((this.power*state.playerBattleMonster.spAttack)*0.05)/state.enemyToBattle.spDefense)* damageMod);
		state.enemyToBattle.currentHp = Math.round(state.enemyToBattle.currentHp - damage);

		if (state.enemyToBattle.currentHp <= 0){
			state.enemyToBattle.currentHp = 0;
			// If the enemy monster dies, gain exp
			state.playerBattleMonster.expGain();
		}
	}
};


// Attack function for enemy monsters
var enemyAbilityUsed = function(){

	var randomAttack = Math.floor(Math.random() * state.enemyToBattle.abilities.length);
	state.enemyAttackUsed = state.enemyToBattle.abilities[randomAttack];
	var damageMod;
	var enemyType = state.playerBattleMonster.type;
	var spellType = state.enemyAttackUsed.type;
	var damage;
	// Special attacks
	if(state.enemyAttackUsed.category === "special"){
		if (type[spellType].super.indexOf(enemyType) >= 0){
			state.enemyDamageMod = 'super';
			damageMod = 1.5;
		}
		else if (type[spellType].notVery.indexOf(enemyType) >= 0) {
			state.enemyDamageMod = 'notVery';
			damageMod = 0.5;
		}
		else {
			state.enemyDamageMod = 'none';
			damageMod = 1;
		};
		damage =((((state.enemyAttackUsed.power*state.enemyToBattle.spAttack)*0.05)/state.playerBattleMonster.spDefense)*damageMod);
	}
	// Physical attacks
	else if (state.enemyAttackUsed.category === "physical"){
		damage =(((state.enemyAttackUsed.power*state.enemyToBattle.attack)*0.05)/state.playerBattleMonster.defense);
		
	}
	// Status attacks
	else {
		state.enemyAttackUsed.func(state.enemyToBattle.controller);
	};
	
	state.playerBattleMonster.currentHp = Math.round(state.playerBattleMonster.currentHp - damage);
	
	if(state.playerBattleMonster.currentHp <= 0){
		state.playerBattleMonster.currentHp = 0;
		if (state.playerBattleMonster.player === 1){
			// Render game over
			state.battleState = 0;
			state.currentLevel = 'gameOver';
			player.x = 0;
			player.y = 0;
		}
		state.battleState = 'battleMonsterDie';
	}
}

// Database of monster abilities
var abilities = {
	scratch: {
		name: 'Scratch',
		type: 'normal',
		category:'physical',
		power: 40,
		accuracy: 1,
		effect:'',
		func: function(controller){
			attackFunc.call(this, controller);
		}
	},
	bite: {
		name: 'Bite',
		type: 'normal',
		category:'physical',
		power: 45,
		accuracy: 0.9,
		effect:'',
		func: function(controller) {
			attackFunc.call(this, controller);
		}
	},
	growl: {
		name: 'Growl',
		type: 'normal',
		category:'status',
		power:0,
		accuracy:1,
		effect:'Decrease opponent attack damage',
		func: function(controller) {
			if (controller === "player") {
				state.playerAttackUsed = this;
				state.enemyToBattle.attack = state.enemyToBattle.attack*0.8;
			}
			else {
				state.playerBattleMonster.attack = state.playerBattleMonster.attack * 0.8;
			};
		}
	},
	stare: {
		name: 'Stare',
		type: 'normal',
		category:'status',
		power:0,
		accuracy:1,
		effect:'Decrease opponent defense',
		func: function(controller) {
			if (controller === "player") {
				state.playerAttackUsed = this;
				state.enemyToBattle.defence = state.enemyToBattle.defence*0.8;
			}
			else {
				state.playerBattleMonster.defence = state.playerBattleMonster.defence * 0.8;
			};
		}
	},
	fireBreath:{
		name: 'Fire Breath',
		type: 'fire',
		category: 'special',
		power: 50,
		accuracy: .9,
		effect:'Chance of burn',
		func: function(controller){
			spAttackFunc.call(this, controller);
			var burnChance = Math.random();
			if (burnChance > 0.1) {
				if (controller === "player"){
					state.enemyToBattle.condition = 'burn';
					console.log(state.enemyToBattle.name + ' has been burned!');
				}
				else {
					state.playerBattleMonster.condition = 'burn';
					console.log(state.playerBattleMonster.name);

				}
				
			};
		}
	},
	razorLeaf: {
		name: 'Razor Leaf',
		type: 'grass',
		category:'special',
		power:50,
		accuracy:.9,
		effect:'',
		func: function(controller){
			spAttackFunc.call(this, controller);
		}
	},
	waterBlast: {
		name: 'Water Blast',
		type: 'water',
		category:'special',
		power:50,
		accuracy:.9,
		effect:'',
		func: function(controller){
			spAttackFunc.call(this, controller);
		}
	},
};
