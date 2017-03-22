import MonsterWorld from './components/monster-world';
// import Player from './components/player/player';

monsterWorld = window.monsterWorld = new MonsterWorld();

// let player = window.player = new Player();
const player = monsterWorld.player;

// new player should come with default items
player.inventory.push(monsterWorld.items.net);
player.inventory.push(monsterWorld.items.potion);

// Listens for key presses and sends the keys to
// Player.handleInput() method.
document.addEventListener('keyup', function controls(e) {
  var allowedKeys = {
    16: 'shift',
    32: 'space',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
