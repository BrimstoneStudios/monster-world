import {Abilities} from './../abilities';
import elementalTypes from './../../elemental-types';

let waterBlast = new Abilities(
	'Water Blast',
    0.9,
    elementalTypes.water
);

waterBlast.category = 'special';
waterBlast.power = 50;

export {waterBlast as default};