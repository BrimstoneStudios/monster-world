import items from '../scripts/components/items/all-items';

describe('all-items', function() {
  it('should have a potion property', function() {
    expect(items.potion).toBeDefined()
  })
  it('should have a net property', function() {
    expect(items.net).toBeDefined()
  })
  it('should have a elixir property', function() {
    expect(items.elixir).toBeDefined()
  })
  it('should have a useItem property', function() {
    expect(items.useItem).toBeDefined()
  })
  it('useItem() should be a function', function () {
    expect(typeof items.useItem).toBe('function')
  })
  describe('useItem()', function () {
    beforeEach(function () {
      const player = monsterWorld.player;
      const map = monsterWorld.getCurrentMap();

      monsterWorld.mockItemUsed = false;
      player.inventory = [
        'foo',
        {
          useItem: function () {
            monsterWorld.mockItemUsed = true;
          },
          singleUse: true
        },
        'bar'
      ];
      player.location.y = 1;
      map.movement.boundaries.top = 0;
      map.movement.distance.y = 1;
    })
    it('should select the correct item from the player\'s inventory', function () {
      items.useItem();

      const actual = monsterWorld.mockItemUsed;

      expect(actual).toBe(true);
    })
    it('should remove the item from the player\'s inventory if its a signleUse item', function () {
      items.useItem();

      const actual = monsterWorld.player.inventory.length;

      expect(actual).toBe(2);
    })
    it('should NOT remove the item from the player\'s inventory if its NOT a singleUse item', function () {
      const player = monsterWorld.player;

      player.inventory[player.location.y].singleUse = false;
      items.useItem();

      const actual = player.inventory.length;

      expect(actual).toBe(3);
    })
    it('should update the battle system to indicate an item has been used', function () {
      monsterWorld.setCurrentMap(monsterWorld.maps.battle);

      const map = monsterWorld.getCurrentMap();

      map.battleSystem.enemy = {
        name: 'mockEnemy',
        render: function () {
          return true;
        },
        renderBtlMonStats: function () {
          return true;
        }
      }
       map.battleSystem.playerBattleMonster = {
        render: function () {
          return true;
        },
        renderBtlMonStats: function () {
          return true;
        }
      }
      map.movement.boundaries.top = 0;
      map.movement.distance.y = 1;

      items.useItem();

      const actual = monsterWorld.getCurrentMap().battleSystem.itemUsed;

      expect(actual).toBeDefined();
    })
  })
})
