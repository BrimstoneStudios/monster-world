var allAbilities = {};

class Abilities {
  constructor(name, accuracy, category, power, type) {
    this.name = name;
    this.accuracy = accuracy;
    this.category = category;
    this.power = power;
    this.type = type;
  }

  useAbility () {
    abilityUsed.call( this, currentMap.battleSystem.playerBattleMonster );
  }
}

// Types: normal, fire, water, grass, etc..
// Categories: physical, special, status
// Power: range from 10-???,  status moves have 0 power
// Accuracy: Range from 0.5-1
// Effect: A description of the special effects on some abilities
// Ability type effectiveness data
// allAbilities.this = new Abilities('name', accuracy, 'category', power, 'type');

allAbilities.bite = new Abilities('Bite', 0.9, 'physical', 45, 'normal');
allAbilities.growl = new Abilities('Growl', 1, 'physical', 0, 'status');
    // attribute: 'attack',
    // modifier: 0.8,
    // targetSelf: false,
    // effect: 'Decrease opponent attack damage',
allAbilities.scratch = new Abilities('Scratch', 1, 'physical', 40, 'normal');
allAbilities.stare = new Abilities('Stare', 1, 'status', 1, 'normal');
    // attribute: 'defense',
    // modifier: 0.9,
    // targetSelf: false,
    // effect: 'Decrease opponent defense',
allAbilities.fireBreath = new Abilities('Fire Breath', 0.9, 'special', 50, 'fire');
    // attribute: 'condition',
    // modifier: 0.1,
    // targetSelf: false,
    // conditionApplied: 'burn',
    // effect: 'Chance of burn',
allAbilities.fireBlast = new Abilities('Fire Blast', 0.9, 'special', 80, 'fire');
    // attribute: 'condition',
    // modifier: 0.1,
    // targetSelf: false,
    // conditionApplied: 'burn',
    // effect: 'Chance of burn',
allAbilities.razorLeaf = new Abilities('Razor Leaf', 0.9, 'special', 50000, 'grass');
    // attribute: 'defense',
    // modifier: 0.9,
    // targetSelf: false,
    // conditionApplied: 'burn',
    // effect: 'Reduces defending monster defense',
allAbilities.waterBlast = new Abilities('Water Blast', 0.9, 'special', 50, 'water');
    // category: 'special',
    // attribute: 'attack',
    // modifier: 0.9,
    // targetSelf: false,
    // effect: 'Reduces defending monsters attack',

export default allAbilities;
