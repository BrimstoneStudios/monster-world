import {Monster} from './monster';
import items from './../items/items';
import abilities from './../abilities/abilities';
import types from './../type/types';

const hpMultiplier = 3;
const attackMultiplier = 2;
const defenseMultiplier = 1;
const spAttackMultiplier = 1;
const spDefenseMultiplier = 1;
const speedMultiplier = 3;

export class Munchkin extends Monster {
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

    this.name = 'Munchkin';
    this.sprite = 'images/monsters/munchkin.gif';
    this.type = types.normal;
  }
}
