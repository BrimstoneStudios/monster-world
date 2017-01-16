import {Monster} from './monster';
import items from './../items/items';
import abilities from './../abilities/abilities';
import types from './../type/types';

const hpMultiplier = 6;
const attackMultiplier = 4;
const defenseMultiplier = 1;
const spAttackMultiplier = 3;
const spDefenseMultiplier = 1;
const speedMultiplier = 3;

export class Hydra extends Monster {
  constructor( lvl ) {
    super( lvl, hpMultiplier, attackMultiplier, defenseMultiplier, spAttackMultiplier, spDefenseMultiplier, speedMultiplier );
    this.abilities = [
      abilities.bite,
      abilities.growl,
      abilities.waterBlast,
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
    this.name = 'Hydra';
    this.sprite = 'images/monsters/hydra1.jpg';
    this.type = types.water;
  }
}
