export default function () {
  if (typeof currentMap.npcs !== 'undefined') {
    for (let i = 0; i < currentMap.npcs.length; i++) {
      if (player.location.x === currentMap.npcs[i].location.x && player.location.y === currentMap.npcs[i].location.y) {
        currentMap.npcs[i].initNPCAction();
      }
    }
  }
}
