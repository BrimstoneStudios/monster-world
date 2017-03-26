import characterSelect from '../scripts/components/maps/character-select/character-select';
import Maps from '../scripts/components/maps/maps';

describe('character-select', function () {
  it('should be a child of the Maps Class', function () {
    expect(characterSelect instanceof Maps).toBe(true);
  })
  it('should have a sprite property', function () {
    expect(characterSelect.sprite).toBeDefined();
  })
  it('the sprite property should be the selector image', function () {
    const actual = characterSelect.sprite;
    const expected = 'images/characters/selector.png';

    expect(actual).toBe(expected);
  })
  it('should have a controls property', function () {
    expect(characterSelect.movement.controls).toBeDefined();
  })
  it('should have a initLocation property', function () {
    expect(characterSelect.initLocation).toBeDefined();
  })
})
