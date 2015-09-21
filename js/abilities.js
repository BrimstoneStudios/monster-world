// Types: normal, fire, water, grass
// Categories: physical, special, status
// Power: range from 10-???,  status moves have null power
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
var attackFunc = function(){
	// Still needs random modifier, effectiveness modifier, accuracy modifier 
	var damage = (((this.power*state.playerBattleMonster.attack)*0.1)/state.enemyToBattle.defense);
	state.enemyToBattle.currentHp = Math.round(state.enemyToBattle.currentHp - damage);
	if (state.enemyToBattle.currentHp < 0){
		state.enemyToBattle.currentHp = 0;
		state.currentLevel = state.prevLevel;
	}
};
var spAttackFunc = function(){
	var damage = (((this.power*state.playerBattleMonster.spAttack)*0.1)/state.enemyToBattle.spDefense);
	state.enemyToBattle.currentHp = Math.round(state.enemyToBattle.currentHp - damage);
	if (state.enemyToBattle.currentHp < 0){
		state.enemyToBattle.currentHp = 0;
		state.currentLevel = state.prevLevel;
	}
};

var abilities = {
	scratch: {
		name: 'Scratch',
		type: 'normal',
		category:'physical',
		power: 40,
		accuracy: 1,
		effect:'',
		func: function(){
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
		func: function() {
			attackFunc.call(this);
		}
	},
	growl: {
		name: 'Growl',
		type: 'normal',
		category:'status',
		power:NaN,
		accuracy:1,
		effect:'Decrease opponent attack damage',
		func: function() {
			state.enemyToBattle.attack = state.enemyToBattle.attack*0.85;
		}
	},
	stare: {
		name: 'Stare',
		type: 'normal',
		category:'status',
		power:NaN,
		accuracy:1,
		effect:'Decrease opponent defense',
		func: function() {
			state.enemyToBattle.defense = state.enemyToBattle.defense*0.85;
		}
	},
	fireBreath:{
		name: 'Fire Breath',
		type: 'fire',
		category: 'special',
		power: 45,
		accuracy: .9,
		effect:'Chance of burn',
		func: function(){
			spAttackFunc.call(this);
		}
	},
	razorLeaf: {
		name: 'Razor Leaf',
		type: 'grass',
		category:'special',
		power:50,
		accuracy:.9,
		effect:'',
		func: function(){
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
		func: function(){
			spAttackFunc.call(this);
		}
	},
};
