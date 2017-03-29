import waterMap from '../../../scripts/components/maps/world/water-map';
import controls from '../../../scripts/components/maps/world/controls';
import Maps from '../../../scripts/components/maps/maps';
import Munchkin from '../../../scripts/components/monsters/munchkin';
import GiantRat from '../../../scripts/components/monsters/giant-rat';
import Bat from '../../../scripts/components/monsters/bat';

describe('water-map', function () {
  it('should be a child of the Maps Class', function () {
    expect(waterMap instanceof Maps).toBe(true);
  })
  it('should NOT have a sprite property', function () {
    expect(waterMap.sprite).not.toBeDefined();
  })
  it('should have a controls property', function () {
    expect(waterMap.movement.controls).toBeDefined();
  })
  it('should have a initLocation property', function () {
    expect(waterMap.initLocation).toBeDefined();
  })
  it('should have a monster property', function () {
    expect(waterMap.monsters).toBeDefined();
  })
  it('should NOT have a NPC property', function () {
    expect(waterMap.npcs).not.toBeDefined();
  })
  it('should have a boundary of {bottom: 510, left: -40, right: 710, top: -40}', function () {
    const actual = waterMap.movement.boundaries;
    const expected = {bottom: 510, left: -40, right: 710, top: -40};

    expect(actual).toEqual(expected);
  })
  it('should have a movement distance of {x: 50, y: 50}', function () {
    const actual = waterMap.movement.distance;
    const expected = {x: 50, y: 50};

    expect(actual).toEqual(expected);
  })
  it('the controls should be the world map controls', function () {
    const actual = waterMap.movement.controls;

    expect(actual).toBe(controls);
  })
  describe('available monsters', function () {
    beforeEach(function () {
      this.mockMonsters = [];

      for(var i = 0; i < waterMap.monsters.length; i++) {
        const newMonster = new waterMap.monsters[i].initMonster(1);
        this.mockMonsters.push(newMonster);
      }
      this.mockMonsterEntry = function (monster) {
        for(i = 0; i < waterMap.monsters.length; i++) {
          const newMonster = new waterMap.monsters[i].initMonster(1);
          const lookingFor = new monster(1);

          if(newMonster.name === lookingFor.name) {
            const result = {
              maxLevel: waterMap.monsters[i].maxLevel,
              minLevel: waterMap.monsters[i].minLevel,
              probability: waterMap.monsters[i].probability,
            }

            return result;
          }
        }
      };
    })
    describe('Bat', function () {
      it('should be an available monster', function () {
        const actual = this.mockMonsters;
        const expectedMonster = new Bat(1);
        const expected = expectedMonster;

        expect(actual).toContain(expected);
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
    describe('Munchkin', function () {
      it('should be an available monster', function () {
        const actual = this.mockMonsters;
        const expectedMonster = new Munchkin(1);
        const expected = expectedMonster;

        expect(actual).toContain(expected);
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
      it('should have a probability of 20%', function  () {
        const actual = this.mockMonsterEntry(Munchkin).probability;
        const expected = 0.2;

        expect(actual).toBe(expected);
      })
    })
    describe('GiantRat', function () {
      it('should be an available monster', function () {
        const actual = this.mockMonsters;
        const expectedMonster = new GiantRat(1);
        const expected = expectedMonster;

        expect(actual).toContain(expected);
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
    it('should set the initial location to {x: 10, y: 10}', function () {
      const actual = waterMap.initLocation;

      expect(actual).toEqual({x: 10, y: 10})
    })
  })
})
