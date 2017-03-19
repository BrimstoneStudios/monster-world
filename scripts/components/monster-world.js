export class MonsterWorld {
  constructor(currentMap) {
    this.state = {
      inBattle: false,
      currentMap: {
        sprite: false,
      }
    }
    this.items = []
    this.maps = []
  }

  getBattleState(){
    return this.state.inBattle;
  }

  setBattleState(battleState) {
    this.state.inBattle = battleState;
  }

  getCurrentMap() {
    return this.state.currentMap;
  }

  setCurrentMap(map) {
    this.state.currentMap = map;
  }
}
