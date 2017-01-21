export default function () {
  if (typeof currentMap.npcs !== 'undefined') {
    for (let i = 0; i < currentMap.npcs.length; i++) {
      const npcLocation = currentMap.npcs[i].location;

      if (player.location.x === npcLocation.x && player.location.y === npcLocation.y) {
        currentMap.npcs[i].initNPCAction();
      }
    }
  }
}
