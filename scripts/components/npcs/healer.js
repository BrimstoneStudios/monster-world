import NPC from './npc';

// NPC that heals all of your monsters
class HealerNPC extends NPC {
  initAction() {
    for ( let i = 0; i < player.monsterInventory.length; i++ ) {
      player.monsterInventory[i].currentHp = player.monsterInventory[i].hp;
    }
  }
}

export { HealerNPC as default };
