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

var abilities = {
	scratch: {
		name: 'Scratch',
		type: 'normal',
		category:'physical',
		power: 40,
		accuracy: 1,
		effect:'',
	},
	bite: {
		name: 'Bite',
		type: 'normal',
		category:'physical',
		power: 45,
		accuracy: 0.9,
		effect:'',
		func: function() {
			// Still needs random modifier, effectiveness modifier, accuracy modifier 
			var damage = ((this.power*state.playerBattleMonster.attack)/state.enemyToBattle.defense);
			state.enemyToBattle.currentHp = state.enemyToBattle.currentHp - damage;
			console.log(damage);
			console.log(state.enemyToBattle.currentHp);
			console.log(damage - state.enemyToBattle.currentHp);
		}
	},
	growl: {
		name: 'Growl',
		type: 'normal',
		category:'status',
		power:NaN,
		accuracy:1,
		effect:'Decrease opponent attack damage',
	},
	stare: {
		name: 'Stare',
		type: 'normal',
		category:'status',
		power:NaN,
		accuracy:1,
		effect:'Decrease opponent defense',
	},
	fireBreath:{
		name: 'Fire Breath',
		type: 'fire',
		category: 'special',
		power: 45,
		accuracy: .9,
		effect:'Chance of burn',
	},
	razorLeaf: {
		name: 'Razor Leaf',
		type: 'grass',
		category:'special',
		power:50,
		accuracy:.9,
		effect:'',
},
	waterBlast: {
		name: 'Water Blast',
		type: 'water',
		category:'special',
		power:50,
		accuracy:.9,
		effect:'',
	},
};
