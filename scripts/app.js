import MonsterWorld from './components/monster-world';

monsterWorld = window.monsterWorld = new MonsterWorld();

monsterWorld.engine.start()

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

  monsterWorld.player.handleInput(allowedKeys[e.keyCode]);
});
