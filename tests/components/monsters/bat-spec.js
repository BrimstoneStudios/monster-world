import Bat from '../../../scripts/components/monsters/bat';
import Monster from '../../../scripts/components/monsters/monster';
import abilities from '../../../scripts/components/abilities/abilities';
import elementalTypes from '../../../scripts/components/elemental-types';

describe('Bat class', function () {
  beforeEach(function () {
    this.mockBat = new Bat(1);
  })
  it('should extend the Monster class', function () {
    expect(this.mockBat instanceof Monster).toBe(true);
  })
  it('should have an abilities property', function () {
    expect(this.mockBat.abilities).toBeDefined();
  })
  it('should have an items property', function () {
    expect(this.mockBat.items).toBeDefined();
  })
  it('should have a name property', function () {
    expect(this.mockBat.name).toBeDefined();
  })
  it('should have a sprite property', function () {
    expect(this.mockBat.sprite).toBeDefined();
  })
  it('should have a type property', function () {
    expect(this.mockBat.type).toBeDefined();
  })
  it('should have a hpMultiplier of 2', function () {
    expect(this.mockBat.hpMultiplier).toBe(2);
  })
  it('should have an attackMultiplier of 2', function () {
    expect(this.mockBat.attackMultiplier).toBe(2);
  })
  it('should have a defenseMultiplier of 1', function () {
    expect(this.mockBat.defenseMultiplier).toBe(1);
  })
  it('should have a spAttackMultiplier of 1', function () {
    expect(this.mockBat.spAttackMultiplier).toBe(1);
  })
  it('should have a spDefenseMultiplier of 1', function () {
    expect(this.mockBat.spDefenseMultiplier).toBe(1);
  })
  it('should have a speedMultiplier of 3', function () {
    expect(this.mockBat.speedMultiplier).toBe(3);
  })
  it('should have the bite ability', function () {
    const expected = abilities.bite;

    expect(this.mockBat.abilities).toContain(expected);
  })
  it('should have the stare ability', function () {
    const expected = abilities.stare;

    expect(this.mockBat.abilities).toContain(expected);
  })
  it('should have the net item with a drop rate of 0.2', function () {
    const expected = {
      dropProbability: 0.2,
      item: monsterWorld.items.net
    };

    expect(this.mockBat.items).toContain(expected);
  })
  it('should have the potion item with a drop rate of 0.3', function () {
    const expected = {
      dropProbability: 0.3,
      item: monsterWorld.items.potion
    };

    expect(this.mockBat.items).toContain(expected);
  })
  it('should have the name of Bat', function () {
    expect(this.mockBat.name).toBe('Bat');
  })
  it('should have the bat sprite', function () {
    expect(this.mockBat.sprite).toBe('images/monsters/bat.gif');
  })
  it('should have a nomral elemental type', function () {
    expect(this.mockBat.type).toBe(elementalTypes.normal);
  })
})