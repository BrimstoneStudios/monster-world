export class MonsterWorld {
  constructor() {
    this.state = {
      currentMap: {
        sprite: false,
      },
      inBattle: false,
    }
    this.items = []
    this.maps = []
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
