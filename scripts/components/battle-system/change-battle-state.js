export default function (newBattleState) {
  monsterWorld.getCurrentMap().battleSystem.state = newBattleState;
  monsterWorld.getCurrentMap().movement.distance.x = newBattleState.movement.x;
  monsterWorld.getCurrentMap().movement.distance.y = newBattleState.movement.y;
  monsterWorld.getCurrentMap().renderText = newBattleState.renderText;
  monsterWorld.getCurrentMap().movement.controls = newBattleState.controls;

  if (typeof newBattleState.boundaries !== 'undefined') {
    monsterWorld.getCurrentMap().movement.boundaries = newBattleState.boundaries();
  }

  player.initLocation();
}
