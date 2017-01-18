import checkTypeEffectiveness from './check-type-effectiveness';
import dealDamage from './deal-damage';
import modifyAbility from './modify-ability';
import elementalTypes from './../elemental-types';

let allAbilities = {
};

class Abilities {
  constructor(name, accuracy, category, power, type) {
    this.name = name;
    this.accuracy = accuracy;
    this.category = category;
    this.power = power;
    this.type = type;
  }

  useAbility(attacker) {
    const ability = this;
    const battle = currentMap.battleSystem;
    let defender;
    let damageModifier;

    battle.abilityUsed = ability;

    if (attacker.controller === player) {
      defender = battle.enemy;
    } else {
      defender = battle.playerBattleMonster;
    }

    if (ability.category === 'status' || ability.category === 'special') {
      modifyAbility(ability, attacker, defender);
    }

    damageModifier = checkTypeEffectiveness(ability, defender);
    dealDamage(attacker, ability, damageModifier, defender);
  }
}

class SpecialAbilities extends Abilities {
  constructor(name, accuracy, category, power, type, attribute, effect, modifier, targetSelf) {
    super(name, accuracy, category, power, type);
    this.attribute = attribute;
    this.effect = effect;
    this.modifier = modifier;
    this.targetSelf = targetSelf;
  }
}

/*
* ABILITIES:
* name: 'ability Name'
* accuracy: value between 0 and 1
* categories: 'physical', 'special', 'status'
* power: value greater than 0,  status moves have 0 power
* type: elemental type
*
* allAbilities.this = new Abilities(
*     'name',
*     accuracy,
*     'category',
*     power,
*     'type'
* );
*/

allAbilities.bite = new Abilities(
    'Bite',
    0.9,
    'physical',
    45,
    elementalTypes.normal,
    /*
    bite.useAbility()
    // applies all of the following:
    // deals 2 dmg
    // decreases defense by 3%
    // applies a status effect of "string"

    Thinking...
    add ability.something = [
    [hp, 2, 1] ,
    [def, 0, 0.97],
    [status, 0, 1, status.burn],
    ...
    ]

    or even better ability.something = [
        {
            statAffect: hp,
            constant: 2,
            multiplier: 1
        },
        ..
    ]
    */
);
allAbilities.scratch = new Abilities(
    'Scratch',
    1,
    'physical',
    40,
    elementalTypes.normal
);

/*
* SPECIAL ABILITIES:
* name: 'ability Name'
* accuracy: value between 0 and 1
* categories: 'physical', 'special', 'status'
* power: value greater than 0,  status moves have 0 power
* type: elemental type
* attribute: monster attribute that gets affected if set
* to 'condition' then it applies a condition such as poison
* effect: string that describes the ability
* modifier: amount to affect the attribute
* targetSelf: true or false
*
* allAbilities.this = new Abilities(
*     'name',
*     accuracy,
*     'category',
*     power,
*     'type',
*     attribute,
*     effect,
*     modifier,
*     targetSelf
* );
*/

allAbilities.growl = new SpecialAbilities(
    'Growl',
    1,
    'status',
    0,
    elementalTypes.normal,
    'attack',
    'Decrease opponent attack damage',
    0.8,
    false
);
allAbilities.stare = new SpecialAbilities(
    'Stare',
    1,
    'status',
    0,
    elementalTypes.normal,
    'defense',
    'Decrease opponent defense',
    0.9,
    false
);

// attribute: 'condition',
// conditionApplied: 'burn',
// effect: 'Chance of burn',
// modifier: 0.1,
// targetSelf: false,
allAbilities.fireBreath = new Abilities(
    'Fire Breath',
    0.9,
    'special',
    50,
    elementalTypes.fire
);


    // attribute: 'condition',
    // conditionApplied: 'burn',
    // effect: 'Chance of burn',
    // modifier: 0.1,
    // targetSelf: false,
allAbilities.fireBlast = new Abilities(
    'Fire Blast',
    0.9,
    'special',
    80,
    elementalTypes.fire
);

    // attribute: 'defense',
    // conditionApplied: 'burn',
    // effect: 'Reduces defending monster defense',
    // modifier: 0.9,
    // targetSelf: false,
allAbilities.razorLeaf = new Abilities(
    'Razor Leaf',
    0.9,
    'special',
    50000,
    elementalTypes.grass
);

    // attribute: 'attack',
    // category: 'special',
    // effect: 'Reduces defending monsters attack',
    // modifier: 0.9,
    // targetSelf: false,
allAbilities.waterBlast = new Abilities(
    'Water Blast',
    0.9,
    'special',
    50,
    elementalTypes.water
);

export { allAbilities as default };
