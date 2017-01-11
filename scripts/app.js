// import startScreen from './components/levels/start-screen/start-screen';
import {Player} from './components/player/player';
import allLevels from './components/levels/all-levels'

var currentLevel = window.currentLevel = allLevels.startScreen;
var player = window.player = new Player();

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
