import {Abilities} from './../abilities';
import elementalTypes from './../../elemental-types';

let razorLeaf = new Abilities(
	'Razor Leaf',
    0.9,
    elementalTypes.grass
);

razorLeaf.category = 'special';
razorLeaf.power = 50000;

// attribute: 'attack',
    // category: 'special',
    // effect: 'Reduces defending monsters attack',
    // modifier: 0.9,
    // targetSelf: false,

export {razorLeaf as default};