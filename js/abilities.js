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
		effect:'bleed'
	},
	bite: {
		name: 'Bite',
		type: 'normal',
		category:'physical',
		power: 45,
		accuracy: 0.9,
		effect:'poison'
	}
};
