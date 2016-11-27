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

// Template:
// abilityCodeName: {
//  name: string,
//  type: string,
//  category: ['physical', 'special', 'status'],
//  attribute: string,
//  modifier: num,
//  targetSelf: boolean,
//  conditionApplied: ['burn', 'poison', 'sleep'],
//  power: num,
//  accuracy: num,
//  effect: string,
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
      abilityUsed.call( this, battle.playerBattleMonster );
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
      abilityUsed.call( this, battle.playerBattleMonster );
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
      abilityUsed.call( this, battle.playerBattleMonster );
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
      abilityUsed.call( this, battle.playerBattleMonster );
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
      abilityUsed.call( this, battle.playerBattleMonster );
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
      abilityUsed.call( this, battle.playerBattleMonster );
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
      abilityUsed.call( this, battle.playerBattleMonster );
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
      abilityUsed.call( this, battle.playerBattleMonster );
    }
  }
};
