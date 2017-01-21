export default function (newBattleState) {
  currentMap.battleSystem.state = newBattleState;
  currentMap.movement.distance.x = newBattleState.movement.x;
  currentMap.movement.distance.y = newBattleState.movement.y;
  currentMap.renderText = newBattleState.renderText;
  currentMap.controls = newBattleState.controls();

  if (typeof newBattleState.boundaries !== 'undefined') {
    currentMap.movement.boundaries = newBattleState.boundaries();
  }

  player.initLocation();
}
