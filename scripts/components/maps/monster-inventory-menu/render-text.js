export default function () {
  for (let i = 0, j = 0; i < player.monsterInventory.length; i++, j += 50) {
    ctx.font = '30px Arial';
    ctx.drawImage(Resources.get(player.monsterInventory[i].sprite), 85, 50 + j);
    ctx.fillText(player.monsterInventory[i].name, 155, 85 + j);

    if (currentMap.displayStats) {
      let monster = currentMap.displayMonsterIndex;

      ctx.font = '25px Arial';
      ctx.fillText('Level:', 430, 65);
      ctx.fillText(player.monsterInventory[monster].level, 620, 65);
      ctx.fillText('HP:', 430, 105);
      ctx.fillText(player.monsterInventory[monster].hp, 620, 105);
      ctx.fillText('Attack:', 430, 145);
      ctx.fillText(player.monsterInventory[monster].attack, 620, 145);
      ctx.fillText('Defense:', 430, 185);
      ctx.fillText(player.monsterInventory[monster].defense, 620, 185);
      ctx.fillText('Sp Attack:', 430, 225);
      ctx.fillText(player.monsterInventory[monster].spAttack, 620, 225);
      ctx.fillText('Sp Defense:', 430, 265);
      ctx.fillText(player.monsterInventory[monster].spDefense, 620, 265);
      ctx.fillText('Speed:', 430, 305);
      ctx.fillText(player.monsterInventory[monster].speed, 620, 305);
      ctx.fillText('Type:', 430, 345);
      ctx.fillText(player.monsterInventory[monster].type, 620, 345);
    }
  }
}
