import Ignis from '../../../scripts/components/monsters/ignis';
import Monster from '../../../scripts/components/monsters/monster';
import abilities from '../../../scripts/components/abilities/abilities';
import elementalTypes from '../../../scripts/components/elemental-types';

describe('Ignis class', function () {
  beforeEach(function () {
    this.mockIgnis = new Ignis(1);
  })
  it('should extend the Monster class', function () {
    expect(this.mockIgnis instanceof Monster).toBe(true);
  })
  it('should have an abilities property', function () {
    expect(this.mockIgnis.abilities).toBeDefined();
  })
  it('should have an items property', function () {
    expect(this.mockIgnis.items).toBeDefined();
  })
  it('should have a name property', function () {
    expect(this.mockIgnis.name).toBeDefined();
  })
  it('should have a sprite property', function () {
    expect(this.mockIgnis.sprite).toBeDefined();
  })
  it('should have a type property', function () {
    expect(this.mockIgnis.type).toBeDefined();
  })
  it('should have a hpMultiplier of 3', function () {
    expect(this.mockIgnis.hpMultiplier).toBe(3);
  })
  it('should have an attackMultiplier of 1', function () {
    expect(this.mockIgnis.attackMultiplier).toBe(1);
  })
  it('should have a defenseMultiplier of 1', function () {
    expect(this.mockIgnis.defenseMultiplier).toBe(1);
  })
  it('should have a spAttackMultiplier of 2', function () {
    expect(this.mockIgnis.spAttackMultiplier).toBe(2);
  })
  it('should have a spDefenseMultiplier of 1', function () {
    expect(this.mockIgnis.spDefenseMultiplier).toBe(1);
  })
  it('should have a speedMultiplier of 2', function () {
    expect(this.mockIgnis.speedMultiplier).toBe(2);
  })
  it('should have the waterBlast ability', function () {
    const expected = abilities.fireBreath;

    expect(this.mockIgnis.abilities).toContain(expected);
  })
  it('should have the net item with a drop rate of 0.2', function () {
    const expected = {
      dropProbability: 0.2,
      item: monsterWorld.items.net
    };

    expect(this.mockIgnis.items).toContain(expected);
  })
  it('should have the potion item with a drop rate of 0.8', function () {
    const expected = {
      dropProbability: 0.8,
      item: monsterWorld.items.potion
    };

    expect(this.mockIgnis.items).toContain(expected);
  })
  it('should have the name of Ignis', function () {
    expect(this.mockIgnis.name).toBe('Ignis');
  })
  it('should have the ignis sprite', function () {
    expect(this.mockIgnis.sprite).toBe('images/monsters/ignis.gif');
  })
  it('should have a nomral elemental type', function () {
    expect(this.mockIgnis.type).toBe(elementalTypes.fire);
  })
})