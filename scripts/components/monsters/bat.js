import {Monster} from './monster';
import items from './../items/items';
import abilities from './../abilities/all-abilities';
import elementalTypes from './../elemental-types';

const hpMultiplier = 2;
const attackMultiplier = 2;
const defenseMultiplier = 1;
const spAttackMultiplier = 1;
const spDefenseMultiplier = 1;
const speedMultiplier = 3;

export class Bat extends Monster {
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
        dropProbablity: 1,
        item: items.net,
      }, {
        dropProbablity: 1,
        item: items.potion,
      },
    ];

    this.name = 'Bat';
    this.sprite = 'images/monsters/bat.gif';
    this.type = elementalTypes.normal;
  }
}
