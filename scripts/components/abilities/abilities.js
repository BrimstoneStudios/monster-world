import checkTypeEffectiveness from './check-type-effectiveness';
import types from './../type/types';

var allAbilities = {
    useAbility: function ( attacker ) {
        var ability;
        var battle = currentMap.battleSystem;
        var defender;

        if ( attacker.controller === player ) {
            defender = battle.enemy;
            for ( let i = 0; i < battle.playerBattleMonster.abilities.length; i++ ) {
                if ( player.location.y === currentMap.boundaries.top + ( i * currentMap.movement.y ) ) {
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
};

class Abilities {
  constructor(name, accuracy, category, power, type) {
    this.name = name;
    this.accuracy = accuracy;
    this.category = category;
    this.power = power;
    this.type = type;
  }
}

// Types: normal, fire, water, grass, etc..
// Categories: physical, special, status
// Power: range from 10-???,  status moves have 0 power
// Accuracy: Range from 0.5-1
// Effect: A description of the special effects on some abilities
// Ability type effectiveness data
// allAbilities.this = new Abilities('name', accuracy, 'category', power, 'type');

allAbilities.bite = new Abilities('Bite', 0.9, 'physical', 45, types.normal);
allAbilities.growl = new Abilities('Growl', 1, 'physical', 0, 'status');
    // attribute: 'attack',
    // effect: 'Decrease opponent attack damage',
    // modifier: 0.8,
    // targetSelf: false,
allAbilities.scratch = new Abilities('Scratch', 1, 'physical', 40, types.normal);
allAbilities.stare = new Abilities('Stare', 1, 'status', 1, types.normal);
    // attribute: 'defense',
    // effect: 'Decrease opponent defense',
    // modifier: 0.9,
    // targetSelf: false,
allAbilities.fireBreath = new Abilities('Fire Breath', 0.9, 'special', 50, types.fire);
    // attribute: 'condition',
    // conditionApplied: 'burn',
    // effect: 'Chance of burn',
    // modifier: 0.1,
    // targetSelf: false,
allAbilities.fireBlast = new Abilities('Fire Blast', 0.9, 'special', 80, types.fire);
    // attribute: 'condition',
    // conditionApplied: 'burn',
    // effect: 'Chance of burn',
    // modifier: 0.1,
    // targetSelf: false,
allAbilities.razorLeaf = new Abilities('Razor Leaf', 0.9, 'special', 50000, types.grass);
    // attribute: 'defense',
    // conditionApplied: 'burn',
    // effect: 'Reduces defending monster defense',
    // modifier: 0.9,
    // targetSelf: false,
allAbilities.waterBlast = new Abilities('Water Blast', 0.9, 'special', 50, types.water);
    // attribute: 'attack',
    // category: 'special',
    // effect: 'Reduces defending monsters attack',
    // modifier: 0.9,
    // targetSelf: false,

export default allAbilities;
