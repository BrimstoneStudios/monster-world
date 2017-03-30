import GiantRat from '../../../scripts/components/monsters/giant-rat';
import Monster from '../../../scripts/components/monsters/monster';
import abilities from '../../../scripts/components/abilities/abilities';
import elementalTypes from '../../../scripts/components/elemental-types';

describe('GiantRat class', function () {
  beforeEach(function () {
    this.mockGiantRat = new GiantRat(1);
  })
  it('should extend the Monster class', function () {
    expect(this.mockGiantRat instanceof Monster).toBe(true);
  })
  it('should have an abilities property', function () {
    expect(this.mockGiantRat.abilities).toBeDefined();
  })
  it('should have an items property', function () {
    expect(this.mockGiantRat.items).toBeDefined();
  })
  it('should have a name property', function () {
    expect(this.mockGiantRat.name).toBeDefined();
  })
  it('should have a sprite property', function () {
    expect(this.mockGiantRat.sprite).toBeDefined();
  })
  it('should have a type property', function () {
    expect(this.mockGiantRat.type).toBeDefined();
  })
  it('should have a hpMultiplier of 1', function () {
    expect(this.mockGiantRat.hpMultiplier).toBe(1);
  })
  it('should have an attackMultiplier of 3', function () {
    expect(this.mockGiantRat.attackMultiplier).toBe(3);
  })
  it('should have a defenseMultiplier of 1', function () {
    expect(this.mockGiantRat.defenseMultiplier).toBe(1);
  })
  it('should have a spAttackMultiplier of 2', function () {
    expect(this.mockGiantRat.spAttackMultiplier).toBe(2);
  })
  it('should have a spDefenseMultiplier of 1', function () {
    expect(this.mockGiantRat.spDefenseMultiplier).toBe(1);
  })
  it('should have a speedMultiplier of 3', function () {
    expect(this.mockGiantRat.speedMultiplier).toBe(3);
  })
  it('should have the scratch ability', function () {
    const expected = abilities.scratch;

    expect(this.mockGiantRat.abilities).toContain(expected);
  })
  it('should have the growl ability', function () {
    const expected = abilities.growl;

    expect(this.mockGiantRat.abilities).toContain(expected);
  })
  it('should have the net item with a drop rate of 0.1', function () {
    const expected = {
      dropProbability: 0.1,
      item: monsterWorld.items.net
    };

    expect(this.mockGiantRat.items).toContain(expected);
  })
  it('should have the potion item with a drop rate of 0.5', function () {
    const expected = {
      dropProbability: 0.5,
      item: monsterWorld.items.potion
    };

    expect(this.mockGiantRat.items).toContain(expected);
  })
  it('should have the name of Giant Rat', function () {
    expect(this.mockGiantRat.name).toBe('Giant Rat');
  })
  it('should have the GiantRat sprite', function () {
    expect(this.mockGiantRat.sprite).toBe('images/monsters/giant-rat.gif');
  })
  it('should have a nomral elemental type', function () {
    expect(this.mockGiantRat.type).toBe(elementalTypes.normal);
  })
})