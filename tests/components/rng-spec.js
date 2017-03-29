import rng from '../../scripts/components/rng';

describe('RNG to generate a number between 0 and 1', function() {
  var randomNum = rng();

  it('should be below 1', function() {
    expect(randomNum).toBeLessThan(1);
  })

  it('should be above 0', function() {
    expect(randomNum).toBeGreaterThan(0);
  })
});
