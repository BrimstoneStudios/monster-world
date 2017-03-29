import monsterInventoryMenu from '../../../scripts/components/maps/monster-inventory-menu/monster-inventory-menu';
import Maps from '../../../scripts/components/maps/maps';

describe('monster-inventory-menu', function () {
  it('should be a child of the Maps Class', function () {
    expect(monsterInventoryMenu instanceof Maps).toBe(true);
  })
  it('should have a controls property', function () {
    expect(monsterInventoryMenu.movement.controls).toBeDefined();
  })
  it('should have a initLocation property', function () {
    expect(monsterInventoryMenu.initLocation).toBeDefined();
  })
  it('should have a sprite property', function () {
    expect(monsterInventoryMenu.sprite).toBeDefined();
  })
  it('should have a renderText property', function () {
    expect(monsterInventoryMenu.renderText).toBeDefined();
  })
  it('should set the sprite to the selector', function () {
    const actual = monsterInventoryMenu.sprite;
    const expected = 'images/characters/menuSelector.png';

    expect(actual).toEqual(expected);
  })
  it('should have a boundary of {bottom: 42, left: 20, right: 20, top: 42}', function () {
    const actual = monsterInventoryMenu.movement.boundaries;
    const expected = {bottom: 42, left: 20, right: 20, top: 42};

    expect(actual).toEqual(expected);
  })
  it('should have a movement distance of {x: 0, y: 60}', function () {
    const actual = monsterInventoryMenu.movement.distance;
    const expected = {x: 0, y: 60};

    expect(actual).toEqual(expected);
  })
  it('should set the initial location to {x: 20, y: 42}', function () {
    const actual = monsterInventoryMenu.initLocation;

    expect(actual).toEqual({x: 20, y: 42})
  })
  it('should set the sprite to the selector', function () {
    const actual = monsterInventoryMenu.sprite;
    const expected = 'images/characters/menuSelector.png';

    expect(actual).toEqual(expected);
  })
})
