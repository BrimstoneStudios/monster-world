import {Player} from './player/player';
import maps from './maps/all-maps';
import items from './items/all-items';

export class MonsterWorld {
  constructor() {
    this.items = items
    this.maps = maps
    this.player = new Player()
    this.state = {
      currentMap: maps.startScreen,
      inBattle: false,
    }
  }

  getBattleState() {
    return this.state.inBattle;
  }

  getCurrentMap() {
    return this.state.currentMap;
  }

  setBattleState(battleState) {
    this.state.inBattle = battleState;
  }

  setCurrentMap(map) {
    this.state.currentMap = map;
  }
}
