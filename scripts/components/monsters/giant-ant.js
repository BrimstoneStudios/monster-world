import {Monster} from './monster';
import abilities from './../abilities/abilities';
import types from './../type/types';

const hpMultiplier = 6;
const attackMultiplier = 4;
const defenseMultiplier = 1;
const spAttackMultiplier = 2;
const spDefenseMultiplier = 2;
const speedMultiplier = 2;

export class  GiantAnt extends Monster {
  constructor( lvl ) {
    super( lvl, hpMultiplier, attackMultiplier, defenseMultiplier, spAttackMultiplier, spDefenseMultiplier, speedMultiplier );
    this.abilities = [
      abilities.bite,
      abilities.growl,
     abilities.razorLeaf,
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
    this.name = 'Giant Ant';
    this.sprite = 'images/monsters/giant-ant.jpg';
    this.type = types.grass;
  }
}
