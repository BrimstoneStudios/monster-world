import Munchkin from '../../../scripts/components/monsters/munchkin';
import Monster from '../../../scripts/components/monsters/monster';
import abilities from '../../../scripts/components/abilities/abilities';
import elementalTypes from '../../../scripts/components/elemental-types';

describe('Munchkin class', function () {
  beforeEach(function () {
    this.mockMunchkin = new Munchkin(1);
  })
  it('should extend the Monster class', function () {
    expect(this.mockMunchkin instanceof Monster).toBe(true);
  })
  it('should have an abilities property', function () {
    expect(this.mockMunchkin.abilities).toBeDefined();
  })
  it('should have an items property', function () {
    expect(this.mockMunchkin.items).toBeDefined();
  })
  it('should have a name property', function () {
    expect(this.mockMunchkin.name).toBeDefined();
  })
  it('should have a sprite property', function () {
    expect(this.mockMunchkin.sprite).toBeDefined();
  })
  it('should have a type property', function () {
    expect(this.mockMunchkin.type).toBeDefined();
  })
  it('should have a hpMultiplier of 3', function () {
    expect(this.mockMunchkin.hpMultiplier).toBe(3);
  })
  it('should have an attackMultiplier of 2', function () {
    expect(this.mockMunchkin.attackMultiplier).toBe(2);
  })
  it('should have a defenseMultiplier of 1', function () {
    expect(this.mockMunchkin.defenseMultiplier).toBe(1);
  })
  it('should have a spAttackMultiplier of 1', function () {
    expect(this.mockMunchkin.spAttackMultiplier).toBe(1);
  })
  it('should have a spDefenseMultiplier of 1', function () {
    expect(this.mockMunchkin.spDefenseMultiplier).toBe(1);
  })
  it('should have a speedMultiplier of 3', function () {
    expect(this.mockMunchkin.speedMultiplier).toBe(3);
  })
  it('should have the bite ability', function () {
    const expected = abilities.bite;

    expect(this.mockMunchkin.abilities).toContain(expected);
  })
  it('should have the stare ability', function () {
    const expected = abilities.stare;

    expect(this.mockMunchkin.abilities).toContain(expected);
  })
  it('should have the net item with a drop rate of 0.2', function () {
    const expected = {
      dropProbability: 0.2,
      item: monsterWorld.items.net
    };

    expect(this.mockMunchkin.items).toContain(expected);
  })
  it('should have the potion item with a drop rate of 0.08', function () {
    const expected = {
      dropProbability: 0.08,
      item: monsterWorld.items.potion
    };

    expect(this.mockMunchkin.items).toContain(expected);
  })
  it('should have the name of Munchkin', function () {
    expect(this.mockMunchkin.name).toBe('Munchkin');
  })
  it('should have the munchkin sprite', function () {
    expect(this.mockMunchkin.sprite).toBe('images/monsters/munchkin.gif');
  })
  it('should have a nomral elemental type', function () {
    expect(this.mockMunchkin.type).toBe(elementalTypes.normal);
  })
})