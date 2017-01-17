import rng from './../rng';

export default function () {
  var monsters = player.savedAttributes.lastLevel.monsters;
  var enemyLevel = Math.floor(rng() * (monsters.maxLevel - monsters.minLevel + 1)) + monsters.minLevel;
  var enemyMonster = monsters.monster[Math.floor(rng() * monsters.monster.length)];
  var enemy = new enemyMonster(enemyLevel);

  return enemy;
}
