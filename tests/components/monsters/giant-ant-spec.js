import GiantAnt from '../../../scripts/components/monsters/giant-ant';
import Monster from '../../../scripts/components/monsters/monster';
import abilities from '../../../scripts/components/abilities/abilities';
import elementalTypes from '../../../scripts/components/elemental-types';

describe('GiantAnt class', function () {
  beforeEach(function () {
    this.mockGiantAnt = new GiantAnt(1);
  })
  it('should extend the Monster class', function () {
    expect(this.mockGiantAnt instanceof Monster).toBe(true);
  })
  it('should have an abilities property', function () {
    expect(this.mockGiantAnt.abilities).toBeDefined();
  })
  it('should have a name property', function () {
    expect(this.mockGiantAnt.name).toBeDefined();
  })
  it('should have a sprite property', function () {
    expect(this.mockGiantAnt.sprite).toBeDefined();
  })
  it('should have a type property', function () {
    expect(this.mockGiantAnt.type).toBeDefined();
  })
  it('should have a hpMultiplier of 6', function () {
    expect(this.mockGiantAnt.hpMultiplier).toBe(6);
  })
  it('should have an attackMultiplier of 4', function () {
    expect(this.mockGiantAnt.attackMultiplier).toBe(4);
  })
  it('should have a defenseMultiplier of 1', function () {
    expect(this.mockGiantAnt.defenseMultiplier).toBe(1);
  })
  it('should have a spAttackMultiplier of 2', function () {
    expect(this.mockGiantAnt.spAttackMultiplier).toBe(2);
  })
  it('should have a spDefenseMultiplier of 2', function () {
    expect(this.mockGiantAnt.spDefenseMultiplier).toBe(2);
  })
  it('should have a speedMultiplier of 2', function () {
    expect(this.mockGiantAnt.speedMultiplier).toBe(2);
  })
  it('should have the bite ability', function () {
    const expected = abilities.bite;

    expect(this.mockGiantAnt.abilities).toContain(expected);
  })
  it('should have the growl ability', function () {
    const expected = abilities.growl;

    expect(this.mockGiantAnt.abilities).toContain(expected);
  })
  it('should have the razorLeaf ability', function () {
    const expected = abilities.razorLeaf;

    expect(this.mockGiantAnt.abilities).toContain(expected);
  })
  it('should have the name of Giant Ant', function () {
    expect(this.mockGiantAnt.name).toBe('Giant Ant');
  })
  it('should have the Giant Ant sprite', function () {
    expect(this.mockGiantAnt.sprite).toBe('images/monsters/giant-ant.jpg');
  })
  it('should have a nomral elemental type', function () {
    expect(this.mockGiantAnt.type).toBe(elementalTypes.grass);
  })
})