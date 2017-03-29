import fireMap from '../../../scripts/components/maps/world/fire-map';
import controls from '../../../scripts/components/maps/world/controls';
import Maps from '../../../scripts/components/maps/maps';
import Ignis from '../../../scripts/components/monsters/ignis';
import Phoenix from '../../../scripts/components/monsters/phoenix';
import LavaOgre from '../../../scripts/components/monsters/lava-ogre';

describe('fire-map', function () {
  it('should be a child of the Maps Class', function () {
    expect(fireMap instanceof Maps).toBe(true);
  })
  it('should NOT have a sprite property', function () {
    expect(fireMap.sprite).not.toBeDefined();
  })
  it('should have a controls property', function () {
    expect(fireMap.movement.controls).toBeDefined();
  })
  it('should have a initLocation property', function () {
    expect(fireMap.initLocation).toBeDefined();
  })
  it('should have a monster property', function () {
    expect(fireMap.monsters).toBeDefined();
  })
  it('should NOT have a NPC property', function () {
    expect(fireMap.npcs).not.toBeDefined();
  })
  it('should have a boundary of {bottom: 510, left: -40, right: 710, top: -40}', function () {
    const actual = fireMap.movement.boundaries;
    const expected = {bottom: 510, left: -40, right: 710, top: -40};

    expect(actual).toEqual(expected);
  })
  it('should have a movement distance of {x: 50, y: 50}', function () {
    const actual = fireMap.movement.distance;
    const expected = {x: 50, y: 50};

    expect(actual).toEqual(expected);
  })
  it('the controls should be the world map controls', function () {
    const actual = fireMap.movement.controls;

    expect(actual).toBe(controls);
  })
  describe('available monsters', function () {
    beforeEach(function () {
      this.mockMonsters = [];

      for(var i = 0; i < fireMap.monsters.length; i++) {
        const newMonster = new fireMap.monsters[i].initMonster(1);
        this.mockMonsters.push(newMonster);
      }
      this.mockMonsterEntry = function (monster) {
        for(i = 0; i < fireMap.monsters.length; i++) {
          const newMonster = new fireMap.monsters[i].initMonster(1);
          const lookingFor = new monster(1);

          if(newMonster.name === lookingFor.name) {
            const result = {
              maxLevel: fireMap.monsters[i].maxLevel,
              minLevel: fireMap.monsters[i].minLevel,
              probability: fireMap.monsters[i].probability,
            }

            return result;
          }
        }
      };
    })
    describe('lavaOgre', function () {
      it('should be an available monster', function () {
        const actual = this.mockMonsters;
        const expectedMonster = new LavaOgre(1);
        const expected = expectedMonster;

        expect(actual).toContain(expected);
      })
      it('should have a maxLevel of 9000', function  () {
        const actual = this.mockMonsterEntry(LavaOgre).maxLevel;
        const expected = 9000;

        expect(actual).toBe(expected);
      })
      it('should have a minLevel of 9000', function  () {
        const actual = this.mockMonsterEntry(LavaOgre).minLevel;
        const expected = 9000;

        expect(actual).toBe(expected);
      })
      it('should have a probability of 5%', function  () {
        const actual = this.mockMonsterEntry(LavaOgre).probability;
        const expected = 0.05;

        expect(actual).toBe(expected);
      })
    })
    describe('Ignis', function () {
      it('should be an available monster', function () {
        const actual = this.mockMonsters;
        const expectedMonster = new Ignis(1);
        const expected = expectedMonster;

        expect(actual).toContain(expected);
      })
      it('should have a maxLevel of 50', function  () {
        const actual = this.mockMonsterEntry(Ignis).maxLevel;
        const expected = 50;

        expect(actual).toBe(expected);
      })
      it('should have a minLevel of 31', function  () {
        const actual = this.mockMonsterEntry(Ignis).minLevel;
        const expected = 31;

        expect(actual).toBe(expected);
      })
      it('should have a probability of 55%', function  () {
        const actual = this.mockMonsterEntry(Ignis).probability;
        const expected = 0.55;

        expect(actual).toBe(expected);
      })
    })
    describe('Phoenix', function () {
      it('should be an available monster', function () {
        const actual = this.mockMonsters;
        const expectedMonster = new Phoenix(1);
        const expected = expectedMonster;

        expect(actual).toContain(expected);
      })
      it('should have a maxLevel of 8', function  () {
        const actual = this.mockMonsterEntry(Phoenix).maxLevel;
        const expected = 8;

        expect(actual).toBe(expected);
      })
      it('should have a minLevel of 5', function  () {
        const actual = this.mockMonsterEntry(Phoenix).minLevel;
        const expected = 5;

        expect(actual).toBe(expected);
      })
      it('should have a probability of 40%', function  () {
        const actual = this.mockMonsterEntry(Phoenix).probability;
        const expected = 0.4;

        expect(actual).toBe(expected);
      })
    })
    it('should set the initial location to {y: 460}', function () {
      const actual = fireMap.initLocation;

      expect(actual).toEqual({y: 460})
    })
  })
})
