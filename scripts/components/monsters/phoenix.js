import Monster from './monster';
import abilities from './../abilities/abilities';
import elementalTypes from './../elemental-types';

const hpMultiplier = 3;
const attackMultiplier = 2;
const defenseMultiplier = 1;
const spAttackMultiplier = 2;
const spDefenseMultiplier = 2;
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
      abilities.fireBlast,
      abilities.stare,
    ];

    this.items = [
      {
        dropProbability: 0.2,
        item: monsterWorld.items.net,
      }, {
        dropProbability: 0.224,
        item: monsterWorld.items.potion,
      },
    ];

    this.name = 'Phoenix';
    this.sprite = 'images/monsters/phoenix.gif';
    this.type = elementalTypes.fire;
  }
}
