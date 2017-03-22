import MonsterWorld from '../scripts/components/monster-world';

describe('Initiating Monster World', function () {
  beforeEach(function () {
    this.monsterWorld = new MonsterWorld();
  })
  it('should create the global monsterWorld namespace', function () {
    expect(monsterWorld).toBeDefined();
  })
  it('should define a global instance of the monsterWorld object', function () {
    const expectedType = typeof this.monsterWorld;
    const actualType = typeof monsterWorld;

    expect(actualType).toEqual(expectedType);
  })
})