import controls from '../scripts/components/maps/monster-inventory-menu/controls';

describe('monster-inventory-menu controls', function () {
  beforeEach(function () {
    monsterWorld.setCurrentMap(monsterWorld.maps.monsterInventoryMenu);
  })
  it('should be a function', function () {
    expect(typeof controls).toBe('function');
  })
  describe('if "shift" is pressed', function () {
    it('should set the monsterInventoryMenu display stats property  to false', function () {
      controls('shift', monsterWorld.player);
      const actual = monsterWorld.maps.monsterInventoryMenu.displayStats;
      const expected = false;

      expect(actual).toBe(expected);
    })
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
    it('should toggle the monsterInventoryMenu display stats property to true', function () {
      monsterWorld.getCurrentMap().displayStats = false;
      controls('space', monsterWorld.player);
      const actual = monsterWorld.getCurrentMap().displayStats;
      const expected = true;

      expect(actual).toBe(expected);
    })
    it('should toggle the monsterInventoryMenu display stats property to false', function () {
      monsterWorld.getCurrentMap().displayStats = true;
      controls('space', monsterWorld.player);
      const actual = monsterWorld.getCurrentMap().displayStats;
      const expected = false;

      expect(actual).toBe(expected);
    })
    it('should retrieve and display the correct monster index', function () {
      monsterWorld.player.location.y = 42;
      controls('space', monsterWorld.player);
      const actual = monsterWorld.getCurrentMap().displayMonsterIndex;
      const expected = 0;

      expect(actual).toBe(expected);
    })
  })
})
