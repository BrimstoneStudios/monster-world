export default function (key, player) {
  if (key === 'space') {
    monsterWorld.setCurrentMap(monsterWorld.maps.characterSelect);
    player.initLocation();
  }
}
