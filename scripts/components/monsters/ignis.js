import {Monster} from './monster';
import items from './../items/items';
import abilities from './../abilities/abilities';
import types from './../type/types';

const hpMultiplier = 3;
const attackMultiplier = 1;
const defenseMultiplier = 1;
const spAttackMultiplier = 2;
const spDefenseMultiplier = 1;
const speedMultiplier = 2;

export class Ignis extends Monster {
  constructor( lvl ) {
    super( lvl, hpMultiplier, attackMultiplier, defenseMultiplier, spAttackMultiplier, spDefenseMultiplier, speedMultiplier );
    this.abilities = [
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
    this.name = 'Ignis';
    this.sprite = 'images/monsters/ignis.gif';
    this.type = types.fire;
  }
}
