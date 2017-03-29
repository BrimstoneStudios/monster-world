import MonsterWorld from '../../scripts/components/monster-world';
import Player from '../../scripts/components/player/player';

describe('monster-world: Every new monsterWorld instance', function () {
  beforeEach(function () {
    this.mockMonsterWorld = new MonsterWorld();
  })
  it('should have the items property', function () {
    expect(this.mockMonsterWorld.items).toBeDefined();
  })
  it('should have the maps property', function () {
    expect(this.mockMonsterWorld.maps).toBeDefined();
  })
  it('should have a player property', function () {
    expect(this.mockMonsterWorld.player).toBeDefined();
  })
  it('should have a player property instatiated from the Player class', function () {
    expect(this.mockMonsterWorld.player instanceof Player).toBe(true)
  })
  it('should have the state property', function () {
    expect(this.mockMonsterWorld.state).toBeDefined();
  })
  it('should have the initial map set to the startScreen map', function () {
    const actual = this.mockMonsterWorld.state.currentMap;
    const expected = this.mockMonsterWorld.maps.startScreen;

    expect(actual).toEqual(expected);
  })
  it('should not start in battle', function () {
    expect(this.mockMonsterWorld.state.inBattle).toBe(false);
  })
  it('getBattleState() should return the game\'s current battle state', function () {
    const actual = this.mockMonsterWorld.getBattleState();

    expect(actual).toEqual(false);
  })
  it('getCurrentMap() should return the current map', function () {
    const actual = this.mockMonsterWorld.getCurrentMap();
    const expected = this.mockMonsterWorld.state.currentMap;

    expect(actual).toEqual(expected)
  })
  describe('setters:', function () {
    beforeEach(function () {
      const foo = 'bar';

      this.mockMonsterWorld = new MonsterWorld();
      this.mockMonsterWorld.setBattleState(foo);
      this.mockMonsterWorld.setCurrentMap(foo);
    })
    it('setBattleState(foo) should set the current battle state to foo', function () {
      const actual = this.mockMonsterWorld.state.inBattle;

      expect(actual).toBe('bar')
    })
    it('setCurrentMap(foo) should set the current map to foo', function () {
      const actual = this.mockMonsterWorld.state.currentMap;

      expect(actual).toBe('bar')
    })
  })
})
