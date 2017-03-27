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
  it('should have a boundary of {bottom: 510, left: -40, right: 710, top: -40}', function () {
    const actual = firstMap.movement.boundaries;
    const expected = {bottom: 510, left: -40, right: 710, top: -40};

    expect(actual).toEqual(expected);
  })
  it('should have a movement distance of {x: 50, y: 50}', function () {
    const actual = firstMap.movement.distance;
    const expected = {x: 50, y: 50};

    expect(actual).toEqual(expected);
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
        this.mockMonsters.push(newMonster.name);
      }
      this.mockMonsterEntry = function (monster) {
        for(let i = 0; i < firstMap.monsters.length; i++) {
          const newMonster = new firstMap.monsters[i].initMonster(1);
          const lookingFor = new monster(1);

          if(newMonster.name === lookingFor.name) {
            const result = {
              maxLevel: firstMap.monsters[i].maxLevel,
              minLevel: firstMap.monsters[i].minLevel,
              probability: firstMap.monsters[i].probability,
            }

            return result;
          }
        }
      };
    })
    describe('Bat', function () {
      it('should be an available monster', function () {
        const expectedMonster = new Bat(1);
        const expected = expectedMonster.name;

        expect(this.mockMonsters).toContain(expected);
      })
      it('should have a maxLevel of 3', function  () {
        const actual = this.mockMonsterEntry(Bat).maxLevel;
        const expected = 3;

        expect(actual).toBe(expected);
      })
      it('should have a minLevel of 1', function  () {
        const actual = this.mockMonsterEntry(Bat).minLevel;
        const expected = 1;

        expect(actual).toBe(expected);
      })
      it('should have a probability of 30%', function  () {
        const actual = this.mockMonsterEntry(Bat).probability;
        const expected = 0.3;

        expect(actual).toBe(expected);
      })
    })
    describe('GiantRat', function () {
      it('should be an available monster', function () {
        const expectedMonster = new GiantRat(1);
        const expected = expectedMonster.name;

        expect(this.mockMonsters).toContain(expected);
      })
      it('should have a maxLevel of 5', function  () {
        const actual = this.mockMonsterEntry(GiantRat).maxLevel;
        const expected = 5;

        expect(actual).toBe(expected);
      })
      it('should have a minLevel of 2', function  () {
        const actual = this.mockMonsterEntry(GiantRat).minLevel;
        const expected = 2;

        expect(actual).toBe(expected);
      })
      it('should have a probability of 50%', function  () {
        const actual = this.mockMonsterEntry(GiantRat).probability;
        const expected = 0.5;

        expect(actual).toBe(expected);
      })
    })
    describe('Munchkin', function () {
      it('should be an available monster', function () {
        const expectedMonster = new Munchkin(1);
        const expected = expectedMonster.name;

        expect(this.mockMonsters).toContain(expected);
      })
      it('should have a maxLevel of 8', function  () {
        const actual = this.mockMonsterEntry(Munchkin).maxLevel;
        const expected = 8;

        expect(actual).toBe(expected);
      })
      it('should have a minLevel of 5', function  () {
        const actual = this.mockMonsterEntry(Munchkin).minLevel;
        const expected = 5;

        expect(actual).toBe(expected);
      })
      it('should have a probability of 5%', function  () {
        const actual = this.mockMonsterEntry(Munchkin).probability;
        const expected = 0.2;

        expect(actual).toBe(expected);
      })
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
