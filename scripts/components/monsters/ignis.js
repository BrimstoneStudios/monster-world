import {Monster} from './monster';
import abilities from './../abilities/abilities';
import elementalTypes from './../elemental-types';

const hpMultiplier = 3;
const attackMultiplier = 1;
const defenseMultiplier = 1;
const spAttackMultiplier = 2;
const spDefenseMultiplier = 1;
const speedMultiplier = 2;

export class Ignis extends Monster {
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
        dropProbablity: 1,
        item: monsterWorld.items.net,
      }, {
        dropProbablity: 1,
        item: monsterWorld.items.potion,
      },
    ];

    this.name = 'Ignis';
    this.sprite = 'images/monsters/ignis.gif';
    this.type = elementalTypes.fire;
  }
}
