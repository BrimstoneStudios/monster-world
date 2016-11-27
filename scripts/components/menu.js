// ---------------- MENU ----------------
var Menu = function () {
};

var maxY;

Menu.prototype.renderCharSelect = function () {
  ctx.font='50px Arial';
  ctx.fillText( 'Choose a character',140,380 );
};

Menu.prototype.renderMonsterSelect = function () {
  ctx.font='50px Arial';
  ctx.fillText( 'Choose a starting monster',50,380 );
};

// Main menu
Menu.prototype.renderMain = function () {
  ctx.font='50px Arial';
  ctx.fillText( 'Items',280,200 );
  ctx.fillText( 'Monsters',245,290 );
};

Menu.prototype.renderItemsInv = function () {
  ctx.font='50px Arial';
  if ( itemInventory.length > 0 ) {
    for ( let i = 0, j = 0; i < itemInventory.length; i++, j = j + 50 ) {
      ctx.fillText( itemInventory[i].name, 155, 85 + j );
    }
  } else {
    ctx.fillText( 'Your bag is empty.', 155, 85 );
  }
};

// Monster Inventory Menu
Menu.prototype.renderMonsterInv = function () {
  ctx.font='50px Arial';
  for ( let i = 0, j = 0; i < monsterInventory.length; i++, j = j + 50 ) {
    ctx.drawImage( Resources.get( monsterInventory[i].sprite ), 85, 50 + j );
    ctx.fillText( monsterInventory[i].name, 155, 85 + j );
  }
};

// Monster Stats display
Menu.prototype.renderMonsterStat = function ( monster ) {
  ctx.font='25px Arial';
  ctx.fillText( 'Level:', 430, 65 );
  ctx.fillText( monsterInventory[monster].level, 620, 65 );
  ctx.fillText( 'HP:', 430, 105 );
  ctx.fillText( monsterInventory[monster].hp, 620, 105 );
  ctx.fillText( 'Attack:', 430, 145 );
  ctx.fillText( monsterInventory[monster].attack, 620, 145 );
  ctx.fillText( 'Defense:', 430, 185 );
  ctx.fillText( monsterInventory[monster].defense, 620, 185 );
  ctx.fillText( 'Sp Attack:', 430, 225 );
  ctx.fillText( monsterInventory[monster].spAttack, 620, 225 );
  ctx.fillText( 'Sp Defense:', 430, 265 );
  ctx.fillText( monsterInventory[monster].spDefense, 620, 265 );
  ctx.fillText( 'Speed:', 430, 305 );
  ctx.fillText( monsterInventory[monster].speed, 620, 305 );
  ctx.fillText( 'Type:', 430, 345 );
  ctx.fillText( monsterInventory[monster].type, 620, 345 );
};
