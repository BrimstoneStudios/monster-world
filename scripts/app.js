import {Player} from './components/player/player';
import startScreen from './components/maps/start-screen/start-screen';
import allItems from './components/items/items';

var currentMap
 = window.currentMap
 = startScreen;
var player = window.player = new Player();
var items = window.items = allItems;
// var allNPC = [healer];

player.inventory.push( items.net );
player.inventory.push( items.potion );

// Listens for key presses and sends the keys to
// Player.handleInput() method.
document.addEventListener( 'keyup', function ( e ) {
  var allowedKeys = {
    16: 'shift',
    32: 'space',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down'
  };

  player.handleInput( allowedKeys[e.keyCode] );
} );
