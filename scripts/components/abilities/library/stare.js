import {Abilities} from './../abilities';
import elementalTypes from './../../elemental-types';

let stare = new Abilities(
	'Stare',
    1,
    elementalTypes.normal
);

stare.category = 'status';
stare.power = 0;
stare.attribrute = 'defense';
stare.effect = 'Decrease opponents physical defense';
stare.modifier = 0.9;
stare.targetSelf = false;

export {stare as default};