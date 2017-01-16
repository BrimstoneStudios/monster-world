import {Monster} from './monster';
import abilities from './../abilities/abilities';
import elementalTypes from './../elemental-types';

const hpMultiplier = 6;
const attackMultiplier = 4;
const defenseMultiplier = 1;
const spAttackMultiplier = 2;
const spDefenseMultiplier = 2;
const speedMultiplier = 2;

export class GiantAnt extends Monster {
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
      abilities.growl,
      abilities.razorLeaf,
    ];

    this.name = 'Giant Ant';
    this.sprite = 'images/monsters/giant-ant.jpg';
    this.type = elementalTypes.grass;
  }
}
