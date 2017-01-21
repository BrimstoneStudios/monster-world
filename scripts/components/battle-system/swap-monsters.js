export default function () {
  for (let i = 0; i < player.monsterInventory.length; i++) {
    if (player.location.y === currentMap.movement.boundaries.top + i * currentMap.movement.y) {
      currentMap.battleSystem.playerBattleMonster = player.monsterInventory[i];
    }
  }
}
