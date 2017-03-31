import LavaOgre from '../../../scripts/components/monsters/lava-ogre';
import Monster from '../../../scripts/components/monsters/monster';
import abilities from '../../../scripts/components/abilities/abilities';
import elementalTypes from '../../../scripts/components/elemental-types';

describe('LavaOgre class', function () {
  beforeEach(function () {
    this.mockLavaOgre = new LavaOgre(1);
  })
  it('should extend the Monster class', function () {
    expect(this.mockLavaOgre instanceof Monster).toBe(true);
  })
  it('should have an abilities property', function () {
    expect(this.mockLavaOgre.abilities).toBeDefined();
  })
  it('should have an items property', function () {
    expect(this.mockLavaOgre.items).toBeDefined();
  })
  it('should have a name property', function () {
    expect(this.mockLavaOgre.name).toBeDefined();
  })
  it('should have a sprite property', function () {
    expect(this.mockLavaOgre.sprite).toBeDefined();
  })
  it('should have a type property', function () {
    expect(this.mockLavaOgre.type).toBeDefined();
  })
  it('should have a hpMultiplier of 3', function () {
    expect(this.mockLavaOgre.hpMultiplier).toBe(3);
  })
  it('should have an attackMultiplier of 2', function () {
    expect(this.mockLavaOgre.attackMultiplier).toBe(2);
  })
  it('should have a defenseMultiplier of 1', function () {
    expect(this.mockLavaOgre.defenseMultiplier).toBe(1);
  })
  it('should have a spAttackMultiplier of 2', function () {
    expect(this.mockLavaOgre.spAttackMultiplier).toBe(2);
  })
  it('should have a spDefenseMultiplier of 2', function () {
    expect(this.mockLavaOgre.spDefenseMultiplier).toBe(2);
  })
  it('should have a speedMultiplier of 3', function () {
    expect(this.mockLavaOgre.speedMultiplier).toBe(3);
  })
  it('should have the fireBreath ability', function () {
    const expected = abilities.fireBreath;

    expect(this.mockLavaOgre.abilities).toContain(expected);
  })
  it('should have the scratch ability', function () {
    const expected = abilities.scratch;

    expect(this.mockLavaOgre.abilities).toContain(expected);
  })
  it('should have the stare ability', function () {
    const expected = abilities.stare;

    expect(this.mockLavaOgre.abilities).toContain(expected);
  })
  it('should have the net item with a drop rate of 0.2', function () {
    const expected = {
      dropProbability: 0.2,
      item: monsterWorld.items.net
    };

    expect(this.mockLavaOgre.items).toContain(expected);
  })
  it('should have the potion item with a drop rate of 0.8', function () {
    const expected = {
      dropProbability: 0.43,
      item: monsterWorld.items.potion
    };

    expect(this.mockLavaOgre.items).toContain(expected);
  })
  it('should have the name of Lava Ogre', function () {
    expect(this.mockLavaOgre.name).toBe('Lava Ogre');
  })
  it('should have the lava-ogre sprite', function () {
    expect(this.mockLavaOgre.sprite).toBe('images/monsters/lava-ogre.gif');
  })
  it('should have a nomral elemental type', function () {
    expect(this.mockLavaOgre.type).toBe(elementalTypes.fire);
  })
})