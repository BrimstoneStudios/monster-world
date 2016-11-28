// ---------------- BATTLE ----------------
// battle {
//    battleState: 'string',
//    enemy: object,
//    playerBattleMonster: object,
//    abilityUsed: object,
//    itemsDropped: array,
//    coordinates: object
// }

var initBattleModel = function () {
  // initialize battle
  battle = {
    state: 'wildIntroText',
    enemy: randomEnemy( player.savedAttributes.lastLevel.monsters ),
    playerBattleMonster: player.monsterInventory[ 0 ],
    itemsDropped: [],
    coordinates: {
      leftColumn: 80,
      middleColumn: 260,
      rightColumn: 440,
      topRow: 385,
      middleRow: 425,
      bottomRow: 465
    }
  }
};