import elixir from './elixir';
import net from './net';
import potion from './potion';

export default {
  elixir: elixir,
  net: net,
  potion: potion,
  useItem: function () {
    for (let i = 0; i <= player.inventory.length; i++) {
      if (player.location.y === monsterWorld.getCurrentMap().movement.boundaries.top + i * monsterWorld.getCurrentMap().movement.distance.y) {
        const itemUsed = player.inventory[i];

        itemUsed.useItem();
        if (itemUsed.singleUse) {
          player.inventory.splice(i, 1);
        }

        if (monsterWorld.getCurrentMap() === monsterWorld.maps.battle) {
          monsterWorld.getCurrentMap().battleSystem.itemUsed = itemUsed;
        }
      }
    }
  },
}
