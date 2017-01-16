import rng from './../../rng';
import allMaps from './../all-maps';
import changeBattleState from './../../battle-system/change-battle-state';
import wildIntro from './../../battle-system/wild-intro';

export default function () {
  // if true enter battle
  if ( rng() <= 0.5 ) {
    // Save the pre-battle state
    player.savedAttributes.lastLevel = currentMap;
    player.savedAttributes.location.x = player.location.x;
    player.savedAttributes.location.y = player.location.y;
    currentMap = allMaps.battle;
    changeBattleState(wildIntro);
    player.initLocation();
    currentMap.battleSystem.enemy = currentMap.battleSystem.initEnemy();
    currentMap.battleSystem.playerBattleMonster = currentMap.battleSystem.initPlayerMonster();
  }
}
