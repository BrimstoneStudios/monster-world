import monsterSelect from '../../../scripts/components/maps/monster-select/monster-select';
import Maps from '../../../scripts/components/maps/maps';

describe('monster-select', function () {
  it('should be a child of the Maps Class', function () {
    expect(monsterSelect instanceof Maps).toBe(true);
  })
  it('should have a sprite property', function () {
    expect(monsterSelect.sprite).toBeDefined();
  })
  it('the sprite property should be the selector image', function () {
    const actual = monsterSelect.sprite;
    const expected = 'images/characters/selector.png';

    expect(actual).toBe(expected);
  })
  it('should have a controls property', function () {
    expect(monsterSelect.movement.controls).toBeDefined();
  })
  it('should have a initLocation property', function () {
    expect(monsterSelect.initLocation).toBeDefined();
  })
})
