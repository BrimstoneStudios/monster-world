// Instantiate objects
var allNPC = [healer];
var menu = new Menu();

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
