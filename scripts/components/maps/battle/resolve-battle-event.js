import rng from './../../rng';
import allMaps from './../all-maps';
import changeBattleState from './../../battle-system/change-battle-state';
import wildIntro from './../../battle-system/wild-intro';

export default function () {
  // if true enter battle
  if (rng() <= 0.1) {
    // Save the pre-battle state
    player.savedAttributes.lastLevel = monsterWorld.getCurrentMap();
    player.savedAttributes.location.x = player.location.x;
    player.savedAttributes.location.y = player.location.y;
    monsterWorld.setCurrentMap(monsterWorld.maps.battle);
    changeBattleState(wildIntro);
    player.initLocation();
    monsterWorld.getCurrentMap().battleSystem.enemy = monsterWorld.getCurrentMap().battleSystem.initEnemy();
    monsterWorld.getCurrentMap().battleSystem.playerBattleMonster = monsterWorld.getCurrentMap().battleSystem.initPlayerMonster();
  }
}
