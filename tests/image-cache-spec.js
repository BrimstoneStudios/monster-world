import imageCache from '../scripts/components/engine/image-cache';

describe('image-cache', function () {
  beforeEach(function () {
    this.mockImageCache = imageCache;
  })
  it('should be an object', function () {
    expect(typeof this.mockImageCache).toBe('object');
  })
  it('should have a get property', function () {
    expect(this.mockImageCache.get).toBeDefined();
  })
  it('should have a isReady property', function () {
    expect(this.mockImageCache.isReady).toBeDefined();
  })
  it('should have a load property', function () {
    expect(this.mockImageCache.load).toBeDefined();
  })
  it('should have an onReady property', function () {
    expect(this.mockImageCache.onReady).toBeDefined();
  })
  describe('get(url)', function () {
    it('should retrieve the image in the passed url', function () {
      const img = 'images/terrain/white-tile50.png';

      this.mockImageCache.load(img);

      expect(this.mockImageCache.get(img)).toBeDefined();
    })
  })
})