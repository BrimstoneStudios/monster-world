import {Abilities} from './../abilities';
import elementalTypes from './../../elemental-types';

let growl = new Abilities(
	'Growl',
    1,
    elementalTypes.normal
);

growl.category = 'status';
growl.power = 0;
growl.attribrute = 'attack';
growl.effect = 'Decrease opponent attack damage';
growl.modifier = 0.8;
growl.targetSelf = false;

export {growl as default};