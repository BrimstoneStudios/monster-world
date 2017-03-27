import firstMap from '../scripts/components/maps/world/first-map';
import controls from '../scripts/components/maps/world/controls';
import Maps from '../scripts/components/maps/maps';
import Bat from '../scripts/components/monsters/bat';
import GiantRat from '../scripts/components/monsters/giant-rat';
import Munchkin from '../scripts/components/monsters/munchkin';
import HealerNPC from '../scripts/components/npcs/healer';

describe('first-map', function () {
  it('should be a child of the Maps Class', function () {
    expect(firstMap instanceof Maps).toBe(true);
  })
  it('should NOT have a sprite property', function () {
    expect(firstMap.sprite).not.toBeDefined();
  })
  it('should have a controls property', function () {
    expect(firstMap.movement.controls).toBeDefined();
  })
  it('should have a initLocation property', function () {
    expect(firstMap.initLocation).toBeDefined();
  })
  it('should have a monster property', function () {
    expect(firstMap.monsters).toBeDefined();
  })
  it('should have a NPC property', function () {
    expect(firstMap.npcs).toBeDefined();
  })
  it('the controls should be the world map controls', function () {
    const actual = firstMap.movement.controls;

    expect(actual).toBe(controls);
  })
  describe('available monsters', function () {
    beforeEach(function () {
      this.mockMonsters = [];
      for(let i = 0; i < firstMap.monsters.length; i++) {
        const newMonster = new firstMap.monsters[i].initMonster(1);
        this.mockMonsters.push(newMonster.name)
      }
    })
    it('should contain a Bat', function () {
      const expectedMonster = new Bat(1);
      const expected = expectedMonster.name;

      expect(this.mockMonsters).toContain(expected);
    })
    it('should contain a GiantRat', function () {
      const expectedMonster = new GiantRat(1);
      const expected = expectedMonster.name;

      expect(this.mockMonsters).toContain(expected);
    })
    it('should contain a Munchkin', function () {
      const expectedMonster = new Munchkin(1);
      const expected = expectedMonster.name;

      expect(this.mockMonsters).toContain(expected);
    })
  })
  describe('available npcs', function () {
    beforeEach(function () {
      this.mockNpcs = [];
      for(let i = 0; i < firstMap.npcs.length; i++) {
        this.mockNpcs.push(firstMap.npcs[i].initNPCAction);
      }
    })
    it('should have a healer npc', function () {
      const mockHealer = new HealerNPC('Mock Name', 'mockSprite', 0, 0);
      const expected = mockHealer.initNPCAction;

      expect(this.mockNpcs).toContain(expected);
    })
  })
})
