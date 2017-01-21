import {Abilities} from './../abilities';
import elementalTypes from './../../elemental-types';

let scratch = new Abilities(
	'Scratch',
    1,
    elementalTypes.normal
);

scratch.category = 'physical';
scratch.power = 40;

export {scratch as default};