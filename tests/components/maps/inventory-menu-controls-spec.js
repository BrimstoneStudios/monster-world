import controls from '../../../scripts/components/maps/inventory-menu/controls';

describe('inventory-menu controls', function () {
  beforeEach(function () {
    monsterWorld.setCurrentMap(monsterWorld.maps.inventoryMenu);
  })
  it('should be a function', function () {
    expect(typeof controls).toBe('function');
  })
  describe('if "shift" is pressed', function () {
    it('should set the current map to the mainMenu', function () {
      controls('shift', monsterWorld.player);
      const actual = monsterWorld.getCurrentMap();
      const expected = monsterWorld.maps.mainMenu;

      expect(actual).toBe(expected);
    })
    it('should call the player\'s initLocation function', function () {
      spyOn(monsterWorld.player, 'initLocation');
      controls('shift', monsterWorld.player);

      expect(monsterWorld.player.initLocation).toHaveBeenCalled();
    })
  })
  describe('if "space" is pressed', function () {
    beforeEach(function () {
      monsterWorld.player.inventory = [
        {
          useItem: function () {
            return true;
          },
          singleUse: false
        }
      ]
    })
    it('should call the item\'s useItem function', function () {
      spyOn(monsterWorld.items, 'useItem');
      controls('space', monsterWorld.player);

      expect(monsterWorld.items.useItem).toHaveBeenCalled();
    })
    it('should call the maps\'s dynamicBoundaries function', function () {
      spyOn(monsterWorld.getCurrentMap(), 'dynamicBoundaries');
      controls('space', monsterWorld.player);

      expect(monsterWorld.getCurrentMap().dynamicBoundaries).toHaveBeenCalled();
    })
    it('should call the player\'s initLocation function', function () {
      spyOn(monsterWorld.player, 'initLocation');
      controls('space', monsterWorld.player);

      expect(monsterWorld.player.initLocation).toHaveBeenCalled();
    })
  })
})
