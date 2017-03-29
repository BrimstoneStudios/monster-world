import mainMenu from '../../../scripts/components/maps/main-menu/main-menu';
import controls from '../../../scripts/components/maps/main-menu/controls';
import Maps from '../../../scripts/components/maps/maps';

describe('main-menu', function () {
  it('should be a child of the Maps Class', function () {
    expect(mainMenu instanceof Maps).toBe(true);
  })
  it('should have a sprite property', function () {
    expect(mainMenu.sprite).toBeDefined();
  })
  it('should have a controls property', function () {
    expect(mainMenu.movement.controls).toBeDefined();
  })
  it('should have a initLocation property', function () {
    expect(mainMenu.initLocation).toBeDefined();
  })
  it('should have a renderText property', function () {
    expect(mainMenu.renderText).toBeDefined();
  })
  it('should have a boundary of {bottom: 247, left: 180, right: 180, top: 157}', function () {
    const actual = mainMenu.movement.boundaries;
    const expected = {bottom: 247, left: 180, right: 180, top: 157};

    expect(actual).toEqual(expected);
  })
  it('should have a movement distance of {x: 0, y: 90}', function () {
    const actual = mainMenu.movement.distance;
    const expected = {x: 0, y: 90};

    expect(actual).toEqual(expected);
  })
  it('should set the initial location to {x: 180, y: 157}', function () {
    const actual = mainMenu.initLocation;

    expect(actual).toEqual({x: 180, y: 157})
  })
  it('should set the sprite to the selector', function () {
    const actual = mainMenu.sprite;
    const expected = 'images/characters/menuSelector.png';

    expect(actual).toEqual(expected);
  })
  it('the controls should be the main menu controls', function () {
    const actual = mainMenu.movement.controls;

    expect(actual).toBe(controls);
  })
})
