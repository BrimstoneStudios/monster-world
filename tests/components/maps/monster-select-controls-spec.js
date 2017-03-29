import controls from '../../../scripts/components/maps/monster-select/controls';
import Salamander from '../../../scripts/components/monsters/salamander';
import Hydra from '../../../scripts/components/monsters/hydra';
import GiantAnt from '../../../scripts/components/monsters/giant-ant';

describe('monster-select/controls', function () {
  beforeEach(function () {
    monsterWorld.setCurrentMap(monsterWorld.maps.monsterSelect);
  })
  afterEach(function () {
    monsterWorld.player.monsterInventory = [];
  })
  it('should be a function', function () {
    expect(typeof controls).toBe('function');
  })
  describe('if "space" IS pressed', function () {
    it('if the player is located at the western map boundary the salamander should be added to the player\'s monster inventory', function () {
      monsterWorld.player.location.x = monsterWorld.getCurrentMap().movement.boundaries.left;
      monsterWorld.getCurrentMap().movement.controls('space', monsterWorld.player);
      const actual = monsterWorld.player.monsterInventory[0].name;
      const mockMonster = new Salamander(1);
      const expected = mockMonster.name;

      expect(actual).toBe(expected);
    })
    it('if the player is located at the eastern map boundary the giantAnt should be added to the player\'s monster inventory', function () {
      monsterWorld.player.location.x = monsterWorld.getCurrentMap().movement.boundaries.right;
      monsterWorld.getCurrentMap().movement.controls('space', monsterWorld.player);
      const actual = monsterWorld.player.monsterInventory[0].name;
      const mockMonster = new GiantAnt(1);
      const expected = mockMonster.name;

      expect(actual).toBe(expected);
    })
    it('if the player is NOT located at the eastern OR western map boundaries the hydra should be added to the player\'s monster inventory', function () {
      monsterWorld.player.location.x = monsterWorld.getCurrentMap().movement.boundaries.left + 1 ;
      monsterWorld.getCurrentMap().movement.controls('space', monsterWorld.player);
      const actual = monsterWorld.player.monsterInventory[0].name;
      const mockMonster = new Hydra(1);
      const expected = mockMonster.name;

      expect(actual).toBe(expected);
    })
    it('should set the choosen monter\'s controller to the player', function () {
      monsterWorld.player.location.x = monsterWorld.getCurrentMap().movement.boundaries.right;
      monsterWorld.getCurrentMap().movement.controls('space', monsterWorld.player);
      const actual = monsterWorld.player.monsterInventory[0].controller;
      const expected = monsterWorld.player;

      expect(actual).toBe(expected);
    })
    it('the current map should change to the firstMap map', function () {
      monsterWorld.getCurrentMap().movement.controls('space', monsterWorld.player);
      const actual = monsterWorld.getCurrentMap();
      const expected = monsterWorld.maps.firstMap;

      expect(actual).toBe(expected);
    })

  })
  it('if "space" is NOT pressed the current map should stay to the monsterSelect map', function () {
    monsterWorld.getCurrentMap().movement.controls('foo', monsterWorld.player)
    const actual = monsterWorld.getCurrentMap();
    const expected = monsterWorld.maps.monsterSelect;

    expect(actual).toBe(expected);
  })
})
