var gameOver = function () {
  levels.currentLevel = levels.gameOver;
  player.initLocation();
};
import rng from './components/rng';
if (module.hot) {
  module.hot.accept();
}
