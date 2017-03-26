import {Monster} from './monster';
import abilities from './../abilities/abilities';
import elementalTypes from './../elemental-types';

const hpMultiplier = 1;
const attackMultiplier = 3;
const defenseMultiplier = 1;
const spAttackMultiplier = 2;
const spDefenseMultiplier = 1;
const speedMultiplier = 3;

export default class extends Monster {
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
        item: monsterWorld.items.net,
      }, {
        dropProbablity: 1,
        item: monsterWorld.items.potion,
      },
    ];
    this.name = 'Giant Rat';
    this.sprite = 'images/monsters/giant-rat.gif';
    this.type = elementalTypes.normal;
  }
}
