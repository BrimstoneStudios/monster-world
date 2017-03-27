import controls from '../scripts/components/maps/world/controls';

describe('world controls', function () {
  it('should be a function', function () {
    expect(typeof controls).toBe('function');
  })
  describe('if "shift" is pressed', function () {
    beforeEach(function () {
      monsterWorld.setCurrentMap(monsterWorld.maps.firstLevel);
    })
    it('should save the current map to the player\'s saved attributes', function () {
      controls('shift', monsterWorld.player);
      const actual = monsterWorld.player.savedAttributes.lastLevel;
      const expected = monsterWorld.maps.firstLevel;

      expect(actual).toBe(expected);
    })
    it('should save the current player\'s location to the player\'s saved attributes', function () {
      monsterWorld.player.location = {
        x: 4,
        y: 5
      };
      controls('shift', monsterWorld.player);
      const actual = monsterWorld.player.savedAttributes.location;

      expect(actual).toEqual({x: 4, y: 5});
    })
    it('should set the current map to the mainMenu', function () {
      controls('shift', monsterWorld.player);

      expect(monsterWorld.getCurrentMap()).toBe(monsterWorld.maps.mainMenu);
    })
  })
  it('if "space" is pressed it should check for an NPC action', function () {
    spyOn(monsterWorld.maps, 'checkNPCActionable');
    controls('space');

    expect(monsterWorld.maps.checkNPCActionable).toHaveBeenCalled();
  })
  it('if "left" is pressed it should check for an NPC action', function () {
    spyOn(monsterWorld.maps, 'resolveBattleEvent');
    controls('left');

    expect(monsterWorld.maps.resolveBattleEvent).toHaveBeenCalled();
  })
  it('if "right" is pressed it should check for an NPC action', function () {
    spyOn(monsterWorld.maps, 'resolveBattleEvent');
    controls('right');

    expect(monsterWorld.maps.resolveBattleEvent).toHaveBeenCalled();
  })
  it('if "up" is pressed it should check for an NPC action', function () {
    spyOn(monsterWorld.maps, 'resolveBattleEvent');
    controls('up');

    expect(monsterWorld.maps.resolveBattleEvent).toHaveBeenCalled();
  })
  it('if "down" is pressed it should check for an NPC action', function () {
    spyOn(monsterWorld.maps, 'resolveBattleEvent');
    controls('down');

    expect(monsterWorld.maps.resolveBattleEvent).toHaveBeenCalled();
  })
})