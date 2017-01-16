import {Monster} from './monster';
import abilities from './../abilities/abilities';
import types from './../type/types';

const hpMultiplier = 1;
const attackMultiplier = 500;
const defenseMultiplier = 1;
const spAttackMultiplier = 1;
const spDefenseMultiplier = 1;
const speedMultiplier = 3;

export class Salamander extends Monster {
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
      abilities.fireBreath,
    ];

    this.name = 'Salamander';
    this.sprite = 'images/monsters/salamander.gif';
    this.type = types.fire;
  }
}
