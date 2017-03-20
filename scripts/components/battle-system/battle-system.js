import wildIntro from './wild-intro';
import initEnemy from './init-enemy';
import initPlayerMonster from './init-player-monster'

export default {
  coordinates: {
    bottomRow: 465,
    leftColumn: 80,
    middleColumn: 260,
    middleRow: 425,
    rightColumn: 440,
    topRow: 385,
  },
  initEnemy: initEnemy,
  initPlayerMonster: initPlayerMonster,
  itemsDropped: [],
  levelUp: false,
  state: wildIntro,
}
