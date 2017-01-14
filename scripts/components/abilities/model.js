
var type = {
  normal: {
    super: [],
    notVery: ['ghost', 'rock'],
  },
  fire: {
    super: ['grass'],
    notVery: ['water', 'fire'],
  },
  water: {
    super: ['fire', 'rock'],
    notVery: ['grass', 'water'],
  },
  grass: {
    super: ['water', 'rock'],
    notVery: ['fire', 'grass'],
  },
  electric: {
    super: ['water'],
    notVery: ['rock', 'electric'],
  },
  rock: {
    super: ['electric'],
    notVery: ['rock'],
  },
  ghost: {
    super: ['ghost', 'psychic'],
    notVery: ['normal'],
  },
  psychic: {
    super: ['fighting'],
    notVery: ['psychic', 'ghost'],
  },
  fighting: {
    super: ['normal'],
    notVery: ['psychic'],
  }
};
