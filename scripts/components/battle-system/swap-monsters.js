export default function () {
  const player = monsterWorld.player;

  for (let i = 0; i < player.monsterInventory.length; i++) {
    if (
      player.location.y ===
      monsterWorld.getCurrentMap().movement.boundaries.top +
      i * monsterWorld.getCurrentMap().movement.distance.y
    ) {
      monsterWorld.getCurrentMap().battleSystem.playerBattleMonster = player.monsterInventory[i];
    }
  }
}
