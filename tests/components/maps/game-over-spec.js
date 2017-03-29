import gameOver from '../../../scripts/components/maps/game-over/game-over';
import Maps from '../../../scripts/components/maps/maps';

describe('game-over', function () {
  it('should be a child of the Maps Class', function () {
    expect(gameOver instanceof Maps).toBe(true);
  })
  it('should have a sprite property', function () {
    expect(gameOver.sprite).toBeDefined();
  })
  it('the sprite property should be the Game Over image', function () {
    const actual = gameOver.sprite;
    const expected = 'images/characters/gameOver.png';

    expect(actual).toBe(expected);
  })
  it('should have a controls property', function () {
    expect(gameOver.movement.controls).toBeDefined();
  })
  it('should have a initLocation property', function () {
    expect(gameOver.initLocation).toBeDefined();
  })
  it('should set the initial location to {x: 0, y: 0}', function () {
    const actual = gameOver.initLocation;

    expect(actual).toEqual({x: 0, y: 0})
  })
})
