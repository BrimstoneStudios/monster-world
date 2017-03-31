import Monster from './monster';
import abilities from './../abilities/abilities';
import elementalTypes from './../elemental-types';

const hpMultiplier = 3;
const attackMultiplier = 2;
const defenseMultiplier = 1;
const spAttackMultiplier = 1;
const spDefenseMultiplier = 1;
const speedMultiplier = 3;

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
      abilities.bite,
      abilities.stare,
    ];

    this.items = [
      {
        dropProbability: 0.2,
        item: monsterWorld.items.net,
      }, {
        dropProbability: 0.08,
        item: monsterWorld.items.potion,
      },
    ];

    this.name = 'Munchkin';
    this.sprite = 'images/monsters/munchkin.gif';
    this.type = elementalTypes.normal;
  }
}
