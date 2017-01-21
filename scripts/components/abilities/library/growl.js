import {Abilities} from './../abilities';
import elementalTypes from './../../elemental-types';

let growl = new Abilities(
	'Growl',
    1,
    elementalTypes.normal
);

growl.category = 'physical';
growl.power = 0;

export {growl as default};