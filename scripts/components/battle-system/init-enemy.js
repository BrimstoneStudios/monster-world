import rng from './../rng';

export default function () {
  const monsters = monsterWorld.player.savedAttributes.lastLevel.monsters;
  const randomNum = rng();
  let counter = 0;

  for (let i = 0; i < monsters.length; i++) {
    counter += monsters[i].probability;
    if (randomNum < counter) {
      const enemyLevel = Math.floor(
        rng() * (monsters[i].maxLevel - monsters[i].minLevel + 1)
      ) + monsters[i].minLevel;
      const EnemyMonster = monsters[i].initMonster
      const enemy = new EnemyMonster(enemyLevel);

      return enemy;
    }
  }
}
