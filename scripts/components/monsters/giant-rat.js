import {Monster} from './monster';
import items from './../items/items';
import abilities from './../abilities/abilities';
import elementalTypes from './../elemental-types';

const hpMultiplier = 1;
const attackMultiplier = 3;
const defenseMultiplier = 1;
const spAttackMultiplier = 2;
const spDefenseMultiplier = 1;
const speedMultiplier = 3;

export class GiantRat extends Monster {
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
      abilities.growl,
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
    this.name = 'Giant Rat';
    this.sprite = 'images/monsters/giant-rat.gif';
    this.type = elementalTypes.normal;
  }
}
