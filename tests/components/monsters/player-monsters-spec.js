import PlayerMonster from '../../../scripts/components/monsters/player-monster';
import Monster from '../../../scripts/components/monsters/monster';
import abilities from '../../../scripts/components/abilities/abilities';
import elementalTypes from '../../../scripts/components/elemental-types';

describe('PlayerMonster class', function () {
  beforeEach(function () {
    this.mockPlayerMonster = new PlayerMonster(1);
  })
  it('should extend the Monster class', function () {
    expect(this.mockPlayerMonster instanceof Monster).toBe(true);
  })
  it('should have an abilities property', function () {
    expect(this.mockPlayerMonster.abilities).toBeDefined();
  })
  it('should have a name property', function () {
    expect(this.mockPlayerMonster.name).toBeDefined();
  })
  it('should have a type property', function () {
    expect(this.mockPlayerMonster.type).toBeDefined();
  })
  it('should have a hpMultiplier of 1', function () {
    expect(this.mockPlayerMonster.hpMultiplier).toBe(1);
  })
  it('should have an attackMultiplier of 3', function () {
    expect(this.mockPlayerMonster.attackMultiplier).toBe(3);
  })
  it('should have a defenseMultiplier of 0', function () {
    expect(this.mockPlayerMonster.defenseMultiplier).toBe(0);
  })
  it('should have a spAttackMultiplier of 2', function () {
    expect(this.mockPlayerMonster.spAttackMultiplier).toBe(2);
  })
  it('should have a spDefenseMultiplier of 1', function () {
    expect(this.mockPlayerMonster.spDefenseMultiplier).toBe(1);
  })
  it('should have a speedMultiplier of 3', function () {
    expect(this.mockPlayerMonster.speedMultiplier).toBe(3);
  })
  it('should have the scratch ability', function () {
    const expected = abilities.scratch;

    expect(this.mockPlayerMonster.abilities).toContain(expected);
  })
  it('should have the stare ability', function () {
    const expected = abilities.stare;

    expect(this.mockPlayerMonster.abilities).toContain(expected);
  })
  it('should have the name of Leaf', function () {
    expect(this.mockPlayerMonster.name).toBe('Leaf');
  })
  it('should have a normal elemental type', function () {
    expect(this.mockPlayerMonster.type).toBe(elementalTypes.normal);
  })
})