import {Abilities} from './../abilities';
import elementalTypes from './../../elemental-types';

let fireBreath = new Abilities(
	'Fire Breath',
    0.9,
    elementalTypes.fire
);

fireBreath.category = 'special';
fireBreath.power = 50;

export {fireBreath as default};

// attribute: 'condition',
    // conditionApplied: 'burn',
    // effect: 'Chance of burn',
    // modifier: 0.1,
    // targetSelf: false,