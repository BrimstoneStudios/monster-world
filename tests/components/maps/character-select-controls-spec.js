import controls from '../../../scripts/components/maps/character-select/controls';

describe('character-select/controls', function () {
  beforeEach(function () {
    monsterWorld.setCurrentMap(monsterWorld.maps.characterSelect);
  })
  it('should be a function', function () {
    expect(typeof controls).toBe('function');
  })
  describe('if "space" IS pressed', function () {
    it('if the player is located at the eastern map boundary the monk sprite should be saved to the player\'s sprite attribute', function () {
      monsterWorld.player.location.x = monsterWorld.getCurrentMap().movement.boundaries.right;
      monsterWorld.getCurrentMap().movement.controls('space', monsterWorld.player);
      const actual = monsterWorld.player.savedAttributes.sprite;
      const expected = 'images/characters/monk.gif';

      expect(actual).toBe(expected);
    })
    it('if the player is located at the western map boundary the deathCaster sprite should be saved to the player\'s sprite attribute', function () {
      monsterWorld.player.location.x = monsterWorld.getCurrentMap().movement.boundaries.left;
      monsterWorld.getCurrentMap().movement.controls('space', monsterWorld.player);
      const actual = monsterWorld.player.savedAttributes.sprite;
      const expected = 'images/characters/deathCaster.gif';

      expect(actual).toBe(expected);
    })
    it('the current map should change to the monsterSelect map', function () {
      monsterWorld.getCurrentMap().movement.controls('space', monsterWorld.player);
      const actual = monsterWorld.getCurrentMap();
      const expected = monsterWorld.maps.monsterSelect;

      expect(actual).toBe(expected);
    })

  })
  it('if "space" is NOT pressed the current map should stay to the characterSelect map', function () {
    monsterWorld.getCurrentMap().movement.controls('foo', monsterWorld.player)
    const actual = monsterWorld.getCurrentMap();
    const expected = monsterWorld.maps.characterSelect;

    expect(actual).toBe(expected);
  })
})
