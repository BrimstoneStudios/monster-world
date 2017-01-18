import NPC from './npc';

// NPC that heals all of your monsters
function initNPCAction() {
  for (let i = 0; i < player.monsterInventory.length; i++) {
    player.monsterInventory[i].currentHp = player.monsterInventory[i].hp;
  }
}

class HealerNPC extends NPC {
  constructor(name, sprite, x, y) {
    super(name, sprite, x, y);
    this.initNPCAction = initNPCAction
  }
}

export { HealerNPC as default };
