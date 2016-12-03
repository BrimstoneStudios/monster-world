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
