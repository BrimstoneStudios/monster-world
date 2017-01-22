import rng from './../rng';

export default function () {
  const map = player.savedAttributes.lastLevel;
  const monsters = player.savedAttributes.lastLevel.monsters;
  const randomNum = rng();
  let counter = 0;

  for (let i = 0; i < monsters.length; i++) {
    counter += monsters[i].probability;
    if (randomNum < counter) {
      const enemyLevel = Math.floor(rng() * (monsters[i].maxLevel - monsters[i].minLevel + 1)) + monsters[i].minLevel;
      const enemyMonster = monsters[i].initMonster

      const enemy = new enemyMonster(enemyLevel);

      return enemy;
    }
  }
}
