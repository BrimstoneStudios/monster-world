/* Engine.js
* This file provides the game loop functionality (update entities and render),
* draws the initial game board on the screen, and then calls the update and
* render methods on your player and NPC objects (defined in your app.js).
*
* This engine is available globally via the Engine variable and it also makes
* the canvas' context (ctx) object globally available to make writing app.js
* a little simpler to work with.

* Adapted from the Udacity frontend nanodegree arcade game
* https://github.com/udacity/frontend-nanodegree-arcade-game
*/

var Engine = ( function ( global ) {
  /* Predefine the variables we'll be using within this scope,
  * create the canvas element, grab the 2D context for that canvas
  * set the canvas elements height/width and add it to the DOM.
  */
  var doc = global.document,
  win = global.window,
  canvas = doc.createElement( 'canvas' ),
  ctx = canvas.getContext( '2d' ),
  lastTime;

  canvas.width = 700;
  canvas.height = 500;
  doc.body.appendChild( canvas );

  /* This function serves as the kickoff point for the game loop itself
  * and handles properly calling the update and render methods.
  */
  function main () {
    /* Get our time delta information which is required if your game
    * requires smooth animation.
    */
    var now = Date.now(),
    dt = ( now - lastTime ) / 1000.0;

    /* Call our update/render functions, pass along the time delta to
    * our update function since it may be used for smooth animation.
    */
    update( dt );
    render();

    /* Set our lastTime variable which is used to determine the time delta
    * for the next time this function is called.
    */
    lastTime = now;

    /* Use the browser's requestAnimationFrame function to call this
    * function again as soon as the browser is able to draw another frame.
    */
    win.requestAnimationFrame( main );
  }

  /* This function does some initial setup that should only occur once,
  * particularly setting the lastTime variable that is required for the
  * game loop.
  */
  function init () {
    reset();
    lastTime = Date.now();
    main();
  }

  /* This function is called by main (our game loop) and itself calls all
  * of the functions which may need to update entity's data.
  */
  function update ( dt ) {
    updateEntities( dt );
    // checkCollisions();
  }

  /* This is called by the update function  and loops through all of the
  * objects within your allNPC array as defined in app.js and calls
  * their update() methods. It will then call the update function for your
  * player object.
  */
  function updateEntities ( dt ) {
    // allNPC.forEach( function ( npc ) {
    //   npc.update();
    // } );
    player.update();
  }

  /* This function initially draws the "game level", it will then call
  * the renderEntities function.
  */

  function render () {

    var numRows = 10,
    numCols = 14,
    row,col;

    //   /* Loop through the number of rows and columns we've defined above
    //   * and, using the rowImages array, draw the correct image for that
    //   * portion of the "grid"
    //   */

    for ( row = 0; row < numRows; row++ ) {
      for ( col = 0; col < numCols; col++ ) {
        //       /* The drawImage function of the canvas' context element
        //       * requires 3 parameters: the image to draw, the x coordinate
        //       * to start drawing and the y coordinate to start drawing.
        //       * We're using our Resources helpers to refer to our images
        //       * so that we get the benefits of caching these images, since
        //       * we're using them over and over.
        //       */
        ctx.drawImage( Resources.get( currentLevel.tiles[row][col] ), col * 50, row * 50 );
      }
    }


    renderEntities();
  }

  /* This function is called by the render function and is called on each game
  * tick. It's purpose is to then call the render functions you have defined
  */
  function renderEntities () {
    /* Loop through all of the objects within the allNPC array and call
    * the render function you have defined.
    */
    // allNPC.forEach( function ( npc ) {
    //   for (let i = 0; i < npc.location.level.length; i++) {
    //     if ( npc.location.level[i] === currentLevel ) {
    //        npc.render();
    //     }
    //   }
    // });

    // if ( currentLevel === characterSelect ) {
    //   menu.renderCharacterSelect();
    // } else if ( currentLevel === monsterSelect ) {
    //   menu.renderMonsterSelect();
    // } else if ( currentLevel === mainMenu ) {
    //   menu.renderMainMenu();
    // } else if ( currentLevel === inventoryMenu ) {
    //   menu.renderInventoryMenu();
    // } else if ( currentLevel === monsterInventory ) {
    //   menu.renderMonsterInventory();
    //   if ( currentLevel.displayStats ) {
    //     menu.renderMonsterStat( currentLevel.displayMonsterIndex );
    //   }
    // } else if ( currentLevel === battleLevel ) {
    //   battle.playerBattleMonster.render( 50, 200 );
    //   battle.playerBattleMonster.renderBtlMonStats( 'player' );
    //   battle.enemy.render( 550, 40 );
    //   battle.enemy.renderBtlMonStats( 'enemy' );
    //   menu.renderBattleText();
    // }

    player.render();
  }

  /* Function to create game over screen
  */
  function reset () {
    // noop
  }

  /* Loads images to cache
  */
  Resources.load( [

    // Terrain
    'images/terrain/start-screen.png',
    'images/terrain/dirt-tile50.png',
    'images/terrain/grass-tile50.png',
    'images/terrain/grass-tile75.png',
    'images/terrain/white-tile50.png',
    'images/terrain/deathCaster-wb.png',
    'images/terrain/monk-wb.png',
    'images/terrain/drag1-wb.jpg',
    'images/terrain/hydra1-wb.jpg',
    'images/terrain/wormy1-wb.jpg',
    'images/terrain/lava-tile50.png',
    'images/terrain/rock-tile50.jpg',
    'images/terrain/sand-tile50.png',
    'images/terrain/water-tile.jpg',

    // Characters
    'images/characters/deathCaster.gif',
    'images/characters/monk.gif',
    'images/characters/wizard.gif',
    'images/characters/selector.png',
    'images/characters/menuSelector.png',
    'images/characters/gameOver.png',

    //Monsters
    'images/monsters/hydra1.png',
    'images/monsters/hydra2.png',
    'images/monsters/hydra3.png',
    'images/monsters/salmandar.gif',
    'images/monsters/drag2.gif',
    'images/monsters/drag3.gif',
    'images/monsters/wormy1.gif',
    'images/monsters/wormy2.gif',
    'images/monsters/wormy3.gif',
    'images/monsters/giantRat.gif',
    'images/monsters/bat.gif',
    'images/monsters/munchkin.gif',
    'images/monsters/lavaogre.gif',
    'images/monsters/firehead.gif',
    'images/monsters/ignis.gif',
    'images/monsters/phoenix.gif',
  ] );
  Resources.onReady( init );

  /* Assign the canvas' context object to the global variable (the window
  * object when run in a browser) so that developer's can use it more easily
  * from within their app.js files.
  */
  global.ctx = ctx;
} )( this );
