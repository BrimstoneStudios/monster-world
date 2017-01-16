export default {
  electric: {
    effective: ['water'],
    ineffective: ['rock', 'electric'],
    name: 'electric',
  },
  fighting: {
    effective: ['normal'],
    ineffective: ['psychic'],
    name: 'fighting',
  },
  fire: {
    effective: ['grass'],
    ineffective: ['water', 'fire'],
    name: 'fire',
  },
  ghost: {
    effective: ['ghost', 'psychic'],
    ineffective: ['normal'],
    name: 'ghost',
  },
  grass: {
    effective: ['water', 'rock'],
    ineffective: ['fire', 'grass'],
    name: 'grass',
  },
  normal: {
    effective: [],
    ineffective: ['ghost', 'rock'],
    name: 'normal',
  },
  psychic: {
    effective: ['fighting'],
    ineffective: ['psychic', 'ghost'],
    name: 'psychic',
  },
  rock: {
    effective: ['electric'],
    ineffective: ['rock'],
    name: 'rock',
  },
  water: {
    effective: ['fire', 'rock'],
    ineffective: ['grass', 'water'],
    name: 'water',
  },
}
