import rng from './../../rng';
import changeBattleState from './../../battle-system/change-battle-state';
import wildIntro from './../../battle-system/wild-intro';

export default function () {
  const player = monsterWorld.player;
  const battle = monsterWorld.maps.battle.battleSystem;

  // if true enter battle
  if (rng() <= 0.1) {
    // Save the pre-battle state
    player.savedAttributes.lastLevel = monsterWorld.getCurrentMap();

    player.savedAttributes.location.x = player.location.x;
    player.savedAttributes.location.y = player.location.y;
    monsterWorld.setCurrentMap(monsterWorld.maps.battle);
    changeBattleState(wildIntro);
    player.initLocation();
    battle.enemy = battle.initEnemy();
    battle.playerBattleMonster = battle.initPlayerMonster();
  }
}
