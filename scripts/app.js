var gameOver = function () {
  levels.currentLevel = levels.gameOver;
  player.initLocation();
};
import items from './items-model';
import potions from './components/items/potion';

// default inventory items
player.inventory.push( items.net );
player.inventory.push( items.potion );

if (module.hot) {
  module.hot.accept();
}
