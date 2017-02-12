import {Monster} from './monster';
import items from './../items/all-items';
import abilities from './../abilities/abilities';
import elementalTypes from './../elemental-types';

const hpMultiplier = 3;
const attackMultiplier = 2;
const defenseMultiplier = 1;
const spAttackMultiplier = 2;
const spDefenseMultiplier = 2;
const speedMultiplier = 3;

export class LavaOgre extends Monster {
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
      abilities.fireBreath,
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

    this.name = 'Lava Ogre';
    this.sprite = 'images/monsters/lava-ogre.gif';
    this.type = elementalTypes.fire;
  }
}
