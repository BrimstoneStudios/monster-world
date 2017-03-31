import Phoenix from '../../../scripts/components/monsters/phoenix';
import Monster from '../../../scripts/components/monsters/monster';
import abilities from '../../../scripts/components/abilities/abilities';
import elementalTypes from '../../../scripts/components/elemental-types';

describe('Phoenix class', function () {
  beforeEach(function () {
    this.mockPhoenix = new Phoenix(1);
  })
  it('should extend the Monster class', function () {
    expect(this.mockPhoenix instanceof Monster).toBe(true);
  })
  it('should have an abilities property', function () {
    expect(this.mockPhoenix.abilities).toBeDefined();
  })
  it('should have an items property', function () {
    expect(this.mockPhoenix.items).toBeDefined();
  })
  it('should have a name property', function () {
    expect(this.mockPhoenix.name).toBeDefined();
  })
  it('should have a sprite property', function () {
    expect(this.mockPhoenix.sprite).toBeDefined();
  })
  it('should have a type property', function () {
    expect(this.mockPhoenix.type).toBeDefined();
  })
  it('should have a hpMultiplier of 3', function () {
    expect(this.mockPhoenix.hpMultiplier).toBe(3);
  })
  it('should have an attackMultiplier of 2', function () {
    expect(this.mockPhoenix.attackMultiplier).toBe(2);
  })
  it('should have a defenseMultiplier of 1', function () {
    expect(this.mockPhoenix.defenseMultiplier).toBe(1);
  })
  it('should have a spAttackMultiplier of 2', function () {
    expect(this.mockPhoenix.spAttackMultiplier).toBe(2);
  })
  it('should have a spDefenseMultiplier of 2', function () {
    expect(this.mockPhoenix.spDefenseMultiplier).toBe(2);
  })
  it('should have a speedMultiplier of 3', function () {
    expect(this.mockPhoenix.speedMultiplier).toBe(3);
  })
  it('should have the fireBlast ability', function () {
    const expected = abilities.fireBlast;

    expect(this.mockPhoenix.abilities).toContain(expected);
  })
  it('should have the stare ability', function () {
    const expected = abilities.stare;

    expect(this.mockPhoenix.abilities).toContain(expected);
  })
  it('should have the net item with a drop rate of 0.2', function () {
    const expected = {
      dropProbability: 0.2,
      item: monsterWorld.items.net
    };

    expect(this.mockPhoenix.items).toContain(expected);
  })
  it('should have the potion item with a drop rate of 0.224', function () {
    const expected = {
      dropProbability: 0.224,
      item: monsterWorld.items.potion
    };

    expect(this.mockPhoenix.items).toContain(expected);
  })
  it('should have the name of Phoenix', function () {
    expect(this.mockPhoenix.name).toBe('Phoenix');
  })
  it('should have the phoenix sprite', function () {
    expect(this.mockPhoenix.sprite).toBe('images/monsters/phoenix.gif');
  })
  it('should have a nomral elemental type', function () {
    expect(this.mockPhoenix.type).toBe(elementalTypes.fire);
  })
})