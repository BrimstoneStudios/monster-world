import inventoryMenu from '../../../scripts/components/maps/inventory-menu/inventory-menu';
import Maps from '../../../scripts/components/maps/maps';

describe('inventory-menu', function () {
  it('should be a child of the Maps Class', function () {
    expect(inventoryMenu instanceof Maps).toBe(true);
  })
  it('should have a controls property', function () {
    expect(inventoryMenu.movement.controls).toBeDefined();
  })
  it('should have a initLocation property', function () {
    expect(inventoryMenu.initLocation).toBeDefined();
  })
  it('should have a sprite property', function () {
    expect(inventoryMenu.sprite).toBeDefined();
  })
  it('should have a renderText property', function () {
    expect(inventoryMenu.renderText).toBeDefined();
  })
  it('should set the sprite to the selector', function () {
    const actual = inventoryMenu.sprite;
    const expected = 'images/characters/menuSelector.png';

    expect(actual).toEqual(expected);
  })
  it('should have a boundary of {bottom: 42, left: 100, right: 100, top: 42}', function () {
    const actual = inventoryMenu.movement.boundaries;
    const expected = {bottom: 42, left: 100, right: 100, top: 42};

    expect(actual).toEqual(expected);
  })
  it('should have a movement distance of {x: 0, y: 50}', function () {
    const actual = inventoryMenu.movement.distance;
    const expected = {x: 0, y: 50};

    expect(actual).toEqual(expected);
  })
  it('should set the initial location to {x: 100, y: 42}', function () {
    const actual = inventoryMenu.initLocation;

    expect(actual).toEqual({x: 100, y: 42})
  })
  it('should set the sprite to the selector', function () {
    const actual = inventoryMenu.sprite;
    const expected = 'images/characters/menuSelector.png';

    expect(actual).toEqual(expected);
  })
})
