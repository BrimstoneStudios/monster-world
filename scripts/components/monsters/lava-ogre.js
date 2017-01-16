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

export class LavaOgre extends Monster {
  constructor( lvl ) {
    super( lvl, hpMultiplier, attackMultiplier, defenseMultiplier, spAttackMultiplier, spDefenseMultiplier, speedMultiplier );
    this.abilities = [
      abilities.scratch,
      abilities.stare,
      abilities.fireBreath,
    ];
    this.items = [
      {
       item: items.net,
       dropProbablity: 1
      }, {
       item: items.potion,
       dropProbablity: 1
      },
    ];
    this.name = 'Lava Ogre';
    this.sprite = 'images/monsters/lava-ogre.gif';
    this.type = types.fire;
  }
}
