import Monster from '../../../scripts/components/monsters/monster';

describe('Monster class', function () {
  beforeEach(function () {
    this.mockMonster = new Monster(1,1,1,1,1,1,1);
    this.mockMonster.name = 'mockMonster';
  })
  it('should be a function type', function () {
    expect(typeof Monster).toBe('function');
  })
  it('should have a level property defined', function () {
    expect(this.mockMonster.level).toBeDefined();
  })
  it('should have a hpMultiplier property defined', function () {
    expect(this.mockMonster.hpMultiplier).toBeDefined();
  })
  it('should have a attackMultiplier property defined', function () {
    expect(this.mockMonster.attackMultiplier).toBeDefined();
  })
  it('should have a defenseMultiplier property defined', function () {
    expect(this.mockMonster.defenseMultiplier).toBeDefined();
  })
  it('should have a spAttackMultiplier property defined', function () {
    expect(this.mockMonster.spAttackMultiplier).toBeDefined();
  })
  it('should have a defenseMultiplier property defined', function () {
    expect(this.mockMonster.defenseMultiplier).toBeDefined();
  })
  it('should have a speedMultiplier property defined', function () {
    expect(this.mockMonster.speedMultiplier).toBeDefined();
  })
  it('should have a hp property defined', function () {
    expect(this.mockMonster.hp).toBeDefined();
  })
  it('should have a currentHp property defined', function () {
    expect(this.mockMonster.currentHp).toBeDefined();
  })
  it('should have a condition property defined', function () {
    expect(this.mockMonster.condition).toBeDefined();
  })
  it('should have a attack property defined', function () {
    expect(this.mockMonster.attack).toBeDefined();
  })
  it('should have a defense property defined', function () {
    expect(this.mockMonster.defense).toBeDefined();
  })
  it('should have a spAttack property defined', function () {
    expect(this.mockMonster.spAttack).toBeDefined();
  })
  it('should have a spDefense property defined', function () {
    expect(this.mockMonster.spDefense).toBeDefined();
  })
  it('should have a speed property defined', function () {
    expect(this.mockMonster.speed).toBeDefined();
  })
  it('should have a currentExp property defined', function () {
    expect(this.mockMonster.currentExp).toBeDefined();
  })
  it('should have a expToLevel property defined', function () {
    expect(this.mockMonster.expToLevel).toBeDefined();
  })
  it('should have a expReward property defined', function () {
    expect(this.mockMonster.expReward).toBeDefined();
  })
  it('should have a gainExp property defined', function () {
    expect(this.mockMonster.gainExp).toBeDefined();
  })
  it('should have a levelUp property defined', function () {
    expect(this.mockMonster.levelUp).toBeDefined();
  })
  it('should have a render property defined', function () {
    expect(this.mockMonster.render).toBeDefined();
  })
  it('should have a renderBtlMonStats property defined', function () {
    expect(this.mockMonster.renderBtlMonStats).toBeDefined();
  })
  it('should have an hp of 10', function () {
    expect(this.mockMonster.hp).toBe(10);
  })
  it('should have a currentHp of 10', function () {
    expect(this.mockMonster.currentHp).toBe(10);
  })
  it('should have the condition of "healthy"', function () {
    expect(this.mockMonster.condition).toBe('healthy');
  })
  describe('gainExp()', function () {
    beforeEach(function () {
      monsterWorld.getCurrentMap().battleSystem = {
        enemy: {
          expReward: 10
        }
      }
      this.mockMonster.currentExp = 0;
    })
    it('should be a function', function () {
      expect(typeof this.mockMonster.gainExp).toBe('function');
    })
    it('the monster\'s current experience should go up by the experience reward of the monster that is being fought', function () {
      this.mockMonster.expToLevel = 11;
      this.mockMonster.gainExp();
      const actual = this.mockMonster.currentExp;
      const expected = 10;

      expect(actual).toBe(expected);
    })
    it('the level up function to be called if the monster\'s gained experience points surpasses or equals the amount it needed to level up', function () {
      spyOn(this.mockMonster, 'levelUp');
      this.mockMonster.expToLevel = 10;
      this.mockMonster.gainExp();

      expect(this.mockMonster.levelUp).toHaveBeenCalled();
    })
  })
  describe('levelUp()', function () {
    it('should be a function', function () {
      expect(typeof this.mockMonster.levelUp).toBe('function');
    })
    it('should set the battle system\'s levelUp flag to true', function () {
      monsterWorld.getCurrentMap().battleSystem = {
        levelUp: false
      };
      this.mockMonster.levelUp();
      const actual = monsterWorld.getCurrentMap().battleSystem.levelUp;

      expect(actual).toBe(true);
    })
    it('should increase the monsters level by 1', function () {
      this.mockMonster.level = 1;
      this.mockMonster.levelUp();
      const actual = this.mockMonster.level;

      expect(actual).toBe(2);
    })
    it('should set the monster\'s current hp to the max hp value', function () {
      this.mockMonster.currentHp = 5;
      this.mockMonster.hp = 10;
      this.mockMonster.levelUp();
      const actual = this.mockMonster.currentHp;
      const expected = this.mockMonster.hp;

      expect(actual).toBe(expected);
    })
  })
  describe('render()', function () {
    it('should be a function', function () {
      expect(typeof this.mockMonster.render).toBe('function');
    })
    it('should trigger the engine\'s drawImage function', function () {
      spyOn(monsterWorld.engine.ctx, 'drawImage');
      this.mockMonster.render(5, 5);

      expect(monsterWorld.engine.ctx.drawImage).toHaveBeenCalled();
    })
  })
  describe('renderBtlMonStats(player)', function () {
    it('should be a function', function () {
      expect(typeof this.mockMonster.renderBtlMonStats).toBe('function');
    })
    it('should set the font to "35px Arial"', function () {
      this.mockMonster.renderBtlMonStats(monsterWorld.player);
      const actual = monsterWorld.engine.ctx.font;
      const expected = '35px Arial';

      expect(actual).toBe(expected);
    })
    it('should set the player\'s battle monster text if the player is passed', function () {
      spyOn(monsterWorld.engine.ctx, 'fillText');
      this.mockMonster.renderBtlMonStats(monsterWorld.player);

      expect(monsterWorld.engine.ctx.fillText).toHaveBeenCalledWith(this.mockMonster.name, 350, 260);
      expect(monsterWorld.engine.ctx.fillText).toHaveBeenCalledWith('Lv', 610, 260);
      expect(monsterWorld.engine.ctx.fillText).toHaveBeenCalledWith(this.mockMonster.level, 650, 260);
      expect(monsterWorld.engine.ctx.fillText).toHaveBeenCalledWith('HP:', 350, 300);
      expect(monsterWorld.engine.ctx.fillText).toHaveBeenCalledWith(this.mockMonster.currentHp, 450, 300);
      expect(monsterWorld.engine.ctx.fillText).toHaveBeenCalledWith('/', 495, 300);
      expect(monsterWorld.engine.ctx.fillText).toHaveBeenCalledWith(this.mockMonster.hp, 510, 300);
    })
    it('should set the enemy\'s battle monster text if the enemy is passed', function () {
      spyOn(monsterWorld.engine.ctx, 'fillText');
      this.mockMonster.renderBtlMonStats(this.mockMonster);

      expect(monsterWorld.engine.ctx.fillText).toHaveBeenCalledWith(this.mockMonster.name, 50, 60);
      expect(monsterWorld.engine.ctx.fillText).toHaveBeenCalledWith('Lv', 310, 60);
      expect(monsterWorld.engine.ctx.fillText).toHaveBeenCalledWith(this.mockMonster.level, 350, 60);
      expect(monsterWorld.engine.ctx.fillText).toHaveBeenCalledWith('HP:', 50, 100);
      expect(monsterWorld.engine.ctx.fillText).toHaveBeenCalledWith(this.mockMonster.currentHp, 150, 100);
      expect(monsterWorld.engine.ctx.fillText).toHaveBeenCalledWith('/', 195, 100);
      expect(monsterWorld.engine.ctx.fillText).toHaveBeenCalledWith(this.mockMonster.hp, 210, 100);
    })
  })
})
