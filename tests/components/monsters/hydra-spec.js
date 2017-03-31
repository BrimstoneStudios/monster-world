import Hydra from '../../../scripts/components/monsters/hydra';
import Monster from '../../../scripts/components/monsters/monster';
import abilities from '../../../scripts/components/abilities/abilities';
import elementalTypes from '../../../scripts/components/elemental-types';

describe('Hydra class', function () {
  beforeEach(function () {
    this.mockHydra = new Hydra(1);
  })
  it('should extend the Monster class', function () {
    expect(this.mockHydra instanceof Monster).toBe(true);
  })
  it('should have an abilities property', function () {
    expect(this.mockHydra.abilities).toBeDefined();
  })
  it('should have an items property', function () {
    expect(this.mockHydra.items).toBeDefined();
  })
  it('should have a name property', function () {
    expect(this.mockHydra.name).toBeDefined();
  })
  it('should have a sprite property', function () {
    expect(this.mockHydra.sprite).toBeDefined();
  })
  it('should have a type property', function () {
    expect(this.mockHydra.type).toBeDefined();
  })
  it('should have a hpMultiplier of 6', function () {
    expect(this.mockHydra.hpMultiplier).toBe(6);
  })
  it('should have an attackMultiplier of 4', function () {
    expect(this.mockHydra.attackMultiplier).toBe(4);
  })
  it('should have a defenseMultiplier of 1', function () {
    expect(this.mockHydra.defenseMultiplier).toBe(1);
  })
  it('should have a spAttackMultiplier of 3', function () {
    expect(this.mockHydra.spAttackMultiplier).toBe(3);
  })
  it('should have a spDefenseMultiplier of 1', function () {
    expect(this.mockHydra.spDefenseMultiplier).toBe(1);
  })
  it('should have a speedMultiplier of 3', function () {
    expect(this.mockHydra.speedMultiplier).toBe(3);
  })
  it('should have the bite ability', function () {
    const expected = abilities.bite;

    expect(this.mockHydra.abilities).toContain(expected);
  })
  it('should have the growl ability', function () {
    const expected = abilities.growl;

    expect(this.mockHydra.abilities).toContain(expected);
  })
  it('should have the waterBlast ability', function () {
    const expected = abilities.waterBlast;

    expect(this.mockHydra.abilities).toContain(expected);
  })
  it('should have the net item with a drop rate of 0.2', function () {
    const expected = {
      dropProbability: 0.2,
      item: monsterWorld.items.net
    };

    expect(this.mockHydra.items).toContain(expected);
  })
  it('should have the potion item with a drop rate of 1', function () {
    const expected = {
      dropProbability: 1,
      item: monsterWorld.items.potion
    };

    expect(this.mockHydra.items).toContain(expected);
  })
  it('should have the name of Hydra', function () {
    expect(this.mockHydra.name).toBe('Hydra');
  })
  it('should have the hydra sprite', function () {
    expect(this.mockHydra.sprite).toBe('images/monsters/hydra1.jpg');
  })
  it('should have a nomral elemental type', function () {
    expect(this.mockHydra.type).toBe(elementalTypes.water);
  })
})