export default function () {
  if ( rng() <= 0.5 ) {
    // Save the pre-battle state
    player.savedAttributes.lastLevel = levels.currentLevel;
    player.savedAttributes.location.x = player.location.x;
    player.savedAttributes.location.y = player.location.y;
    levels.currentLevel = levels.battleLevel;
    initBattleModel();
    player.initLocation();
  }
};