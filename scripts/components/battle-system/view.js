// Battle Coordinates based off
//  | Top Left           |   Top Middle-col           |  Top Right
//  | Middle-row Left    |   Middle-row Middle-col    |  Middle-row Right
//  | Bottom Left        |   Bottom Middle-col        |  Bottom Right
// Text and menus for battles

Menu.prototype.renderBattleText = function () {
  var enemy = battle.enemy;
  var battleState = battle.state;
  var coordinates = battle.coordinates;

  ctx.font='30px Arial';
 else if ( battleState === 'battleMonsterDie' ) {
    if ( battle.playerBattleMonster.currentHp === 0 ) {
      ctx.fillText( battle.playerBattleMonster.name + ' has died!', coordinates.leftColumn, coordinates.topRow );
    }
  } else if ( battleState === 'itemDrop' ) {
    for ( let i = 0, j = 0; i < battle.itemsDropped.length; i++, j += 40 ) {
      ctx.fillText( enemy.name + ' dropped a ' + battle.itemsDropped[i] + '!', coordinates.leftColumn, coordinates.topRow + j );
    }
  }
};
