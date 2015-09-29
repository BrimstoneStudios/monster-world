// Types: normal, fire, water, grass
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


// Attack function for physical attacks
var attackFunc = function(controller){
	if (controller === 'player') {
		state.playerAttackUsed = this;
		// Still needs random modifier, accuracy modifier
		if (this.category === 'physical') {
			var damage = (((this.power*(state.playerBattleMonster.attack*1.5))*0.04)/(state.enemyToBattle.defense));
			state.enemyToBattle.currentHp = Math.round(state.enemyToBattle.currentHp - damage);
		}
		else if (this.category === 'special') {
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

			var damage = ((((this.power*(state.playerBattleMonster.spAttack*1.5))*0.04)/state.enemyToBattle.spDefense)* damageMod);
			state.enemyToBattle.currentHp = Math.round(state.enemyToBattle.currentHp - damage);
		}

		if (state.enemyToBattle.currentHp <= 0){
			state.enemyToBattle.currentHp = 0;
			state.playerBattleMonster.attack = state.playerBattleMonsterAttack;
			state.playerBattleMonster.defense = state.playerBattleMonsterDefense;
			state.playerBattleMonster.spAttack = state.playerBattleMonsterSpAttack;
			state.playerBattleMonster.spDefense = state.playerBattleMonsterSpDefense;
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
	var damage = 0;
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
		damage =((((state.enemyAttackUsed.power*(state.enemyToBattle.spAttack*1.5))*0.04)/state.playerBattleMonster.spDefense)*damageMod);
	}
	// Physical attacks
	else if (state.enemyAttackUsed.category === "physical"){
		damage =(((state.enemyAttackUsed.power*(state.enemyToBattle.attack*1.5))*0.04)/state.playerBattleMonster.defense);
		
	}
	// Status attacks
	else {
		state.enemyAttackUsed.func(state.enemyToBattle.controller);
	};
	
	//Currently deals damage regardless of attack type
	state.playerBattleMonster.currentHp = Math.round(state.playerBattleMonster.currentHp - damage);
	
	// If your monster dies
	if(state.playerBattleMonster.currentHp <= 0){
		state.playerBattleMonster.currentHp = 0;

		//If the Player monster dies, GAME OVER 
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


// Template:

// : {
// 	name: '',
// 	type: '',
// 	category:'',
// 	power:,
// 	accuracy:,
// 	effect:,
// },

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
				state.enemyToBattle.defense = state.enemyToBattle.defense*0.9;
			}
			else {
				state.playerBattleMonster.defense = state.playerBattleMonster.defense * 0.9;
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
			attackFunc.call(this, controller);
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
		effect:'Reduces defending monster defense',
		func: function(controller){
			if (controller === "player") {
				state.enemyToBattle.defense = state.enemyToBattle.defense*0.9;
			}
			else {
				state.playerBattleMonster.defense = state.playerBattleMonster.defense * 0.9;
			};
			attackFunc.call(this, controller);
		}
	},
	waterBlast: {
		name: 'Water Blast',
		type: 'water',
		category:'special',
		power:50,
		accuracy:.9,
		effect:'Reduces defending monsters attack',
		func: function(controller){
			if (controller === "player") {
				state.enemyToBattle.attack = state.enemyToBattle.attack*0.9;
			}
			else {
				state.playerBattleMonster.attack = state.playerBattleMonster.attack * 0.9;
			};
			attackFunc.call(this, controller);
		}
	},
};
