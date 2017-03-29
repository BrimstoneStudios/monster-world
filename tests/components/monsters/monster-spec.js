import Monster from '../../../scripts/components/monsters/monster';

describe('Monster class', function () {
  beforeEach(function () {
    this.mockMonster = new Monster(1,1,1,1,1,1,1);
  })
  it('should be a function type', function () {
    expect(typeof Monster).toBe('function');
  })
  it('should have a level property defined', function () {
    expect(this.mockMonster.level).toBeDefined();
  })
  it('should have a hpMult property defined', function () {
    expect(this.mockMonster.hpMult).toBeDefined();
  })
  it('should have a attackMult property defined', function () {
    expect(this.mockMonster.attackMult).toBeDefined();
  })
  it('should have a defenseMult property defined', function () {
    expect(this.mockMonster.defenseMult).toBeDefined();
  })
  it('should have a spAttackMult property defined', function () {
    expect(this.mockMonster.spAttackMult).toBeDefined();
  })
  it('should have a defenseMult property defined', function () {
    expect(this.mockMonster.defenseMult).toBeDefined();
  })
  it('should have a speedMult property defined', function () {
    expect(this.mockMonster.speedMult).toBeDefined();
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

})