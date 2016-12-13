var gameOver = function () {
  levels.currentLevel = levels.gameOver;
  player.initLocation();
};
import items from './items-model';
console.log(items);
// default inventory items
player.inventory.push( items.net );
player.inventory.push( items.potion );

if (module.hot) {
  module.hot.accept();
}
