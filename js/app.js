HealerNPC.prototype = Object.create( NPC.prototype );
HealerNPC.prototype.constructor = HealerNPC;
HealerNPC.prototype.level = 0;

// default inventory items
itemInventory.push( items.net );
itemInventory.push( items.potion );

var healer = new HealerNPC( 60, 60, 'firstLevel' );

// Instantiate objects
var allNPC = [healer];
var player = new Player();
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