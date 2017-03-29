import controls from '../../../scripts/components/maps/start-screen/controls';

describe('start-screen/controls', function () {
  beforeEach(function () {
    monsterWorld.setCurrentMap(monsterWorld.maps.startScreen);
  })
  it('should be a function', function () {
    expect(typeof controls).toBe('function');
  })
  it('if "space" IS pressed the current map should change to the characterSelect map', function () {
    monsterWorld.getCurrentMap().movement.controls('space', monsterWorld.player)
    const actual = monsterWorld.getCurrentMap();
    const expected = monsterWorld.maps.characterSelect;

    expect(actual).toBe(expected);
  })
  it('if "space" is NOT pressed the current map should stay to the startScreen map', function () {
    monsterWorld.getCurrentMap().movement.controls('foo', monsterWorld.player)
    const actual = monsterWorld.getCurrentMap();
    const expected = monsterWorld.maps.startScreen;

    expect(actual).toBe(expected);
  })
})
