var rng = function() {
  return Math.random();
};

var gameOver = function () {
  levels.currentLevel = levels.gameOver;
  player.initLocation();
};
