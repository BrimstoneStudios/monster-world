// Monster class determines the initial stats of the monster
// based on the level and the multiplier
// Multipliers are defined when individual monsters are instantiated
export default class {
  constructor(
    lvl,
    hpMultiplier,
    attackMultiplier,
    defenseMultiplier,
    spAttackMultiplier,
    spDefenseMultiplier,
    speedMultiplier
  ) {
    this.level = lvl;
    this.hpMultiplier = hpMultiplier;
    this.attackMultiplier = attackMultiplier;
    this.defenseMultiplier = defenseMultiplier;
    this.spAttackMultiplier = spAttackMultiplier;
    this.spDefenseMultiplier = spDefenseMultiplier;
    this.speedMultiplier = speedMultiplier;

    this.hp = 10 * hpMultiplier * this.level;
    this.currentHp = this.hp;
    this.condition = 'healthy';
    this.attack = (5 + attackMultiplier) * 11 * this.level / 100 + 2;
    this.defense = (5 + defenseMultiplier) * 11 * this.level / 100 + 2;
    this.spAttack = (5 + spAttackMultiplier) * 11 * this.level / 100 + 2;
    this.spDefense = (5 + spDefenseMultiplier) * 11 * this.level / 100 + 2;
    this.speed = (5 + speedMultiplier) * 11 * this.level / 100 + 2;
    this.currentExp = 0;
    this.expToLevel = 10 + 3 * this.level;
    this.expReward = 5 + 3 * this.level;
  }

  gainExp() {
    this.currentExp += monsterWorld.getCurrentMap().battleSystem.enemy.expReward;
    if (this.currentExp >= this.expToLevel) {
      this.levelUp();
    }
  }

  levelUp() {
    monsterWorld.getCurrentMap().battleSystem.levelUp = true;
    this.level++;
    this.hp = 10 * this.hpMultiplier * this.level;
    this.currentHp = this.hp;
    this.attack = (5 + this.attackMultiplier) * 11 * this.level / 100 + 2;
    this.defense = (5 + this.defenseMultiplier) * 11 * this.level / 100 + 2;
    this.spAttack = (5 + this.spAttackMultiplier) * 11 * this.level / 100 + 2;
    this.spDefense = (5 + this.spDefenseMultiplier) * 11 * this.level / 100 + 2;
    this.speed = (5 + this.speedMultiplier) * 11 * this.level / 100 + 2;
    this.currentExp = 0;
    this.expToLevel = 10 + 4 * this.level;
  }

  render(x, y) {
    monsterWorld.engine.ctx.drawImage(
      monsterWorld.engine.imageCache.get(this.sprite),
      x, y,
      100, 100
    );
  }

  renderBtlMonStats(player) {
    monsterWorld.engine.ctx.font = '35px Arial';
    if (player === monsterWorld.player) {
      monsterWorld.engine.ctx.fillText(this.name, 350, 260);
      monsterWorld.engine.ctx.fillText('Lv', 610, 260);
      monsterWorld.engine.ctx.fillText(this.level, 650, 260);
      monsterWorld.engine.ctx.fillText('HP:', 350, 300);
      monsterWorld.engine.ctx.fillText(this.currentHp, 450, 300);
      monsterWorld.engine.ctx.fillText('/', 495, 300);
      monsterWorld.engine.ctx.fillText(this.hp, 510, 300);
    } else {
      monsterWorld.engine.ctx.fillText(this.name, 50, 60);
      monsterWorld.engine.ctx.fillText('Lv', 310, 60);
      monsterWorld.engine.ctx.fillText(this.level, 350, 60);
      monsterWorld.engine.ctx.fillText('HP:', 50, 100);
      monsterWorld.engine.ctx.fillText(this.currentHp, 150, 100);
      monsterWorld.engine.ctx.fillText('/', 195, 100);
      monsterWorld.engine.ctx.fillText(this.hp, 210, 100);
    }
  }
}
