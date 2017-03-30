import rng from '../rng';

export default function () {
  var possibleItems = monsterWorld.getCurrentMap().battleSystem.enemy.items;

  for (let i = 0; i < possibleItems.length; i++) {
    if (rng() <= possibleItems[i].dropProbability) {
      monsterWorld.player.inventory.push(possibleItems[i].item);
      monsterWorld.getCurrentMap().battleSystem.itemsDropped.push(possibleItems[i].item.name);
    }
  }
}
