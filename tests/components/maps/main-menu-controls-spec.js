import controls from '../../../scripts/components/maps/main-menu/controls';

describe('main menu controls', function () {
  it('should be a function', function () {
    expect(typeof controls).toBe('function');
  })
  describe('if "shift" is pressed', function () {
    beforeEach(function () {
      monsterWorld.player.savedAttributes.lastLevel = monsterWorld.maps.firstLevel;
      monsterWorld.player.savedAttributes.location = {
        x: 10,
        y: 10
      };
    })
    it('should change the current map to the player\'s saved map attribute', function () {
      controls('shift', monsterWorld.player);
      const actual = monsterWorld.getCurrentMap();
      const expected = monsterWorld.maps.firstLevel;

      expect(actual).toBe(expected);
    })
    it('should return the player\'s current location to the player\'s saved attributes', function () {
      monsterWorld.player.location = {
        x: 4,
        y: 5
      };
      controls('shift', monsterWorld.player);
      const actual = monsterWorld.player.savedAttributes.location;

      expect(actual).toEqual({x: 10, y: 10});
    })
  })
  describe('if "space" is pressed', function () {
    it('should set the current map to the monsterInventoryMenu if the player is located at y = 247', function () {
      monsterWorld.player.location = {y: 247};
      controls('space', monsterWorld.player);
      const actual = monsterWorld.getCurrentMap();
      const expected = monsterWorld.maps.monsterInventoryMenu;

      expect(actual).toBe(expected);
    })
    it('should set the current map to the inventoryMenu if the player is NOT located at y = 247', function () {
      monsterWorld.player.location = {y: 245};
      controls('space', monsterWorld.player);
      const actual = monsterWorld.getCurrentMap();
      const expected = monsterWorld.maps.inventoryMenu;

      expect(actual).toBe(expected);
    })
    it('should call the dynamic boundaries function', function () {
      monsterWorld.player.location = {y: 245};
      spyOn(monsterWorld.getCurrentMap(), 'dynamicBoundaries');
      controls('space', monsterWorld.player);

      expect(monsterWorld.getCurrentMap().dynamicBoundaries).toHaveBeenCalled();
    })
    it('should call the player\'s initLocation function', function () {
      monsterWorld.player.location = {y: 245};
      spyOn(monsterWorld.player, 'initLocation');
      controls('space', monsterWorld.player);

      expect(monsterWorld.player.initLocation).toHaveBeenCalled();
    })
  })
})
