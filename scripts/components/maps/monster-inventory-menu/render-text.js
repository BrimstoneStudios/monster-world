export default function () {
  const inventory = monsterWorld.player.monsterInventory;

  for (
    let i = 0, j = 0;
    i < inventory.length;
    i++, j += monsterWorld.getCurrentMap().movement.distance.y
  ) {
    ctx.font = '30px Arial';
    ctx.drawImage(Resources.get(inventory[i].sprite), 85, 50 + j);
    ctx.fillText(inventory[i].name, 155, 85 + j);

    if (monsterWorld.getCurrentMap().displayStats) {
      const monsterIndex = monsterWorld.getCurrentMap().displayMonsterIndex;
      const monster = inventory[monsterIndex];

      ctx.font = '25px Arial';
      ctx.fillText('Level:', 430, 65);
      ctx.fillText(monster.level, 620, 65);
      ctx.fillText('HP:', 430, 105);
      ctx.fillText(monster.hp, 620, 105);
      ctx.fillText('Attack:', 430, 145);
      ctx.fillText(monster.attack, 620, 145);
      ctx.fillText('Defense:', 430, 185);
      ctx.fillText(monster.defense, 620, 185);
      ctx.fillText('Sp Attack:', 430, 225);
      ctx.fillText(monster.spAttack, 620, 225);
      ctx.fillText('Sp Defense:', 430, 265);
      ctx.fillText(monster.spDefense, 620, 265);
      ctx.fillText('Speed:', 430, 305);
      ctx.fillText(monster.speed, 620, 305);
      ctx.fillText('Type:', 430, 345);
      ctx.fillText(monster.type, 620, 345);
    }
  }
}
