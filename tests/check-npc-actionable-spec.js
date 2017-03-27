import checkNPCActionable from '../scripts/components/maps/check-npc-actionable';

describe('check-npc-actionable', function () {
  beforeEach(function () {
    monsterWorld.getCurrentMap().npcs = [];
    this.mockNPC = {
      location: {
        x: 0,
        y: 0
      },
      initNPCAction: function () {
        return true;
      }
    }
    monsterWorld.getCurrentMap().npcs.push(this.mockNPC);
    spyOn(this.mockNPC, 'initNPCAction');
  })
  it('should be a function', function () {
    expect(typeof checkNPCActionable).toBe('function');
  })
  it('should execute the NPCs action if the player and npc are located on top of one another', function () {
    monsterWorld.player.location = {
      x: 0,
      y: 0
    };
    checkNPCActionable();
    expect(this.mockNPC.initNPCAction).toHaveBeenCalled();
  })
  it('should NOT execute the NPCs action if the player and npc are NOT located on top of one another', function () {
    monsterWorld.player.location = {
      x: 0,
      y: 1
    };
    checkNPCActionable();
    expect(this.mockNPC.initNPCAction).not.toHaveBeenCalled();
  })
  it('should NOT execute if there are no npcs attached to the map', function () {
    monsterWorld.getCurrentMap().npcs = undefined;
    checkNPCActionable();
    expect(this.mockNPC.initNPCAction).not.toHaveBeenCalled();
  })
})
