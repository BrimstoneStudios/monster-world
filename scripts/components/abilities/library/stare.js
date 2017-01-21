import {Abilities} from './../abilities';
import elementalTypes from './../../elemental-types';

let stare = new Abilities(
	'Stare',
    1,
    elementalTypes.normal
);

stare.category = 'physical';
stare.power = 0;

export {stare as default};