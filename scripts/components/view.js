// ---------------- MENU ----------------
var Menu = function () {
};

var maxY;

Menu.prototype.renderInventoryMenu = function () {
  ctx.font = '50px Arial';
  if ( player.inventory.length > 0 ) {
    for ( let i = 0, j = 0; i < player.inventory.length; i++, j = j + 50 ) {
      ctx.fillText( player.inventory[i].name, 155, 85 + j );
    }
  } else {
    ctx.fillText( 'Your bag is empty.', 155, 85 );
  }
};

// Monster Inventory Menu
Menu.prototype.renderMonsterInventory = function () {
  ctx.font = '50px Arial';
  for ( let i = 0, j = 0; i < player.monsterInventory.length; i++, j = j + 50 ) {
    ctx.drawImage( Resources.get( player.monsterInventory[i].sprite ), 85, 50 + j );
    ctx.fillText( player.monsterInventory[i].name, 155, 85 + j );
  }
};

// Monster Stats display
Menu.prototype.renderMonsterStat = function ( monster ) {
  ctx.font = '25px Arial';
  ctx.fillText( 'Level:', 430, 65 );
  ctx.fillText( player.monsterInventory[monster].level, 620, 65 );
  ctx.fillText( 'HP:', 430, 105 );
  ctx.fillText( player.monsterInventory[monster].hp, 620, 105 );
  ctx.fillText( 'Attack:', 430, 145 );
  ctx.fillText( player.monsterInventory[monster].attack, 620, 145 );
  ctx.fillText( 'Defense:', 430, 185 );
  ctx.fillText( player.monsterInventory[monster].defense, 620, 185 );
  ctx.fillText( 'Sp Attack:', 430, 225 );
  ctx.fillText( player.monsterInventory[monster].spAttack, 620, 225 );
  ctx.fillText( 'Sp Defense:', 430, 265 );
  ctx.fillText( player.monsterInventory[monster].spDefense, 620, 265 );
  ctx.fillText( 'Speed:', 430, 305 );
  ctx.fillText( player.monsterInventory[monster].speed, 620, 305 );
  ctx.fillText( 'Type:', 430, 345 );
  ctx.fillText( player.monsterInventory[monster].type, 620, 345 );
};
