import elixir from './elixir';
import net from './net';
import potion from './potion';

export default {
  elixir: elixir,
  net: net,
  potion: potion,
  useItem: function () {
    const map = monsterWorld.getCurrentMap();
    const player = monsterWorld.player;

    if (player.inventory.length > 0) {
      for (let i = 0; i <= player.inventory.length; i++) {
        if (player.location.y === map.movement.boundaries.top + i * map.movement.distance.y) {
          const itemUsed = player.inventory[i];

          itemUsed.useItem();
          if (itemUsed.singleUse) {
            player.inventory.splice(i, 1);
          }

          if (map === monsterWorld.maps.battle) {
            monsterWorld.getCurrentMap().battleSystem.itemUsed = itemUsed;
          }
        }
      }
    }
  },
}
