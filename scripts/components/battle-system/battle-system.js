import wildIntro from './wild-intro';
import initEnemy from './init-enemy';
import initPlayerMonster from './init-player-monster'

export default {
  initPlayerMonster: initPlayerMonster,
  state: wildIntro,
  itemsDropped: [],
  coordinates: {
    leftColumn: 80,
    middleColumn: 260,
    rightColumn: 440,
    topRow: 385,
    middleRow: 425,
    bottomRow: 465
  },
  initEnemy: initEnemy,
  levelUp: false,
}
