import Monster from './monster';
import abilities from './../abilities/abilities';
import elementalTypes from './../elemental-types';

const hpMultiplier = 3;
const attackMultiplier = 1;
const defenseMultiplier = 1;
const spAttackMultiplier = 2;
const spDefenseMultiplier = 1;
const speedMultiplier = 2;

export default class extends Monster {
  constructor(lvl) {
    super(
      lvl,
      hpMultiplier,
      attackMultiplier,
      defenseMultiplier,
      spAttackMultiplier,
      spDefenseMultiplier,
      speedMultiplier
    );

    this.abilities = [
      abilities.fireBreath,
    ];

    this.items = [
      {
        dropProbability: 0.2,
        item: monsterWorld.items.net,
      }, {
        dropProbability: 0.8,
        item: monsterWorld.items.potion,
      },
    ];

    this.name = 'Ignis';
    this.sprite = 'images/monsters/ignis.gif';
    this.type = elementalTypes.fire;
  }
}
