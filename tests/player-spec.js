import Player from '../scripts/components/player/player';
import MonsterWorld from '../scripts/components/monster-world';

describe('player: Every new Player instance', function () {
  beforeEach(function () {
    this.mockPlayer = new Player();
  })

  it('should have an inventory property', function () {
    expect(this.mockPlayer.inventory).toBeDefined();
  })
  it('should start with an empty inventory', function () {
    expect(this.mockPlayer.inventory.length).toBe(0);
  })
  it('should have the location property', function () {
    expect(this.mockPlayer.location).toBeDefined();
  })
  it('should have a starting location of {x: 0, y: 0}', function () {
    const actual = this.mockPlayer.location;
    const expected = {x: 0, y: 0};

    expect(actual).toEqual(expected);
  })
  it('should have the monsterInventory property', function () {
    expect(this.mockPlayer.monsterInventory).toBeDefined();
  })
  it('should start with an empty monsterInventory', function () {
    expect(this.mockPlayer.monsterInventory.length).toBe(0);
  })
  it('should have the savedAttributes property', function () {
    expect(this.mockPlayer.savedAttributes).toBeDefined();
  })
  describe('setSprite()', function () {
    it('should get the sprite from the current map if it exists', function () {
      const expected = monsterWorld.state.currentMap.sprite = 'foo';
      monsterWorld.player.setSprite();

      const actual = monsterWorld.player.sprite;

      expect(actual).toEqual(expected);
    })
    it('should get the sprite from the player\'s saved attributes if no sprite exists on the current map', function () {
      const expected = monsterWorld.player.savedAttributes.sprite = 'foo';
      monsterWorld.state.currentMap.sprite = undefined;
      monsterWorld.player.setSprite();

      const actual = monsterWorld.player.sprite;

      expect(actual).toEqual(expected);
    })
  })
  describe('initLocation()', function () {
    it('should set the player\'s location to the location initialized by the map', function () {
      monsterWorld.getCurrentMap().initLocation = {
        x: 'foo',
        y: 'bar',
      };
      this.mockPlayer.initLocation();

      const actual = this.mockPlayer.location;
      const expected = {x: 'foo', y: 'bar'};

      expect(actual).toEqual(expected);
    })
  })
  describe('handleInput(foo)', function () {
    beforeEach(function () {
      this.mockPlayer.render = function () {
        return true;
      }

      this.mockPlayer.locationSetter = monsterWorld.getCurrentMap().movement.controls = function (key) {
        if (key === 'foo') {
          return true;
        }
        return false;
      }
    })
    it('should take the action that the key foo is associated with in the current map controls', function () {
      const actual = monsterWorld.getCurrentMap().movement.controls('foo');

      expect(actual).toBe(true);
    })
    it('should not take any action if the key foo is not defined in the current map controls', function () {
      const actual = monsterWorld.getCurrentMap().movement.controls('bar');

      expect(actual).toBe(false);
    })
    it('should set the player\'s location based on the key that was pressed', function () {
      const actual = this.mockPlayer.locationSetter('foo');

      expect(actual).toBe(true)
    })
    it('should not set the player\'s location if the key foo is not defined in the current map controls', function () {
      const actual = this.mockPlayer.locationSetter('bar');

      expect(actual).toBe(false);
    })
  })
  describe('locationSetter(key)', function () {
    beforeEach(function () {
      monsterWorld.getCurrentMap().movement.boundaries = {
        left: 0,
        right: 100,
        top: 0,
        bottom: 100,
      };
      monsterWorld.getCurrentMap().movement.distance = {
        x: 10,
        y: 10,
      };
      this.mockPlayer.location = {
        x: 50,
        y: 50,
      }
    })
    describe('key = "left"', function () {
      it('should move the player to the westwards by the allowed horizontal distance', function () {
        this.mockPlayer.locationSetter('left');
        const actual = this.mockPlayer.location.x;
        const expected = 40;

        expect(actual).toBe(expected);
      })
      it('should not allow the player to pass the map\'s westmost boundary', function () {
        this.mockPlayer.location.x = 5;
        this.mockPlayer.locationSetter('left');
        const actual = this.mockPlayer.location.x;
        const expected = 0;

        expect(actual).toBe(expected);
      })
    })
    describe('key = "up"', function () {
      it('should move the player northwards by the allowed vertical distance', function () {
        this.mockPlayer.locationSetter('up');
        const actual = this.mockPlayer.location.y;
        const expected = 40;

        expect(actual).toBe(expected);
      })
      it('should not allow the player to pass the map\'s northernmost boundary', function () {
        this.mockPlayer.location.y = 5;
        this.mockPlayer.locationSetter('up');
        const actual = this.mockPlayer.location.y;
        const expected = 0;

        expect(actual).toBe(expected);
      })
    })
    describe('key = "right"', function () {
      it('should move the player to the east by the allowed horizontal distance', function () {
        this.mockPlayer.locationSetter('right');
        const actual = this.mockPlayer.location.x;
        const expected = 60;

        expect(actual).toBe(expected);
      })
      it('should not allow the player to pass the map\'s easternmost boundary', function () {
        this.mockPlayer.location.x = 95;
        this.mockPlayer.locationSetter('right');
        const actual = this.mockPlayer.location.x;
        const expected = 100;

        expect(actual).toBe(expected);
      })
    })
    describe('key = "down"', function () {
      it('should move the player southwards by the allowed vertical distance', function () {
        this.mockPlayer.locationSetter('down');
        const actual = this.mockPlayer.location.y;
        const expected = 60;

        expect(actual).toBe(expected);
      })
      it('should not allow the player to pass the map\'s southernmost boundary', function () {
        this.mockPlayer.location.y = 95;
        this.mockPlayer.locationSetter('down');
        const actual = this.mockPlayer.location.y;
        const expected = 100;

        expect(actual).toBe(expected);
      })
    })
  })
})
