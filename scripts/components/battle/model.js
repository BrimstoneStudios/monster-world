// ---------------- BATTLE ----------------
// state.battle {
//    battleState: 'string',
//    enemy: object,
//    playerBattleMonster: object,
//    abilityUsed: object,
//    itemsDropped: array,
//    coordinates: object
// }

var initBattleModel = function () {
  // initialize battle
  state.battle = {
    battleState: 'wildIntroText',
    enemy: randomEnemy( state.prevLevel ),
    playerBattleMonster: monsterInventory[ 0 ],
    itemsDropped: [],
    coordinates: {
      leftColumn: 80,
      middleColumn: 260,
      rightColumn: 440,
      topRow: 385,
      middleRow: 425,
      bottomRow: 465,
      selectorLeftColumn: 30,
      selectorMiddleColumn: 210,
      selectorRightColumn: 390,
      selectorTopRow: 350,
      selectorMiddleRow: 390,
      selectorBottomRow: 430
    }
  }
};