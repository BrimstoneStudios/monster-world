import engine from '../../../scripts/components/engine/engine';

describe('engine: Every new engine object', function () {
  beforeEach(function () {
    this.mockEngine = engine;
  })
  it('should contain the imageCache property', function () {
    expect(this.mockEngine.imageCache).toBeDefined();
  })
  it('should have a imageCache property that\'s an object', function () {
    expect(typeof this.mockEngine.imageCache).toBe('object')
  })
  it('should contain the start property', function () {
    expect(this.mockEngine.start).toBeDefined();
  })
  it('should have a start property that\'s a function', function () {
    expect(typeof this.mockEngine.start).toBe('function')
  })
});
