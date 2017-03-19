// import items from '../scripts/items-model';

// describe('item model', function() {
//   describe('potion', function() {
//     it('should exist', function() {
//       expect(items.potion).toBeDefined()
//     })

//     describe('POTION USED IN A FIGHT', function() {
//       beforeEach( function(){
//         levels.currentLevel = levels.battleLevel;
//         battle.playerBattleMonster = {
//           hp: 20,
//           currentHp: 1
//         }
//         items.potion.func();
//       })

//       it('should heal your current battle monster', function() {
//         expect(monster.currentHp).toEqual(11)
//       })

//       it('should heal your monster to its maximum health', function() {
//         beforeEach( function() {
//           battle.playerBattleMonster = {
//             hp: 20,
//             currentHp: 19
//           }
//         })
//         expect(monster.currentHp).toEqual(monster.hp)
//       })
//     })

//     describe('POTION USED ON WORLD MAP', function() {
//       beforeEach( function() {
//         levels.currentLevel = {};
//         player.monsterInventory = [{
//           hp: 20,
//           currentHp: 1
//         }];
//         items.potion.func();
//       })

//       it('should heal your first monster', function() {
//         expect(monster.currentHp).toEqual(11)
//       })
//     })

//   })
// });