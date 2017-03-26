import {Monster} from './monster';
import abilities from './../abilities/abilities';
import elementalTypes from './../elemental-types';

const hpMultiplier = 6;
const attackMultiplier = 4;
const defenseMultiplier = 1;
const spAttackMultiplier = 3;
const spDefenseMultiplier = 1;
const speedMultiplier = 3;

export default class extends Monster {
  constructor(lvl) {
    super(lvl,
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
      abilities.waterBlast,
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

    this.name = 'Hydra';
    this.sprite = 'images/monsters/hydra1.jpg';
    this.type = elementalTypes.water;
  }
}
