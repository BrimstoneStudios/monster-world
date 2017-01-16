export default {
  electric: {
    effective: ['water'],
    ineffective: ['rock', 'electric'],
  },
  fighting: {
    effective: ['normal'],
    ineffective: ['psychic'],
  },
  fire: {
    effective: ['grass'],
    ineffective: ['water', 'fire'],
  },
  ghost: {
    effective: ['ghost', 'psychic'],
    ineffective: ['normal'],
  },
  grass: {
    effective: ['water', 'rock'],
    ineffective: ['fire', 'grass'],
  },
  normal: {
    effective: [],
    ineffective: ['ghost', 'rock'],
  },
  psychic: {
    effective: ['fighting'],
    ineffective: ['psychic', 'ghost'],
  },
  rock: {
    effective: ['electric'],
    ineffective: ['rock'],
  },
  water: {
    effective: ['fire', 'rock'],
    ineffective: ['grass', 'water'],
  },
}
