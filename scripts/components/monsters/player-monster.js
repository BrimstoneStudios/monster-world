import {Monster} from './monster';
import abilities from './../abilities/abilities';
import types from './../type/types';

const hpMultiplier = 0;
const attackMultiplier = 3;
const defenseMultiplier = 0;
const spAttackMultiplier = 2;
const spDefenseMultiplier = 1;
const speedMultiplier = 3;

export class PlayerMonster extends Monster {
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

    this.name = 'PlayerMonster';
    this.type = types.normal;
  }
}
