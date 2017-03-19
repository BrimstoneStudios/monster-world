export default function () {
  if (typeof monsterWorld.getCurrentMap().npcs !== 'undefined') {
    for (let i = 0; i < monsterWorld.getCurrentMap().npcs.length; i++) {
      const npcLocation = monsterWorld.getCurrentMap().npcs[i].location;

      if (player.location.x === npcLocation.x && player.location.y === npcLocation.y) {
        monsterWorld.getCurrentMap().npcs[i].initNPCAction();
      }
    }
  }
}
