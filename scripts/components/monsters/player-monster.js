import Monster from './monster';
import abilities from './../abilities/abilities';
import elementalTypes from './../elemental-types';

const hpMultiplier = 1;
const attackMultiplier = 3;
const defenseMultiplier = 0;
const spAttackMultiplier = 2;
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
      abilities.scratch,
      abilities.stare,
    ];

    this.name = 'Leaf';
    this.type = elementalTypes.normal;
  }
}
