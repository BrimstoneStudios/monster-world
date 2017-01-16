import {Monster} from './monster';
import items from './../items/items';
import abilities from './../abilities/abilities';
import types from './../type/types';

const hpMultiplier = 3;
const attackMultiplier = 2;
const defenseMultiplier = 1;
const spAttackMultiplier = 2;
const spDefenseMultiplier = 2;
const speedMultiplier = 3;

export class Phoenix extends Monster {
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
      abilities.fireBlast,
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

    this.name = 'Phoenix';
    this.sprite = 'images/monsters/phoenix.gif';
    this.type = types.fire;
  }
}
