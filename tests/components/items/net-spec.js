import net from '../../../scripts/components/items/net';

describe('net', function () {
  it('should be an object', function () {
    expect(typeof net).toBe('object');
  })
  it('should have a catchMonster property', function () {
    expect(net.catchMonster).toBeDefined();
  })
  it('should have a name property', function () {
    expect(net.name).toBeDefined();
  })
  it('should have a probabilityOfCatch property', function () {
    expect(net.probabilityOfCatch).toBeDefined();
  })
  it('the probabilityOfCatch property should be a function', function () {
    expect(typeof net.probabilityOfCatch).toBe('function');
  })
  it('should have a renderBattleText property', function () {
    expect(net.renderBattleText).toBeDefined();
  })
  it('should have a singleUse property', function () {
    expect(net.singleUse).toBeDefined();
  })
  it('the singleUse property should be false', function () {
    expect(net.singleUse).toBe(false);
  })
  it('should have a useItem property', function () {
    expect(net.useItem).toBeDefined();
  })
  describe('catchMonster()', function () {
    beforeEach(function () {
      monsterWorld.player.monsterInventory =
      [
        {
          name: 'mockMonster',
          render: function () {
            return true;
          }
        }
      ];
      monsterWorld.getCurrentMap().battleSystem = {
        coordinates: {
          leftColumn: 0,
          topRow: 0,
          middleRow: 0
        },
        enemy: {
          name: 'mockEnemy',
          controller: false,
          catchMonster: false,
          render: function () {
            return true;
          },
          renderBtlMonStats: function () {
            return true;
          }
        },
        playerBattleMonster: monsterWorld.player.monsterInventory[0]
      };
      net.catchMonster();
    })
    afterEach(function () {
      monsterWorld.player.monsterInventory =
      [
        {
          name: 'mockMonster',
          render: function () {
            return true;
          }
        }
      ]
    })
    it('should set the enemy\'s controller to the player', function () {
      const actual = monsterWorld.getCurrentMap().battleSystem.enemy.controller;
      const expected = monsterWorld.player;

      expect(actual).toBe(expected);
    })
    it('should place the enemy into the player\'s inventory', function () {
      const actual = monsterWorld.player.monsterInventory.length;

      expect(actual).toBe(2);
    })
    it('the new monster in the player\'s monster inventory should be the enemy', function () {
      const actual = monsterWorld.player.monsterInventory[1];
      const expected = monsterWorld.getCurrentMap().battleSystem.enemy

      expect(actual).toBe(expected)
    })
    it('should set the battleSystem caughtMonster boolean to true', function () {
      const actual = monsterWorld.getCurrentMap().battleSystem.caughtMonster;

      expect(actual).toBe(true);
    })
    describe('with playerMon fighting', function () {
      beforeEach(function () {
        monsterWorld.player.monsterInventory = [
          {
            name: 'PlayerMon',
            render: function () {
              return true;
            }
          }
        ]
        monsterWorld.getCurrentMap().battleSystem = {
          playerBattleMonster: {
            player: 1
          },
          playerBattleMonster:  {
            render: function () {
              return true;
            },
            renderBtlMonStats: function () {
              return true;
            }
          },
          enemy: {
            render: function () {
              return true;
            },
            renderBtlMonStats: function () {
              return true;
            }
          },
          coordinates: {
            leftColumn: 0,
            topRow: 0,
            middleRow: 0
          }
        }
        net.catchMonster(1);
      })
      it('should set the player is fighting flag to 0 in the battleSystem', function () {
        const actual = monsterWorld.getCurrentMap().battleSystem.playerBattleMonster.player;

        expect(actual).toBe(0);
      })
      it('should have the enemy in player\'s monster inventory', function () {
        const actual = monsterWorld.player.monsterInventory[0];
        const expected = monsterWorld.getCurrentMap().battleSystem.enemy;

        expect(actual).toBe(expected);
      })
      it('should NOT have the playerMon in the player\'s monster inventory', function () {
        const actual = monsterWorld.player.monsterInventory.length;

        expect(actual).toBe(1);
      })
    })
  })
  describe('useItem()', function () {
    beforeEach(function () {
      monsterWorld.setCurrentMap(monsterWorld.maps.battle);
      monsterWorld.player.monsterInventory = [
        {
          name: 'mockMonster',
          render: function () {
            return true;
          }
        }
      ];
      monsterWorld.getCurrentMap().battleSystem = {
        enemy: {
          name: 'mockEnemy',
          currentHp: 1,
          hp: 100,
          controller: false,
          render: function () {
            return true;
          },
          renderBtlMonStats: function () {
            return true;
          }
        },
        playerBattleMonster: {
          render: function () {
            return true;
          },
          renderBtlMonStats: function () {
            return true;
          }
        },
        coordinates: {
          leftColumn: 0,
          topRow: 0,
          middleRow: 0
        }
      }
    })
    afterEach(function () {
      monsterWorld.player.monsterInventory = [
        {
          name: 'mockMonster',
          render: function () {
            return true;
          }
        }
      ];
    })
    it('on SUCCESS it should capture the monster', function () {
      net.probabilityOfCatch = function (hp) {
        return 1;
      };
      net.useItem();
      const actual = monsterWorld.player.monsterInventory.length;

      expect(actual).toBe(2);
    })
    it('on FAILURE it should NOT capture the monster', function () {
      net.probabilityOfCatch = function (hp) {
        return 0;
      };
      net.useItem();
      const actual = monsterWorld.player.monsterInventory.length;

      expect(actual).toBe(1);
    })
  })
})
