import startScreen from '../scripts/components/maps/start-screen/start-screen';
import Maps from '../scripts/components/maps/maps';

describe('start-screen.js', function () {
  it('should be a child of the Maps Class', function () {
    expect(startScreen instanceof Maps).toBe(true);
  })
  it('should have a sprite', function () {
    expect(startScreen.sprite).toBeDefined();
  })
  it('should have controls', function () {
    expect(startScreen.movement.controls).toBeDefined();
  })
})
