import {Abilities} from './../abilities';
import elementalTypes from './../../elemental-types';

let bite = new Abilities(
	'Bite',
    0.9,
    elementalTypes.normal
);

bite.category = 'physical';
bite.power = 45;

export {bite as default};