import {MonsterWorld} from '../scripts/components/monster-world';
import maps from '../scripts/components/maps/all-maps';

describe('Initiating the app', function () {
  beforeEach(function () {
    this.monsterWorld = new MonsterWorld();
  })
  it('should define a global instance of the monsterWorld object', function () {
    const expectedType = typeof this.monsterWorld;
    const actualType = typeof monsterWorld;

    expect(monsterWorld).toBeDefined();
    expect(actualType).toEqual(expectedType);
  })
  it('should attach the maps object to the monsterWorld instance', function () {
    expect(monsterWorld.maps).toBeDefined();
  })
  it('should attach the items object to the monsterWorld instance', function () {
    expect(monsterWorld.items).toBeDefined();
  })
  it('should set the initial map to the startScreen map', function () {
    const expectedMap = monsterWorld.maps.startScreen;
    const actualMap = monsterWorld.state.currentMap;

    expect(actualMap).toEqual(expectedMap);
  })
})