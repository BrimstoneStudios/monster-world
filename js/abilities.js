// Types: normal, fire, water, grass
// Categories: physical, special, status
// Power: range from 10-???,  status moves have 0 power
// Accuracy: Range from 0.5-1
// Effect: A special effect on some abilities


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
var attackFunc = function(){
	// Still needs random modifier, effectiveness modifier, accuracy modifier
	var damage = (((this.power*state.playerBattleMonster.attack)*0.05)/state.enemyToBattle.defense);
	state.enemyToBattle.currentHp = Math.round(state.enemyToBattle.currentHp - damage);
	if (state.enemyToBattle.currentHp <= 0){
		state.enemyToBattle.currentHp = 0;
		state.playerBattleMonster.expGain();
	}
};

// Attack function for special attacks
var spAttackFunc = function(){
	var damage = (((this.power*state.playerBattleMonster.spAttack)*0.05)/state.enemyToBattle.spDefense);
	state.enemyToBattle.currentHp = Math.round(state.enemyToBattle.currentHp - damage);
	if (state.enemyToBattle.currentHp <= 0){
		state.enemyToBattle.currentHp = 0;
		state.playerBattleMonster.expGain();
	}
};


// Attack function for enemy monsters
var enemyAbilityUsed = function(){
	var randomAttack = Math.floor(Math.random() * state.enemyToBattle.abilities.length);
	state.enemyAttackUsed = state.enemyToBattle.abilities[randomAttack];
	var damage = 0;
	if(state.enemyAttackUsed.category === "special"){
		damage =(((state.enemyAttackUsed.power*state.enemyToBattle.spAttack)*0.05)/state.playerBattleMonster.spDefense);
	}
	else if (state.enemyAttackUsed.category === "physical"){
		damage =(((state.enemyAttackUsed.power*state.enemyToBattle.attack)*0.05)/state.playerBattleMonster.defense);
		
	}
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
			attackFunc.call(this);
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
			attackFunc.call(this);
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
		power: 10000,
		accuracy: .9,
		effect:'Chance of burn',
		func: function(controller){
			spAttackFunc.call(this);
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
			spAttackFunc.call(this);
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
			spAttackFunc.call(this);
		}
	},
};
