var rng = function() {
  return Math.random();
}

var gameOver = function () {
  levels.currentLevel = 'gameOver';
  player.location.x = 0;
  player.location.y = 0;
};
