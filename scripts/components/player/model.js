// ------ PLAYER -------
var Player = function () {
  this.inventory = [],
  this.location = {
    x: 0,
    y: 0,
  },
  this.monsterInventory = [],
  this.savedAttributes = {
    sprite: null,
    location: {
      x: 0,
      y: 0,
    },
    lastLevel: null,
  };
};

player = new Player();
