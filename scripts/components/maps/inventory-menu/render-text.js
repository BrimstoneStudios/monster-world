export default function () {
  const player = monsterWorld.player;

  monsterWorld.engine.ctx.font = '50px Arial';
  if (player.inventory.length > 0) {
    for (let i = 0, j = 0; i < player.inventory.length; i++, j += 50) {
      monsterWorld.engine.ctx.fillText(player.inventory[i].name, 155, 85 + j);
    }
  } else {
    monsterWorld.engine.ctx.fillText('Your bag is empty.', 155, 85);
  }
}
