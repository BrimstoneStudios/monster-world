import Salamander from '../../../scripts/components/monsters/salamander';
import Monster from '../../../scripts/components/monsters/monster';
import abilities from '../../../scripts/components/abilities/abilities';
import elementalTypes from '../../../scripts/components/elemental-types';

describe('Salamander class', function () {
  beforeEach(function () {
    this.mockSalamander = new Salamander(1);
  })
  it('should extend the Monster class', function () {
    expect(this.mockSalamander instanceof Monster).toBe(true);
  })
  it('should have an abilities property', function () {
    expect(this.mockSalamander.abilities).toBeDefined();
  })
  it('should have a name property', function () {
    expect(this.mockSalamander.name).toBeDefined();
  })
  it('should have a sprite property', function () {
    expect(this.mockSalamander.sprite).toBeDefined();
  })
  it('should have a type property', function () {
    expect(this.mockSalamander.type).toBeDefined();
  })
  it('should have a hpMultiplier of 1', function () {
    expect(this.mockSalamander.hpMultiplier).toBe(1);
  })
  it('should have an attackMultiplier of 500', function () {
    expect(this.mockSalamander.attackMultiplier).toBe(500);
  })
  it('should have a defenseMultiplier of 1', function () {
    expect(this.mockSalamander.defenseMultiplier).toBe(1);
  })
  it('should have a spAttackMultiplier of 1', function () {
    expect(this.mockSalamander.spAttackMultiplier).toBe(1);
  })
  it('should have a spDefenseMultiplier of 1', function () {
    expect(this.mockSalamander.spDefenseMultiplier).toBe(1);
  })
  it('should have a speedMultiplier of 3', function () {
    expect(this.mockSalamander.speedMultiplier).toBe(3);
  })
  it('should have the bite ability', function () {
    const expected = abilities.bite;

    expect(this.mockSalamander.abilities).toContain(expected);
  })
  it('should have the fireBreath ability', function () {
    const expected = abilities.fireBreath;

    expect(this.mockSalamander.abilities).toContain(expected);
  })
  it('should have the stare ability', function () {
    const expected = abilities.stare;

    expect(this.mockSalamander.abilities).toContain(expected);
  })
  it('should have the name of Salamander', function () {
    expect(this.mockSalamander.name).toBe('Salamander');
  })
  it('should have the salamander sprite', function () {
    expect(this.mockSalamander.sprite).toBe('images/monsters/salamander.gif');
  })
  it('should have a nomral elemental type', function () {
    expect(this.mockSalamander.type).toBe(elementalTypes.fire);
  })
})