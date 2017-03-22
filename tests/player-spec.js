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
    beforeEach(function () {
      this.mockMonsterWorld = new MonsterWorld();
    })
    it('should get the sprite from the current map if it exists', function () {
      this.mockMonsterWorld.state.currentMap.sprite = 'foo';
      this.mockMonsterWorld.player.setSprite(this.mockMonsterWorld);

      const actual = this.mockMonsterWorld.player.sprite;
      const expected = this.mockMonsterWorld.state.currentMap.sprite

      expect(actual).toEqual(expected);
    })
    it('should get the sprite from the player\'s saved attributes if no sprite exists on the current map', function () {
      this.mockMonsterWorld.state.currentMap.sprite = undefined;
      this.mockMonsterWorld.player.savedAttributes.sprite = 'foo';
      this.mockMonsterWorld.player.setSprite(this.mockMonsterWorld);

      const actual = this.mockMonsterWorld.player.sprite;
      const expected = this.mockMonsterWorld.player.savedAttributes.sprite;

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

      monsterWorld.getCurrentMap().movement.controls = function (key, player) {
        player.bar = false;

        if (key === 'foo') {
          player.bar = true;
        }
      }
    })
    it('should take the action that the key foo is associated with in the current map controls', function () {
      const ctx = {
        drawImage: function () {
          return true;
        }
      };
      this.mockPlayer.handleInput('foo', this.mockPlayer);
      const actual = this.mockPlayer.bar;

      expect(actual).toBe(true);
    })
    it('should not take any action if the key foo is not defined in the current map controls', function () {
      const ctx = {
        drawImage: function () {
          return true;
        }
      };
      this.mockPlayer.handleInput('bar', this.mockPlayer);
      const actual = this.mockPlayer.bar;

      expect(actual).toBe(false);
    })
    it('should set the player\'s location based on the key that was pressed', function () {
      expect()
    })
  })
})
