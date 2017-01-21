import {Abilities} from './../abilities';
import elementalTypes from './../../elemental-types';

let fireBlast = new Abilities (
	'Fire Blast',
	0.9,
	elementalTypes.fire
)

fireBlast.category = 'special';
fireBlast.power = 80;

// attribute: 'defense',
    // conditionApplied: 'burn',
    // effect: 'Reduces defending monster defense',
    // modifier: 0.9,
    // targetSelf: false,

export {fireBlast as default};