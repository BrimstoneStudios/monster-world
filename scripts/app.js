import {MonsterWorld} from './components/monster-world';
import {Player} from './components/player/player';
import items from './components/items/all-items';
import maps from './components/maps/all-maps';

let monsterWorld = window.monsterWorld = new MonsterWorld();

monsterWorld.setCurrentMap(maps.startScreen);
monsterWorld.items = items;
monsterWorld.maps = maps;

let player = window.player = new Player();

player.inventory.push(monsterWorld.items.net);
player.inventory.push(monsterWorld.items.potion);

// Listens for key presses and sends the keys to
// Player.handleInput() method.
document.addEventListener('keyup', function (e) {
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
