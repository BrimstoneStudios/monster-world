export default {
  normal: {
    effective: [],
    ineffective: ['ghost', 'rock'],
  },
  fire: {
    effective: ['grass'],
    ineffective: ['water', 'fire'],
  },
  water: {
    effective: ['fire', 'rock'],
    ineffective: ['grass', 'water'],
  },
  grass: {
    effective: ['water', 'rock'],
    ineffective: ['fire', 'grass'],
  },
  electric: {
    effective: ['water'],
    ineffective: ['rock', 'electric'],
  },
  rock: {
    effective: ['electric'],
    ineffective: ['rock'],
  },
  ghost: {
    effective: ['ghost', 'psychic'],
    ineffective: ['normal'],
  },
  psychic: {
    effective: ['fighting'],
    ineffective: ['psychic', 'ghost'],
  },
  fighting: {
    effective: ['normal'],
    ineffective: ['psychic'],
  },
}
