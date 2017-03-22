export default function () {
  const inventory = monsterWorld.player.monsterInventory;

  for (
    let i = 0, j = 0;
    i < inventory.length;
    i++, j += monsterWorld.getCurrentMap().movement.distance.y
  ) {
    monsterWorld.engine.ctx.font = '30px Arial';
    monsterWorld.engine.ctx.drawImage(
      monsterWorld.engine.imageCache.get(inventory[i].sprite),
      85,
      50 + j
    );
    monsterWorld.engine.ctx.fillText(inventory[i].name, 155, 85 + j);

    if (monsterWorld.getCurrentMap().displayStats) {
      const monsterIndex = monsterWorld.getCurrentMap().displayMonsterIndex;
      const monster = inventory[monsterIndex];

      monsterWorld.engine.ctx.font = '25px Arial';
      monsterWorld.engine.ctx.fillText('Level:', 430, 65);
      monsterWorld.engine.ctx.fillText(monster.level, 620, 65);
      monsterWorld.engine.ctx.fillText('HP:', 430, 105);
      monsterWorld.engine.ctx.fillText(monster.hp, 620, 105);
      monsterWorld.engine.ctx.fillText('Attack:', 430, 145);
      monsterWorld.engine.ctx.fillText(monster.attack, 620, 145);
      monsterWorld.engine.ctx.fillText('Defense:', 430, 185);
      monsterWorld.engine.ctx.fillText(monster.defense, 620, 185);
      monsterWorld.engine.ctx.fillText('Sp Attack:', 430, 225);
      monsterWorld.engine.ctx.fillText(monster.spAttack, 620, 225);
      monsterWorld.engine.ctx.fillText('Sp Defense:', 430, 265);
      monsterWorld.engine.ctx.fillText(monster.spDefense, 620, 265);
      monsterWorld.engine.ctx.fillText('Speed:', 430, 305);
      monsterWorld.engine.ctx.fillText(monster.speed, 620, 305);
      monsterWorld.engine.ctx.fillText('Type:', 430, 345);
      monsterWorld.engine.ctx.fillText(monster.type, 620, 345);
    }
  }
}
